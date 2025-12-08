import React from 'react'
import BlogLayout from '../layout';

const SingleBlog = async ({
        params
}:{params:{slug:string}}) => {

        const {slug} = await params;
        return (
                <BlogLayout title={`Blog Post ${slug}`}>
                        SingleBlog - {slug}
                </BlogLayout>
        )
}

export default SingleBlog