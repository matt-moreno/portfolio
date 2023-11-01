import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

export default function MainLayout() {
    return (
        <div className="site-wrapper">
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}