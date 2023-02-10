import styles from '../../styles/auth/Login_Register.module.scss'
import React, { useState } from 'react';
import Navbar from '../commons/navbar';
// import {Link, useHistory} from 'react-router-dom';
// import Footer from '../common/Footer';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {FaMailBulk, FaLock} from 'react-icons/fa'


const Login = () =>{
    // const history = useHistory();
    const NavbarContents = [];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const IconStyle = {
        height: '30', 
        width: '30',   
        marginRight: '15px', 
        display: 'inline',
    };

    const ErrorToast = (errorMsg) => {
        // toast.error(errorMsg, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 4000
        // });
    }

    const SuccesToast = (succesMsg) => {
        // toast.success(succesMsg, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 1000
        // });
    }

    const LoginUser = async (e) =>{
        // e.preventDefault();
        
        // const res = await fetch('./login', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({email, password})
        // });

        // const data = await res.json();
        
        // // 201 means success
        // if(!data || res.status !== 201){
        //     ErrorToast(data.error);
        //     console.clear();
        // }
        // else{
        //     SuccesToast(data.message);
        //     setTimeout(() => {
        //         history.push('/');
        //     }, 1000)
        // }
    }

    return(
        <>
            {/* <ToastContainer style={{fontSize:"2rem"}} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} limit={2} theme={"dark"} pauseOnFocusLoss={false} draggable pauseOnHover={false}/> */}
            <div className={styles.container}>
                <Navbar contents={NavbarContents}/>
                <div className={styles.main_content}>
                    <div className={styles.center_div}>
                        <h1 className={styles.h1}>Login</h1>
                        <div className={styles.form_container}>
                            <form className={styles.form} method='POST' onSubmit={LoginUser}>
                                <div className={styles.input_div}>
                                    {/* <FaMailBulk style={IconStyle}/> */}
                                    <input className={styles.input} value={email} name='email' required type="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                                </div>
                                <div className={styles.input_div}>
                                    {/* <FaLock style={IconStyle}/> */}
                                    <input className={styles.input} value={password} name='password' required type="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                                </div>
                                <div className={styles.submit_div}>
                                    <input className={styles.input} type="submit" value="Sign In"></input>
                                    <a className={styles.a} href="/auth/register">New User?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default Login;