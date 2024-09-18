import { PuffLoader } from "react-spinners";
export default function Loader(){
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"1000px"}}>
        <PuffLoader color="#847d7d" size={100}/>
        </div>
        </>
    )
}