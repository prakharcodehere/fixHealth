import React from 'react'
import styles from "./Navbar.module.css"
import Logo from "../../Assets/fixhealth-logo.png"

const Navbar = ({openModal}) => {

    return (
    <nav className={styles.navbar}>
    <div className={styles.navbarLogo}><a href='#'>
    <img src={Logo} className={styles.logoImg} />
    </a>
        
    </div>

    <div className={styles.navbarElement}>
    <ul className={styles.navMenu}>
  <li><a href="#hero">Home</a></li>
  <li><a href="#testimonial">Testinomials</a></li>


  </ul>

    </div>
 
<div className={styles.navbarBtn}>
<div onClick={openModal}> Book now</div>
</div>

</nav>
  )
}

export default Navbar;