import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.tsx'
import TaskContext from './context/TaskContext.tsx'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </React.StrictMode>
)
