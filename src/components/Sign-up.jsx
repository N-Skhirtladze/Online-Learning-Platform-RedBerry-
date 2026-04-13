import { useRef, useState } from "react";
import { close, eye, closedEye, upload, backArrow } from "../assets";
import { useForm } from "react-hook-form";

const SignUp = ({ setSignUp }) => {
    const [level, setLevel] = useState(0);
    const { register, handleSubmit } = useForm();
    const formHeight = [75, 177, 274];
    const [showPassword, setShowPassword] = useState([false, false]);
    const [file, setFile] = useState();
    const inputRef = useRef();

    const levelColor = (l, i) => {
        if (l > i) return "#4F46E5";
        else if (l === i) return "#B7B3F4";
        else return "#EEEDFC";
    }

    const handleOutSignUp = (e) => {
        const element = e.target.className;
        if (element === "sign-up-page") setSignUp(false);
    }

    const handleInputClick = () => {
        inputRef.current.click();
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file.name);
        console.log("file", file);
        console.log("files name", file)
    }
    return (
        <div className="sign-up-page" onClick={handleOutSignUp}>
            <div className="sign-up">
                {level > 0 && <img src={backArrow} alt="" className="back-arrow" onClick={() => setLevel(prev => --prev)} />}
                <img src={close} alt="" className="close-sign-up" onClick={() => setSignUp(prev => !prev)} />
                <p className="sign-up-title">Create Account</p>
                <p className="sign-up-text">Join and start learning today</p>
                <div className="sign-up-levels">
                    {Array(3).fill(0).map((_, i) => <p className="level" key={i} style={{ backgroundColor: `${levelColor(level, i)}` }}></p>)}
                </div>
                <form id="sign-up-form" style={{ height: `${formHeight[level]}px`, transition: "height .5s" }}>
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
                            <div className="sign-up-avatar" onClick={handleInputClick}>
                                <label htmlFor="avatar">Upload Avatar</label>
                                <input type="file" id="avatar" {...register("avatar")} ref={inputRef} onChange={handleChange} hidden />
                                <div className="upload-box">
                                    {file ?
                                        <p className="file-name">{file}</p>
                                        :
                                        (<>
                                            <img src={upload} alt="" className="upload-icon" />
                                            <p className="upload-text">Drag and drop or <span style={{ color: "#281ED2", borderBottom: "1px solid #281ED2" }}>Upload file</span></p>
                                            <p className="file-type">JPG, PNG or WebP</p>
                                        </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {level < 2 ?
                    <button className="next-btn" onClick={() => setLevel(prev => ++prev)}>Next</button> :
                    <button type="submit" form="sign-up-email">Sign Up</button>
                }
                <p className="or-line">or</p>
                <p className="log-in-link">Already have an account? <span style={{ color: "black", borderBottom: "1px solid black", marginLeft: "8px" }}>Log In</span></p>
            </div>
        </div>
    )
}

export default SignUp;