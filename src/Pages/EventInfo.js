import { Link, useHistory, useParams } from "react-router-dom";
import { useContext} from "react"
import EventContext from "../Components/Context/EventContext";
import Button from "../Components/shared/Button";


const EventInfo = () => {
    const { id }  = useParams();

    const {events, setEvents} = useContext(EventContext)

    // const {history} = useHistory();


    const history = useHistory()

    const delEvent = (id, title,) =>{
        if(window.confirm(`Are you sure you want to delete "${title}"?`)){
            setEvents(events.filter((event) => id !== event.id));
            history.push("/home")
            
        }
    }

    
    return (  
        <div className = "info-container">
            <Link to = "/home"><Button>Home</Button></Link>
            {events.map(event => {
                if(event.id == id && event.title.length !== 0){
                    return (
                        <div key = {event.id} className = "info-item">
                            
                            <h1>{event.title}</h1>
                            <p>{event.body}</p>

                            <Button work = {() => delEvent(event.id, event.title)}>Delete Event</Button>
                        </div>
                    )
                }
            })}

        </div>
    );
}
 
export default EventInfo;