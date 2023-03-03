export * from './hooks'
// test
import ReactDOM from 'react-dom/client'
import App from './App'
ReactDOM.createRoot(document.querySelector('#root') as Element).render(<App />)
