import { createContext, useState} from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4} from "uuid"

const EventContext = createContext();

export const EventProvider = ({children}) => {
   
    const [events, setEvents] = useState([
        {
            id : 1,
            title : "What my girl friend did to me",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae placeat suscipit officiis est, sit dicta! Optio sunt ad at incidunt, architecto odit fugit! Dolor vitae debitis in delectus cupiditate numquam!"
        },
        {
            id : 2,
            title : "What my mum did to me",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae placeat suscipit officiis est, sit dicta! Optio sunt ad at incidunt, architecto odit fugit! Dolor vitae debitis in delectus cupiditate numquam!"
        },
        {
            id : 3,
            title : "What my aunty did to me",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae placeat suscipit officiis est, sit dicta! Optio sunt ad at incidunt, architecto odit fugit! Dolor vitae debitis in delectus cupiditate numquam!"
        }
    ])

    const [eventEdit, setEventEdit] = useState({
        event : {},
        edit: false,
    })

    // delete event
    const deleteEvent = (id, title) =>{
        if(window.confirm(`Are you sure you want to delete "${title}"?`)){
            setEvents(events.filter((event) => id !== event.id))
        }
       
    }

    

    // add event
    const addEvent = (newEvent) => {
        newEvent.id = uuidv4();
       setEvents([newEvent, ...events]) 
    }

    // edit event
    const editEvent = (event) => {
        setEventEdit({
            event : event,
            edit: true
        })
    }

    //update event
    const updateEvent = (id, updatedEvent) => {
        setEvents(events.map((event) => {
            return(
                event.id === id ? {...event, ...updatedEvent} : event
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
        }else {
            setSearchResults(events)
        }
        // setFilterText(e.target.value)
        // if(filterText === "") {
            
        //         setEvents(events)
            
        //     // console.log(events)
        // }else if(filterText !== 0 ){
        //     return (
        //     setEvents(events.filter((event) => event.title.toLowerCase().includes(filterText.toLowerCase())))
        //     // console.log(e.target.value)
        //     )
        // }
        // // events.filter((event) => {
        //     if(e.target.value === ""){
        //         setEvents(events)
        //     }else if(event.title.toLowerCase().includes(e.target.value.toLowerCase())){
        //         setEvents(event)
        //     }
        // })
    }

    return  <EventContext.Provider 
                value = {{
                    events : events,
                    eventEdit : eventEdit,
                    deleteEvent: deleteEvent,
                    addEvent : addEvent,
                    editEvent : editEvent,
                    updateEvent: updateEvent,
                    setEvents: setEvents,
                    filterEvent: filterEvent,
                    filterText: filterText,
                    searchResults: searchResults
                    
                }}
            >

            {children}
        </EventContext.Provider>
}

export default EventContext;