import { createContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4} from "uuid"

const EventContext = createContext();

export const EventProvider = ({children}) => {
   
    const [events, setEvents] = useState([]);

    const [loading, setLoading] = useState(true)

    const [textTime, setTextTime] = useState("Created")

    const [eventEdit, setEventEdit] = useState({
        event : {},
        edit: false,
    })

    useEffect(() => {
        fetchEvents()
    }, [])



    //Fetch Events
    const fetchEvents = async () => {
        const response = await fetch("http://localhost:5000/events?_sort=id&_order=desc")

        const data = await response.json()

        setEvents(data)
        setLoading(false)
    }

    // delete event
    const deleteEvent = async (id, title) =>{
        if(window.confirm(`Are you sure you want to delete "${title}"?`)){

            await fetch(`http://localhost:5000/events/${id}`, {method : "DELETE"})
            setEvents(events.filter((event) => id !== event.id))
        }
       
    }

    

    // add event
    const addEvent = async (newEvent) => {

        const response = await fetch(`http://localhost:5000/events`, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newEvent)
        })

        const data = await response.json()
        
       setEvents([data, ...events]) 

       setFilterText("")
       filterEvent(filterText)
    }

    // edit event
    const editEvent = (event) => {
        setEventEdit({
            event : event,
            edit: true
        })
        if(eventEdit.edit){
            setTextTime("Edited")
        }
    }

    //update event
    const updateEvent = async (id, updatedEvent) => {

        const response = await fetch(`http://localhost:5000/events/${id}`, {

            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(updatedEvent)
        })

        const data = await response.json()

        setEvents(events.map((event) => {
            return(
                event.id === id ? {...event, ...data} : event
            )
        }))
    }

    const [filterText, setFilterText] = useState("");
    const [searchResults, setSearchResults] =useState([]);

    //filter event 
    const filterEvent = (searchTerm) => {
        setFilterText(searchTerm)
        if (searchTerm !== ""){
            const newEvent = events.filter((event) => {
                return Object.values(event).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            })

            setSearchResults(newEvent)
        }
        // else if(Object.values(event).join(" ").toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
        //     return (
        //         <p>No results found</p>
        //     )
        // }
        else{
            setSearchResults(events)
        }
        
    }

    return  <EventContext.Provider 
                value = {{
                    events : events,
                    eventEdit : eventEdit,
                    filterText: filterText,
                    searchResults: searchResults,
                    loading : loading,
                    deleteEvent: deleteEvent,
                    addEvent : addEvent,
                    editEvent : editEvent,
                    updateEvent: updateEvent,
                    setEvents: setEvents,
                    filterEvent: filterEvent,
                    textTime : textTime
                   
                    
                }}
            >

            {children}
        </EventContext.Provider>
}

export default EventContext;