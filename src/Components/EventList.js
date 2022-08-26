import EventItem from "./EventItem";
import { useContext} from "react"
import EventContext from "./Context/EventContext";

const EventList = () => {
    const { events} = useContext(EventContext)

    

    return (  
        <div>
            {
                events.map((event) => {
                    return (
                        <EventItem key = {event.id} event = {event}/>
                    )
                })
            }
        </div>
    );
}
 
export default EventList;