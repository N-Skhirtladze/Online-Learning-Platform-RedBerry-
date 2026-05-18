import { useState } from "react";
import { close, eye, closedEye, upload, backArrow } from "../assets";
import { useForm } from "react-hook-form";

const SignUp = ({ setSignUp, setToken }) => {
    const [level, setLevel] = useState(0);
    const { register, handleSubmit, watch, setValue } = useForm();
    const formHeight = [75, 177, 274];
    const [showPassword, setShowPassword] = useState([false, false]);
    let file = watch("avatar");

    const levelColor = (l, i) => {
        if (l > i) return "#4F46E5";
        else if (l === i) return "#B7B3F4";
        else return "#EEEDFC";
    }

    const handleOutSignUp = (e) => {
        const element = e.target.className;
        if (element === "sign-up-page") setSignUp(false);
    }


    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setValue("avatar", [file]);
        console.log(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const onSubmit = (data) => {
        const formData = new FormData();

        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("password_confirmation", data.password_confirmation);
        formData.append("avatar", data.avatar?.[0]);

        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        console.log("data", data);

        const handleSignUpPost = async () => {
            const response = await fetch("https://api.redclass.redberryinternship.ge/api/register", {
                method: "POST",
                headers: {
                    accept: "application/json"
                },
                body: formData,
            });
            try {
                if (!response.ok) throw new Error("Failed post request")
                const result = await response.json();
                console.log("TOKEN", result.data.token);
                localStorage.setItem("token", result.data.token);
                setSignUp(false);
                setToken(result.data.token);
            } catch (error) {
                console.log(error);
            }
        }

        handleSignUpPost();
    }

    return (
        <div className="sign-up-page" onClick={handleOutSignUp}>
            <div className="sign-up">
                {level > 0 && <img src={backArrow} alt="" className="back-arrow" onClick={() => setLevel(prev => prev - 1)} />}
                <img src={close} alt="" className="close-sign-up" onClick={() => setSignUp(false)} />
                <p className="sign-up-title">Create Account</p>
                <p className="sign-up-text">Join and start learning today</p>
                <div className="sign-up-levels">
                    {Array(3).fill(0).map((_, i) => <p className="level" key={i} style={{ backgroundColor: `${levelColor(level, i)}` }}></p>)}
                </div>
                <form id="sign-up-form" style={{ height: `${formHeight[level]}px`, transition: "height .5s" }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-translate" style={{ transform: `translateX(${-level * 100}%)` }}>
                        <div className="sign-up-email">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" placeholder="you@example.com" {...register("email")} />
                        </div>
                        <div className="sign-up-password">
                            <div className="new-password">
                                <label htmlFor="password">Password*</label>
                                <input type={showPassword[0] ? "text" : "password"} id="password" placeholder="Password" {...register("password")} />
                                <img src={showPassword[0] ? eye : closedEye} alt="" onClick={() => setShowPassword((prev) => { const updated = [...prev]; updated[0] = !updated[0]; return updated })} className="password-eye" />
                            </div>
                            <div className="confirm-password">
                                <label htmlFor="password_confirmation">Confirm Password*</label>
                                <input type={showPassword[1] ? "text" : "password"} id="password_confirmation" placeholder="Confirm Password" {...register("password_confirmation")} />
                                <img src={showPassword[1] ? eye : closedEye} alt="" onClick={() => setShowPassword((prev) => { const updated = [...prev]; updated[1] = !updated[1]; return updated })} className="password-confirmation-eye" />
                            </div>
                        </div>
                        <div className="username-avatar">
                            <div className="sign-up-username">
                                <label htmlFor="username">Username*</label>
                                <input type="text" id="username" placeholder="Username" {...register("username", { required: true })} />
                            </div>
                            <div className="sign-up-avatar" >
                                <label htmlFor="avatar">Upload Avatar
                                    <input type="file" id="avatar" {...register("avatar")} hidden />
                                    <div className="upload-box" onDrop={handleDrop} onDragOver={handleDragOver}>
                                        {file?.[0] ?
                                            <p className="file-name">{file[0].name}</p>
                                            :
                                            (<>
                                                <img src={upload} alt="" className="upload-icon" />
                                                <p className="upload-text">Drag and drop or <span style={{ color: "#281ED2", borderBottom: "1px solid #281ED2" }}>Upload file</span></p>
                                                <p className="file-type">JPG, PNG or WebP</p>
                                            </>
                                            )
                                        }
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                {level < 2 ?
                    <button className="next-btn" onClick={() => setLevel(prev => prev + 1)}>Next</button> :
                    <button type="submit" form="sign-up-form">Sign Up</button>
                }
                <p className="or-line">or</p>
                <p className="log-in-link">Already have an account? <span style={{ color: "black", borderBottom: "1px solid black", marginLeft: "8px" }}>Log In</span></p>
            </div>
        </div>
    )
}

export default SignUp;