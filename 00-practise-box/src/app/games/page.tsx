import React from 'react'

const Games = async () => {

       await new Promise(resolve => {
          console.log("loading game data..."      )
                setTimeout(()=>{
                        resolve("game loading...")
                }, 2000)
       })
        return (
                <div className='min-h-screen p-10'>Games</div>
        )
}

export default Games