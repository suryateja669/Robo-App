import React from 'react';
import Card from './card.js';


const RoboList=({Robots})=>{
  return (
    <div>
    {
      Robots.map((it,i)=>{
        return (
        <Card key={Robots[i].id} name={Robots[i].name} id={Robots[i].id} email={Robots[i].email} />
);
    }
    )
    }
    </div>
  );
}


export default RoboList;
