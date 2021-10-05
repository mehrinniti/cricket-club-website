import React from 'react';
import thumbsGallery from '../../images/thumbs_Gallery-1.jpg';
import thumbsGallery1 from '../../images/thumbs_Gallery-11.jpg';
import thumbsGallery2 from '../../images/thumbs_Gallery-12.jpg';
import thumbsGallery3 from '../../images/thumbs_Gallery-13.jpg';
import thumbsGallery4 from '../../images/thumbs_Gallery-14.jpg';
import thumbsGallery5 from '../../images/thumbs_Gallery-2.jpg';
import thumbsGallery6 from '../../images/thumbs_Gallery-6.jpg';
import thumbsGallery7 from '../../images/thumbs_Gallery-9.jpg';
import thumbsGallery8 from '../../images/thumbs_Gallery-14.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="container footer-body">
                <div className="row">
                    <div className="col">
                        <h4>The Academy</h4>
                        <hr />
                        <br />
                        <p>Good coaching will provide a positive environment for children to learn, grow and develop with the ultimate prize of reaching their potential, whatever level that will be. A quality coach is a teacher to their players.</p>
                    </div>
                    <div className="col ">
                        <h4>Gallery</h4>
                        <hr />
                        <div>
                            <div className="container p-0 m-0">
                                <div className="row g-1">
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery1} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery2} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery3} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery4} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery5} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery6} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery7} alt="" />
                                    </div>
                                    <div className=" col-lg-4">
                                        <img className='thumbsGallery img-fluid' src={thumbsGallery8} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Contact Us</h4>
                        <hr />
                        <br />
                        <p>Academy : Godnail, Narayangang, Dhaka, BD</p>
                        <p>E-mail : Niti@gmail.com</p>

                        <div className="navbar navbar-expand-lg navbar-light ">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success search-btn" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='footer d-flex justify-content-between '>
                <p> © 2021 || Designed by Niti</p>
                <div className='social-site '>
                    <a href="https://twitter.com/"><i class="fab fa-facebook"></i></a>
                    <a href="https://whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
                    <a href="https://instagram.com/"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://viber.com/"><i class="fab fa-viber"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;