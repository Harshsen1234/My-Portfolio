import React from 'react';
import { MdOutlineDriveFileRenameOutline, MdMailOutline } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';

const ContactForm = () => {
    const styles = {
        body: {
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            fontFamily: "'Poppins', sans-serif",
            color: '#fff',
        },
        contactContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        contactForm: {
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            width: '300px',
        },
        h1: {
            marginBottom: '20px',
            fontWeight: 600,
            fontSize: '24px',
        },
        span: {
            color: '#00bcd4',
        },
        inputGroup: {
            position: 'relative',
            marginBottom: '20px',
        },
        icon: {
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#00bcd4',
            fontSize: '24px',
        },
        input: {
            width: '100%',
            padding: '10px 10px 10px 40px',
            border: 'none',
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            fontSize: '16px',
        },
        textarea: {
            width: '100%',
            height: '100px',
            padding: '10px 10px 10px 40px',
            border: 'none',
            borderRadius: '5px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            fontSize: '16px',
            resize: 'none',
        },
        placeholder: {
            color: '#aaa',
        },
        button: {
            background: 'linear-gradient(135deg, #00bcd4 0%, #1e3c72 100%)',
            border: 'none',
            borderRadius: '50px',
            padding: '10px 20px',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s',
        },
        buttonHover: {
            background: 'linear-gradient(135deg, #1e3c72 0%, #00bcd4 100%)',
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.contactContainer}>
                <div style={styles.contactForm}>
                    <h1 style={styles.h1}>Contact<span style={styles.span}>me</span></h1>
                    <form>
                        <div style={styles.inputGroup}>
                            <MdOutlineDriveFileRenameOutline style={styles.icon} />
                            <input type="text" placeholder="Your Name" required style={styles.input} />
                        </div>
                        <div style={styles.inputGroup}>
                            <MdMailOutline style={styles.icon} />
                            <input type="email" placeholder="Your E-mail" required style={styles.input} />
                        </div>
                        <div style={styles.inputGroup}>
                            <RiMessage2Line style={styles.icon} />
                            <textarea placeholder="Your Message" required style={styles.textarea}></textarea>
                        </div>
                        <button type="submit" style={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
