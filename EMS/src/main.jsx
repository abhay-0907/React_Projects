import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './contexts/AuthContext.jsx'
import TaskContext from './contexts/TaskContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContext>

    
    <AuthContext>

    <App />
    </AuthContext>
    </TaskContext>
  </StrictMode>,
)
