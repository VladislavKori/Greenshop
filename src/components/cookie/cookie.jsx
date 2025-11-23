import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

import './cookie.css'

import CookieIcon from '../../assets/cookies/cookie.svg?react'
import { useRef } from 'react'

function cookie() {

    const [isAcceptCookie, setIsAcceptCookie] = useState(true);

    useEffect(() => {
        const acceptCookieState = localStorage.getItem('acceptCookie')
        return setIsAcceptCookie(acceptCookieState)
    }, [])

    const setAcceptCookieInThisUser = () => {
        localStorage.setItem('acceptCookie', true)
        setIsAcceptCookie(true)
    }

    return (
        <React.Fragment>
            {isAcceptCookie ? null : (
                <motion.div
                    className="cookie"
                    initial={{ transform: 'translateX(-100px)', opacity: 0 }}
                    animate={{ transform: 'translateX(0px)', opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 20
                    }}
                >
                    <CookieIcon className="cookie__img" />
                    <h3 className="cookie__title">Your privacy</h3>
                    <p className="cookie__text">By clicking “Accept all cookies”, you agree GreenStore can store cookies on your device and disclose information in accordance with our Cookie Policy.</p>
                    <button className="cookie__btn" onClick={setAcceptCookieInThisUser}>Accept all cookies</button>
                </motion.div>
            )}
        </React.Fragment>
    )
}

export default cookie