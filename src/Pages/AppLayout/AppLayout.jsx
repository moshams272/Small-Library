import { Outlet } from "react-router-dom"
import NavBar from "../../component/NavBar/NavBar"
export default function AppLayout(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )   
}