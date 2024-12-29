import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full bg-slate-500 p-5 h-28'> HIIIIIII</div>
    <App  />
  </StrictMode>,
)
