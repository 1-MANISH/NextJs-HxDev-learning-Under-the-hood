import React from 'react'

const layout = ({children,product}:{children:React.ReactNode,product:React.ReactNode}) => {
        return (
                <div>
                        {children}
                        {product}
                </div>
        )
}

export default layout