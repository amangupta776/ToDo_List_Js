# Kanban Board

## Project Overview

The Kanban Board is a task management application built using React. It allows users to create, update, and manage tasks in a visual way using columns such as "To Do", "In Progress", and "Finished". Users can drag and drop tasks between columns, edit task details, mark tasks as complete, and search for tasks.

## Features

- Add new tasks with a name and due date.
- Edit existing tasks.
- Mark tasks as complete or incomplete.
- Delete tasks.
- Search tasks by name.
- Drag and drop tasks between columns.
- Sort tasks by name within each column.
- Persist tasks in local storage to retain data between sessions.
- Clear all completed tasks.

## How to Install and Start

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

Install dependencies

npm install
Starting the Project
Run the development server

npm run dev

Open your browser

Navigate to http://localhost:5173 to see the Kanban Board in action.

Project Details
What is This Project?
This project is a Kanban Board application, which is a visual tool for managing tasks. It's typically used in project management to visualize the flow of tasks through different stages. Each stage is represented by a column, and tasks are represented by cards that can be moved between columns.

How Things Work
Task Management

Users can add new tasks via a form. Each task requires a name and a due date.
Tasks are displayed in columns based on their status (e.g., "To Do", "In Progress", "Finished").
Users can edit task details, mark tasks as complete/incomplete, and delete tasks.
Drag and Drop

Tasks can be dragged from one column to another. When a task is dropped into a new column, its status is updated accordingly.
Drag and drop functionality is managed using onDragStart, onDragOver, and onDrop event handlers.
Local Storage

Task data is stored in the browser's local storage, ensuring that tasks persist even after the page is refreshed or the browser is closed.
Search and Sort

Users can search for tasks by name using the search input field. The task list is filtered based on the search query.
Tasks can be sorted by name within each column using the "Sort by Name" button.
Folder Structure
arduino
Copy code
kanban-board/
├── public/
├── src/
│   ├── components/
│   │   ├── Column.js
│   │   ├── Task.js
│   │   ├── TaskForm.js
│   ├── App.js
│   ├── index.js
│   ├── KanbanBoard.css
│   ├── Column.css
│   ├── Task.css
│   ├── TaskForm.css
├── package.json
└── README.md