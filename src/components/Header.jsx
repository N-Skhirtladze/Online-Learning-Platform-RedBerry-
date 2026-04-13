import { logo, enrolledCourses, avatar, browseCourses } from "../assets";

const Header = ({ setSignUp }) => {
    return (
        <header>
            <div className="center-header">
                <img src={logo} alt="" style={{cursor: "pointer"}}/>
                <div className="user-side">
                    <div className="browse-courses">
                        <img src={browseCourses} alt="" />
                        <p>Browse Cources</p>
                    </div>
                    <div className="logged-in" style={{ display: "none" }}>
                        <div className="enrolled-courses">
                            <img src={enrolledCourses} alt="" />
                            <p>Enrolled Courses</p>
                        </div>
                        <img src={avatar} alt="" style={{cursor: "pointer", width: "56px", height: "56px"}}/>
                    </div>
                    <div className="logged-out">
                        <button>Log In</button>
                        <button onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;