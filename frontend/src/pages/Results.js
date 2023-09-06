import React from 'react'
import ResultsSportsGrid from '../components/ResultsSportsGrid'
import AnimatedHeading from '../components/AnimatedHeading'

const Results = () => {
  return (
    <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>
          <AnimatedHeading heading="MATCH-RESULTS"/>

          <div className="row mb-5">
            <ResultsSportsGrid/>
          </div>
        </div>
    </div>      
  )
}

export default Results