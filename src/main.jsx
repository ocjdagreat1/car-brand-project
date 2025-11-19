
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
   <UserProvider>
    <App />
    </UserProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
