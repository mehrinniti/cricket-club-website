import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { img, name, fee, coach } = props.service;
    console.log(props);
    return (
        <div className="card  mb-3 bg-success p-2 text-dark bg-opacity-10 course-detail ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="course-img img-fluid rounded" src={img} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title name">{name}</h5>
                        <p className="card-text">Course Fee : {fee}</p>
                        <p className="card-text"><strong>Coach : {coach}</strong></p>
                    </div>
                </div>

            </div>
        </div >

    );
};

export default Courses;