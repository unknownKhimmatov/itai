import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../headefooter/header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import shape from '../img/loginicons/Group 1 (3).png'

export default function Header() {




    const [scrollBGColor, setScrollBGColor] = useState();
    const [scrollPosition, setScrollPosition] = useState();
    const [scrollTransition, setScrollTransition] = useState();
    const [scrollColor, setScrollColor] = useState();
    useEffect(() => {
        function handleScroll() {
            const bgcolor = window.pageYOffset;
            setScrollBGColor(bgcolor);
            const position = window.pageYOffset;
            setScrollPosition(position);
            const height = window.pageYOffset;
            setScrollTransition(height);
            const color = window.pageYOffset;
            setScrollColor(color)


        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: scrollBGColor > 350 ? 'white' : 'inherit',
        position: scrollPosition > 350 ? 'fixed' : 'relative',
        height: scrollTransition > 355 ? "100px" : "140px",

    };

    const colorLI = {
        color: scrollColor > 200 ? "black" : "black"
    }



    const [show, setshow] = useState(false)

    const handleNavbar = () => {
        setshow(!show)
        console.log("work");

    }
    const handleChiqish = () => {
        setshow(false)
    }


    const navigate = useNavigate()
    const handleLogAdmin = () => {
        navigate('AdminLog')
    }

    const handleContact = () => {
        navigate('/Contact')
    }


    return (
        <>
            <header >
                <nav style={headerStyle}>
                    <ul>
                      <h1>
                        Up English
                      </h1>
                    </ul>
                    <ul className='navigate'>
                        <Link to='/' className='none d-none'>
                            <li style={colorLI}>
                                Asosiy
                            </li>
                        </Link>
                        <button onClick={handleContact} >
                            Bog'lanish
                        </button>
                        <button onClick={handleLogAdmin}>Kirish</button>
                    </ul>


                    <ul className={show !== true ? 'resnavigate' : "resnavigate2"}>
                        <div className="item-res-nav">
                            <Link to='/' className='none d-none'>
                                <li >
                                    Asosiy
                                </li>
                            </Link>
                            <button onClick={handleContact} >
                                Bog'lanish
                            </button>
                            <button onClick={handleLogAdmin}>Kirish</button>
                            <button onClick={handleChiqish}>Ortga</button>
                        </div>
                    </ul>


                    <ol onClick={handleNavbar}>
                        <RxHamburgerMenu />
                    </ol>
                </nav>
            </header>
        </>
    )
}
