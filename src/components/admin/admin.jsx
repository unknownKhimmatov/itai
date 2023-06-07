import React from 'react'
import "./admin.css"

import { Link } from 'react-router-dom'

import { MdSupportAgent } from 'react-icons/md'
import { SlHome } from 'react-icons/sl'
import { BiSearch } from 'react-icons/bi'
import { FaList } from 'react-icons/fa'
import Main from './admin/Main'
export default function admin() {
  return (
    <div className='admin-main'>
      <div className="item-admin">
        <div className="dashboard">
          <div className="item-dashboard">
            <section className="top-dashboard">
              <h3>54-maktab</h3>
            </section>
            <section className="middle-dashboard">
              <ul>
                <li style={{ background: "#63414163" }}>
                  <i className='icone'><SlHome /></i> <span> Asosiy </span>
                </li>

                <Link to='/admin-search' className='none'>
                  <li>
                    <i className='icone'><BiSearch /></i><span> Qidirish </span>
                  </li>
                </Link>

              </ul>
            </section>
            <hr />
            <section className="bottom-dashboard">
              <ul>
                <Link to='/puplisList' className='none' >
                  <li>
                    <i className='icone'>
                      <FaList />
                    </i>
                    <span>
                      O'quvchilar ro'yxati
                    </span>
                  </li>
                </Link>
                <Link className='none' to='/support' >
                  <li>
                    <i className='icone bgc'>
                      <MdSupportAgent />
                    </i>
                    <span>
                      Qo'llab quvvatlash
                    </span>
                  </li>
                </Link>
              </ul>
            </section>
          </div>
        </div>

        <div className="main-content-in-admin">
          <Main />
        </div>
      </div>
    </div>
  )
}
