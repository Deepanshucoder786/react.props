import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App , {App1} from './App.jsx'

// let data=[12,13,16,22,45,34,25]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="deepak" email="deepak@rdec.in" age={55} isMarried={true}>
   
    </App>
    <App1 name="deepak" email="deepak@rdec.in" age={55} isMarried={true}>
   
   </App1>
    
  </StrictMode>
)
