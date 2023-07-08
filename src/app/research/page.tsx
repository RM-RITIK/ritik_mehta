'use client'
import NavBar from '../components/navbar'
import React from 'react';

const Research: React.FC = ({}) => {
    return (
        <main>
            <NavBar />
            <div className="text-white-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-white-700">Machine Learning</span>
                    <span className="mt-1 text-white-500 text-sm">Advisor: Professor Mark Stamp <br/> San Jose State University</span>
                    </div>
                    <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white-900 title-font mb-2">HMM-RF and HMM-CNNs</h2>
                    <p className="leading-relaxed">This research project focusses on combine HMM with Random Forest and CNN for malware classification.</p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-white-700">Computer Graphics</span>
                    <span className="mt-1 text-white-500 text-sm">Advisor: Professor Ojaswa Sharma <br/> IIIT Delhi</span>
                    </div>
                    <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white-900 title-font mb-2">XR Shape Modeling in Extended Reality</h2>
                    <p className="leading-relaxed">
                    Engineered an adapter to enable main application to read input from a Leap Motion Device or a binary file into a
                    processing pipeline, reducing data processing time by 50%. <br />
                    Constructed functions for gesture detection in a Leap Motion Device. It resulted in detection of all gestures with 95%
                    accuracy. Also, accomplished a system to perform transforming operations on a selected object using hand gestures
                    with 97% precision. <br />
                    Collaborated with other members of team to efficiently implement Implicit Moving Least Square for surface
                    construction by utilizing CUDA kernels.
                    </p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-white-700">Deep Learning</span>
                    <span className="text-sm text-white-500">Advisor: Professor Kapil Sharma <br /> Delhi Technological Uninversity</span>
                    </div>
                    <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white-900 title-font mb-2">Diabetic Retinopathy Detection</h2>
                    <p className="leading-relaxed">Pursued Research on Diabetic Retinopathy Detection under Dr. Kapil Sharma. Trained 10 Convolutional Neural
                    Networks on a dataset of about 30 GB and then ranked models on basis of Canberra distance-based algorithm.<br />
                    Applied Gradient Boosting techniques at conclusion of project leading to improvement in accuracy by 15%.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    );


}

export default Research;