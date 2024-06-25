import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function RootLayout() {

    return(

        <>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>

    )

}

export default RootLayout