import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { CycleProvider } from './contexts/cycle'
import { UsuarioContextProvider } from './contexts/usuarios'

function App() {
  return (
    <UsuarioContextProvider>
      <CycleProvider>
        <RouterProvider router={routes} />
      </CycleProvider>
    </UsuarioContextProvider>
  )
}
// JSX

export default App