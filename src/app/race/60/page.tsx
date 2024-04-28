import React from 'react'
import times from '../tiempos.json'

function index() {
    return (
        <section className=' container'>
            <div>
                <h1 className='font-bold text-2xl text-center'>60 metros Planos</h1>
            </div>

            <article className='flex flex-col lg:flex-row gap-12'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
                <h3 className='font-bold'>Masculino</h3>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                    <thead className="text-xs text-gray-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-[9px] md:text-sm">
                                Lugar
                            </th>
                            <th scope="col" className="px-6 py-3 text-[9px] md:text-sm">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Apellido

                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Marca
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Edad
                                </div>
                            </th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {times.filter(athlete => athlete['60mts']&& athlete.genero === 'M').sort((a, b) => a['60mts'] - b['60mts']).map((athlete, index) => (
                            <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">

                                <th scope="row" className={`px-6 py-4 font-extrabold  whitespace-nowrap  ${index === 0 ? 'text-orange-300 dark:text-yellow-300' : 'text-gray-500'} ${index === 1 ? 'text-zinc-300 dark:text-zinc-200' : 'text-gray-500'} ${index === 2 ? 'text-orange-300 dark:text-orange-400' : 'text-gray-500'}`}>
                                    {index + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                                    {athlete.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {athlete.apellido}
                                </td>
                                
                                <td className="px-6 py-4">
                                    {athlete['60mts']?.toString()}
                                </td>
                                <td className="px-6 py-4">
                                    {athlete.Grupo}
                                </td>
                            
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
            <h3 className='font-bold '>Femenino</h3>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-[9px] md:text-sm">
                                Lugar
                            </th>
                            <th scope="col" className="px-6 py-3 text-[9px] md:text-sm">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Apellido

                                </div>
                            </th>
                           
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Marca
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center text-[9px] md:text-sm">
                                    Edad
                                </div>
                            </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {times.filter(athlete => athlete['60mts'] && athlete.genero === 'F').sort((a, b) => a['60mts'] - b['60mts']).map((athlete, index) => (
                            <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">

                                <th scope="row" className={`px-6 py-4 font-extrabold  whitespace-nowrap  ${index === 0 ? 'text-orange-300 dark:text-yellow-300' : 'text-gray-500'} ${index === 1 ? 'text-zinc-300 dark:text-zinc-200' : 'text-gray-500'} ${index === 2 ? 'text-orange-300 dark:text-orange-400' : 'text-gray-500'}`}>
                                    {index + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                                    {athlete.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {athlete.apellido}
                                </td>
                               
                                <td className="px-6 py-4">
                                    {athlete['60mts']?.toString()}
                                </td>
                                 <td className="px-6 py-4">
                                    {athlete.Grupo}
                                </td>
                           
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

            </article>

        </section>
    )
}

export default index