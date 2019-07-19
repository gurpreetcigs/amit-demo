import React from 'react';

const PlayerType = (props)=>{

    return( 
        <div id="enemy-screen" className="center ">
        <h2>Play against:</h2>
        <button type="button" id="choose-human" className="choose">Human</button>
        <button type="button" id="choose-cpu" className="choose">CPU</button>
            </div>);

}

export default PlayerType;