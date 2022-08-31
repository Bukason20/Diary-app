import { useContext, useState, useRef} from "react";
import {FaSearch} from "react-icons/fa"
import EventContext from "./Context/EventContext";

const EventFilter = () => {

    // const [filterText, setFilterText] = useState("");

    const { filterEvent, filterText } = useContext(EventContext)

    // const inputEl = useRef("")

    // const changeText = (e) => {
    //     filterEvent(e.target.value)
    // }
    return (  
        <div className = "filter-container">
            <input type="text"  placeholder = "Search Events" onKeyUp = {(e) => filterEvent(e.target.value)} defaultValue = {filterText}/>
            
        </div>
    );
}
 
export default EventFilter;