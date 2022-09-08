import { useContext, useState} from "react";
import {FaSearch} from "react-icons/fa"
import EventContext from "./Context/EventContext";
import ShowDate from "./Date";

const EventFilter = () => {

    const { filterEvent, filterText } = useContext(EventContext)

    return (  
        <div className = "filter-container">
            <ShowDate />
            <input type="text"  placeholder = "Search Events" onKeyUp = {(e) => filterEvent(e.target.value)} defaultValue = {filterText}/>
            
        </div>
    );
}
 
export default EventFilter;