import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import Home from "./components/home"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent/>
      <Home/>
      <FooterComponent/>
    </div>
  )
}
