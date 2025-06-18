import React from 'react';

export default function TaskList({ tasks, onEdit, onDelete }) {
    function getStatusBadge(status) {
        switch (status) {
            case 'Todo':
                return 'bg-secondary'; // gray
            case 'In Progress':
                return 'bg-info text-dark'; // blue
            case 'Done':
                return 'bg-success'; // green
            default:
                return 'bg-dark';
        }
    }

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task,index) => (
                    <tr key={task.id}>
                        <td className='text-center'>{index+1}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>
                            <span className={`badge ${getStatusBadge(task.status)}`}>
                                {task.status}
                            </span>
                        </td>
                        <td>{task.dueDate}</td>
                        <td>
                            <button className="btn btn-sm btn-warning me-2 mb-1" onClick={() => onEdit(task)}> <i className="bi bi-pencil-square"></i></button>
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}><i className="bi bi-trash"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
