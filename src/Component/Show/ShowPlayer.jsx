import React from 'react';

const ShowPlayer = ({players,ChoosePlayerHandler,addplayerHandelar}) => {
    const {playerId,name,country,image,role,battingType,bowlingType,biddingPrice}=players
    return (
        <div>
            <div className="w-11/12  mx-auto grid grid-cols-1 gap-4 my-12 mb-28 lg:grid-cols-3">
                {
                    players.map(player=>
                        <div className="card p-4  rounded-xl border-2 bg-base-100  shadow-2xl">
                    <figure className='bg-[#E7FE29] rounded-xl bg-opacity-50 '>
                        <img className='     w-full h-72 '
                        src={player.image}
                        alt="Shoes" />
                    </figure>
                    <div className="mt-4 space-y-3">
                        <h1 className=' text-xl space-x-4'><span ><i class="fa-solid fa-user"></i></span> <span>{player.name}</span> </h1>
                        <div className="flex justify-between ">
                            <h1 className='space-x-2 text-gray-400'><span><i class="fa-solid fa-flag"></i></span> <span>{player.country}</span></h1>
                            <h2>{player.role}</h2>

                        </div>
                        
                        <div className="border-b-2"></div>
                        <div className="flex justify-between">
                            <h1>{player.battingType}</h1>
                            <h1 className='text-gray-400'>{player.bowlingType}</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Price ${player.biddingPrice} </h1>
                            <button className='btn text-xl font-bold hover:bg-[#E7FE29] ' onClick={()=>{ChoosePlayerHandler(player.biddingPrice,player);addplayerHandelar(player)}}>Choose Player</button>
                        </div>
                        
                    </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowPlayer;