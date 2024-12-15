const Employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Report",
          "taskDescription": "Compile the sales report for Q1.",
          "taskDate": "2024-12-15",
          "category": "Reports",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly team sync-up.",
          "taskDate": "2024-12-16",
          "category": "Meetings",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Follow-Up",
          "taskDescription": "Send follow-up emails to potential clients.",
          "taskDate": "2024-12-17",
          "category": "Client Relations",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify stock levels in the warehouse.",
          "taskDate": "2024-12-18",
          "category": "Operations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Policy Update",
          "taskDescription": "Update the company policy document.",
          "taskDate": "2024-12-19",
          "category": "Administration",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Software Update",
          "taskDescription": "Upgrade the CRM system to the latest version.",
          "taskDate": "2024-12-15",
          "category": "IT",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Data Backup",
          "taskDescription": "Ensure all company data is backed up securely.",
          "taskDate": "2024-12-20",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "System Diagnostics",
          "taskDescription": "Run diagnostics on server systems.",
          "taskDate": "2024-12-22",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Social Media Campaign",
          "taskDescription": "Plan and execute a social media campaign.",
          "taskDate": "2024-12-25",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Blog Post",
          "taskDescription": "Write a blog post on new product features.",
          "taskDate": "2024-12-23",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Email Campaign",
          "taskDescription": "Draft and schedule an email marketing campaign.",
          "taskDate": "2024-12-20",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Customer Support",
          "taskDescription": "Respond to customer queries via email.",
          "taskDate": "2024-12-14",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Ticket Resolution",
          "taskDescription": "Resolve pending support tickets.",
          "taskDate": "2024-12-15",
          "category": "Support",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Feedback Review",
          "taskDescription": "Analyze customer feedback and propose solutions.",
          "taskDate": "2024-12-16",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];
  
  const Admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export { Employees, Admin };  