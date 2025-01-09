"use client"
import React from 'react'


function index() {
    return (
        <section className='grid place-content-center container my-4'>


            <div className="flex flex-col gap-5 w-full">
                <h1 className='underline'>Lista de pruebas del chequeo</h1>
                
               <a href="race/60" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>60 metros</a>
               <a href="race/80"  className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>80 metros</a>
               <a href="race/100" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>100 metros</a>
               <a href="race/110" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>110 metros</a>
               <a href="race/150" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>150 metros</a>
               <a href="race/300" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>300 metros</a>
               <a href="race/1500" className='hover:bg-zinc-800 text-2xl font-thin hover:font-medium w-full text-center'>1500 metros</a>
            </div>

        </section>
    )
}

export default index