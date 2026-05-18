import { useState } from "react";
import { close, eye, closedEye } from "../assets";
import { useForm } from "react-hook-form";

const LogIn = ({ setLogIn, setToken }) => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const URL = `https://api.redclass.redberryinternship.ge/api/login`;
        const handleLogInPost = async () => {
            const api = await fetch(URL, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            try {
                if(!api.ok) throw new Error("Failed log in post request");

                const result = await api.json();
                console.log("log in token", result.data.token);
                localStorage.setItem("token", result.data.token);
                setToken(result.data.token);
                setLogIn(false);
            } catch (error) {
                console.log(error);
            }
        }
        handleLogInPost();
    }
    return (
        <div className="log-in-page">
            <div className="log-in" id="log-in">
                <img src={close} alt="" className="close-log-in" onClick={() => setLogIn(false)} />
                <p className="log-in-title">Welcome Back</p>
                <p className="log-in-text">Log in to continue your learning</p>
                <form id="log-in-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="log-in-email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="log-in-email" placeholder="you@example.com" {...register("email")} />
                    </div>
                    <div className="log-in-password">
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? "text" : "password"} id="log-in-password" placeholder="Password" {...register("password")} />
                        <img src={showPassword ? eye : closedEye} alt="" onClick={() => setShowPassword(!showPassword)} className="password-eye" />
                    </div>
                </form>
                <button type="submit" form="log-in-form">Log In</button>
                <p className="or-line">or</p>
                <p className="log-in-link">Don’t have an account? <span style={{ color: "black", borderBottom: "1px solid black", marginLeft: "8px" }}>Sign Up</span></p>
            </div>
        </div>
    )
}

export default LogIn;