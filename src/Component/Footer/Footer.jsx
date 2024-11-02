import React, { useEffect, useState } from 'react';
import footerLog from '../Header/logo-footer.png'
import fbg from '../Header/bg-shadow.png'
import { toast } from 'react-toastify';
import { addEmailLS, getSubscribeLS } from '../Utilits/LoacStore';

const Footer = () => {
    const [email,setEmail]=useState('')
    console.log(email);
    const [subscribe,setSubscribe]=useState('')
    
    const subscribeHandler=()=>{
        
        if (!email.includes('gmail.com') || email === '') {
            toast.error('not valid email',{
                position:'top-center',
                autoClose:3000
            })
        }
        else{
            if (!subscribe.includes(email)) {
            setSubscribe(email)
            addEmailLS(email)
            toast.success(' Successfully subscribed!')
            
        }
        else{
            toast.warning('Sorry This Email Already Use',{
                position:'top-center',
                autoClose:3000
            })
        }
        }

        
        
        
        

    }
    console.log(subscribe);
    

    useEffect(()=>{
        const see=getSubscribeLS()
        const data=see.length>0?see:''
        
        
        setSubscribe(data)
    },[])

   
    return (
        <div className=' bg-[#06091A] absolute w-full mt-32 lg:mt-20'>
            <div className="pt-56 mx-auto w-11/12">
                <div className="flex justify-center" ><img src={footerLog} alt="" /></div>
                <div className="">
                <footer className="footer lg:flex  lg:justify-between mt-4 text-base-content lg:p-10">
                    <nav className='w-full'>
                        <h6 className=" text-xl text-white">About Us</h6>
                        <p className='text-gray-500'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    
                    <nav className='w-full'>
                        <h6 className=" text-white text-xl">Quick Links</h6>
                        <ul className='text-gray-500'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div className="">
                        <h6 className="text-xl text-white ">Subscribe</h6>
                        <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-gray-500">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item" />
                            <button
                            className="btn bg-gradient-to-r from-pink-500 to-[#E7FE29] border-none rounded-[12px] rounded-l-none"
                            
                            >
                            Subscribe
                            </button>


                        </div>
                        </fieldset>
                   </div>
                    </footer>
                </div>
            </div>

            <div className="absolute -top-40  w-11/12 lg:w-8/12 left-1/2 transform -translate-x-1/2 mx-auto">
                <div className="   mx-auto p-5 bg-white bg-opacity-70 rounded-xl border-2 border-white"

                
                
                >
                    <div className=" h-80 bg-white bg-cover rounded-2xl flex flex-col justify-center items-center "
                    style={{
                        backgroundImage: `url(${fbg})`,  
                        backgroundSize: 'cover',        
                        backgroundPosition: 'center'    
                    }} >

                        {
                            subscribe?(<div>
                                <h2 className="text-2xl mt-12 font-bold text-center">Welcome back!</h2>
                                <p className="py-4 text-gray-500 text-center">Thanks for subscribing with  {subscribe}</p>
                              </div>):(<div>
                                    <h2 className='lg:text-2xl text-center mt-12 font-bold'>Subscribe to our Newsletter</h2>
                                    <p className='py-4 text-center text-gray-500'>Get the latest updates and news right in your inbox!</p>
                                    
                                    <div  className=" flex lg:space-x-4 mb-14">
                                        <input    onChange={(e)=>setEmail(e.target.value)}  type="text" className='py-3 w-44 lg:w-[39rem] px-5 rounded-xl border-2' placeholder='Enter your email' />


                                        <button  onClick={subscribeHandler} className="btn bg-gradient-to-r from-pink-500 to-[#E7FE29] border-none  rounded-xl text-bold">
                                                Subscribe
                                        </button>

                                    </div>

                              </div>)
                        }
                        

                </div>

                </div>
            </div>

            <div className="border-b-2 border-gray-500 mt-3 "></div>
            <p className='text-center py-5'>@2024 Your Company All Rights Reserved.</p>

        </div>
    );
};

export default Footer;