import 'react';
import './index.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Section1 />

    </>
  );
}


function Header() {
  return (

    <>
      <div id="heads-top">
        <div className="head-text">
          รับซอยจุ๊จากผู้ติดตามของคุณ
          <br></br>
          ได้ง่ายกว่า สะอาดกว่า และปลอดภัยกว่า ที่
          <div className="head-logo">
            <span className="head-logo-highlight">Esan</span>Donate
          </div>
        </div>
      </div>
      <div id="heads-bottom"></div>
    </>
  )
}

function Section1() {
  return (
    <>

      <div id="sec2">
        <div id="sec2-title">
          <span>ทำไมต้องใช้ </span><span className="head-logo-highlight">Esan</span>Donate ?
        </div>
        <div id="sec2-grid">
          <div>
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Pay
            </p>
            <p style={{ fontSize: 'small' }}>
              ให้ผู้ติดตามของคุณสามารถสนับสนุนคุณได้ง่ายยิ่งขึ้น และรวดเร็วด้วยการรับข้าวเหนียวในกกข้าวของคุณไปตรง ๆ ทันที ไม่ต้องผ่านตัวกลางใดๆ ด้วยช่องทางธรรมชาติที่เป็นที่นิยมอย่าง ทุ่งนา หรือ ถนนลูกรัง
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Manage
            </p>
            <p style={{ fontSize: 'small' }}>
              แก้ไข, จัดการ และวิเคราห์ส่วนผสมแกงส้มของคุณได้อย่างง่ายดาย ในห้องครัวหลังบ้าน มีช่องทางการรับให้ใช้งานมากมาย และการปรับแต่งหน้าบ้านอย่างอิสระในแบบของคุณ
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Secure
            </p>
            <p style={{ fontSize: 'small' }}>
              ไว้วางใจได้กับการคำนึงถึงความปลอดภัยทุกขั้นตอนของระบบหลังบ้าน ด้วยเชฟที่เชี่ยวชาญและมืออาชีพ ที่วางจานไว้อย่างดี มีทีมงานคอยซัพพอร์ตตลอด ปลอดภัยทุกออเดอร์แน่นอน
            </p>
          </div>
        </div>
        <div className="sec2-buff-bg">
          <div className="sec2-buff-mini-bg">
            <p style={{ color: 'black', marginLeft: '20px' }}>รับซอยจุ๊จากผู้ติดตามของคุณ</p>
            <p style={{
              fontSize: '30px',
              fontWeight: 'bolder',
              color: '#0000ff',
              marginLeft: '20px',
              marginTop: '20px',
              lineHeight: '0px'
            }}>
              ไปเต็ม ๆ ได้เลย!
            </p>
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>และที่สำคัญ</p>
          <p style={{ lineHeight: '0px' }}>เราหักค่าบริการจากลาบอีสานที่คุณได้</p>
          <p style={{ fontSize: '64px', fontWeight: 'bolder' }}>0%</p>
        </div>
      </div>
    </>
  )
}



export default App;
