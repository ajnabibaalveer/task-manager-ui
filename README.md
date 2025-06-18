# 📝 Task Management App [React + Vite]

A full-featured React-based Task Management application with login/signup functionality, task CRUD operations, filtering, sorting and Bootstrap UI. Deployed on Vercel.

---

## 🚀 Live Demo

🔗 [Live App URL]([https://your-app-url.netlify.app](https://task-manager-ui-cprq.vercel.app/))

---

## 📁 GitHub Repository

🔗 [GitHub Repo](https://github.com/ajnabibaalveer/task-manager-ui)

---

## 🧩 Features

- 🔐 **Login / Signup** (mock authentication using [reqres.in](https://reqres.in))
- 📝 **Create, Read, Update, Delete Tasks**
- 📅 **Sort by Due Date or Title**
- ✅ **Filter by Task Status (Todo, In Progress, Done)**
- 🧠 **Bootstrap 5 UI with Responsive Layout**
- 📦 Local token storage (`localStorage`) for mock login session

---

## 🛠 Tech Stack

- **Frontend**: React, Bootstrap 5
- **Routing**: React Router DOM
- **API Handling**: Axios
- **Notifications**: React Toastify
- **Mock Auth API**: https://reqres.in/
- **Backend (JSON Server)**: Local mock server (or [json-server](https://www.npmjs.com/package/json-server))

---

## 📦 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/task-management-app.git

# Navigate to the project folder
cd task-management-app

# Install dependencies
npm install

# Start the JSON server (if using json-server)
npx json-server --watch db.json --port 3001

# Start the React app
npm start
```

---

## 🧪 Test Login Credentials

Use the following test credentials from reqres.in:

```bash
Email: eve.holt@reqres.in
Password: cityslicka
```

These credentials will return a dummy token to simulate login.

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── FilterSort.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
├── App.jsx
├── index.js
```

---

## 📸 Screenshots

| Login Page | Dashboard | Task Modal |
|------------|-----------|------------|
| ![Login](screenshots/login.png) | ![Dashboard](screenshots/dashboard.png) | ![Modal](screenshots/modal.png) |

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Shivanand Prajapati**  
[Portfolio/LinkedIn/GitHub]# task-manager-ui
