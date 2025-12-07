import React from 'react'


type CP = {
        children?:React.ReactNode;
        sidebar?:React.ReactNode;
}
const MusicLayout = ({children,sidebar}:CP) => {
        return (
                <div className='flex gap-4'>
                     {sidebar}
                       <div>

                       </div>
                        {children}
                        
                </div>
        )
}

export default MusicLayout