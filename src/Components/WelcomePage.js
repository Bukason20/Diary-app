import { Link } from "react-router-dom"
import Button from "./shared/Button"
import IMG1 from "./images/img-1.png"

const WelcomePage = () => {
    return (  
        <div className = "welcomepage-container">
            <div className="welcomepage-content">
                <h2>Welcome to Diary App</h2>
                <div className="img-container">
                    <img src={IMG1} />
                </div>

                <Link to = "/home"><Button>Start Writing</Button></Link>
            </div>
        </div>
    );
}
 
export default WelcomePage;