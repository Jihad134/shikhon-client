import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div className='flex flex-col sm:flex-row  mx-5'>
            <div className='w-full sm:w-[30%] mx-5 my-5 '>
                {
                    data.map(course=><p className='border-2 py-2 px-4 text-2xl mt-2'>{course.title}</p>)
                }
            </div>
            <div className='col-span-2 w-full sm:w-[70%] grid md:grid-cols-2 gap-4 my-5 bg-slate-100'>
            {
                data.map(detail=><>
                <div className="card  bg-base-100 shadow-xl">
  <figure><img className='' src={detail.course_thumb }alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{detail.title}</h2>
    <p className=''>Priec: {detail.basic_price}</p>
    <div className="card-actions justify-end">
      <Link to={`/courses/${detail.id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
                </>)
            }
            </div>
        </div>
    );
};

export default Course;