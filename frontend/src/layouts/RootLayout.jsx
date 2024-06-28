import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function RootLayout() {

    return(

        <>
        <div className="app">
            <div>
                <Header />
            </div>
            <div className="body">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        </>

    )

}

export default RootLayout