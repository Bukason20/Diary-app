import { Link } from "react-router-dom"
import {BrowserRouter as Router, Route} from "react-router-dom"
import EventForm from "./Pages/EventForm";
import EventList from "./Components/EventList";
import Header from "./Components/Header"
import Button from "./Components/shared/Button";
import { EventProvider } from "./Components/Context/EventContext";
import EventInfo from "./Pages/EventInfo";
import Slider from "./Components/Slider/Slider";

const App = () => {
    
    return (
        <EventProvider>
            <Router>
                <Route exact path = "/">
                    <Slider />
                </Route>
                
                <Route path = "/home">
                    <div className="app-container">
                        <Header />
                        <EventList />
                        <div className="create-event">
                            <Link to = "/add-event"><Button type = "submit">Create Event</Button></Link>
                        </div>
                    </div>
                </Route>

                <Route path = "/add-event">
                    <div className = "app-container">
                        <Header />
                        <EventForm />
                    </div>
                </Route>

                <Route path = "/event/:id">
                    <div className="app-container">
                        <Header />
                        <EventInfo />
                    </div>
                </Route>
                
            </Router>
        </EventProvider>
       
    );
}
 
export default App;