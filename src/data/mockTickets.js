// src/data/mockTickets.js

// Define the Status categories used across the app
export const TICKET_STATUSES = {
    OPEN: 'Open',
    IN_PROGRESS: 'In Progress',
    CLOSED: 'Closed',
  };
  
  // Define the mock data structure (Rule: Must have at least 15 tickets)
  const mockTickets = [
    {
      id: 1,
      title: "Database connection failing after update",
      status: TICKET_STATUSES.IN_PROGRESS, // 1/15
      priority: "High",
      createdBy: "Alice Johnson",
      assignedTo: "Bob Smith",
      createdAt: "2025-09-01T10:00:00Z",
      description: "The API cannot establish a secure connection to the PostgreSQL database following the latest security patch.",
    },
    {
      id: 2,
      title: "Feature Request: Dark Mode Toggle",
      status: TICKET_STATUSES.OPEN, // 1/15
      priority: "Low",
      createdBy: "User Support Team",
      assignedTo: "Unassigned",
      createdAt: "2025-09-05T14:30:00Z",
      description: "Users are requesting a toggle switch for a dark color theme.",
    },
    {
      id: 3,
      title: "Typo on landing page header",
      status: TICKET_STATUSES.CLOSED, // 1/15
      priority: "Low",
      createdBy: "Charlie Brown",
      assignedTo: "Bob Smith",
      createdAt: "2025-09-10T09:15:00Z",
      description: "The word 'effortlessly' is misspelled on the main banner.",
    },
    {
      id: 4,
      title: "Server overload error on peak traffic",
      status: TICKET_STATUSES.IN_PROGRESS, // 2/15
      priority: "Critical",
      createdBy: "System Alert",
      assignedTo: "Alice Johnson",
      createdAt: "2025-09-12T17:45:00Z",
      description: "Load balancers reported maximum capacity reached during 5pm spike.",
    },
    {
      id: 5,
      title: "Client UI is unresponsive on mobile devices",
      status: TICKET_STATUSES.OPEN, // 2/15
      priority: "High",
      createdBy: "David Clark",
      assignedTo: "Unassigned",
      createdAt: "2025-09-15T11:20:00Z",
      description: "The application freezes when scrolling on small screens.",
    },
    {
      id: 6,
      title: "Update copyright year to 2026",
      status: TICKET_STATUSES.CLOSED, // 2/15
      priority: "Low",
      createdBy: "Marketing Team",
      assignedTo: "Charlie Brown",
      createdAt: "2025-09-18T08:00:00Z",
      description: "Footer copyright needs updating.",
    },
    {
      id: 7,
      title: "Payment gateway integration failed",
      status: TICKET_STATUSES.IN_PROGRESS, // 3/15
      priority: "Critical",
      createdBy: "System Alert",
      assignedTo: "Alice Johnson",
      createdAt: "2025-09-20T19:30:00Z",
      description: "Stripe API is returning 401 Unauthorized status.",
    },
    {
      id: 8,
      title: "Documentation needs review for new API endpoints",
      status: TICKET_STATUSES.OPEN, // 3/15
      priority: "Medium",
      createdBy: "Documentation Team",
      assignedTo: "Unassigned",
      createdAt: "2025-09-22T15:00:00Z",
      description: "Ensure all new endpoints are accurately documented.",
    },
    {
      id: 9,
      title: "Broken link on 'About Us' page",
      status: TICKET_STATUSES.CLOSED, // 3/15
      priority: "Low",
      createdBy: "Ethan Hunt",
      assignedTo: "Charlie Brown",
      createdAt: "2025-09-25T13:40:00Z",
      description: "Link to the founder's LinkedIn page is broken.",
    },
    {
      id: 10,
      title: "User reported data corruption on profile update",
      status: TICKET_STATUSES.IN_PROGRESS, // 4/15
      priority: "High",
      createdBy: "User Support Team",
      assignedTo: "Bob Smith",
      createdAt: "2025-09-28T10:00:00Z",
      description: "User profile fields are mixing up after saving.",
    },
    {
      id: 11,
      title: "Add dark mode to ticketing view",
      status: TICKET_STATUSES.OPEN, // 4/15
      priority: "Low",
      createdBy: "User Request",
      assignedTo: "Unassigned",
      createdAt: "2025-10-01T11:00:00Z",
      description: "Extension of the dark mode feature request to the ticket list view.",
    },
    {
      id: 12,
      title: "Optimize image loading on dashboard",
      status: TICKET_STATUSES.CLOSED, // 4/15
      priority: "Medium",
      createdBy: "Performance Team",
      assignedTo: "Bob Smith",
      createdAt: "2025-10-03T16:00:00Z",
      description: "Images are slowing down the initial dashboard load.",
    },
    {
      id: 13,
      title: "User password reset link is expiring instantly",
      status: TICKET_STATUSES.IN_PROGRESS, // 5/15
      priority: "Critical",
      createdBy: "System Alert",
      assignedTo: "Alice Johnson",
      createdAt: "2025-10-05T09:00:00Z",
      description: "Timestamp mismatch causes reset tokens to immediately expire.",
    },
    {
      id: 14,
      title: "Create a new reporting module for ticket velocity",
      status: TICKET_STATUSES.OPEN, // 5/15
      priority: "Medium",
      createdBy: "Product Manager",
      assignedTo: "Unassigned",
      createdAt: "2025-10-08T14:00:00Z",
      description: "Need a new view to track how quickly tickets are resolved.",
    },
    {
      id: 15,
      title: "Update API documentation links in README",
      status: TICKET_STATUSES.CLOSED, // 5/15
      priority: "Low",
      createdBy: "Developer",
      assignedTo: "Charlie Brown",
      createdAt: "2025-10-10T11:00:00Z",
      description: "The links point to the old version.",
    },
  ];
  
  export default mockTickets;