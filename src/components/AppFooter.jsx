import { community_menu, more_menu } from "../data/appData";
import AppListFooter from "./AppListFooter";


export default function AppFooter({learn_menu, api_menu}) {
    return(

        <>
        <footer className="d-flex justify-content-around">
            <div className="text-meta-footer">
                <strong><i class="bi bi-meta"></i>Meta Open Source</strong>
                <p className="p-footer">Copyrigth @ Meta Platforms, Inc</p>
                <p>uwu?</p>
            </div>
            <AppListFooter footer_list_title={"Learn React"} menu={learn_menu}/>
            <AppListFooter footer_list_title={"API Reference"} menu={api_menu}/>
            <AppListFooter footer_list_title={"Community"} menu={community_menu}/>
            <AppListFooter footer_list_title={"More"} menu={more_menu}
            icons={
            <>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-bluesky"></i>
            <i className="bi bi-github"></i>
            </>
            }
        />
        </footer>
        </>
    )
}

// api-menu, community-menu, more-menu