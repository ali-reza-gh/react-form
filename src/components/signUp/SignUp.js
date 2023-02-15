import React from 'react';

const SignUp = () => {
    return (
        <div>
            <from>
                <h1>SignUp</h1>
                <div>
                    <label>Name</label>
                    <input type={'text'} />
                </div>
                <div>
                    <label>Email</label>
                    <input type={'email'} />
                </div>
                <div>
                    <label>Password</label>
                    <input type={'password'} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type={'password'} />
                </div>
                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type={'checkbox'} />
                </div>
            </from>
        </div>
    );
};

export default SignUp;