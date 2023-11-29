import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h3>Sorry...</h3>
            <p>That page cannot be found.</p>
            <p>Go back to the <Link to="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;