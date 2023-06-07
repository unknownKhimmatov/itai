import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./AdminLog.css"


import log_img1 from '../img/loginicons/logicons (1).png'
import log_img2 from '../img/loginicons/logicons (2).png'
import log_img3 from '../img/loginicons/logicons (3).png'
import log_img4 from '../img/loginicons/logicons (4).png'


export default function AdminLog() {




  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate()

  // errorMessages
  const errors = {
    uname: "foydalanuvchi ismi tog`ri kiritilmagan",
    pass: "parol notog'ri kiritilgan"
  };


  // username and parol 
  const database = [
    {
      username: "teacher",
      password: "teacher@007"
    },
    {
      username: "firdavs",
      password: "firdavs@2005"
    }



  ]

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // userni izlash
    const userData = database.find((user) => user.username === uname.value);

    // malumotlrni tekshirish
    if (userData) {
      if (userData.password !== pass.value) {
        //parolni tekshirish
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        window.location.href = 'https://chatbot.theb.ai/';

      }
    } else {
      // login topilmadi
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  //  login yoki parol xato vaqti chiqadigan habar
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );




  return (

    <>
      <div className='admilog' >
        <div className="top-comeback">
          <Link to='/' className='none white' >
            ◀ Asosiy bo'lim
          </Link>
        </div>
        <div className="adminlog-container">
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h3>
                Up English neyro tarmog'iga kirish
              </h3>
              <span>
                <b>Eslatma :</b> <span>sizning IP-manzilingiz uchun neyro tarmoq faollashmagan </span>
                <Link target='_blank' to='https://forms.gle/o9cwuNpuuk1VQGLB7' >Faollashtirish</Link>
              </span>
            </div>
            <div className="inputs-container">
              <div className="input-container">
                <label htmlFor='name'>Foydalanuvchi nomi </label>
                <input type="text" name="uname" id='name' required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label htmlFor="pass">Parol </label>
                <input type="password" name="pass" id='pass' required />
                {renderErrorMessage("pass")}
              </div>
            </div>
            <div className="button-container">
              <button>Kirish</button>
            </div>
          </form>
        </div>
        <img src={log_img1} alt="" className="log-img one" />
        <img src={log_img2} alt="" className="log-img two" />
        <img src={log_img3} alt="" className="log-img tree" />
        <img src={log_img4} alt="" className="log-img four" />

      </div>

    </>
  )
}