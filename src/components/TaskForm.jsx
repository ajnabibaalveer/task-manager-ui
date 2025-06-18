import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function TaskForm({ onSubmit, editingTask, setEditingTask }) {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'Todo',
        dueDate: ''
    });

    // Prefill if editing
    useEffect(() => {
        if (editingTask) {
            setTask(editingTask);
            setShow(true); // open modal if editing
        }
    }, [editingTask]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        handleClose();
        setTask({ title: '', description: '', status: 'Todo', dueDate: '' });
    };

    const handleShow = () => {
        setEditingTask(null);
        setTask({ title: '', description: '', status: 'Todo', dueDate: '' });
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setEditingTask(null);
    };



    return (
        <>
            <div className="text-end">
                <Button onClick={handleShow} className='btn btn-sm p-2'><i class="bi bi-plus-circle"></i> Add Task</Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingTask ? 'Update Task' : 'Add Task'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={task.title} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name="description" value={task.description} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={task.status} onChange={handleChange}>
                                <option>Todo</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button type="submit" variant="primary">
                            {editingTask ? 'Update Task' : 'Add Task'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
