import React from 'react'
import '../index.css'


function Nav() {
    return (
      <div id="nav-container">
        <div className="nav-logo">
          <div 
            className="head-logo" 
            id="nav-logo" 
            style={{ fontSize: '24px', justifyItems: 'center' }}
          >
            <span className="head-logo-highlight">Esan</span>Donate<span> </span>
            <span style={{ fontSize: '14px', fontWeight: 'lighter', color: 'rgb(167, 167, 167)' }}>
              0.1
            </span>
          </div>
        </div>
        <ul>
          <li><a href="#" className="menu">วิธีใช้งาน</a></li>
          <li><a href="#" className="menu">แพลน</a></li>
          <li><a href="#" className="menu">เติมเงิน</a></li>
          <li><a href="#" className="menu">ติดต่อ</a></li>
        </ul>
      </div>

    );
}

export default Nav