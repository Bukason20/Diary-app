import { useState, useContext, useEffect } from "react";
import { Link, useHistory} from "react-router-dom"
import EventContext from "../Components/Context/EventContext";
import Button from "../Components/shared/Button"

const EventForm = () => {
    const history = useHistory()
    const { addEvent, eventEdit, updateEvent } = useContext(EventContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    useEffect(() => {
        if(eventEdit.edit === true){
            setTitle(eventEdit.event.title);
            setBody(eventEdit.event.body)
        }
    }, [eventEdit])

    const handleSubmit = (e) =>{
        const newEvent = {
            title : title,
            body : body
        }

        if(eventEdit.edit === true) {
            updateEvent(eventEdit.event.id, newEvent)
        }else {
            addEvent(newEvent)
        }
        

        setTitle("");
        setBody("")
        eventEdit.edit = false
        eventEdit.event = {}

        history.push("/home")

        
        e.preventDefault()
    }

    const emptyEvent = () =>{
        if(eventEdit.edit === true){
            eventEdit.edit = false
            eventEdit.event = {}
        }else {
            eventEdit.edit = false;
            eventEdit.event = {}
        }
        
    }


    return (  
        <div className = "form-container">
            <Link to="/home"><Button work = {emptyEvent} type = "click">Home</Button></Link>
            <form onSubmit = {handleSubmit}>
                <div className="event-title">
                    <input type="text" placeholder = "Event Title" onChange = {handleTitleChange} value = {title} required/>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder = "Write your stories" onChange = {handleBodyChange} value = {body}></textarea>

                <div className="add-event">
                    <Button type = "submit" >Add Event</Button>
                </div>
               
            </form>
        </div>
    );
}
 
export default EventForm;