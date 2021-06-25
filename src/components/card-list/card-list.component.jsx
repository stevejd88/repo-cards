import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ data }) => {
  console.log("card-list", data);

  return (
    <div className='card-container'>
      <h1>Repos</h1>
      <div className='card-list'>
        {data
          .filter((item, i) => {
            return i < 30;
          })
          .map((item) => {
            return (
              <Card
                key={item.id}
                heading={item.name}
                user={item.owner.login}
                info={item.description}
                forks={item.forks_count}
                stars={item.stargazers_count}
                issues={item.open_issues_count}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
