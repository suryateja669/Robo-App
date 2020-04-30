import React from 'react';


const Searchbox=({searchChange})=>{
  return(
    <div>
    <input className="bg-light-green dib br1 pa1 ma1 grow bm1 shadow-2 tc" type="Searchbox" placeholder="Search robots" onChange={searchChange}/>
    </div>
  );
}

export default Searchbox;
