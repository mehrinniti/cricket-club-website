import React from 'react';
import galleryImg from '../../images/Gallery.jpg';
import galleryImg2 from '../../images/Gallery-1.jpg';
import galleryImg3 from '../../images/Gallery-2.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>

            <div className='container-1'>
                <h2>What We Do</h2><br />
                <div className="details">
                    <p>Sports Education brings educational principles and practices into the sports development area.</p>
                    <p>Traditional sports training involves relatively unstructured coaching plans with often short term goals and objectives. Sessions are predominantly skill focused with the aims of each session about winning the next game or a coach’s search for the next elite athlete.</p><br />
                    <img className='gallery' src={galleryImg} alt="" /><br />
                    <p>Sports Education however, has a broader mandate with a focus on educational outcomes, as well as talent development. It is curriculum based teaching providing for a structured, comprehensive and sequential program covering all areas of the sport.</p>
                    <p>Consequently, Sports Education’s broad-based education principles are aimed at developing young people through sport.</p>
                </div>

            </div>

            <div className='container-1'>
                <h2>Junior Pitch</h2><br />
                <div className="details">
                    <p>A weekend cricket league that gives a child an opportunity to play friendly matches and develop as team player. The passion for cricket and the budding aspirations of young sport stars are brandished through our league. It is a consortium that gives the young cricketers a chance to wield their cricketing skills and nurture their sportsmanship. It is also a platform for the young players to learn to contribute their talents for the greater goal of the team.</p><br />
                    <img className='gallery' src={galleryImg2} alt="" /><br />
                    <p>Cricket has its own character and it is for these young gentlemen to instill the same and play as little champions. The league does not envision a culminating point by awarding winners. Rather, it is dedicated towards encouraging the young talents who have chosen cricket as a part of their disciplined life.</p>
                    <p>Children at play bring to fore their inherent qualities and are open to learn lessons of life right at the playground. A leader can rise and a cricketing sensation may take his first stride even during a game. Hence, through Junior Pitch, an initiative of Sehwag Cricket Academy, we envision to offer a much needed platform to the budding cricketers.</p>
                </div>

            </div>

            <div className='container-1'>
                <h2>Summer Camps</h2><br />
                <div className="details">
                    <p>Along with our regular programmes, we conduct extensive Summer Camps every year, coinciding with the school holidays. These day camps are packaged with comprehensive skill development classes and fitness sessions. Selected talents from these camps are encouraged to become our regular students as well.</p>
                    <p>Our residential Summer Camp programs are a comprehensive cricket camp for young cricketers offering them an opportunity to stay and learn at the state-of-the-art campus at Sehwag Cricket Academy, Jhajjar enhancing their cricketing abilities. The intensive training session includes training and drills, personal and group coaching, personality development and mental and physical fitness, along with other learning prospects.</p><br />
                    <img className='gallery' src={galleryImg3} alt="" /><br />
                    <p>we follow the most structured training methodology, which is otherwise a part of training sessions of seasoned cricketers. The training sessions are aimed to develop young talents into professional players.
                        At Academy, we also offer Specific wicketkeeper training. At the summer camps, special programs are designed to address the specific technical complexities in the role of a wicketkeeper. With the help of tailor made exercises and a carefully-planned method, you will be able to refine your skills and to have an inside-out understanding of this complex and fundamental role.</p>
                </div>

            </div>



        </div>
    );
};

export default About;