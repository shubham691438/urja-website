import React from "react";
import Cards from "../components/Cards";
// import backgroundImage from "../assets/images/bg.jpg";
import _1 from "../assets/images/1.jpeg";
import _2 from "../assets/images/2.jpg";
import _3 from "../assets/images/3.jpeg";
import _4 from "../assets/images/4.jpg";
import _5 from "../assets/images/5.jpg";
import _6 from "../assets/images/6.jpg";
import _7 from "../assets/images/7.jpg";
import _8 from "../assets/images/8.jpeg";
import _9 from "../assets/images/9.jpeg";
import _10 from "../assets/images/10.jpeg";
import _11 from "../assets/images/11.jpeg";
import _12 from "../assets/images/12.jpeg";
import _13 from "../assets/images/13.jpeg";
import _14 from "../assets/images/14.jpeg";
import _15 from "../assets/images/15.jpeg";
import _16 from "../assets/images/16.jpeg";
import _17 from "../assets/images/17.jpeg";
import _18 from "../assets/images/18.jpeg";
// import logo from "../assets/images/logo.png";
import AnimatedHeading from "../components/AnimatedHeading";

function CoreTeam() {
  return (
    <div>
      <section id="team" class="team">
        <div>
          <div
            class="row gy-5 "
            style={{
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignContent: "center",
              backgroundColor: "rgb(34, 40, 49)",
              paddingTop: "100px",
            }}
          >
            <AnimatedHeading heading="OUR-TEAM" />
            <Cards img={_1} Name="Amol Sourav" description="App Head" />

            <Cards img={_2} Name="Prashant Raj" description="Event Head" />

            <Cards img={_3} Name="Abhinav Kumar" description="PR Head" />
            <Cards
              img={_4}
              Name="Anubhav"
              description="Joint Sports Secretary"
            />
            <Cards img={_5} Name="nitin kumar" description="Joint Secretary" />
            <Cards img={_6} Name="Aman Kumar" description="PR Head" />
            <Cards
              img={_7}
              Name="Sudhanshu Bharti"
              description="Executive Head"
            />

            <Cards img={_8} Name="Satish" description="Logistic Head" />

            <Cards img={_9} Name="Shravya" description="Event Head" />

            <Cards
              img={_10}
              Name="Ravindra Raj"
              description="Sports Secretary"
            />
            <Cards img={_11} Name="Nikita Sundi" description="Logistic Head" />
            <Cards img={_12} Name="Biswajit Murmu" description="Medical Head" />
            <Cards img={_13} Name="Kumar Abhinav" description="Medical Head" />
            <Cards
              img={_14}
              Name="Kuldeep Kumar "
              description="General Secretary"
            />
            <Cards
              img={_15}
              Name="Navya Shankar"
              description="Executive Head"
            />
            <Cards
              img={_16}
              Name="Avantika Tiwari"
              description="Creative Head"
            />
            <Cards img={_17} Name="Shubham Tiwary" description="App Head" />
            <Cards img={_18} Name="Anurag Mahanty" description="CA Head" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreTeam;
