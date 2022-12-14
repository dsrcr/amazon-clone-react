
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const login = (event) => {
    //     event.preventDefault();

    //     auth.signInWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             //redirect to home
    //             history.push('/');
    //         }).catch((e) => alert(e.message));
    // };

    // const register = (event) => {
    //     event.preventDefault();
    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             //redirect to home
    //         }).catch((e) => alert(e.message));
    // }


    return (
        <div className='login'>
            <Link to={"/"}>
                <img className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button type='submit' className="login__signInButton">Sign in</button>
                </form>

                <p>By signing in you agree to Amazon's Condition of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button className="login__registerButton">Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login