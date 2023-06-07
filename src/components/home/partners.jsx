import React, { useState, useEffect } from 'react'
import Partner2 from '../img/nova.png'
import BlockLab from '../img/blocklab.png'
import Partner3 from '../img/streamline.png'
import OpenAI from '../img/openai.png'


export default function Partners() {


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
        backgroundColor: scrollBGColor > 120 ? 'black' : 'inherit',
        height: scrollTransition > 200 ? "150px" : "200px",

    };



    return (
        <div className='partners' style={headerStyle}>
            <div className="item-partners">
                <img src={Partner2} alt="" />
                <img src={Partner3} alt="" />
                <img src={OpenAI} alt="" />
                <img src={BlockLab} alt="" />
            </div>
        </div>
    )
}










