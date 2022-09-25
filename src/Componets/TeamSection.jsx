import React from "react";
import TitleSection from "./TitleSection";
import TeamCard from "./TeamCard";
import team_1 from "../Assets/images/team-1.png";
import team_2 from "../Assets/images/team-2.png";
import team_3 from "../Assets/images/team-3.png";
import team_4 from "../Assets/images/team-4.png";
import team_5 from "../Assets/images/team-5.png";
import team_6 from "../Assets/images/team-6.png";
 

const ListOfTeam = [
  {
    name: "Steeve ",
    position: "Founder",
    image: team_1,
  },
  {
    name: "James",
    position: "Head of marketing",
    image: team_2,
  },
  {
    name: "Jeff        ",
    position: "Developer",
    image: team_3,
  },
  {
    name: "Steeve",
    position: "Founder",
    image: team_4,
  },
  {
    name: "James",
    position: "Head of marketing ",
    image: team_5,
  },
  {
    name: "Jeff",
    position: "Developer",
    image: team_6,
  },
];

function TeamSection() {

  return (
    <div className=" py-14 overflow-hidden" id="ourTeam">
      <div className="container">
        {/* --img red banner-- */}
        <TitleSection title="Our Team" />
        {/*--make loop of teams--*/}
        {/* <img src={ImageBanner} alt="" className="mb-10"/> */}
        <div className="flex flex-wrap justify-between items-center">
          {ListOfTeam?.map((member, index) => (
            <TeamCard member={member} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
