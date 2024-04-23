import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = () => {

    const [bg, setbg] = useState(true)

    const black = () => {
        setbg(false)
    }

    const white = () => {
        setbg(true)
    }

    return (
        <div>

            {bg ?

                <div className='bg-black p-4 fixed top-0 left-0 w-full'>
                    <nav className='flex justify-around text-white items-center'>
                        <div>
                            <p className='text-2xl font-bold cursor-pointer'>Cheysss<span className='text-violet-500'>Dev</span></p>
                        </div>
                        <div className='flex gap-5'>
                            <Link to={"/"} className='hover:text-violet-500'>Home</Link>

                            <Link to={"/about"} className='hover:text-violet-500'>About</Link>

                            <Link to={"/contact"} className='hover:text-violet-500'>Contact</Link>
                        </div>
                        <div>
                            <i onClick={black} class="fa-solid fa-circle-half-stroke cursor-pointer hover:text-violet-500"></i>
                        </div>
                    </nav>
                </div>

                :

                <div className='bg-slate-300 p-4 fixed top-0 left-0 w-full'>
                    <nav className='flex justify-around text-black items-center'>
                        <div>
                            <p className='text-2xl font-bold cursor-pointer'>Cheysss<span className='text-violet-500'>Dev</span></p>
                        </div>
                        <div className='flex gap-5'>
                            <Link to={"/"} className='hover:text-violet-500'>Home</Link>

                            <Link to={"/about"} className='hover:text-violet-500'>About</Link>

                            <Link to={"/contact"} className='hover:text-violet-500'>Contact</Link>
                        </div>
                        <div>
                            <i onClick={white} class="fa-solid fa-circle-half-stroke cursor-pointer hover:text-violet-500"></i>
                        </div>
                    </nav>
                </div>
            }



        </div>
    )
}

export default Header
