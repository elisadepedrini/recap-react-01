import { community_menu, more_menu } from "../data/appData";
import AppListFooter from "./AppListFooter";


export default function AppFooter({learn_menu, api_menu}) {
    return(

        <>
        <footer className="d-flex justify-content-around">
            <AppListFooter footer_list_title={"Learn React"} menu={learn_menu}/>
            <AppListFooter footer_list_title={"API Reference"} menu={api_menu}/>
            <AppListFooter footer_list_title={"Community"} menu={community_menu}/>
            <AppListFooter footer_list_title={"More"} menu={more_menu}/>
        </footer>
        </>
    )
}

// api-menu, community-menu, more-menu