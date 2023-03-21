import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">System</h1>
                    <p className="lead">Hello</p>
                    <hr />
                   
                    <Link to="/dashboard" className="btn btn-info btn-lg">
                        Access
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;