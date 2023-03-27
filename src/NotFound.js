import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1>SORRY</h1>
            <p>The requested page was not found</p>
            <Link to='/'> Back To HomePage Idiot</Link>

        </div>
    );
}
 
export default NotFound;