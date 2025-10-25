// src/pages/TicketDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockTickets, { TICKET_STATUSES } from '../data/mockTickets';
import TicketForm from '../components/TicketForm'; // Will be created next
import styles from './TicketDetail.module.css'; 

const TicketDetail = () => {
    const { id } = useParams(); // Get the ID from the URL (e.g., /tickets/5)
    const navigate = useNavigate();
    const [ticket, setTicket] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Mock data fetch: find the ticket by ID
        const foundTicket = mockTickets.find(t => t.id === parseInt(id));
        setTicket(foundTicket);
    }, [id]);

    if (!ticket) {
        return <div className={styles.container}>Ticket not found or loading...</div>;
    }
    
    // Placeholder function to simulate updating a ticket
    const handleSave = (updatedData) => {
        console.log("Mock save successful:", updatedData);
        // In a real app, you'd send this to an API. Here, we just log and exit edit mode.
        // For full mock functionality, you would update the mockTickets array globally.
        setTicket(updatedData); 
        setIsEditing(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => navigate('/tickets')}>
                &larr; Back to Ticket List
            </button>
            
            {isEditing ? (
                // Use the form for editing (Update)
                <TicketForm 
                    initialData={ticket} 
                    onSave={handleSave} 
                    onCancel={() => setIsEditing(false)} 
                    isEditMode={true} 
                />
            ) : (
                // Display the details (Read)
                <div className={styles.detailBox}>
                    <div className={styles.detailHeader}>
                        <h2 className={styles.detailTitle}>{ticket.title} (ID: {ticket.id})</h2>
                        <button className={styles.editButton} onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                    </div>

                    <div className={styles.detailBody}>
                        <div className={styles.detailGroup}>
                            <span className={styles.label}>Status:</span> 
                            <span className={`${styles.statusBadge} ${styles[ticket.status.replace(/\s/g, '')]}`}>{ticket.status}</span>
                        </div>
                        <div className={styles.detailGroup}>
                            <span className={styles.label}>Priority:</span> 
                            <span className={styles.value}>{ticket.priority}</span>
                        </div>
                        <div className={styles.detailGroup}>
                            <span className={styles.label}>Assigned To:</span> 
                            <span className={styles.value}>{ticket.assignedTo}</span>
                        </div>
                        <div className={styles.detailGroup}>
                            <span className={styles.label}>Created By:</span> 
                            <span className={styles.value}>{ticket.createdBy}</span>
                        </div>
                        <div className={styles.detailGroup}>
                            <span className={styles.label}>Created At:</span> 
                            <span className={styles.value}>{new Date(ticket.createdAt).toLocaleString()}</span>
                        </div>
                        
                        <div className={styles.descriptionBox}>
                            <h3 className={styles.descriptionTitle}>Description</h3>
                            <p className={styles.descriptionText}>{ticket.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicketDetail;