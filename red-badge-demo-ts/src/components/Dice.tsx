import * as React from 'react';
import dice1 from "./pictures/dice1.png";
import dice2 from "./pictures/dice2.png";
import dice3 from "./pictures/dice3.png";
import dice4 from "./pictures/dice4.png";
import dice5 from "./pictures/dice5.png";
import dice6 from "./pictures/dice6.png";

export interface DiceProps {
    playerName: string;
    diceRoll: number;
}
 
const Dice: React.SFC<DiceProps> = (props) => {
    let diceToShow = dice6;
    switch(props.diceRoll){
        case 1:
            diceToShow = dice1;
            break;
        case 2:
            diceToShow = dice2;
            break;
        case 3:
            diceToShow = dice3;
            break;
        case 4:
            diceToShow = dice4;
            break;
        case 5:
            diceToShow = dice5;
            break;
        default:
            diceToShow = dice6;
    }

    return ( 
        <div className="dice">
            <p>{props.playerName}</p>
            <img src={diceToShow} alt="" />
        </div>
     );
}
 
export default Dice;