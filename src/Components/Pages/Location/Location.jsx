import React from 'react'

const Location = () => {
  return (
    <div className='container mx-auto mt-16 mb-10 p-6'>
        <div className='flex justify-center'>
            <h1 className='text-3xl font-display font-bold'>Orchid Nirvana 3.0 Location</h1>
        </div>
        <div className='flex justify-center mt-8'>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="990" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=Survey No. 25,26,27 Upparhalli village Kasba hobli, Devanahalli, Bengaluru, Karnataka 562110&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location
