import React from 'react';
import { useHistory } from 'react-router';
import notFound from '../../images/error-img.jpg'
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();
    const handelClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <img className='error-img' src={notFound} alt="" />

            <div className='text-center'>
                <button onClick={handelClick} type="button" className="btn btn-primary error-btn">Go Back To Home</button>
            </div>

        </div>
    );
};

export default NotFound;