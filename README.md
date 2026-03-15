# Event Planner 🌸

Event Planner is a lightweight React application built to simplify event planning. Users can register, log in, and manage a personal list of upcoming events in a beautiful, pastel-themed interface.

## Quick Start
Follow these steps to get the project running on your local machine.

### Prerequisites
* **Node.js** (v16.0.0 or higher)
* **npm** (comes with Node.js)

### Installation
1. Clone the repository:

2. Enter the directory:
   `cd my-event-app`

3. Install the required packages:
   `npm install`

### Usage
Run the development server:
`npm run dev`

## Core Features

### 1. User Registration
The app features a robust registration form built with **Formik**. It includes:
* Mandatory field checks.
* Character length limits (15 for First Name, 20 for Surname).
* Complex password validation (8+ characters, uppercase, lowercase, number, and special character).

### 2. Event Dashboard
Once logged in, users gain access to a private dashboard to:
* **Create** new events with names and dates.
* **View** a organized list of all planned events.
* **Delete** events that are no longer needed.

### 3. Global State Management
The app uses the **React Context API** to share data. This ensures:
* User login status is remembered across all pages.
* The event list is updated instantly without page reloads.

---

## Technical Stack
* **Framework:** React (Vite)
* **Forms:** Formik
* **Styles:** React-Bootstrap
* **Routing:** React Router DOM

---

> **Note:** This application currently uses temporary state. Refreshing the browser will reset the user and event data.