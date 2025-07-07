# 📊 Frontend Dashboard Assignment – Swift

This is a frontend dashboard built with **React** to fulfill the internship assignment requirements. It uses dummy data from the `jsonplaceholder.typicode.com` API to display user and comment information in a clean and interactive UI.

---

## 🛠️ Tech Stack

- **React** (with functional components and hooks)
- **React Router DOM** for navigation
- **Custom CSS** (no external UI libraries)
- Dummy APIs from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 🔗 Live Features

### 👤 Profile Screen
- Fetches the **first user** from the Users API.
- Displays user's ID, Name, Email, Address, and Phone.
- Not editable.
- Route: `/profile`

### 💬 Comments Dashboard
- Fetches all 500 comments from the Comments API.
- Displays data in a **paginated**, **sortable**, and **searchable** table.
- Supports sorting by:
  - Post ID
  - Name
  - Email
- Pagination options: 10, 50, 100 per page.
- Filters and sorts update on the fly.

---

## 🧪 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/frontend-dashboard.git
cd frontend-dashboard

# Install dependencies
npm install

# Start the development server
npm start








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

