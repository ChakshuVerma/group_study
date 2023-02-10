import React from 'react';
import styles from  '../../styles/commons/Navbar.module.scss'

const Navbar = ({contents}) => {
    const appName = `Group Study`;
    // contents = [];

    return( 
        <nav className={styles.container}>
            <a href="/" className={styles.app_name}>{appName}</a>
            <div className={styles.components}>
                <ul className={styles.ul}>
                    {
                        contents.map((component, index)=>{
                            return <li className={styles.li} key={index}><a href={component.link} className={styles.a}>{component.name}</a></li>
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;