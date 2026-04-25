import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import {learnMenu, navbarMenu} from './data/app_data'

function App() {

  return (
    <>
    <AppHeader navbar_menu={navbarMenu}/>
    <AppMain />
    <AppFooter learn_menu={learnMenu}/>
    </>
    
  )
}

export default App
