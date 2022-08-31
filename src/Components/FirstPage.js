import { useEffect, useState } from "react";
import Slider from "./Slider/Slider";
import WelcomePage from "./WelcomePage";

const FirstPage = () => {
    const [firstVisit, setFirstVisit] = useState(localStorage.getItem("visited"));

    useEffect(() => {
        if(firstVisit == null){
            setFirstVisit(localStorage.setItem("visited", 1))
            console.log("yes")
        }
    }, [])
    return (  
        <div>
            {
                firstVisit == null ? <Slider /> : <WelcomePage />
            }
        </div>
    );
}
 
export default FirstPage;