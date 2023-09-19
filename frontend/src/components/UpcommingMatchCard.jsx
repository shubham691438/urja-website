import React from 'react'
import GetBranchIcon from '../assets/functions/GetBranchIcon'

// import logo1 from "../assets/images/logo_1.png";
// import logo2 from "../assets/images/logo_2.png";
// import logo3 from "../assets/images/logo_3.png";
// import logo4 from "../assets/images/logo_4.png";

const UpcommingMatchCard = ({ sport, gender, team1Name, team2Name, matchTitle, date,time,location }) => {

    // Get the image URL based on the passed key
  const imageUrl1 = GetBranchIcon(team1Name);
  const imageUrl2 = GetBranchIcon(team2Name);

  // Capitalize the first letter of gender and matchTitle
  const capitalizedGender = gender?gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase():"";
  const capitalizedMatchTitle = matchTitle?matchTitle.charAt(0).toUpperCase() + matchTitle.slice(1).toLowerCase():"";

  // Convert team names to uppercase and store the result
  const upperCaseTeam1Name = team1Name ? team1Name.toUpperCase() : "TEAM A";
  const upperCaseTeam2Name = team2Name ? team2Name.toUpperCase() : "TEAM B";

    //convert date to word
  const formatDateToWord = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const formattedDate = formatDateToWord(date);

  return (
    <div className="col-lg-6 mb-4">
        <div className="bg-light_p-4">
            <div className="widget-body">
            <div className="widget-vs">
                <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                <div className="team-1 text-center">
                    <img src={imageUrl1} alt="Match" />
                    <h3>{upperCaseTeam1Name}</h3>
                </div>
                <div>
                    <span className="vs">
                    <span>VS</span>
                    </span>
                </div>
                <div className="team-2 text-center">
                    <img src={imageUrl2} alt="Match" />
                    <h3>{upperCaseTeam2Name}</h3>
                </div>
                </div>
            </div>
            </div>

            <div className="text-center widget-vs-contents mb-4">
            <h4>{(capitalizedGender||"" )+ " " + (capitalizedMatchTitle||"")}</h4>
            <p className="mb-5">
                <span className="d-block">{formattedDate||" "}</span>
                <span className="d-block">{time ||" "}</span>
                <strong className="text-primary">{location ||" "}</strong>
            </p>
            </div>
        </div>
    </div>
  )
}

export default UpcommingMatchCard