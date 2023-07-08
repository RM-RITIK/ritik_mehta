'use client'
import NavBar from '../components/navbar'
import React from 'react';
import { getProjects } from '../../api/project'

const Projects: React.FC = ({}) => {
    const [projects, setProjects] = React.useState<any>([]);

    const fetchProjects = async () => {
        try {
            const projects = await getProjects();
            setProjects(projects);
        }
        catch(error){
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchProjects();
      },[])

    return (
        <main>
            <NavBar />
            <div className='text-gray-600 body-font'>
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            {projects?.map((project:any) => (
                <div key={project.id} className="p-4 lg:w-1/2">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-small text-gray-900 mb-3">{project.name}</h1>
                    <p className="leading-relaxed mb-3">{project.description}</p>
                    <a href={project.url} className="text-indigo-500 inline-flex items-center" target="_blank">View on GitHub
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
            </div>
        </main>
    )
}

export default Projects;