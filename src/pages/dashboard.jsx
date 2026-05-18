import Header from "../components/Header";
import HeroSlider from "../components/Hero-slider";
import FeaturedCourses from "../components/Featured-courses";
import SignUp from "../components/Sign-up";
import { useEffect, useState } from "react";
import LogIn from "../components/Log-in";

const Dashboard = () => {
    const [signUp, setSignUp] = useState(false);
    const [token ,setToken] = useState(localStorage.getItem('token') || null);
    const [logIn, setLogIn] = useState(false);
    return (
        <>
            <Header setLogIn={setLogIn} setSignUp={setSignUp} token={token}/>
            {signUp && <SignUp setSignUp={setSignUp} setToken={setToken}/>}
            {logIn && <LogIn setLogIn={setLogIn} setToken={setToken}/>}
            <HeroSlider />
            <FeaturedCourses />
        </>
    )
}

export default Dashboard;