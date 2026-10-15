import { useNavigate } from 'react-router-dom'

import './App.css'
import { QRCodeSVG } from 'qrcode.react'

function App(){
  const name = '권도형'
  const studentId = '20250191'
  const initials = <img src='치킨.jpg'></img>
  const department = '멀티미디어학과'
  const goal = '사용하기 편하고 보기 좋은 웹 화면 만들기'
  const qrData =
    '이름 : ' + name +
    '\n학번 : ' + studentId +
    '\n학과 : ' + department

  const navigate = useNavigate()
  console.log(qrData)

  return(
    <main className="page">
      <section className="profile-card">
        <span className="status">* LIVE</span>
        <div className="avatar">{initials}</div> 

        <p className="eyebrow">HELLO REACT</p>
        <h1>{name}</h1>
        <p className="department">{department}</p>

        <div className="divider"></div>

        <p className="goal">목표 : {goal}</p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        <div className= "qr-area">
          <QRCodeSVG 
            value={qrData} 
            size={100} 
          />
          <p>학생 QR</p>
        </div>

        <button onClick={() => navigate('/grade')}>
          성적 보기
        </button>
      </section>
    </main>
  )
}

export default App