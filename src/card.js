import React from 'react';

const Card=(props)=>{
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bm2 shadow-5">
      <img alt="hi" src={`https://robohash.org/${props.id}`} width="200px" height="200px" />
      <div className="tc">
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
