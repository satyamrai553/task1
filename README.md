```markdown
# Student List App

### Project Setup

#### Backend Setup

1. **Navigate to the Backend Directory**:
    ```bash
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Server**:
    ```bash
    npm start
    ```
   The backend server will start on `http://localhost:3000`.

#### Frontend Setup

1. **Navigate to the Frontend Directory**:
    ```bash
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the React App**:
    ```bash
    npm start
    ```
   The frontend will start on `http://localhost:3000`.

### Project Structure

#### Backend
- `server.js`: Entry point for the backend.
- `routes/student.routes.js`: Contains API routes for the student data.
- `controller/student.controller.js`: Handles the logic for fetching student data.
- `constant.js`: Contains the static student data.

#### Frontend
- `App.js`: Main component to render the student list and search bar.
- `components`: Directory for React components.
- `styles`: Directory for Tailwind CSS configuration.

### API Endpoint

| Method | Endpoint                       | Description                   |
|--------|--------------------------------|-------------------------------|
| GET    | `/api/v1/student/list`         | Fetches the list of students. |

### Usage

1. Open the app in your browser at `http://localhost:3000`.
2. Use the search bar to filter students by name or skill.



## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **HTTP Client**: Axios
