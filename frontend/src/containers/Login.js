import React ,{useState} from "react";
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

// import login async action creator from auth
import {login} from '../actions/auth'

const Login = ({login,isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const {email,password} = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();

        // call the login action creator in auth/login to login
        login(email,password)
    }

    // is the user authenticated?
    // redirect to home page
    if(isAuthenticated){
        return <Redirect to="/" />
    }

    return (
        <div className="container mt-5">
            <p>Sign in to your account</p>

            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p className="mt-3"><Link to="/signup">SignUp</Link> if you don't have account</p>
            <p className="mt-3">Forgot your password? <Link to="/reset-password">Reset Password</Link></p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
});
export default connect(mapStateToProps, {login})(Login);
