import Link from 'next/link'
import React from 'react'

const Memberss = async() => {

        await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        resolve(true)
                },4000)
        })
       
        return (
                <div className='border p-[10rem] w-[30rem] border-black'>
                        Memberss
                        <br />
                        <Link href='/salaries'>Go to Salaries</Link>
                </div>
        )
}

export default Memberss