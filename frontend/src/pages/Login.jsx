import { useState } from "react";
import classes from "../styles/Registration.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Sign Up");

        const loginData = {
            email,
            password,
        };

        // TODO: Send data to backend
    };
    return (
        <div className={`${classes["Registration"]}`}>
            <form
                className={`${classes["registration-form"]}`}
                onSubmit={handleLogin}
            >
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassowrd(e.target.value)}
                    />
                </div>

                <div>
                    <p style={{ color: "red", padding: "10px 0px" }}>{error}</p>
                </div>
                <input type="submit" value="Login" className="btn" />
                <div>
                    <p>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
