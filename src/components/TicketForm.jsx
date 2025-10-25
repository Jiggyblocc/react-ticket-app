// src/components/TicketForm.jsx
import React, { useState } from 'react';
import { TICKET_STATUSES } from '../data/mockTickets';
import styles from './TicketForm.module.css';

const PRIORITY_OPTIONS = ['Low', 'Medium', 'High', 'Critical'];

const TicketForm = ({ initialData, onSave, onCancel, isEditMode }) => {
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        description: initialData?.description || '',
        status: initialData?.status || TICKET_STATUSES.OPEN,
        priority: initialData?.priority || PRIORITY_OPTIONS[0],
        assignedTo: initialData?.assignedTo || 'Unassigned',
        createdBy: initialData?.createdBy || 'Current User (Mock)',
        createdAt: initialData?.createdAt || new Date().toISOString(),
        id: initialData?.id,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the data up to the parent component (TicketDetail or TicketManagementPage)
        onSave(formData);
    };

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>{isEditMode ? `Edit Ticket #${formData.id}` : 'Create New Ticket'}</h3>
            <form onSubmit={handleSubmit}>
                
                {/* Title */}
                <div className={styles.formGroup}>
                    <label htmlFor="title">Title</label>
                    <input name="title" id="title" value={formData.title} onChange={handleChange} required className={styles.formInput} />
                </div>

                {/* Description */}
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" value={formData.description} onChange={handleChange} required className={styles.formInput} rows="4" />
                </div>
                
                {/* Status & Priority (Grid Layout) */}
                <div className={styles.gridGroup}>
                    <div className={styles.formGroup}>
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" value={formData.status} onChange={handleChange} className={styles.formSelect}>
                            {Object.values(TICKET_STATUSES).map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="priority">Priority</label>
                        <select name="priority" id="priority" value={formData.priority} onChange={handleChange} required className={styles.formSelect}>
                            {PRIORITY_OPTIONS.map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Assigned To */}
                <div className={styles.formGroup}>
                    <label htmlFor="assignedTo">Assigned To</label>
                    <input name="assignedTo" id="assignedTo" value={formData.assignedTo} onChange={handleChange} className={styles.formInput} />
                </div>

                {/* Action Buttons */}
                <div className={styles.formActions}>
                    <button type="button" onClick={onCancel} className={styles.cancelButton}>
                        Cancel
                    </button>
                    <button type="submit" className={styles.submitButton}>
                        {isEditMode ? 'Save Changes' : 'Create Ticket'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;