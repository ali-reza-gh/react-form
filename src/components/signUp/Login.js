import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./signUp.module.css";

import { validate } from './validate';
import { notify } from './toast';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    const changeHandler = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })

    }


    useEffect(() => {
        setErrors(validate(data, 'login'))
    }, [data, touched]);



    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true })
    }


    const submitHandler = (event) => {
        event.preventDefault();

        if (!Object.keys(errors).length) {
            notify('you sign up Succesfully', "success");
        } else {
            setTouched({
                email: true,
                password: true,
            })

            notify("Invalid Data!", 'error')
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>

                <h2 className={styles.header}>Login</h2>

                <div className={styles.formField}>

                    <label>Email</label>

                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type='email'
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to='/signup' >Sign Up</Link>
                    <button type='submit' >Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
