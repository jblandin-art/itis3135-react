import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Head from "./Head.jsx"
import { Outlet } from "react-router";

export default function Layout(){
    return (
        <>
        <Head />
        
        <body>
        <Header />
        
        <Outlet />

        <Footer/>
        </body>
        
        </>
    )
}