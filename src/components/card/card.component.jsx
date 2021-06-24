import React from "react";

import { ReactComponent as Fork } from "../../assets/svgs/fork.svg";
import { ReactComponent as Star } from "../../assets/svgs/star.svg";
import { ReactComponent as Circle } from "../../assets/svgs/circle.svg";

import "./card.styles.css";

const Card = ({ heading, user, info, forks, stars, issues }) => {
  return (
    <div className='card'>
      <div className='info'>
        <h2 className='heading'>{heading}</h2>
        <h3 className='user'> {user}</h3>
        <p className='card-info'>{info}</p>
      </div>
      <div className='stats'>
        <div className='forks'>
          <span>
            <Fork />
          </span>{" "}
          {forks} forks
        </div>
        <div className='stars'>
          <span>
            <Star />
          </span>
          {stars} stars
        </div>
        <div className='open'>
          {" "}
          <span>
            <Circle />
          </span>
          {issues} open issues
        </div>
      </div>
    </div>
  );
};

export default Card;
