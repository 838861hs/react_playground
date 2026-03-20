import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from "./App";
import Counter from "./Counter"
import UseEffectCounter from './useEffectCounter'

createRoot(document.getElementById('root')).render(
  <>
    <Counter />
  </>
)
