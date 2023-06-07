import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../home/home.css"
import Partners from './partners'
import Sortifyabout from './sortifyabout'
// icons 
import Icon1 from '../img/icone/icone (1).png'
import Icon2 from '../img/icone/icone (2).png'
import Icon3 from '../img/icone/icone (3).png'
import Icon4 from '../img/icone/icone (4).png'


import Header from '../headefooter/header'

export default function Home() {

  const navigate = useNavigate()
  const handleColabrate = () => {
    navigate('/Hamkorlik')
  }

  return (
    <>

      <Header />
      <div className="home">
        <div className="item-home">
          <div className="information-home">
            <h1>
              Jomboy IT markazining Up English with AI <br /> loyihasiga hush kelibsiz
            </h1>
            <span>
              Bu loyiha sizga eng zamonaviy texnologiyalar va zamon talabi bo'lmish ingliz tilini <br /> bizning neyro tarmoq orqali siz o'zingiz hohlaganingizdek o'rganishingizda yaqindan yordam beradi
            </span>
            <div className="buttons-home">
              <Link to='AdminLog' className='none'>
                <button class="cssbuttons-io-button"> Boshlash
                  <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="bgc-effect"></div>
          <img src={Icon1} alt="" className="home-icons1" />
          <img src={Icon2} alt="" className="home-icons2" />
          <img src={Icon3} alt="" className="home-icons3" />
          <img src={Icon4} alt="" className="home-icons4" />
        </div>
      </div>
      <Partners />
      <Sortifyabout />
    </>
  )
}
