import React from 'react'
import master from '../../../images/mstrplan.png'

const MasterPlan = () => {
  return (
    <div className='container mx-auto mt-16 mb-10 p-6'>
        <div className='flex justify-center'>
            <h1 className='text-3xl font-display font-semibold text-center'>Orchid Nirvana 3.0 Master Plan</h1>
        </div>
        <div className='flex justify-center mt-8'>
            <img className="h-auto max-w-full blur-lg" src={master}></img>
        </div>
    </div>
  )
}

export default MasterPlan
