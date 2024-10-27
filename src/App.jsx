import 'react';
import './index.css';
import Nav from './components/Nav';
import Aos from 'aos';

function App() {
  Aos.init();
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
        <div data-aos="fade-left" data-aos-duration="1000" className="head-text">
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

      <section id="sec2">
        <div id="sec2-title" data-aos="zoom-in">
          <span>ทำไมต้องใช้ </span><span className="head-logo-highlight">Esan</span>Donate ?
        </div>
        <div id="sec2-grid">
          <div data-aos="fade-in">
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Pay
            </p>
            <p style={{ fontSize: 'small' }}>
              ให้ผู้ติดตามของคุณสามารถสนับสนุนคุณได้ง่ายยิ่งขึ้น และรวดเร็วด้วยการรับเงินเข้าบัญชีของคุณไปตรงๆ ทันที ไม่ต้องผ่านตัวกลางใดๆ ด้วยช่องทางการชำระเงินที่เป็นที่นิยมอย่าง TrueMoney หรือ PromptPay
            </p>
          </div>

          <div data-aos="fade-in" data-aos-delay="100">
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Manage
            </p>
            <p style={{ fontSize: 'small' }}>
              แก้ไข, จัดการ และวิเคราห์ส่วนผสมแกงส้มของคุณได้อย่างง่ายดาย ในห้องครัวหลังบ้าน มีช่องทางการรับให้ใช้งานมากมาย และการปรับแต่งหน้าบ้านอย่างอิสระในแบบของคุณ
            </p>
          </div>

          <div data-aos="fade-in" data-aos-delay="200">
            <p style={{ fontFamily: 'sans-serif', fontSize: 'larger' }}>
              <span className="head-logo-highlight">Esan</span>Secure
            </p>
            <p style={{ fontSize: 'small' }}>
              ไว้วางใจได้กับการคำนึงถึงความปลอดภัยทุกขั้นตอนของระบบหลังบ้าน ด้วยเชฟที่เชี่ยวชาญและมืออาชีพ ที่วางจานไว้อย่างดี มีทีมงานคอยซัพพอร์ตตลอด ปลอดภัยทุกออเดอร์แน่นอน
            </p>
          </div>
        </div>


        <div className="sec2-buff-bg" data-aos="zoom-out-up">
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>และที่สำคัญ</p>
          <p style={{ lineHeight: '0px' }}>เราหักค่าบริการจากลาบอีสานของคุณ</p>
          <p style={{ fontSize: '64px', fontWeight: 'bolder' }}>0%</p>

          <div className="sec2-buff-mini-bg" data-aos="fade-left" data-aos-delay="500">
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

        </div>
      </section>
    </>

  )
}



export default App;
