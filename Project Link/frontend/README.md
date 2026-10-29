# CampusCare – Campus Complaint Management System

CampusCare is a web-based complaint management system designed to help students submit campus-related complaints and allow faculty members to manage and track their resolution.

## Features

- Student registration and login
- Faculty registration and login
- Submit campus complaints
- Track complaints using ticket IDs
- View complaint status
- Faculty can update complaint status and remarks
- Complaint history tracking
- MySQL database integration

## Technologies Used

### Frontend
- React
- Vite
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MySQL
- mysql2
- bcryptjs

### Database
- MySQL / MariaDB
- phpMyAdmin
- XAMPP

## Project Structure

```text
CampusCare/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── db.js
│   ├── server.js
│   └── package.json
├── database.sql
├── .gitignore
└── README.md
```

## Database Setup

1. Start Apache and MySQL in XAMPP.
2. Open phpMyAdmin.
3. Create the database using the provided `database.sql` file.
4. The database contains the following tables:
   - `users`
   - `complaints`
   - `complaint_history`

## Running the Project

### Backend

Open a terminal in the backend folder and run:

```bash
npm install
node server.js
```

### Frontend

Open another terminal in the frontend folder and run:

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Project Purpose

CampusCare aims to make campus complaint submission and resolution more organized, transparent, and convenient for students and faculty.