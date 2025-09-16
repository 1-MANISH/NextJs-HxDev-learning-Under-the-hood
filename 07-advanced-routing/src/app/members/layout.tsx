import React, { ReactNode } from 'react'

import Members from '@/components/Members'
import Comments from '@/components/Comments'

const MembersLayout = ({children}:{children:ReactNode}) => {

        return (
                <div>
                        <h1>
                                {children}
                        </h1>
                       <div className='flex gap-3'>
                                <Members />
                                <Comments />
                       </div>
                </div>
        )
}

export default MembersLayout