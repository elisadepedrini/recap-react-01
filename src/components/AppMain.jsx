import AppBanner from "./AppBanner";

export default function AppMain() {
    return(
        <>
        <main className="text-center">
            <AppBanner banner_title={"Welcome to the React community"} >
                <button className="btn btn-main">Get Started</button>
            </AppBanner>
        </main>
        </>
    )
}