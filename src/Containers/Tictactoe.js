import React from 'react';
import Aux from '../Hoc/Aux';
import Selector from '../Components/Selector/Selector';
import Board from '../Components/Board/Board'
class Tictactoe extends React.Component{

    state = {
        selection : {
            symbol : null,
            palyer : null
        },
        allSelected : false
    }

    selectionHandler(val,type){

        var selectionNew = {...this.state.selection}
        if(type == 'Symbol'){
             selectionNew.symbol = val;
        }
        if(type == 'Player'){
            selectionNew.player = val;
       }

       this.setState({
           selection : selectionNew
       })


    }
    

    render(){

        var gameBoard = (this.state.allSelected)?<Board></Board>:null;

        return(
            <Aux>
                <Selector clickHandler = {this.selectionHandler} {...this.state.selection} ></Selector>
                {gameBoard}
            </Aux>
        )
    }

}

export default Tictactoe;