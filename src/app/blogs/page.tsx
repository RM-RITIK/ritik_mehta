'use client'
import exp from 'constants';
import NavBar from '../components/navbar'
import React from 'react';
import { mediumHandler } from '@/api/blog';

const Blogs: React.FC = ({}) => {
    const [blogs, setBlogs] = React.useState<any>([]);

    const fetchBlogs = async () => {
        try {
            const blogs = await mediumHandler();
            console.log(blogs);
            setBlogs(blogs);
            
        }
        catch(error){
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchBlogs();
      },[])

    return (
        <main>
            <NavBar />
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {blogs.map((blog:any, index:number) => (
                        <div className="p-4 md:w-1/3">
                            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                                {blog.categories?.map((category: any, index: number) => (
                                    <span>
                                        {category} &nbsp;
                                    </span>
                                ))}
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blog.title}</h1>
                            <p className="leading-relaxed mb-3">
                                {blog.content.slice(0, 400)}...
                            </p>
                            <a href={blog.link} target='_blank' className="text-indigo-500 inline-flex items-center">Read complete article
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Blogs;