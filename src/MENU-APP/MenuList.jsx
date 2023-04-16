import React from 'react'

const MenuList = ({itemArray}) => {
  return (
    <div className='grid px-4 md:grid-cols-3 md:max-w-[1240px] md:mx-auto'>
    {itemArray.map((item) => {
      return(
        <div key={item.id} className="">
          <img src={item.img} alt="" className='w-full h-[300px] rounded md:w-[300px] md:h-[300px]'/>
          <div className='md:w-[300px]'>
            <div className='flex justify-between items-center mt-6 mb-6'>
            <p className="font-bold">{item.title}</p>
            <button className='bg-[orange] px-2 text-white rounded'>${item.price}</button>
            </div>
            <p className='mb-10 text-[gray] md:max-w-sm'>{item.desc}</p>
          </div>
         
        </div>
      )
    })}
    </div>
  )
}

export default MenuList