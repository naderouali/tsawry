import React from 'react'
import { Link } from 'react-router-dom';
import homescreen from '../medias/homescreen.jpg'

const style = {
  Image:{
    backgroundImage: `url(${homescreen})`,
    height: "200vh",
    width: "150%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    opacity : "0.5",
    left: "-18%",
    right: "-12%",
  },
  homeLargeButton: {
      backgroundColor: "green",
      padding: 15,
      paddingRight: 40, 
      paddingLeft: 40, 
      borderRadius: 50, 
      fontSize: 25, 
      color: "white", 
      textAlign: "center", 
      textDecoration: "none",
  },
  whoHome: {
    
  }
}

function home() {
  return (
    <div>
      <div className="homeImage" style={style.Image}></div>
      
      <div style={{ width: "100vh" }}>
        <div style={{ display: "grid", position: "absolute", gridTemplateColumns: "50% 50%", top: "50%", left: "50%", gridColumnGap: 150, transform: `translate(-50%, 0)`}}>
          <Link to="/create" ><div className="homeLargeButton" /*style={ style.homeLargeButton }*/>Join us for free</div></Link>
          <div style={{ color: "red", fontSize: 40, marginLeft: 20, position: "relative", display: "inline" }} ><b>Lorem ipsum</b></div>
        </div>
      </div>

      <div style={{position: "absolute", display: "grid", gridColumnGap: "3%", top: "100%", marginTop: "-1vh", marginLeft: "3%", marginRight: "3%" }} >
        <div style={{ backgroundColor: "#e4e4e4", borderRadius: "20px", padding: 30, gridColumn: "1/2"}} >
          <div style={style.whoHome} >Who's tseewry</div>
          <div style={{color: "red"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis orci non 
          vehicula blandit. Nullam quis dapibus nunc. Nam id ornare metus. Nullam dignissim est lectus, vel rutrum 
          diam fermentum nec. In mi massa, finibus a justo eget, tristique eleifend neque. 
          Etiam viverra lorem vitae aliquet aliquet. Mauris tincidunt odio in lacus iaculis auctor.</div>
        </div>

        <div style={{ backgroundColor: "#e4e4e4", borderRadius: "20px", padding: 30, gridColumn: "2/3"}} >
          <div style={{color: "red"}} >Team</div>
          <div style={{color: "red"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis orci non 
          vehicula blandit. Nullam quis dapibus nunc. Nam id ornare metus. Nullam dignissim est lectus, vel rutrum 
          diam fermentum nec. In mi massa, finibus a justo eget, tristique eleifend neque. 
          Etiam viverra lorem vitae aliquet aliquet. Mauris tincidunt odio in lacus iaculis auctor.</div>
        </div>

        <div style={{ backgroundColor: "#e4e4e4", borderRadius: "20px", padding: 30, gridColumn: "3/4"}} >
          <div style={{color: "red"}} >Our future</div>
          <div style={{color: "red"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis orci non 
          vehicula blandit. Nullam quis dapibus nunc. Nam id ornare metus. Nullam dignissim est lectus, vel rutrum 
          diam fermentum nec. In mi massa, finibus a justo eget, tristique eleifend neque. 
          Etiam viverra lorem vitae aliquet aliquet. Mauris tincidunt odio in lacus iaculis auctor.</div>
        </div>
      </div>

    </div>
  )
}

export default home;
