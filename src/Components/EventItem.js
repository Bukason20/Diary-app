import { useContext} from "react"
import EventContext from "./Context/EventContext";
import Button from "./shared/Button";
import Card from "./shared/Card";
import {FaTrash, FaEdit} from "react-icons/fa"
import { Link } from "react-router-dom";

const EventItem = ({event}) => {
    const {deleteEvent, editEvent} = useContext(EventContext)
    return ( 
        <Card>
            <div className="item-container">
                <div className="item-contents">
                    <h3>{event.title}</h3>
                    <p>{event.body == null ? "" : event.body.slice(0, 65) + "..."}</p>
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
            
            
        </Card>
    );
}
 
export default EventItem;