
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import TaskForm from '.././components/TaskForm';
import TaskList from '.././components/TaskList';
import FilterSort from '.././components/FilterSort';
import tasksBackup from '../../db.json';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('');

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:3001/tasks');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks from API:', err.message);
            toast.warning('API failed, loading fallback tasks from file');

            // Fallback to local data
            setTasks(tasksBackup.tasks || []);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            await axios.post('http://localhost:3001/tasks', task);
            toast.success('Task added');
            fetchTasks();
        } catch {
            toast.error('Failed to add task');
        }
    };

    const updateTask = async (task) => {
        console.log(task)
        try {
            await axios.put(`http://localhost:3001/tasks/${task.id}`, task);
            toast.success('Task updated');
            setEditingTask(null); // ensure this clears
            fetchTasks();
        } catch {
            toast.error('Failed to update task');
        }
    };

    const deleteTask = async (id) => {
        if (!window.confirm('Delete this task?')) return;
        try {
            await axios.delete(`http://localhost:3001/tasks/${id}`);
            toast.success('Task deleted');
            fetchTasks();
        } catch (err) {
            toast.error('Failed to delete task');
            console.error("Delete error:", err);
        }
    };


    const filteredTasks = tasks
        .filter(t => filter === 'All' || t.status === filter)
        .sort((a, b) => {
            if (sortBy === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
            if (sortBy === 'title') return a.title.localeCompare(b.title);
            return 0;
        });

    return (
        <div className="container ">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <FilterSort
                    filter={filter}
                    setFilter={setFilter}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
                <TaskForm
                    onSubmit={editingTask ? updateTask : addTask}
                    editingTask={editingTask}
                    setEditingTask={setEditingTask}
                />
            </div>

            <TaskList
                tasks={filteredTasks}
                onEdit={(task) => setEditingTask(task)}
                onDelete={deleteTask}
            />
            <ToastContainer position="top-right" autoClose={3000} style={{ position: "fixed", top: "70px" }} />
        </div>
    );
}