import React from 'react'
import Header from '../components/header'
import { useState } from 'react'

const Home = () => {

    const [data, setData] = useState([

        {
            name: "Kenji Sual",
            pfp: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ex, error aperiam, delectus expedita ducimus eveniet itaque distinctio ea recusandae molestias? Omnis eius quae quas molestiae deleniti voluptas veritatis error!",

            name2: "Cheysss",
            pfp2: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
            description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ex, error aperiam, delectus expedita ducimus eveniet itaque distinctio ea recusandae molestias? Omnis eius quae quas molestiae deleniti voluptas veritatis error!"
        }
    ])

    const [pfp, setpfp] = useState(true)

    const newpfp = () => {
        setpfp(false)
    }

    const oldpfp = () => {
        setpfp(true)
    }

    return (
        <div>

            <Header />

            <div>

                {pfp ?
                    data.map((items, index) => {
                        return (

                            <div className='h-[100vh] w-[100%] flex justify-center items-center gap-10 bg-black'>
                                <img className='w-[500px] h-[500px] object-cover rounded-full' src={items.pfp} />
                                <div>
                                    <p className='text-5xl font-bold text-violet-500 '>{items.name}</p>
                                    <p className='w-[500px] mt-5 text-white'>{items.description}</p>
                                    <button onClick={newpfp} className='px-3 py-2 bg-violet-500 font-bold mt-4 rounded-xl text-black hover:bg-white'>Transform</button>
                                </div>
                            </div>
                        )
                    })
                    :
                    data.map((items, index) => {
                        return (

                            <div className='h-[100vh] w-[100%] flex justify-center items-center gap-10'>
                                <img className='w-[500px] h-[500px] object-cover rounded-full' src={items.pfp2} />
                                <div>
                                    <p className='text-5xl font-bold text-violet-500'>{items.name2}</p>
                                    <p className='w-[500px] mt-5'>{items.description2}</p>
                                    <button onClick={oldpfp} className='px-3 py-2 bg-violet-500 font-bold mt-4 rounded-xl text-white hover:bg-black'>Transform</button>
                                </div>
                            </div>
                        )
                    })


                }

            </div>

        </div>
    )
}

export default Home