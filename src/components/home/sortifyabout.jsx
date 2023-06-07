import React, { useState, useEffect } from 'react'

export default function Sortifyabout() {


    const [scrollBGColor, setScrollBGColor] = useState();
    const [scrollTransition, setScrollTransition] = useState();
    useEffect(() => {
        function handleScroll() {
            const bgcolor = window.pageYOffset;
            setScrollBGColor(bgcolor);
            const height = window.pageYOffset;
            setScrollTransition(height);

        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: scrollBGColor > 380 ? 'black' : 'white',
        height: scrollTransition > 380 ? "100px" : "200px",

    };


    const date = new Date().getFullYear()


    return (
        <div className='sortifyabout'>
            <div className="item-sortifyabout">
                <div className="about-item" style={headerStyle}></div>
                <div className="about-item" style={headerStyle}></div>
                <div className="about-item" style={headerStyle}></div>
                <div className="about-item" style={headerStyle}></div>
                <div className="about-item footer" style={headerStyle}>
                    © {date}  <a target='_blank' href="https://t.me/novasoft_company" >NovaSoft</a>. All rights reserved
                </div>
            </div>
        </div>
    )
}
