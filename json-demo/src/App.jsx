import './App.css' //Man skapar en specifik css fil för en komponent om man vill ha något särskilt för den komponenten
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Projects />
    </>
  )
}

export default App

/* Exempel i json
[
    {
        "utbildningar": [
            {},
            {},
            {},
            {}
        ]
    }
] */
