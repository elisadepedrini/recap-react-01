
import AppLogo from "./AppLogo"

export default function AppBanner({banner_title, children}) {
    return(
        <>
        <AppLogo className="logo-banner"/>
        <h1>{banner_title}</h1>
        {children}
        </>
    )
}