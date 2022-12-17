import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div id={'home'}>
            <p><Link to="/task1">Task 1</Link></p>
            <p><Link to="/task2">Task 2</Link></p>
        </div>
    )
};

export default Home;