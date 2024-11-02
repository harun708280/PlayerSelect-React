import React, { useEffect, useState } from 'react';
import ShowPlayer from '../Show/ShowPlayer';

const PlayerSection = ({ChoosePlayerHandler}) => {
    const [players,setPlayers]=useState([])
    
    useEffect(()=>{
        const playerDataFetch=async ()=>{
            const response=await fetch(`playerdata.json`)

            const data=await response.json()
            setPlayers(data)
            
        }
        playerDataFetch()
        

    },[])
    return (
        <div>
            <ShowPlayer key={players.playerId}  players={players} ChoosePlayerHandler={ChoosePlayerHandler} ></ShowPlayer>
        </div>
    );
};

export default PlayerSection;