import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import {learn_menu, navbarMenu, api_menu, community_menu, more_menu} from './data/appData'

function App() {
  
  return (
    <>
    <AppHeader navbar_menu={navbarMenu}/>
    <AppMain />
    <AppFooter learn_menu={learn_menu} api_menu={api_menu} community_menu={community_menu} more_menu={more_menu}/>
    </>
    
  )
}

export default App
