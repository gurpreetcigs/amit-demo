import React from 'react';

const Symbol = (props)=>{

    const clickHandler = (e)=>{
       props.clickHandler(e.target.value)
    }

    return( 
        <div id="intro-screen" className="center">
        <h2>Choose your symbol:</h2>
        <button onClick={clickHandler} type="button" id="choose-x" className="choose" value="X" >X</button>
        <button onClick={clickHandler} type="button" id="choose-o" className="choose" value="O" >O</button>
      </div>);

}

export default Symbol;