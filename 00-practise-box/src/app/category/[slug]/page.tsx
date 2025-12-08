import React from 'react'

const page = async  ({
        params
}:{params:{slug:string}}) => {

        const {slug} = await params;
        return (
                <div>
                        Category Page - {slug}
                </div>
        )
}

export default page