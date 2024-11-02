import React, { useState } from 'react';
import logo from './logo.png'
import banner from './banner-main.png'
import  bg from './bg-shadow.png'
const Navber = ({creditHandle,credit}) => {
    
    
    

    return (
        <div>
            <div className="w-11/12 mx-auto lg:fixed lg:top-0 left-0 right-0 z-50 bg-white bg-opacity-40">
                    <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="  text-xl"><img src={logo} alt="" /></a>
                    </div>
                    <div className="block lg:hidden ">
                    
                    <button className='border p-4 rounded '><span>{credit} Coin</span> <span className='text-orange-500'><i class="fa-solid fa-sack-dollar"></i></span></button>
                    </div>
                    <div className="flex-none hidden lg:block ">
                        
                        <ul className="menu space-x-3 menu-horizontal px-1 text-lg">
                        <li className='text-[#131313B3]'><a>Home</a></li>
                        <li className='text-[#131313B3]'><a>Fixture</a></li>
                        <li className='text-[#131313B3]'><a>Teams</a></li>
                        <li className='text-[#131313B3]'><a>Schedules</a></li>
                        <li ><button className='border'><span>{credit} Coin</span> <span className='text-orange-500'><i class="fa-solid fa-sack-dollar"></i></span></button></li>

                        
                        </ul>
                    </div>
                    
                    </div>
            </div>

            <div className="  bg-cover bg-black lg:mt-32 rounded-xl w-11/12 mx-auto" style={{
                    backgroundImage: `url(${bg})`,  
                    backgroundSize: 'cover',        
                    backgroundPosition: 'center'    
                }}>
            <div className=" py-12 ">
                <div className="flex justify-center"><img className='' src={banner} alt="" /></div>
                <div className="text-center">
                <h1 className='text-[#FFFFFF] text-2xl lg:text-3xl my-5 font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className='text-xl text-gray-400'>Beyond Boundaries Beyond Limits</h4>
                <div className="my-4">
                <button onClick={creditHandle} className='btn rounded-xl outline outline-[#E7FE29] outline-offset-2  border-none bg-[#E7FE29] hover:bg-[#E7FE29]'>Claim Free Credit</button>
                
                </div>
                </div>

            </div>
                

            </div>
            
        </div>
    );
};

export default Navber;