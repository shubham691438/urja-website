import React from 'react'
import icon1 from "../assets/images/twitter.svg";
import icon2 from "../assets/images/facebook.svg";
import icon3 from "../assets/images/instagram.svg";
import icon4 from "../assets/images/linkedin.svg";
import backgroundImage from "../assets/images/bg.jpg";


function Cards(props) {

  return (
   <>
   
   <div class="col-xl-4 col-md-6 d-flex aos-init aos-animate justify-content-center  " data-aos="zoom-in" data-aos-delay="200">
   
            <div class="team-member" >
              <div class="member-img" >
                <img src={props.img} class="img-fluid" alt="" style={{
                   
                   position: 'relative',
                  height:'20rem',
                  margin:'auto',
                  width:'16rem',
                  overflow:'hidden',
                  objectFit: 'cover',
                  borderRadius:'1rem',
                 
                
                }}></img>
              </div>
              <div class="member-info"  style={{
                
                padding: '30px 15px',
                textAlign: 'center',
                 boxShadow: '0px 2px 15px rgba(0,0,0, 0.1)',
                
                margin: '-50px 20px 0 20px',
                position: 'relative',
                borderRadius: '8px',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}>
                {/* <div class="social" style={{
                  
                 
                   boxSizing: 'border-box',
                   
                   color: 'rgb(26, 31, 36)',
                   display: 'flex',
                   
                   alignItems: 'center',
                   height: '36px',
                   justifyContent: 'center',
                   gap:'0.8rem',
                   left: '0px',
                   lineHeight: '24px',
                  pointerEvents: 'auto',
                   position: 'absolute',
                   right: '0px',
                   textAlign: 'center',
                   top: '-18px',
                  
                    
                
                  
               
                }}>
                  <a ><img src={icon1} alt="" /></a>
                  <a href=""><img src={icon2} alt="" /></a>
                  <a href=""><img src={icon3} alt="" /></a>
                  <a href=""><img src={icon4} alt="" /></a>
                </div> */}
                <h4>{props.Name}</h4>
                <span>{props.description}</span>
              </div>
            </div>
          </div>
   </>
  )
}

export default Cards