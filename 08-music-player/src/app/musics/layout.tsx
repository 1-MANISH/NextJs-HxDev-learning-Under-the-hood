import React from 'react'

type CP = {
        children?:React.ReactNode;
        sidebar?:React.ReactNode;
        songs?:React.ReactNode;
        player?:React.ReactNode;
}
const MusicLayout = ({children,sidebar,songs,player}:CP) => {
        return (
                <div className='flex gap-4'>

                        {sidebar} 

                        <div className='flex-1 p-6 '>
                             
                                {songs}
                                   {player}
                        </div>
                        
                        {children} 
                        
                </div>
        )
}

export default MusicLayout