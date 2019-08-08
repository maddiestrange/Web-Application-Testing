import React, { useState } from 'react';
import Dashboard from './Dashboard';

export default function Display() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <>
        <p>Ball Count: {balls}</p>
        <p>Strike Count: {strikes}</p>
        <Dashboard strike={strike}
                    ball={ball}
                    foul={foul}
                    hit={hit}/>
        </>
    );
        function strike() {
            setStrikes(strikes + 1);
            if(strikes > 2){
                setStrikes(0);
            }
        }

        function ball() {
            setBalls(balls + 1);
            if(balls === 4){
                setBalls(0);
            }
        }

        function foul() {
            if(strikes < 2){
                setStrikes(strikes + 1);
            }
            }

        function hit(){
            setStrikes(0);
            setBalls(0);
        }
}