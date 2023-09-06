import React from 'react'
import Cards from '../components/Cards';
import backgroundImage from "../assets/images/bg.jpg";
import amol from "../assets/images/Amol_sourav.jpeg"
import prashant from "../assets/images/prashant.jpg"
import abhinav from "../assets/images/abhinav.jpeg"
import anubhav from "../assets/images/anubhavImg.jpg"
import nitin from "../assets/images/nitin.jpg"
import aman from "../assets/images/aman.jpg"
import sudhanshu from "../assets/images/sudhanshu.jpg"
import satish from "../assets/images/satish.jpeg"
import shravya from "../assets/images/shravya.jpeg"
import ravindra from "../assets/images/ravindraRajImg.jpeg"
import nikita from "../assets/images/nikita.jpeg"
import biswajit from "../assets/images/biswajit.jpeg"
import kuldeep from "../assets/images/kuldeep.jpeg"
import kumar from "../assets/images/kumar.jpeg"
import navya from "../assets/images/navya.jpeg"
import avantika from "../assets/images/avantika.jpeg"
import shubham from "../assets/images/shubham.jpeg"
import anurag from "../assets/images/anurag.jpeg"
import logo from "../assets/images/logo.png";
function CoreTeam() {

  return (

<<<<<<< Updated upstream
    <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1549896869-ca27eeffe4fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)',
    }}>
      <section id="team" class="team" >
        

          <div
            className="hero overlay "



          >
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-5 ml-auto">
                  <h1 className="text-white">Our Core Team Members</h1>



                </div>
              </div>
            </div>
          </div>
          <div >
            <div class="row gy-5" style={{
              margin: "auto",
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignContent: 'center',
             
                backgroundColor: 'white',
            


=======
    <div >

      <section id="team" class="team" style={{ backgroundColor: "rgb(34, 40, 49)", }} >
        <div >
          <div class="row gy-5 container " style={{
            margin: "auto",
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'center',
            backgroundColor: "rgb(34, 40, 49)",
            paddingTop: "100px"

          }}>
            <AnimatedHeading heading="OUR-TEAM" />
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
>>>>>>> Stashed changes
            }}>
              <Cards
                img={ravindra}
                Name="Ravindra Raj"
                description="sports secretary" />
              <Cards
                img={anubhav}
                Name="Anubhav"
                description="joint sports secretary" />
            </div>
            <Cards
              img={kuldeep}
              Name="kuldeep kumar"
              description="General secretary"
            />


            <Cards
              img={nitin}
              Name="nitin kumar"
              description="joint secretary"
            />

            <Cards
              img={sudhanshu}
              Name="Sudhanshu bharti"
              description="executive head"
            />
            <Cards
              img={navya}
              Name="Navya shankar"
              description="Executive head" />

            <Cards
              img={prashant}
              Name="prashant raj"
              description="event head" />

            <Cards
              img={shravya}
              Name="Shravya"
              description="event head" />

            <Cards
              img={satish}
              Name="Satish"
              description="logistic head" />





            <Cards
              img={nikita}
              Name="Nikita sundi"
              description="logistic head" />

            <Cards
              img={biswajit}
              Name="Biswajit Murmu"
              description="medical head"
            />
            <Cards
              img={abhinav}
              Name="Kumar abhinav"
              description="medical head"
            />

            <Cards
              img={amol}
              Name="Amol sourav"
              description="App head" />


            <Cards
              img={shubham}
              Name="Shubham tiwary"
              description="App head"
            />
            <Cards
              img={avantika}
              Name="avantika tiwari"
              description="creative head"
            />

            <Cards
              img={abhinav}
              Name="Abhinav Kumar"
              description="pr head" />


            <Cards
              img={aman}
              Name="aman kumar"
              description="pr head"
            />









            <Cards
              img={anurag}
              Name="Anurag Mahanty"
              description="CA head"
            />








          </div>
        </div>


      </section>


    </div>
  )
}

export default CoreTeam