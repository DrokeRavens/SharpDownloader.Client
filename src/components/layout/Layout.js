import SideBar from "./SideBar";
import TopBar from "./TopBar";

function Layout(props){
    return (
        <div>
            <header>
                <TopBar />
                <SideBar />
            </header>
            <main>
                {props.children}
            </main>
        </div>

    )

}

export default Layout;