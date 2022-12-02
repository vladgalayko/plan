import React from 'react';
import useInput from '../../hooks/useInput';

const SignIn = () => {
    const username = useInput('');
    const password = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.value, password.value)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input {...username} type="email" id='email' />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input {...password} type="password" id='password' />
                </div>
                <div className="input-field">
                    <button className='btn pink lighten-1 z-depth-0'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;