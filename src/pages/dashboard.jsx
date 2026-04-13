import Header from "../components/Header";
import HeroSlider from "../components/Hero-slider";
import FeaturedCourses from "../components/Featured-courses ";
import SignUp from "../components/Sign-up";
import { useState } from "react";

const Dashboard = () => {
    const [signUp, setSignUp] = useState(false);


    return (
        <>
            <Header setSignUp={setSignUp} />
            {signUp && <SignUp setSignUp={setSignUp} />}
            <HeroSlider />
            <FeaturedCourses />
        </>
    )
}

export default Dashboard;