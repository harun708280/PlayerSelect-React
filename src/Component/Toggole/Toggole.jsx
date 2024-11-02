import React from 'react';

const Toggole = ({buttonHandle,button,addPlayer}) => {
    return (
        <div className='flex  justify-between items-center w-11/12 mx-auto mt-12'>
            <div className=" text-sm lg:text-3xl font-bold">
                <h1>
                    {button.status === 'available' 
                    ? 'Available Players' 
                    : `Selected Player ${addPlayer.length}/6`}
                </h1>
                </div>

            <div className="text-xl -space-x-1 flex gap-2">
                <button onClick={()=>buttonHandle('available')} className={`${button.status==='available'?'btn bg-[#E7FE29] hover:bg-[#E7FE29]':'btn'}`}>Available</button> <button className={`${button.status==='selected'?'btn bg-[#E7FE29] hover:bg-[#E7FE29]':'btn hover:bg-none'}`} onClick={()=>buttonHandle('selected')}>Selected ({addPlayer.length})</button>
            </div>
        </div>
    );
};

export default Toggole;