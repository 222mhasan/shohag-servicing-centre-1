import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <img className="w-fit mx-auto" src="/src/images/not_found.jpg" alt="" />
            <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;