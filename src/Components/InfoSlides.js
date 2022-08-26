import { useState } from "react"
import { Link } from "react-router-dom"
import IMG1 from "./images/img-1.jpg"
import IMG2 from "./images/img-2.jpg"
import IMG3 from "./images/img-3.jpg"

const InfoSlides = () => {

    // const step = document.querySelector(".steps")

    const infos = [
        {
            img: IMG1,
            title: "Step 1",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ad.."
        },

        {
            img: IMG2,
            title: "Step 2",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ad.."
        },

        {
            img: IMG3,
            title: "Step 3",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, ad.."
        }
    ]


    let [id, setId] = useState(0)

    const [title, setTitle] =useState("Next")

    const [info, setInfo] = useState(infos[id])

    const [link, setLink] = useState("")

    const changeSlide = (e) => {
        // console.log(e.target.className)
        if(e.target.className === "next-btn"){
            setId(++id)
            setInfo(infos[id])

           let dots =  Array.from(e.target.previousElementSibling.previousElementSibling.children)

            dots.map((dot) => {
                
                if(dot.classList[0] === `dot${id}`){
                   dot.classList.add("active")
               }else if(dot.classList[0] !== `dot${id}`){
                dot.classList.remove("active") 
               }
                
            })
        
        }else {
            return ""
        }

        if(id === infos.length -1){
            // setId(0)
            setTitle("Finish")
            setLink("/home")
            
        }
    }

    const selectDot = (e) => {

        if(e.target.classList[0] === `dot0`){
            // id = 0
            setId(0)
            setInfo(infos[0])
            setTitle("Next")
            setLink("")
            // e.target.classList.add("active")
            let dots =  Array.from(e.target.parentElement.children)

            dots.map((dot) => {
                if(dot.classList[0] === `dot0`){
                    dot.classList.add("active")
                }else if(dot.classList[0] !== `dot0`){
                 dot.classList.remove("active") 
                }
             })

        }else  if(e.target.classList[0] === `dot1`){
            // id = 0
            setId(1)
            setInfo(infos[1])
            setTitle("Next")
            setLink("")

            let dots =  Array.from(e.target.parentElement.children)

           dots.map((dot) => {
               if(dot.classList[0] === `dot1`){
                   dot.classList.add("active")
               }else if(dot.classList[0] !== `dot1`){
                dot.classList.remove("active") 
               }
            })
        }else  if(e.target.classList[0] === `dot2`){
            // id = 0
            setId(2)
            setInfo(infos[2])
            setTitle("Finish")
            setLink("/home")
            let dots =  Array.from(e.target.parentElement.children)

           dots.map((dot) => {
               if(dot.classList[0] === `dot2`){
                   dot.classList.add("active")
               }else if(dot.classList[0] !== `dot2`){
                dot.classList.remove("active") 
               }
            })
        }

        // if (e.target.className === "dots"){
        //     const dott = e.target.children
            
        // }

        console.log("clicked")
        

    }

     console.log(id)
    return (  
        <div className="info-slides-container" >
            <div className="content" onClick = {changeSlide}>
                <Link to="/home" className="skip-btn" >Skip</Link>

                <div className="dots" onClick = {selectDot}>
                    <div className=  "dot0 active" ></div>
                    <div className="dot1"  ></div>
                    <div className="dot2"   ></div>
                </div>

                <div className="steps">
                    <div className="step">
                        <div className="image">
                            <img src= {info.img}/>
                        </div>

                        <h3>{info.title}</h3>

                        <p>{info.body}</p>
                    </div>

                    
                </div>
                <Link to = {link} className ="next-btn">{title}</Link>
            </div>
            
        </div>
    // </div>    
    );
}
 
export default InfoSlides;