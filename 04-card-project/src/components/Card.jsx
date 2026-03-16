import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log("Card component rendering");
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo}></img>
        <button>
          {" "}
          Save <Bookmark />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.postingDate} </span>
        </h3>
        <h2>{props.jobTitle}</h2>
        <div>
          <button>{props.jobType}</button>
          <button>{props.jobLevel}</button>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.hourlyCharge}</h3>
          <h4>{props.location}</h4>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
