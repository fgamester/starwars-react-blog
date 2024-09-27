import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppContext } from './store/ContentContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
)
