
import React from 'react'

type Props = {
        children: React.ReactNode,
        team: React.ReactNode,
        comments: React.ReactNode
}

const MembersLayout = ({children,team,comments}: Readonly<Props>) => {

        return (
                <div className="flex flex-col w-full min-h-screen  gap-4 bg-blue-100 p-4">
                        <div className="text-center">
                                {children}
                        </div>
                        <div className="flex gap-2">
                           <div>
                                {team}
                           </div>
                               <div>
                                 {comments}
                               </div>
                        </div>
                </div>
        )
}

export default MembersLayout