import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import {FaStarHalf} from 'react-icons/fa'
const ref = React.createRef();

const Courses = () => {
  
    const data=useLoaderData()
    console.log(data)
    const {title,id,basic_price,course_thumb,instructor_name,lectures,rating,subject,watch_time}=data
    return (
        <div ref={ref}>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content  flex-col lg:flex-row">
    <img src={course_thumb} className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-2 pt-0">Instructor: {instructor_name}</p>
      <p className="py-2 pt-0">Lectures: {lectures}</p>
      <p className="py-2 pt-0">watch time: {watch_time}</p>
      <p className="py-2 pt-0">subject: {subject}</p>
      <p className="py-2 pt-0">Price: {basic_price}</p>
      <p className="py-2 pt-0"><FaStarHalf></FaStarHalf> : {rating}</p>
      <button className='btn bg-blue-500'  ><Link to={`/primium/${id}`}>Get Premium access</Link></button>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
  </div>
</div>
        </div>
    );
};

export default Courses;