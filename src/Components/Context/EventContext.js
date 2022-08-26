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

    return  <EventContext.Provider 
                value = {{
                    events : events,
                    eventEdit : eventEdit,
                    deleteEvent: deleteEvent,
                    addEvent : addEvent,
                    editEvent : editEvent,
                    updateEvent: updateEvent,
                    setEvents: setEvents
                    
                }}
            >

            {children}
        </EventContext.Provider>
}

export default EventContext;