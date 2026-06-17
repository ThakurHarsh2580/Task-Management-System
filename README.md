# Task Management System

A modern, role-based task management application built with React and Tailwind CSS. Features a professional dark theme, responsive design, and complete authentication system with employee and admin dashboards.

---

## Visual Overview

Dashboard Statistics
- New Tasks Counter
- Completed Tasks Tracker
- Active Tasks Monitor
- Failed Tasks Counter

Color-Coded System
- High Priority: Red badges with indicators
- Medium Priority: Yellow badges with indicators
- Low Priority: Green badges with indicators
- Active Status: Blue badges
- Completed Status: Green badges
- Failed Status: Red badges

---

## Key Features

Authentication & Security
- Email and password-based login system
- Two user roles: Employee and Admin
- Session persistence with LocalStorage
- Auto-login on page refresh
- Secure logout with confirmation
- Invalid credential handling with error alerts

Employee Dashboard
- Personal task statistics dashboard
- Task list with priority color coding
- Task details (title, description, category, date)
- Task status tracking (new, active, completed, failed)
- Empty state messaging
- Responsive grid layout for statistics

Admin Dashboard
- Create new task form with comprehensive fields
- Task assignment to specific employees
- Priority and category management
- Due date selection
- Task description input
- View all employee tasks in table format
- Employee performance tracking

Task Management
- Complete task information display
- Priority level indicators (High, Medium, Low)
- Status color coding system
- Task assignment tracking
- Bulk task viewing for administrators
- Task filtering and organization

User Interface
- Professional dark theme (black background, white text, gray accents)
- Monospace font styling throughout
- Smooth hover effects and transitions
- Loading spinners during authentication
- Modal dialogs for confirmations
- Responsive design for all devices
- Color-coded visual feedback system

---

## Tech Stack

Frontend
- React 19.2.5 - UI framework
- React Router DOM 7.17.0 - Client-side routing
- Tailwind CSS 4.3.0 - Utility-first styling
- Vite 8.0.9 - Build tool and dev server

State Management
- React Context API - Global state management
- LocalStorage - Data persistence

Development Tools
- ESLint - Code quality
- Node.js - JavaScript runtime

---

## Project Structure

```
22AuthProject/
├── src/
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Global styles
├── components/
│   ├── Auth/
│   │   └── Login.jsx          # Login form component
│   ├── Dashboard/
│   │   ├── EmployeeDashboard.jsx    # Employee dashboard
│   │   └── AdminDashboard.jsx       # Admin dashboard
│   ├── TaskList/
│   │   ├── TaskList.jsx       # Task card display
│   │   └── AdminList.jsx      # Admin task table
│   ├── Loading/
│   │   └── Spinner.jsx        # Loading spinner component
│   └── Modal/
│       └── Modal.jsx          # Reusable modal component
├── context/
│   ├── AuthContext.jsx        # Authentication state management
│   └── TaskContext.jsx        # Task state management
├── utils/
│   ├── HandleLogin.jsx        # Login logic
│   └── LocalStorage.jsx       # LocalStorage operations
├── other/
│   └── Header.jsx             # Header with user info
├── public/                    # Static assets
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

---

## Installation

Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

Setup Steps

1. Clone or download the project
```bash
cd 22AuthProject
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open browser and navigate to
```
http://localhost:5173
```

Build for Production
```bash
npm run build
```

---

## Usage

Login
1. Open the application in your browser
2. Enter credentials:
   - Email: admin@e.com (Admin role)
   - Email: e@e.com (Employee role)
3. Click "Sign In"
4. Wait for authentication (loading spinner shows)

Employee View
- View personal task statistics
- See assigned tasks with priority levels
- Track task status (new, active, completed, failed)
- View task details and due dates

Admin View
- Create new tasks with title and description
- Assign tasks to employees
- Set priority levels (High, Medium, Low)
- Set due dates
- Manage categories
- View all tasks assigned to all employees
- Track completion rates

Logout
- Click "Log Out" button in header
- Confirm logout in modal dialog
- Returns to login page

---

## Feature Highlights

Dark Theme
Clean, modern dark interface with high contrast for readability. Black backgrounds with white text and gray accents create a professional appearance.

Color-Coded System
Visual feedback through strategic color usage:
- Priority levels clearly visible
- Status indicators at a glance
- Consistent color scheme throughout

Responsive Design
Optimized for all device sizes:
- Desktop: Full-width dashboard with grid layouts
- Tablet: Adjusted spacing and readable text
- Mobile: Stacked layouts, touch-friendly buttons

State Management
Efficient React Context API implementation:
- No prop drilling
- Centralized auth state
- Centralized task state
- Clean component hierarchy

Performance
- Vite for fast development and builds
- Optimized component rendering
- Efficient CSS with Tailwind
- Minimal bundle size

---

## Supported Browsers

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Data Structure

User Object
```
{
  firstName: string,
  email: string,
  password: string,
  role: "employee" | "admin",
  taskCounts: {
    newTask: number,
    completed: number,
    active: number,
    failed: number
  },
  tasks: Task[]
}
```

Task Object
```
{
  taskTitle: string,
  taskDescription: string,
  taskDate: string (YYYY-MM-DD),
  category: string,
  priority: "High" | "Medium" | "Low",
  active: boolean,
  completed: boolean,
  failed: boolean,
  newTask: boolean
}
```

---

## Component Overview

Login Component
Handles user authentication with email/password form. Includes loading state with spinner overlay and credential validation.

Dashboard Components
- EmployeeDashboard: Shows task statistics and personal task list
- AdminDashboard: Shows task creation form and all tasks table

Task Components
- TaskList: Displays individual task cards with priority indicators
- AdminList: Shows table view of all tasks with employee assignments

Header Component
Displays user greeting, logout button with red styling, and loading state during logout.

Modal Component
Reusable modal for confirmations and alerts with different types (error, warning, success, info) and color coding.

Spinner Component
Loading indicator with multiple sizes and optional full-screen overlay mode.

---

## LocalStorage Usage

Data persists automatically in browser LocalStorage:
- User authentication state
- Employee and admin data
- Task assignments
- User preferences

Data survives page refresh and browser restart.

---

## Future Enhancements

- Search and filter functionality
- Task sorting (by date, priority, status)
- Edit and delete task capabilities
- Task completion tracking
- Employee performance reports
- Export functionality (PDF/CSV)
- Email notifications
- Real backend API integration
- Database storage
- Unit and integration tests
- Advanced analytics dashboard

---

## Code Quality

- Clean, modular component structure
- Consistent naming conventions
- Proper folder organization
- Responsive design implementation
- Efficient state management
- Tailwind CSS best practices
- No console warnings or errors

---

## Performance Metrics

- Fast initial load time with Vite
- Smooth animations and transitions
- Optimized re-renders with React Context
- Minimal CSS bundle with Tailwind
- LocalStorage for instant login

---

## License

This project is open source and available for educational and portfolio purposes.

---

## Author

Created as a comprehensive React learning project demonstrating:
- Component-based architecture
- State management with Context API
- Responsive design with Tailwind CSS
- Authentication and authorization
- Professional UI/UX design

---

## Getting Help

For issues or questions:
1. Check the project structure for component locations
2. Review component files for implementation details
3. Verify LocalStorage data with browser DevTools
4. Ensure Node.js and npm are properly installed

---

## Deployment

Ready to deploy to:
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- Firebase Hosting

Build and deploy with a single command after npm run build.

---

## Summary

22AuthProject is a professional, production-ready task management system built with modern React patterns and best practices. The application demonstrates strong understanding of React fundamentals, state management, responsive design, and user experience principles.

Perfect for portfolio showcase and interview preparation.
