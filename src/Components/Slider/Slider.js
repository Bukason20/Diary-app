import {useState} from "react"
import "./Slider.css"
import dataSlider from "./dataSlider"
import { Link } from "react-router-dom";

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    const [btnText, setBtnText] = useState("Next")
    const [link, setLink] = useState("")
    const [skipText, setSkipText] = useState("Skip")

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
            setBtnText("Next")
            
        }
         if(slideIndex === dataSlider.length - 1){
             setLink("/home")
            
            setBtnText("Start writing")
            setSkipText("")
        }
        console.log(slideIndex, dataSlider.length)
    }

    const moveIndex = (index) => {
        setSlideIndex(index)
        if(index === dataSlider.length){
            setBtnText("Start Writing")
            setLink("/home")
            setSkipText("")
        }else if(index !== dataSlider.length){
            setBtnText("Next")
            setLink("")
            setSkipText("Skip")
        }
    }
    // console.log(Array.from({length: 4}))

    return (
          
        <div className = "container-slider">
            {
                dataSlider.map((obj, index) => {
                    return (
                        <div className = {slideIndex === index + 1 ? "slide active-anim" : "slide"} key = {obj.id}>
                            <div className="image">
                                <img src = {obj.img} alt=""/>
                            </div>
                            <div className="content">
                                <h2>{obj.title}</h2>
                                <p>{obj.body}</p>
                            </div>
                            
                        </div>
                        
                        
                    )
                    
                })
            }

            <Link to = "/home" className = "skip-btn">{skipText}</Link>

            <Link  to = {link} className = "next-btn" onClick = {nextSlide}>{btnText}</Link>

            <div className="container-dots">
                {dataSlider.map((item, index) => {
                    return (
                        <div key = {item.id} className = {slideIndex === index + 1 ? "dot active" : "dot" }  onClick = {() => moveIndex(index + 1)}></div>
                    )
                })}
            </div>

        </div>
    );
}
 
export default Slider;