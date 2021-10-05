import React, { useEffect, useState } from 'react';
import img1 from '../../images/img1.jpg'
import Courses from '../Courses/Courses';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container">


            <div >
                <h1 className='title-name'>Our Services</h1>
                <div className="container mx-auto">
                    <div className="row">

                        {
                            services.map(service => <div className="col-6 h-100"> <Courses
                                key={service.id}
                                service={service}>

                            </Courses></div>)
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Services;