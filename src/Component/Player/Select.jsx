import React from 'react';

const Select = ({buttonHandle,addPlayer,deletePlayerHandle,moneyBack}) => {
    return (
        <div className='mx-auto w-11/12'>
            <div className="my-12">
                {
                    addPlayer.map(player=>
                        <div className="border-2 rounded-xl my-4 p-3 flex justify-between items-center">
                            <div className="flex items-center space-x-6">
                                <div className=""><img className='h-20 w-20' src={player.image} alt="" /></div>

                                <div className="">
                                    <h1 className='text-xl'>{player.name}</h1>
                                    <h2 className='text-gray-500'>{player.role}</h2>
                                    <h2 className='text-gray-500'> BiddingPrice ${player.biddingPrice}</h2>
                                </div>
                            </div>
                            <div className="text-red-500">
                                <button onClick={()=>{
                                    deletePlayerHandle(player.playerId,player);
                                    moneyBack(player.biddingPrice)

                                }}><i class="fa-solid fa-trash-can"></i></button>
                            </div>

                        </div>
                    )
                }
            </div>
            <div className="mb-12">
                <button className='btn rounded-xl outline outline-[#E7FE29] outline-offset-4  border-none bg-[#E7FE29] hover:bg-[#E7FE29]' onClick={()=>buttonHandle('available')} >Add More Player</button>
            </div>
        </div>
    );
};

export default Select;