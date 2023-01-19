import React from 'react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className='flex justify-start items-center h-16 bg-gradiente-to-r from bg-fuchsia-500 to-violet-400'>
            <div className='flex w-full justify-between m-4'>
                    <span className='sr-only'>Open main menu</span>
                    <Popover className='relative'>
                        <Popover.Button>
                            <Bars3Icon className='w-10 h-10 text-white'></Bars3Icon>
                        </Popover.Button>
                        <Popover.Panel className='absolute z-10 text-white'>
                            <div className='flex flex-col p-5 bg-gradiente-to-r from bg-fuchsia-500 to-violet-400'>
                                <Link to={"/"}>Home</Link>
                                <Link to={"/contact"}>Contact</Link>
                                <Link to={"/login"}>Login</Link>
                                <Link to={"/Register"}>Register</Link>
                            </div>

                        </Popover.Panel>
                    </Popover>
                    
                    
                
                    <p className='text-2xl text-white'>Purpose</p>
                    <div className='flex justify-start items-center'>
                        <BellIcon className='w-8 h-8 text-white'></BellIcon>
                        <div className='flex justify-center rounded-full w-10 h-10 bg-white'>
                            <p className='text-2xl text-gray-200 mt-1'>U</p> 
                        </div>
                    </div>
                 
                

            </div>

        </div>
        
    )
};

export default Menu;

