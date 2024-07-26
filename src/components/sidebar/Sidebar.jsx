import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Sidebar({sidebar, category, setCategory}) {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
    <div className="shortcut-links">
      <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={()=>setCategory(0)}>
      <i class="fa-solid fa-house"></i><p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={()=>setCategory(20)}>
        <i class="fa-solid fa-gamepad"></i><p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={()=>setCategory(2)}>
        <i class="fa-solid fa-car-side"></i><p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ''}`}onClick={()=>setCategory(17)}>
        <i class="fa-solid fa-basketball"></i><p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`}onClick={()=>setCategory(24)}>
        <i class="fa-solid fa-tv"></i><p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`}onClick={()=>setCategory(28)}>
        <i class="fa-solid fa-microchip"></i><p>Technology</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={()=>setCategory(10)}>
        <i class="fa-solid fa-music"></i><p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={()=>setCategory(22)}>
        <i class="fa-solid fa-blog"></i><p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={()=>setCategory(25)}>
        <i class="fa-solid fa-newspaper"></i><p>News</p>
        </div>
        <hr />
        <div className="subcribed-list">
              <h3>Subscribed</h3>
              <div className="side-link">
                <img src={jack} alt="" /><p>PewDiePie</p>
              </div>
              <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
              </div>
              <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
              </div>
              <div className="side-link">
                <img src={megan} alt="" /><p>5-Minute Crafts</p>
              </div>
              <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar