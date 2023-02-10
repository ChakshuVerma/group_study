import React,{useState} from 'react';
import Navbar from '../commons/navbar';
import styles from '../../styles/auth/Login_Register.module.scss'
// import Footer from '../common/Footer';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {FaUserAlt, FaMailBulk, FaLock, FaPhoneAlt} from 'react-icons/fa'

const Register = () =>{
    // const history = useHistory();

    const NavbarContents = [];
    const [user, setUser] = useState({username: '', phone: '',  email: '', password: '', cpassword: ''});

    const iconStyling = {
        height: '30', 
        width: '30',   
        marginRight: '15px', 
        display: 'inline',
    };

    const handleInputs = (e) => {
        // We've given names to the input fields so we're extracting the name attribute here
        // let eventName = e.target.name;
        // let eventValue = e.target.value
        
        // setUser({...user, [eventName]: eventValue});
    }

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

    const RegisterUser = async (e) =>{
        // e.preventDefault();
        // const{username, email, phone, password, cpassword} = user;
 
        // const res = await fetch('./register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({username, email, phone, password, cpassword})
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
        //         history.push('./login');
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
                        <h1 className={styles.h1}>Register</h1>
                        <div className={styles.form_container}>
                            <form className={styles.form} method='POST' onSubmit={RegisterUser}>
                                <div className={styles.input_div}>
                                    {/* <FaUserAlt style={iconStyling}/> */}
                                    <input className={styles.input} value={user.username} name='username' maxLength="10" required type="text" autoComplete="off" onChange={handleInputs} placeholder="Username"></input>
                                </div>
                                <div className={styles.input_div}>
                                    {/* <FaPhoneAlt style={iconStyling}/> */}
                                    <input className={styles.input} value={user.phone} name='phone' required type="tel" minLength="10" maxLength="10" autoComplete="off" onChange={handleInputs} placeholder="Phone number"></input>
                                </div>
                                <div className={styles.input_div}>
                                    {/* <FaMailBulk style={iconStyling}/> */}
                                    <input className={styles.input} value={user.email} name='email' required type="email" autoComplete="off" onChange={handleInputs} placeholder="Email"></input>
                                </div>
                                <div className={styles.input_div}>
                                    {/* <FaLock style={iconStyling}/> */}
                                    <input className={styles.input} value={user.password} name='password' required minLength="6" type="password" autoComplete="off" onChange={handleInputs} placeholder="Password"></input>
                                </div>
                                <div className={styles.input_div}>
                                    {/* <FaLock style={iconStyling}/> */}
                                    <input className={styles.input} value={user.cpassword} name='cpassword' required minLength="6" type="password" autoComplete="off" onChange={handleInputs} placeholder="Confirm Password"></input>
                                </div>
                                <div className={styles.submit_div}>
                                    <input className={styles.input} type="submit" value="Sign Up"></input>
                                    <a href="/auth/login" className={styles.a}>Existing User?</a>
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

export default Register;