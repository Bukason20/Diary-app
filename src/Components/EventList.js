import EventItem from "./EventItem";
import { useContext} from "react"
import EventContext from "./Context/EventContext";

const EventList = () => {
    const { events, filterText, searchResults} = useContext(EventContext)

    

    return (  
        <div>
            {
                filterText.length < 1 ? events.map((event) => {
                    return (
                        <EventItem key = {event.id} event = {event}/>
                    )
                }) : searchResults.map((event) =>{
                    return (
                        <EventItem key = {event.id} event = {event}/>
                    )
                })
            }
        </div>
    );
}
 
export default EventList;