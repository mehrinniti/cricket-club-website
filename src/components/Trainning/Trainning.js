import React from 'react';
import img1 from '../../images/img1.jpg';
import './Trainning.css';

const Trainning = () => {
    return (
        <div>
            <div className='Home'>
                <div className='title'>
                    <h2>Trained By Best Coaches</h2>
                    <h5>Our professional coaches provide quality cricket </h5>
                    <h5>training and innovative coaching</h5>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col test-cricket">
                            <span className='icon '><i className="fas fa-male"></i></span>
                            <h2>Test Cricket</h2>
                            <p>Test cricket is the highest standard of first-class cricket. A Test match is an international fixture between teams representing those countries.</p>
                        </div>
                        <div className="col test-cricket">
                            <span className='icon'><i className="fas fa-trophy"></i></span>
                            <h2>National Championships</h2>
                            <p>International cricket in Bangladesh generally does not follow a fixed pattern. For example, the English schedule under which the nation other countries</p>
                        </div>
                        <div className="col test-cricket">
                            <span className='icon'><i className="fab fa-cc-diners-club"></i></span>
                            <h2>Club Cricket</h2>
                            <p>Club cricket is a mainly amateur, but still formal, form of the sport of cricket, usually involving teams playing in competitions at weekends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainning;