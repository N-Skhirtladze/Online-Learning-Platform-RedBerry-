import { useEffect, useState } from "react";
import { logo, enrolledCourses, browseCourses } from "../assets";

const Header = ({ setLogIn, setSignUp, token }) => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        if (!token) return;
        const URL = `https://api.redclass.redberryinternship.ge/api/me`
        const fetchData = async () => {
            const api = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: "application/json",
                    authorization: `Bearer ${token}`
                },
            });
            try {
                if(!api.ok) throw new Error("Failed fetch the authenticated user data");

                const data = await api.json();
                console.log("user", data.data.avatar)
                setUserData(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [token])

    return (
        <header>
            <div className="center-header">
                <img src={logo} alt="" style={{ cursor: "pointer" }} />
                <div className="user-side">
                    <div className="browse-courses">
                        <img src={browseCourses} alt="" />
                        <p>Browse Cources</p>
                    </div>
                    {token ?
                        <div className="logged-in">
                            <div className="enrolled-courses">
                                <img src={enrolledCourses} alt="" />
                                <p>Enrolled Courses</p>
                            </div>
                            <img src={userData?.avatar} alt="" style={{ cursor: "pointer", width: "56px", height: "56px", borderRadius: "50%"}} />
                        </div>
                        :
                        <div className="logged-out">
                            <button onClick={() => setLogIn(true)}>Log In</button>
                            <button onClick={() => setSignUp(true)}>Sign Up</button>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;