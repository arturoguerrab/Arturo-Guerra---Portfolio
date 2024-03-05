import React, { useState } from 'react'

const Widget = ({sm,md,position, children}) => {
    
    const small ={
        sm:' col-span-1 row-span-1',
        md:' md:col-span-1',
        lg:' lg:col-span-1',
        xl:' xl:col-span-1',
        xxl:' 2xl:col-span-1'
    }
    const large ={
        sm:' col-span-2 row-span-1',
        md:' md:col-span-2',
        lg:' lg:col-span-2',
        xl:' xl:col-span-2',
        xxl:' 2xl:col-span-2'
    }
    const medium ={
        sm:' col-span-1 row-span-2',
        md:' md:col-span-1',
        lg:' lg:col-span-1',
        xl:' xl:col-span-1',
        xxl:' 2xl:col-span-1'
    }
    const big ={
        sm:' col-span-2 row-span-2',
        md:' md:col-span-2',
        lg:' lg:col-span-2',
        xl:' xl:col-span-2',
        xxl:' 2xl:col-span-2'
    }

    return (
        
        
        <div className={'rounded-3xl ' + position}>
            {children}
        </div>
    )
}

export default Widget