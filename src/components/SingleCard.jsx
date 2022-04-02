import React from 'react'

function SingleCard({title='Name', value='false', setvalue}) {
  return (
    <>
    <div className='p-2 bg-gray-200 w-[40%] flex grow  justify-start items-center mb-1 min-w-[300px]'>
        <input type="checkbox" className='mr-3 border-none h-4 w-4 ' checked={value} onChange={(e)=>setvalue(!value)}/>
        <p>{title}</p>
    </div>
    </>
  )
}

export default SingleCard