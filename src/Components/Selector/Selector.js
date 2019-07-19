import React from 'react';
import Aux from '../../Hoc/Aux';
import Symbol from './Symbol';
import PlayerType from '../Selector/PlayerType'
const Selector = (props)=>{

    const symbolHandler = (val)=>{
        props.selectionHandler(val,'Symbol');
    }

    const playerTypeHandler = (val)=>{
        props.selectionHandler(val,'Player');
    }

    const  selectionBlock = (props.symbol == null && props.enemy == null )?
                        <Symbol clickHandler = {symbolHandler} ></Symbol>: 
                        <PlayerType clickHandler = {playerTypeHandler}></PlayerType>;

    return( 
        <Aux>
            {selectionBlock}
        </Aux>

    );

}

export default Selector;