import React, { useState, useMemo } from 'react';
import mockTickets, { TICKET_STATUSES } from '../data/mockTickets';
import styles from './TicketManagement.module.css'; 
import { Link } from 'react-router-dom';
import TicketForm from '../components/TicketForm'; // Import the form component

const TicketManagementPage = () => {
    // NOTE: In a real app, this state would come from a global store or context
    const [tickets, setTickets] = useState(mockTickets); 
    const [filter, setFilter] = useState('All'); 
    const [isCreating, setIsCreating] = useState(false); // State to control form visibility
    
    // Function to handle the creation of a new ticket (C in CRUD)
    const handleCreate = (newTicketData) => {
        // Mock a unique ID (Find the highest existing ID and add 1)
        const newId = Math.max(...tickets.map(t => t.id)) + 1;
        const newTicket = { 
            ...newTicketData, 
            id: newId, 
            createdAt: new Date().toISOString()
        };
        
        // Update the list of tickets
        setTickets(prev => [...prev, newTicket]);
        setIsCreating(false); // Close the form
        setFilter('All'); // Show all tickets so the user sees the new one
        console.log(`New Ticket Created: ID ${newId}`);
    };

    const handleDelete = (id) => {
        setTickets(prev => prev.filter(t => t.id !== id));
    };

    const filteredTickets = useMemo(() => {
        if (filter === 'All') {
            return tickets;
        }
        return tickets.filter(ticket => ticket.status === filter);
    }, [tickets, filter]);

    const statusFilters = ['All', ...Object.values(TICKET_STATUSES)];

    if (isCreating) {
        // Render the form when the user clicks 'Create New Ticket'
        return (
            <TicketForm 
                initialData={{}} // Empty data for creation mode
                onSave={handleCreate} 
                onCancel={() => setIsCreating(false)} 
                isEditMode={false} 
            />
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ticket Management ({filter} - {filteredTickets.length} items)</h2>

            {/* Filtering and Creation Controls */}
            <div className={styles.controls}>
                <div className={styles.filterButtons}>
                    {statusFilters.map(status => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`${styles.filterButton} ${filter === status ? styles.active : ''}`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
                
                {/* Button to open the creation form */}
                <button 
                    className={styles.createButton}
                    onClick={() => setIsCreating(true)} // Open the form
                >
                    + Create New Ticket
                </button>
            </div>
            
            {/* Ticket List Table */}
            <div className={styles.tableContainer}>
                <table className={styles.ticketTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Created By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.length === 0 ? (
                            <tr><td colSpan="6" style={{textAlign: 'center', padding: '20px'}}>No tickets found for status: {filter}</td></tr>
                        ) : (
                            filteredTickets.map(ticket => (
                                <tr key={ticket.id} className={styles.ticketRow}>
                                    <td>{ticket.id}</td>
                                    <td>
                                        <Link to={`/tickets/${ticket.id}`} className={styles.ticketTitleLink}>
                                            {ticket.title}
                                        </Link>
                                    </td>
                                    <td><span className={`${styles.statusBadge} ${styles[ticket.status.replace(/\s/g, '')]}`}>{ticket.status}</span></td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.createdBy}</td>
                                    <td>
                                        {/* Simple View button redirects to the detail page */}
                                        <Link to={`/tickets/${ticket.id}`} className={styles.actionButton}>View</Link>
                                        <button onClick={() => handleDelete(ticket.id)} className={`${styles.actionButton} ${styles.deleteButton}`}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TicketManagementPage;
