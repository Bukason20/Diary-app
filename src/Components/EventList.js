import EventItem from "./EventItem";
import { useContext} from "react"
import EventContext from "./Context/EventContext";

const EventList = () => {
    const { events, filterText, searchResults, loading} = useContext(EventContext)

    if(!loading && (!events || events.length === 0)){
        return (
            <p className = "no-event">No Events yet</p>
        )
    }
    
    if(filterText.length >= 1 && searchResults.length === 0) {
        return (
            <p>No match</p>
        )
    }

    return loading ? <h3>Loading...</h3> : (  
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