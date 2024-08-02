 # Building Entry System

## Webpage UI

![EntryExit](https://github.com/user-attachments/assets/80cc9680-24ec-4fa6-ac37-d9e86772b0c7)
![History](https://github.com/user-attachments/assets/66d25194-d122-4328-9ebe-889ad8b2821e)
![complete_page](https://github.com/user-attachments/assets/57c3ceae-41b8-4e6a-a6b4-28a3ccb9e748)


## Overview

The Building Entry System is a web application designed to manage and monitor the entry and exit of people in a building. It features functionalities for registering entries and exits, tracking people currently inside the building, viewing historical records, and analyzing usage data.

## Technology Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas

## Features

- **Register Entry/Exit**: Register entries and exits with details such as person ID and gate.
- **Track Current People**: View a list of people currently inside the building.
- **View Historical Records**: Access historical entry and exit records based on person ID and date range.
- **Analytics**: Obtain insights such as current number of people inside, average duration of stay, peak entry/exit times, and most frequently used gates.

## Installation

### Backend

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/building-entry-system.git
2. **Navigate to Backend Directory**:
   ```bash
   cd building-entry-system/server
3. **Install Dependencies**:
   ```bash
   npm install
4. **Setup Environment Variables**:
   *Create a .env file in the backend directory with the following content*:
   ```bash
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=3000
5. **Start the Server**:
   ```bash
   npm start
### Frontend
1. **Navigate to Frontend Directory**:
    ```bash
    cd building-entry-system/frontend
2. **Install Dependencies**:
    ```bash
    npm install
3. **Start the React Application**:
   ```bash
   npm start

### API Endpoints
- **POST /api/entry**: Register an entry. Requires personId and gate in the request body.
- **POST /api/exit**: Register an exit. Requires personId and gate in the request body.
- **GET /api/people**: Retrieve a list of people currently inside the building.
- **GET /api/history**: Retrieve historical records for a person. Requires personId, startDate, and endDate as query parameters.
- **GET /api/analytics**: Retrieve analytics data.

### Usage
1. **Register Entries and Exits**:
    Use the Entry/Exit form to register people entering or exiting the building.
2. **View Current People**:
    Access the PeopleList component to see who is currently inside the building.
3. **View Historical Records**:
    Use the History component to view past entries and exits based on person ID and date range.
4. **Access Analytics**:
    Check the Analytics component for insights and data on building usage.

