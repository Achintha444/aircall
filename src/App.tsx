import { ThemeProvider } from '@emotion/react'
import './App.css'
import Main from './page/main/pages/Main'
import { appTheme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Main />
    </ThemeProvider>
  )
}

export default App
