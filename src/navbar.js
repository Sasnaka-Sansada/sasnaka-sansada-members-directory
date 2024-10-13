import React from 'react';
import arrow from './assests/navbar/arrow.png';
import logo from './assests/navbar/sasnaka.png';
import internet from './assests/navbar/internet.png';

function NavBar() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-2 shadow appearance-none border rounded">
        <div className='flex flex-row ml-4'>
          <div className='mr-4'>
            <img src={logo} className='h-10 w-30'></img>
          </div>
          <div className='border border-black'></div>
          <div className='flex justify-center items-center ml-6'>
            <div className='text-xl font-semibold'><p>MEMBERS DIRECTORY</p></div>
          </div>
        </div>
        <div className='flex flex-row mr-6'>
          <div className='m-2'>
            <a href="#" class="text-center inline-block w-50 text-sm px-4 py-3 leading-none border rounded text-white border-blue bg-blue-500 mt-4 lg:mt-0">
              <div className='flex flex-row justify-around'>
                <div className='mr-2'>
                  <p>Visit Website</p>
                </div>
                <div>
                  <img src={internet} alt="Arrow" className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
          <div className='m-2'>
            <a href="#" class="text-center inline-block w-50 text-sm px-4 py-3 leading-none border rounded text-white border-black bg-black mt-4 lg:mt-0">
              <div className='flex flex-row justify-around'>
                <div className='mr-2'>
                  <p>Become a Volunteer</p>
                </div>
                <div>
                  <img src={arrow} alt="Arrow" className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>)
  }

export default NavBar;