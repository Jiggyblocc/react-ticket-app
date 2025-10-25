// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import mockTickets, { TICKET_STATUSES } from '../data/mockTickets';
import styles from './Dashboard.module.css'; // We'll create this CSS next

/**
 * Component to display the key ticket statistics as required by the challenge.
 * Simulates fetching data on component mount.
 */
const DashboardPage = () => {
    const [stats, setStats] = useState({
        total: 0,
        open: 0,
        inProgress: 0,
        closed: 0,
    });
    const [loading, setLoading] = useState(true);

    // Function to calculate the statistics from the mock data (Rule satisfied)
    const calculateStats = (tickets) => {
        const total = tickets.length;
        const open = tickets.filter(t => t.status === TICKET_STATUSES.OPEN).length;
        const inProgress = tickets.filter(t => t.status === TICKET_STATUSES.IN_PROGRESS).length;
        const closed = tickets.filter(t => t.status === TICKET_STATUSES.CLOSED).length;
        
        setStats({ total, open, inProgress, closed });
        setLoading(false);
    };

    // Simulate API fetch on component mount
    useEffect(() => {
        // Mock a 500ms network delay
        setTimeout(() => {
            calculateStats(mockTickets);
        }, 500);
    }, []);

    if (loading) {
        return <div className={styles.dashboardContainer} style={{textAlign: 'center'}}>Loading statistics...</div>;
    }

    // Array for easy rendering of stat cards
    const statCards = [
        { label: 'Total Tickets', count: stats.total, color: '#4c51bf' }, // Indigo
        { label: 'Open Tickets', count: stats.open, color: '#38a169' }, // Green
        { label: 'In Progress', count: stats.inProgress, color: '#f6ad55' }, // Orange
        { label: 'Closed Tickets', count: stats.closed, color: '#4a5568' }, // Dark Gray
    ];

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardTitle}>Ticket Summary</h2>
            <div className={styles.statsGrid}>
                {statCards.map((card) => (
                    <div key={card.label} className={styles.statCard} style={{ borderTopColor: card.color }}>
                        <p className={styles.statLabel}>{card.label}</p>
                        <p className={styles.statCount} style={{ color: card.color }}>{card.count}</p>
                    </div>
                ))}
            </div>
            
            <div className={styles.actionSection}>
                <h3>Quick Actions</h3>
                <p>Use the links in the header to navigate to Ticket Management.</p>
            </div>
        </div>
    );
};

export default DashboardPage;