import React from 'react';
import galleryImg5 from '../../images/Gallery-3.jpg';
import './Facilities.css';

const Facilities = () => {
    return (
        <div className='facilites-container'>

            <div className='container-1'>
                <h2>Facilities</h2><br />
                <div className="details">
                    <p>Facility Provide in Our Academy like:</p>
                    <ul>
                        <li>1 international size cricket ground</li>
                        <li>1 bowling machine</li>
                        <li>6 nets for practice</li>
                        <li>Different training areas for wicket keepers and fielding</li>
                    </ul>
                    <p>4870 square metres of pure sporting and training facilities. Three indoor cricket nets where indoor cricket, dodgeball, junior competitions (soccer, indoor cricket & dodgeball) and Inflatable World (weekend and selected school holidays) take place; two sprung indoor courts that facilitate floorball, soccer (futsal) and junior competitions (soccer and floorball) and a state of the art cricket training facility (3x bowling machines and 3x bowling nets with 20 metre run ups).With a fully licensed bar and café also found within the premises, all your food , drink and hospitality needs are answered.</p><br />
                    <img className='gallery' src={galleryImg5} alt="" /><br />
                    <p>With one of the fastest growing fitness brands in Western Australia, Revo Sports is the home of the original Revo Fitness. Revo Fitness has 550 square metres of functional, strength, performance and traditional gym training available. Affordable memberships, no lock in contracts, no sign up fees and access to other Revo Fitness locations gives you the flexibility to train when and where you want.</p>
                    <br />
                    <p>Additional areas include Inflatable World over weekends and school holidays which can be found in our huge indoor cricket area. Always supervised and fun for the whole family, and the Revo Cricket Store found above the cafe and bar area. The Revo Cricket Store caters for every type of cricketer and has a huge range to choose from to have you hitting hundreds and taking wickets!</p>
                </div>

            </div>
        </div>
    );
};

export default Facilities;