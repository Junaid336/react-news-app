import React from 'react'

export const Slide = ({item}) => {
  let imgs = item.media[0]["media-metadata"];
    
  return (
    <div className='h-full w-full relative'>
        <img src={imgs[imgs.length -1].url} className='h-full w-full object-cover' />
        <div className='absolute h-full w-full bg-black bg-opacity-40 top-0 left-0 text-left text-white'>
            <div className='p-6 absolute bottom-0 left-0'>
                <p className='text-sm space-x-8 font-bold mb-1'>
                    <span className='underline'>
                        {item.section}
                    </span>
                    <span>
                        {item.published_date}
                    </span>
                </p>
                <h3 className='text-lg leading-6'>
                {item.byline}
                </h3>
                <h2 className='text-2xl font-semibold leading-8 hover:underline my-2'>
                    <a href={item.url} target='blank'>
                        {item.title}
                    </a>
                </h2>
            </div>
        </div>
    </div>
  )
}
