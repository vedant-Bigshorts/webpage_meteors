import "./about.css"
import React from "react";







function App() {
  return (
    <div className="App">
      <section className="nav1" >
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <img className="siznav" alt="" src="imgabout.png"></img>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse padnav"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#fixtures">
                    Schedule 2023
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sponsors">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="hor11">
            <a href="https://www.instagram.com/mumbaimeteors/"><img alt="" src="instagram.png"  style={{height:"3vw",paddingRight:"0.8vw"}}></img></a>
            <a href="https://www.facebook.com/mumbaimeteors/"><img alt="" src="metaf.png" style={{height:"3vw"}}></img></a>
            <a href="https://twitter.com/mumbai_meteors?lang=en"><img alt="" src="xlogof.png"  style={{height:"3vw"}}></img></a>
            <a href="https://www.youtube.com/@PrimeVolleyballLeague"><img alt="" src="youtube11f.png"  style={{height:"5vw"}}></img></a>
            
          </div>
            </div>
          </div>
        </nav>
      </section>
      <section className="intro" id="home">
  <div className="card text-bg-dark introCard" style={{ width: "100%", height: "100%" }}>
  <img
    src="about9.jpg"
    className="card-img introCardImg"
    alt="..."
    style={{ objectFit: "cover", width: "inherit", height: "inherit",opacity:"0.4" }}
  />
  {/* <iframe src="https://www.youtube.com/embed/AVFTGScoiHY?autoplay=1" frameborder="0" allow="autoplay" allowfullscreen style={{objectFit:"cover",width:"100vw",height:"100vh"}}></iframe> */}
  <div className="card-img-overlay  center22">
    <h1 className="card-text  anim title1 center23" style={{color:"orange",letterSpacing:"1vw"}}>MUMBAI METEORS</h1>
  </div>
</div>
      </section>
      <section className="ad">
        <div className="card border-light ad1 mw">
          <div className="row g-0" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-4">
              <iframe title="ad1"
                allowFullScreen="true"
                className="img-fluid rounded-start"
                src="https://www.youtube.com/embed/AVFTGScoiHY"
              ></iframe>
            </div>
            <div className="col-md-8" >
              <div className="card-body d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex">
                <p className="card-text introname font1">
                  THE CHAMPIONS ARE READY ARE YOU?
                  <br />
                  <span className="small">#AAMCHIMUMBAI</span>
                    </p>
                    </div>
                <div className=" d-flex flex-row watch px-2">
                  <h1 className="left">WATCH LIVE ON:</h1>
                  <img className="sony" alt="" src="sony1.png"></img>
                  <img className="sony" alt="" src="VBW_Logo.png"></img>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           <section className="intro" id="about">
   
  <div className="card text-bg-dark introCard" style={{ width: "100%", height: "100%" }}>
  <img
    src="about99.jpg"
    className="card-img introCardImg"
    alt="..."
    style={{ objectFit: "cover", width: "inherit", height: "inherit",opacity:"0.5" }}
  />
  <div className="card-img-overlay center22">
    <h5 className="title1 center23" style={{color:"orange"}}>ABOUT</h5>
    <p className="card-text  textcol center23" style={{color:"bisque"}}>
     
    From the neon lights of Mumbai's skyline to the electrifying atmosphere of the volleyball court, the Mumbai Meteors is a young team, established in 2022, plays with the heart of a seasoned contender, weaving agility and speed into their gameplay.So, watch them closely, these rising stars with the dream of a golden championship trophy glittering in their eyes. The Meteors are here to stay, leaving their mark on the Indian volleyball landscape.</p>
    <p className="card-text">
    </p>
  </div>
</div>
      </section>
      <section className="ad">
        <div className="card border-light ad1 mw">
          <div className="row g-0" style={{ justifyContent: "center", alignItems: "center" }}>
            <div className="col-md-4">
              <iframe title="ad2"
                allowFullScreen="true"
                className="img-fluid rounded-start"
                src="https://www.youtube.com/embed/YiwlDPdmSso"
              ></iframe>
            </div>
            <div className="col-md-8" >
              <div className="card-body d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex">
                <p className="card-text introname font1">
                  METEORS ARE READY TO GHEUNTAK LIKE THERES NO TOMOROW.
                  <br />
                  <span className="small">#GHEUNTAK</span>
                    </p>
                    </div>
                <div className=" d-flex flex-row watch px-2">
                  <h1 className="left">WATCH LIVE ON:</h1>
                  <img className="sony" alt="" src="sony1.png"></img>
                  <img className="sony" alt="" src="VBW_Logo.png"></img>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team d-flex flex-column justify-contents-center align-items-center "style={{height:"fit-content"}}>
        <div className="d-flex flex-column  align-items-center pad2">
          <h1 className="title2" >SQUAD</h1>
          <div className="d-flex ">
          <div className="card-group gridlay">
         {/* <div className="card1 center">
    <img src="1.png" className="card-img-top playsiz" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ajith Lal</h5>
      <p className="card-text"></p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div> <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div> 
  <div className="card1 center">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div> */}
  <div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="1.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">AJITH LAL</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="2.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">SHUBHAM CHAUDHARY</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title ">INDIA</h5>
    <h5 className="card-title ">UNIVERSAL</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="3.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">HETOR MATA</h5>
    <h5 className="card-title">🇻🇪</h5>
    <h5 className="card-title">VENEZUELA</h5>
    <h5 className="card-title">LIBERO</h5>
  </div>
</div>
<div className="card  anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="4.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">SAURABH MAAN</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">MIDDLE BLOCKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="5.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">KARTHIK MADHU</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">MIDDLE BLOCKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="6.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">HARDEEP SINGH</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="7.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">KRISTAN SOTNIKOV</h5>
    <h5 className="card-title">🇮🇷</h5>
    <h5 className="card-title">RUSSIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="8.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">MRITUNJOY MAHANTA</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="9.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">VIPUL KUMAR</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">SETTER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="10.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">DARSHAN GOWDA</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">LIBERO</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="11.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">AMIT GULIA</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="12.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">ARAVIND SELVA</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">SETTER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="13.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">SHAMEEM ULLANAM</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">MIDDLE BLOCKER</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="22.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">JERRY DANIEL</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ATTACKER</h5>
  </div>
</div>
            </div>
          </div>
          <h1 className="title2">STAFF</h1>
          <div className="d-flex ">
          <div className="card-group gridlay">
          <div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="head_coach.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">SUNNY JOSEPH</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">HEAD COACH</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="man11.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title"> AKSHAY</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ASSISTANT COACH</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="harun.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">HARUN KHAN</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">ASSISTANT COACH</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="sc.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">VIHAAN</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>
    <h5 className="card-title">S&C COACH</h5>
  </div>
</div>
<div className="card anim rounded-3 text-bg" style={{width: "18rem"}}>
  <img src="manager.png" className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:"bisque"}}>
    <h5 className="card-title">ANKIT GOTHI</h5>
    <h5 className="card-title">🇮🇳</h5>
    <h5 className="card-title">INDIA</h5>

<h5 className="card-title">MANAGER</h5>
  </div>
</div>
          </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <img src="banner.jpg" alt="" style={{width:"100%"}}></img>
      </section>
      <section id="fixtures" className="center1" style={{backgroundColor:"white"}}>
      <div className="card text-bg-dark1 introCard im" style={{ width: "100%", height: "100%",backgroundColor:"white" }}>
  {/* <img
    src="fixtures45.jpg"
    className="card-img introCardImg"
    alt="..."
    style={{ objectFit: "cover", width: "inherit", height: "inherit" }}
  /> */}
  {/* <div className="card-img-overlay pad2 center1 w">
    {/* <p className=" title9 card-text textcol anim  center1">
    FIXTURES

    </p> */}
    {/* <p className="card-text">
    </p>
  </div> */} 
  <h1 className="titlev" style={{color:"black"}}>Schedule 2023</h1>
</div>
<div className="d-flex ">
          <div className="card-group gridlay">
          <div className="card  anim rounded" style={{width: "18rem;"}}>
  <img src="mumvsdel.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body" style={{background:"transparent"}}>
    <h5 className="card-title">Mumbai Meteors vs Delhi Toofans</h5>
    <h3 className="card-text">16th,Feb</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/mumbai-vs-delhi-cochin-vs-calicut/seat-layout/aerialcanvas/ET00386051/JNSC/10027?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvshyd.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors vs Hyderabad Black Hawks</h5>
    <h3 className="card-text">19th,Feb</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/mumbai-meteors-vs-hyderabad-black-hawks/seat-layout/aerialcanvas/ET00386059/JNSC/10030?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvsben.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Bengaluru Torpedoes</h5>
    <h3 className="card-text">21st,Feb</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/bengaluru-torpedoes-vs-mumbai-meteors/seat-layout/aerialcanvas/ET00386061/JNSC/10032?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvscochin.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Kochi Blue Spikers</h5>
    <h3 className="card-text">25th,Feb</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/kolkata-vs-calicut-mumbai-vs-cochin/seat-layout/aerialcanvas/ET00386064/JNSC/10035?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvscalicut.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Calicut Heroes</h5>
    <h3 className="card-text">28th,Feb</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/calicut-heroes-vs-mumbai-meteors/seat-layout/aerialcanvas/ET00386067/JNSC/10038?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvsahm.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Ahmedabad Defenders</h5>
    <h3 className="card-text">1st,March</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/mumbai-vs-delhi-cochin-vs-calicut/seat-layout/aerialcanvas/ET00386051/JNSC/10027?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvschennai.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Chennai Blitz</h5>
    <h3 className="card-text">4th,March</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/hyd-bh-vs-ben-tor-mum-met-vs-chen-bli/seat-layout/aerialcanvas/ET00386073/JNSC/10043?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
<div className="card rounded anim" style={{width: "18rem;"}}>
  <img src="mumvskol.png" className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mumbai Meteors  vs  Kolkata Thunderbolts</h5>
    <h3 className="card-text">7th,March</h3>
    <p className="card-text">📍 Jawaharlal Nehru Indoor Stdium</p>
    <h4 className="card-text">₹250 Onwards</h4>
    <a href="https://in.bookmyshow.com/sports/kolkata-thunderbolts-vs-mumbai-meteors/seat-layout/aerialcanvas/ET00386076/JNSC/10046?groupEventCode=ET00386327" className="btn btn-primary">Book Now</a>
  </div>
</div>
          </div>
</div>
      </section>
      <section className="press" style={{backgroundColor:"white"}}>
      <div className="d-flex flex-column  align-items-center pad2">
          <h1 className="title2" style={{color:"black"}} >Press</h1>
          <div className="d-flex ">
          <div className="card-group gridlay">
          <div class="card anim rounded" style={{width:"18rem"}}>
  <img src="news11.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">PhonePe Founders Acquire Mumbai Meteors to Join Prime Volleyball League Bandwagon.</h5>
    <a href="https://www.financialexpress.com/business/brandwagon-phonepe-co-founders-pick-up-mumbai-franchise-in-prime-volleyball-league-2023-2706196/" class="btn btn-primary">Visit</a>
  </div>
</div>
<div class="card anim rounded" style={{width:"18rem"}}>
  <img src="PhonePe.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">PhonePe founders form eighth Prime Volleyball League franchise</h5>
    <a href="https://www.sportbusiness.com/news/phonepe-founders-form-eighth-prime-volleyball-league-franchise/" class="btn btn-primary">Visit</a>
  </div>
</div>
<div class="card anim rounded" style={{width:"18rem"}}>
  <img src="news33.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PhonePe founders join Prime Volleyball League, acquire Mumbai team</h5>
    <a href="https://www.moneycontrol.com/news/business/announcements/phonepe-founders-join-prime-volleyball-league-acquire-mumbai-team-9301441.html" class="btn btn-primary">Visit</a>
  </div>
</div>
          </div>
          </div> 
          </div> 
      </section>
      <section id="sponsors" className="sponsors d-flex flex-column justify-contents-center align-items-center">
           <div className="mt-5">
            <h1 className="title5 mb-5">SPONSORS</h1>
           </div>
           <div className="d-flex flex-column justify-contents-center align-items-center pt-3">
            <h1 className="title4" style={{fontSize:"2vw"}}>TITLE SPONSOR</h1>
            <div className="card-group">
  <div className="d-flex flex-column flex-sm-row flex-lg-row gap-5">
  <div className="card2">
    <img src="cred-title.jpg" className="card-img-top" alt="..."/>
  </div>
</div> 
           </div>
           </div>
           <div className="d-flex flex-column justify-contents-center align-items-center mb-3">
            <h1 className="title4 center" style={{fontSize:"2vw"}}>ASSOCIATE SPONSORS</h1>
            <div className="card-group">
  <div className="d-flex flex-column flex-sm-row flex-lg-row gap-5">
  <div className="card2">
    <img src="cultfit.png" className="card-img-top" alt="..."/>
  </div>
  <div className="card2 top1">
    <img src="scapia3.png" className="card-img-top" alt="..."/>
  </div>
</div> 
           </div>
           </div>
      </section>
      <section id="contact" className="contact bg5">
        <div className="cont center cont1 mx-5">
          <h1 className="signup title5">CONTACT</h1>
          <div className="justify-content-center  v">
          <div className="card margincont bg7 " style={{width: "18rem",opacity:"1"}}>
  <img src="imgabout.png" className="card-img-top" alt="..."/>
  <div className="card-body ">
    <p className="card-text" style={{color:"white"}}>Mumbai Meteors is a leading Men’s Volleyball Team from  Mumbai playing in The Prime Volleyball League in India.</p>
  </div>
</div>
<div className="card margincont bg7 top7" style={{width:"18rem"}}>
  <div className="card-header" style={{color:"white"}}>
    <h5>Quick Links</h5>
  </div>
  <ul className="list-group list-group-flush">
    <a href="#home"><li className="list-group-item bg7" style={{color:"white",paddingTop:"1.5rem"}}>Home</li></a>
    <a href="#about"><li className="list-group-item bg7" style={{color:"white",paddingTop:"1.5rem"}}>About</li></a>
    <a href="#team"><li className="list-group-item bg7" style={{color:"white",paddingTop:"1.5rem"}}>Team</li></a>
    <a href="#fixtures"><li className="list-group-item bg7" style={{color:"white",paddingTop:"1.5rem"}}>Events</li></a>
    <a href="#sponsors"><li className="list-group-item bg7" style={{color:"white",paddingTop:"1.5rem"}}>Sponsors</li></a>
  </ul>
</div>
<div className="card margincont bg7 top7" style={{width:"18rem"}}>
  <div className="card-header" style={{color:"white"}}>
    <h5>Get in Touch</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg7" style={{color:"white",paddingTop:"3rem"}}>+91 891923547</li>
    <li className="list-group-item bg7" style={{color:"white",paddingTop:"3rem"}}>MumbaiMeteors@info.com</li>
  </ul>
</div>
</div>       
          <h1 className="sochead">Social Media</h1>
          <div className="hor">
            <a href="https://www.instagram.com/mumbaimeteors/"><img alt="" src="instagram.png"  style={{height:"4vw"}}></img></a>
            <a href="https://www.facebook.com/mumbaimeteors/"><img alt="" src="metaf.png" style={{height:"4vw"}}></img></a>
            <a href="https://twitter.com/mumbai_meteors?lang=en"><img alt="" src="xlogof.png"  style={{height:"4vw"}}></img></a>
            <a href="https://www.youtube.com/@PrimeVolleyballLeague"><img alt="" src="youtube11f.png"  style={{height:"6vw"}}></img></a>
            
          </div>
          <div className="footer">
            <h5 style={{paddingBottom:"0.5rem"}}>©2023 MUMBAI METEORS.ALL RIGHTS RESERVED.</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

