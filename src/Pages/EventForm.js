import { useState, useContext, useEffect } from "react";
import { Link, useHistory} from "react-router-dom"
import EventContext from "../Components/Context/EventContext";
import Button from "../Components/shared/Button"

const EventForm = () => {
    const history = useHistory()
    const { addEvent, eventEdit, updateEvent } = useContext(EventContext)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const [created, setCreated] = useState(`${new Date().toDateString()}`)
    const [category, setCategory] = useState("")
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
            setCategory(eventEdit.event.category)
        }
    }, [eventEdit])

    const handleSubmit = (e) =>{

        
        
        const newEvent = {
            title : title,
            body : body,
            created : created,
            category : category,
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

                <div className = "event-type">
                    <select name="category"  value = {category} onChange = {(e) => setCategory(e.target.value)}>
                        <option value = "" defaultValue >Choose Type of diary</option>
                        <option value="Travel">Travel Diary</option>
                        <option value="Reflective">Reflective Diary</option>
                        <option value="Gratitude">Gratitude Diary</option>
                        <option value="Dream">Dream Diary</option>
                        <option value="Work">Work Diary</option>
                        <option value="Creative-writing">Creative Writing Diary</option>
                        <option value="Food">Food Diary</option>
                        <option value="Academic">Academic Diary</option>
                        <option value="Fitness">Fitness Diary</option>
                        <option value="Secret">Secret Diary</option>
                    </select>
                    
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder = "Write your stories" onChange = {handleBodyChange} value = {body}></textarea>

                <div className="add-event">
                    <Button type = "submit" >{eventEdit.edit ? "Update Event" : "Add Event"}</Button>
                </div>
               
            </form>
        </div>
    );
}
 
export default EventForm;