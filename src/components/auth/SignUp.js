import React from 'react';
import useInput from '../../hooks/useInput';

const SignUp = () => {

    const username = useInput('');
    const password = useInput('');
    const firstName = useInput('');
    const lastName = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.value, password.value, firstName.value, password.value)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input {...username} type="email" id='email' />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input {...password} type="password" id='password' />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input {...firstName} type="text" id='firstName' />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input {...lastName} type="text" id='lastName' />
                </div>
                <div className="input-field">
                    <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;