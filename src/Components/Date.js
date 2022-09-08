import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa"



const ShowDate = () => {
    const todayDate = new Date().toDateString();

    return (  
        <div style = {{display : "flex", alignItems : "center", gap: "0.5rem", justify: "center"}}>
            <FaRegCalendarAlt color = "rgb(57, 151, 214)" size = "20px"/>
            <h4>{todayDate}</h4>
            
        </div>
    );
}
 
export default ShowDate;