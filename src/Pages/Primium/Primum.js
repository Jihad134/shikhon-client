import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Primum = () => {
    const data=useLoaderData()
    const {course_thumb,title,instructor_name}=data;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={course_thumb} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      <p className="py-6 text-center">{instructor_name}</p>
      <h1 className='text-center text-3xl'>Premium</h1>
      <p className='text-center'>
Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Primum;