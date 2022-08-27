import { useContext, useState, useRef} from "react";
import {FaSearch} from "react-icons/fa"
import EventContext from "./Context/EventContext";

const EventFilter = () => {

    // const [filterText, setFilterText] = useState("");

    const { filterEvent, filterText } = useContext(EventContext)

    const inputEl = useRef("")

    const changeText = () => {
        filterEvent(inputEl.current.value)
    }
    return (  
        <div className = "filter-container">
            <input type="text"  placeholder = "Search Events" onChange = {changeText} value = {filterText} ref = {inputEl}/>
            
        </div>
    );
}
 
export default EventFilter;