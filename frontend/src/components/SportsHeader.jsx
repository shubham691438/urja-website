import React from 'react'
import '../assets/styles/sports.css'

const SportsHeader = () => {
    const letters = ['C', 'R', 'I', 'C', 'K', 'E', 'T'];

    return (
        <>
        <div className="row mb-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="waviy">
                {letters.map((letter, index) => (
                <span key={index} style={{ '--i': index + 1 }}>
                    {letter}
                </span>
                ))}
            </div>
          </div>
        </div>

        <div className="row mb-5 pt-5">
          <div className="col-lg-12 d-flex flex-column justify-content-center" 
          style={{
                    padding: "16px 20px",
                    color: "#fff",
                  }}>
            <h5 
            style={{
                color:"#ee1e46",
                marginBottom:"20px",
                fontWeight:"bold"
                

             }}
        > "You don’t win or lose the games because of the 11 you select. You win or lose with that those 11 do on the field.” – Rahul Dravid</h5>
            <p>Cricket is a super popular sport played with a bat and ball. This game is played by two teams of 11 players each. It's all about scoring runs and getting the other team out. It is played on a pitch in a well-maintained field for the same purpose. There are different formats like Test matches and One Day Internationals. It's a game full of excitement, strategy, and amazing moments.</p>
          </div>
        </div>
        
      </>
    );
}

export default SportsHeader