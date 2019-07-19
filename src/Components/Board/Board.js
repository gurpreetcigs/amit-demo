import React from 'react';

const Board = ()=>{
    return (
        <div id="game-screen" className="center ">
          
          <table className="center">
            <tbody>
            <tr>
              <td>
                <button type="button" className="cell" id="cell00"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell01"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell02"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" className="cell" id="cell10"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell11"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell12"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button" className="cell" id="cell20"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell21"></button>
              </td>
              <td>
                <button type="button" className="cell" id="cell22"></button>
              </td>
            </tr>
            </tbody>
          </table>
          <button type="button" id="restart">Restart</button>
          <div></div>
        </div>
    );
}

export default  Board;