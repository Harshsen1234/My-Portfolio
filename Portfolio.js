import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { FiChrome } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Portfolio = () => {
    const [hoverText, setHoverText] = useState('');
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (text, e) => {
        const rect = e.target.getBoundingClientRect();
        setHoverText(text);
        setHoverPosition({ top: rect.top + rect.height + window.scrollY, left: rect.left + window.scrollX });
    };

    const handleMouseLeave = () => {
        setHoverText('');
    };

    return (
        <>
          <div className="port-folio">
          <nav className="nav-bar">
                <div className="logo">
                <div className='ham-burger'>
               <RxHamburgerMenu  className="options-btn"/>
               </div>
                    <span className="logo-one">Po</span><span className="logo-two">rtfolio.</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a 
                            href="#home" 
                            className="navtxt"
                            onMouseEnter={(e) => handleMouseEnter('Coding is truly refreshing and fulfilling, providing me with constant challenges and excitement. It motivates me to wake up every day and discover the new problems. I excel in teamwork, solving complex problems, and designing user-friendly Web applications.', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#about" 
                            className="navtxt"
                            onMouseEnter={(e) => handleMouseEnter('Hi, I\'m Harsh Sen, a second-year BCA student at NRI College. I\'m passionate about web design and learning new technologies. My goal is to leverage my skills in computer applications to develop innovative solutions and contribute to the tech industry.', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#services"
                            className="navtxt"
                            onMouseEnter={(e) => handleMouseEnter('As an aspiring front-end web developer, I`m here to bring your online vision to life with a range of services tailored to your needs. From crafting responsive and visually captivating web designs to ensuring seamless user experiences across all devices, I specialize in elevating your online presence.', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#skills"
                            className="navtxt"
                            onMouseEnter={(e) => handleMouseEnter('I have skills in creating modern, user-friendly websites. I`m proficient in HTML and CSS for crafting structured, appealing layouts. My JavaScript knowledge adds interactivity and dynamic content to enhance user engagement. With React, I build efficient, scalable web applications.', e)}
                            onMouseLeave={handleMouseLeave}
                        >
                            Skills
                        </a>
                    </li>
                </ul>
                {hoverText && <div className="hover-text" style={{ top: hoverPosition.top, left: hoverPosition.left }}>{hoverText}</div>}
            </nav>        


            {/* Hero section */}
            <div className="newdiv">
            <div className="herosection">
                <div className="herotext1">
                    <h1>Hello!  I'm Harsh Sen</h1>
                    <h2 className='profile-text1'>And i'm</h2>  <h2 className='profile-text2'> Web designer</h2>
                    <p className='herotext'>I am an aspiring web developer with a deep passion for technology and a strong drive to bring ideas to life through code. My journey began with a fascination for creating digital experiences and a desire to turn creative concepts into functional websites and applications. While I am at the beginning of my professional career, I have diligently built a solid foundation in various programming languages and frameworks. I am committed to continually learning and adapting to the ever-evolving tech landscape...</p>
                    <div className="icons-one">
                    <FaLinkedin />
                    <FaInstagram />
                    <FaGithub />
                    <FaTwitterSquare/>
                    </div>
                    <div className="Cv-btn">
                        <button>Download Cv</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="glowing-border"></div>
                </div>
            </div>
            <div className="heading-section">
                <h1 className='section-one'> My     </h1>  <h1 className='section-two'>  Services </h1>   
                </div>
          <div class="boxcart">
        <div class="box one">
            <div class="box-content">
                <FaCode className="icons-two"/>
                <h2>Web Design</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam, nulla magni dignissimos porro delectus voluptatum iusto veniam quibusdam atque illum saepe tempore aspernatur quis minus iste. Mollitia veniam incidunt odio molestiae corrupti sunt. Dolorem eligendi quibusdam non laudantium at explicabo asperiores magni dolore, minus nostrum suscipit hic commodi error harum, quaerat quos ut quod blanditiis voluptas deleniti. Sequi perspiciatis officiis quia voluptates culpa itaque velit cum ipsam, autem!</p>
                <button>Know more</button>
        </div>
            </div>
        <div class="box two">
            <div class="box-content">
                <FiChrome className="icons-two"/> 
                <h2>Web Development</h2>
                <p>Necessitatibus ipsam, nulla magni dignissimos porro delectus voluptatum iusto veniam quibusdam atque illum saepe tempore aspernatur quis minus iste. Mollitia veniam incidunt odio molestiae corrupti sunt. Dolorem eligendi quibusdam non laudantium at explicabo asperiores magni dolore, minus nostrum suscipit hic commodi error harum, quaerat quos ut quod blanditiis voluptas deleniti.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sequi perspiciatis officiis quia voluptates culpa itaque velit cum ipsam, autem!</p>
                <button>Know more</button>
        </div>
        </div>
        <div class="box three">
            <div class="box-content">
            <GoDatabase className="icons-two"/>
            <h2>Data Base</h2>
            <p>Mollitia veniam incidunt odio molestiae corrupti sunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam, nulla magni dignissimos porro delectus voluptatum iusto veniam quibusdam atque illum saepe tempore aspernatur quis minus iste.Dolorem eligendi quibusdam non laudantium at explicabo asperiores magni dolore, minus nostrum suscipit hic commodi error harum, quaerat quos ut quod blanditiis voluptas deleniti. Sequi perspiciatis officiis quia voluptates culpa itaque velit cum ipsam, autem!</p>
                <button>Know more</button>
          </div>
           </div>
           </div>
            <div className="heading-section">
                <h1 className='section-one'> My     </h1>  <h1 className='section-two'>  Skills </h1>   
                </div>
          <div className="boxcart">
        <div className="skillsbox">
            <div className="box-content">
                <FaHtml5 className="icons-two"/>
                <h2>HTML</h2>
               <p>HTML is the standard language used to create and design documents on the World Wide Web. It serves as the foundation of all web pages, structuring content and enabling web browsers to interpret and display text, images, and other elements.</p>
        </div>
            </div>
        <div className="skillsbox">
            <div className="box-content">
                <FaCss3Alt className="icons-two"/> 
                <h2>CSS</h2>
               <p>CSS is a style sheet language used to describe the presentation of a document written in HTML or XML. CSS controls the layout, colors, fonts, and overall visual appearance of web pages, allowing developers to separate content from design.</p>
          </div>
        </div>
        <div className="skillsbox">
            <div className="box-content">
            <TbBrandJavascript className="icons-two"/>
            <h2>Java Script</h2>
            <p>JavaScript is a versatile, high-level programming language primarily used to create and control dynamic content on websites. It enables interactive features such as form validation, animations, and user interface enhancements.</p>
            </div>
           </div>
           </div>
           <div className="boxcart">
        <div className="skillsbox">
            <div className="box-content">
                <RiReactjsFill className="icons-two"/>
                <h2>React Js</h2>
                <p>React.js,is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, simplifying the management and development of complex UIs.</p>
              </div>
            </div>
        <div className="skillsbox">
            <div className="box-content">
            <FaNodeJs className="icons-two"/>
            <h2>Node Js</h2>
            <p>Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, enabling the development of scalable, high-performance network applications. </p>
          </div>
        </div>
        <div className="skillsbox">
            <div className="box-content">
            <FaJava className="icons-two"/> 
                <h2>Java</h2>
                <p>Java, an object-oriented language, developed by Sun Microsystems in 1995, is platform-independent, making it ideal for diverse device usage with a Java Virtual Machine. This versatility drives its popularity for desktop, web, mobile, apps.</p>
            </div>
           </div>
           </div>
           <div className="heading-section">
                <h1 className='section-one'> Experien</h1>  <h1 className='section-two'>ce</h1>   
                </div>
                <div className="exptext"><FaUserCheck className='expicon'/>
                <span>
                I would highlight my tenure as a Customer Support Associate at Techno Task Business Solutions, spanning 1.5 years. This role equipped me with invaluable skills in communication, problem-solving, and customer relationship management. Throughout my tenure, I diligently handled customer inquiries, provided timely assistance, and ensured their satisfaction with our services. I also participated in various training programs aimed at enhancing my skills in customer support and professional development. Additionally, I actively contributed to improving customer satisfaction metrics, such as response time and issue resolution rates. My time at Techno Task Business Solutions not only solidified my expertise in customer support but also fostered my growth as a professional, preparing me for future challenges and opportunities in the field.</span>
                </div>
                </div>
                



{/* 2nd HeroSection */}


<div className="hero-image2">
   <div className="glowing-border2"></div>
    </div>
 </div>            
        
































            {/* Footer section */}
            <div className="contact-container">
            <div className="heading-section">
                <h1 className='section-one'> Contact</h1>  <h1 className='section-two'>me</h1>   
                </div>
                <div className="contact-form">
                <form action="#">
                    <MdOutlineDriveFileRenameOutline className='icons-two'/>
                 <input type="text" placeholder='Your Name' required/> <MdMailOutline className='icons-two'/>
                 <input type="text" placeholder='Your E-mail' required/><RiMessage2Line className='icons-two'/>
            <textarea placeholder="Your Message Here"></textarea>
            <button>Submit</button>
          </form>
       </div>
            </div>
          {/* </div> */}
        </>
    );
};

export default Portfolio;