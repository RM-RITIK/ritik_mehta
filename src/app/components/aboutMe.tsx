'use client'

import React from 'react';
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { getImages }  from '../../api/images'

interface AboutMeProps {

}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
    return (
        <section className="text-white-600 body-font">
         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">
                About Me!
            </h1>
            <p className="mb-8 leading-relaxed justified-text">
                I am a graduate student at San Jose State University majoring in Computer Science. I am currently interning at PTC as a 
                Onshape Modeling Development - Graphics/UI Intern. I did my undergraduate degree from Delhi Technological University in Mathematics and 
                Computing. I have experience in Web Development, Machine Learning, and Computer Graphics.
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a href='/experience'>Experiences</a> 
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <a href='/project'>
                        Projects
                    </a>
                </button>
            </div>
            <div className="mt-8 flex justify-center">
            <a href="https://www.facebook.com/ritik.mehta2012" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-white-900 hover:text-indigo-500 mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/rm-ritik" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-white-900 hover:text-indigo-500 mr-4" />
            </a>
            <a href="https://github.com/rm-ritik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-white-900 hover:text-indigo-500" />
            </a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" src="/images/Seaport,Boston.jpeg" height={500} width={500} alt='hero image' />
            </div>
         </div>
        </section>
    );
}

export default AboutMe;