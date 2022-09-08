import { useContext, useState} from "react"
import EventContext from "./Context/EventContext";
import Button from "./shared/Button";
import Card from "./shared/Card";
import {FaTrash, FaEdit} from "react-icons/fa"
import { Link } from "react-router-dom";

const EventItem = ({event}) => {
    const {deleteEvent, editEvent, textTime} = useContext(EventContext)

    

    // const date = 
    return ( 
        <Card>
           <div className="item-container">
                <div className="item-contents">
                    <h3>{event.title}</h3>
                    <p className = {event.category.length > 0 ? "item-category" : ""}>{event.category.length > 0 ? event.category + " journal" : ""}</p>
                    <p>{event.body.slice(0, 65) + "..."}</p>
                    <p className = "item-created">Last modified : {event.created}</p>
                    <Link to = {`/event/${event.id}`}><Button> Read More</Button></Link>
                </div>
                <div className="item-icons">
                    <button className="edit" onClick = {() => editEvent(event)} >
                    <Link to = "/add-event"><FaEdit color = "blue"/></Link>
                    
                    </button>

                    <button className = "delete" onClick = {() => deleteEvent(event.id, event.title)}>
                        <FaTrash color = "red" />
                    </button>
                </div>
                
            
            </div>
            <div className = {event.category.length > 0 ? "item-logo" : ""}>
                <h3>{event.category[0]}</h3>
            </div>
            
            
            
            
        </Card>
    );
}
 
export default EventItem;