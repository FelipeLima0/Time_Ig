import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CyclesContextProvider } from "./contexts/CyclesContext"
import { createGlobalStyle } from "styled-components"


export function App() {

  return (
    // theme provider serve para dar acesso ao temas e todas as cores de default theme, por isso ele deve ficar em volta de todos os components que forem ultilizar o default theme
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
          <Router />
      </CyclesContextProvider>    
      </BrowserRouter>
    <GlobalStyle />
    </ThemeProvider>
  )
}