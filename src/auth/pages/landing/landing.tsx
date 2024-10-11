import React from 'react';
import './landing.css';
import { FaShieldAlt, FaCheckSquare, FaRupeeSign, FaClock, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';

const BarberShop = () => {
    const [sideNavOpen, setSideNavOpen] = React.useState(false);

    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    return (
        <>

        <Navbar></Navbar>
        
            <section id="banner">
                <img src="https://i.ibb.co/PwP7dxq/logo.png" className="logo" alt="Logo" />
                <div className="banner-text">
                    <h1>Hair Studio</h1>
                    <p>Style Your Hair Is Style Your Life</p>
                    <div className="banner-btn">
                        <a href="#"><span></span>Find Out</a>
                        <a href="#"><span></span>Read More</a>
                    </div>
                </div>
            </section>

            <div id="sideNav" style={{ right: sideNavOpen ? '0' : '-250px' }}>
                <nav>
                    <ul>
                        <li><a href="#banner">HOME</a></li>
                        <li><a href="#feature">FEATURES</a></li>
                        <li><a href="#service">SERVICES</a></li>
                        <li><a href="#testimonial">TESTIMONIALS</a></li>
                        <li><a href="#footer">MEET US</a></li>
                    </ul>
                </nav>
            </div>
            <div id="menuBtn" onClick={toggleSideNav}>
                <img src={sideNavOpen ? "https://i.ibb.co/234Rk9x/close.png" : "https://i.ibb.co/B2WTpLC/menu.png"} id="menu" alt="Menu" />
            </div>

            {/* Features */}
            <section id="feature">
                <div className="title-text">

                </div>
                <div className="feature-box">
                    <div className="features">
                        <h1>Experienced Staff</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <FaShieldAlt />
                            </div>
                            <div className="feature-text">
                                <p>Dones eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula&#96;</p>
                            </div>
                        </div>
                        <h1>Pre Booking Online</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <FaCheckSquare />
                            </div>
                            <div className="feature-text">
                                <p>Dones eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula&#96;</p>
                            </div>
                        </div>
                        <h1>Affordable Cost</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <FaRupeeSign />
                            </div>
                            <div className="feature-text">
                                <p>Dones eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula&#96;</p>
                            </div>
                        </div>
                    </div>
                    <div className="features-img">
                        <img src="https://i.ibb.co/jykKXWP/barber-man.jpg" alt="Barber" />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="service">
                <div className="title-text">

                </div>
                <div className="service-box">
                    <div className="single-service">
                        <img src="https://i.ibb.co/0ZC3BGd/handsome-young-bearded-guy-sitting-in-an-armchair-in-a-beauty-salon-and-the-girl-near-him-cuts-his-h.jpg" alt="Hair Styling" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Hair Styling</h3>
                            <hr />
                            <p>This is test under description of barber foundation this is test under description of barber foundation.</p>
                        </div>
                    </div>
                    <div className="single-service">
                        <img src="https://i.ibb.co/fHjdZ3h/Man-with-a-beard-Hairdresser-with-a-client-Brunette-in-a-barbershop.jpg" alt="Beard Trim" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Beard Trim</h3>
                            <hr />
                            <p>This is test under description of barber foundation this is test under description of barber foundation.</p>
                        </div>
                    </div>
                    <div className="single-service">
                        <img src="https://i.ibb.co/vmVyNfJ/pic-3.jpg" alt="Hair Cut" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Hair Cut</h3>
                            <hr />
                            <p>This is test under description of barber foundation this is test under description of barber foundation.</p>
                        </div>
                    </div>
                    <div className="single-service">
                        <img src="https://i.ibb.co/P4fkDzD/pic-4.jpg" alt="Dry Shampoo" />
                        <div className="overlay"></div>
                        <div className="service-desc">
                            <h3>Dry Shampoo</h3>
                            <hr />
                            <p>This is test under description of barber foundation this is test under description of barber foundation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonial">
                <div className="title-text">
                </div>
                <div className="testimonial-row">
                    <div className="testimonial-col">
                        <div className="user">
                            <img src="https://i.ibb.co/FhN5tDW/img-1.jpg" alt="Client 1" />
                            <div className="user-info">
                                <h4>KEN NORMAN <FaTwitter /></h4>
                                <small>@kennorman</small>
                            </div>
                        </div>
                        <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula. Donec eget ultricies sapi.</p>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                            <img src="https://i.ibb.co/x17vYp8/img-2.jpg" alt="Client 2" />
                            <div className="user-info">
                                <h4>Liara Karian <FaTwitter /></h4>
                                <small>@liarakarian</small>
                            </div>
                        </div>
                        <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula.</p>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                            <img src="https://i.ibb.co/TLtJSYx/img-3.jpg" alt="Client 3" />
                            <div className="user-info">
                                <h4>Ricky Danial <FaTwitter /></h4>
                                <small>@rickydanial</small>
                            </div>
                        </div>
                        <p>Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis, elit sapie eleifend ligula.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section id="footer">
                <img src="https://i.ibb.co/wdN8Fv1/footer-img.png" className="footer-img" alt="Footer Logo" />
                <div className="title-text">
                </div>
                <div className="footer-row">
                    <div className="footer-left">
                        <h1>Opening Hours</h1>
                        <p><FaClock /> Monday to Friday - 9am to 9pm</p>
                        <p><FaClock /> Saturday and Sunday - 8am to 11pm</p>
                    </div>
                    <div className="footer-right">
                        <h1>Get In Touch</h1>
                        <p><FaMapMarkerAlt /> #30 abc Colony, xyz City IN</p>
                        <p><FaPaperPlane /> example@website.com</p>
                        <p><FaPhone /> +01 123456789</p>
                    </div>
                </div>

                <div className="social-links">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaYoutube />
                </div>
                <p>Copyright BarberShop &copy; 2023</p>
            </section>
        </>
    );
};

export default BarberShop;
