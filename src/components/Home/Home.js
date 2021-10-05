import React, { useEffect, useState } from 'react';
import './Home.css'
import img1 from '../../images/img1.jpg'
import Services from '../Services/Services';
import Courses from '../Courses/Courses';
import Trainning from '../Trainning/Trainning';

const Home = () => {


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Trainning></Trainning>

            <div className="services-container">
                <div >
                    <div className="container mx-auto">
                        <div className="row">
                            {
                                services.slice(0, 4).map(service => <div className="col-6 h-100"> <Courses
                                    key={service.id}
                                    service={service}>

                                </Courses></div>)
                            }
                        </div>
                    </div>

                </div>
            </div >

        </div >
    );
};

export default Home;