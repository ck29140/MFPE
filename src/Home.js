import React from "react";
//import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from "react-router-dom";
import Login from "./Login";
function Home() {
    const navigate = useNavigate();
    
    return (
        <div>
            <div className="home d-flex justify-content-center">
                <div className="class1">
                    <h2 className="h2">Pharmacy Medicine Management System</h2>
                    <br />
                    <label>Click Here to Login</label>
                    <button className="btn btn-primary btn-lg" onClick={() => navigate('/Login')}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Home;