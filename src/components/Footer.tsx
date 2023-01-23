import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 20px 0;
    background: var(--color-white);

    a {
        position: relative;
        color: var(--color-black);
        display: block;
        text-decoration: none;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <div className="container align-items-center justify-content-center justify-content-md-between">
                <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <p className="fw-bold fs-5 mb-2">INTERMEZZO</p>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button type="button" className="btn btn-secondary d-block">Get Quote</button>
                    </div>
                    <div className="col-12 col-md-3 mb-3 mb-md-0">
                        <p className="fw-bold fs-6 mb-2">Features</p>
                        <a href="/">Home</a>
                        <a href="/">Contact</a>
                        <a href="/">Info</a>
                        <a href="/">Faq&apos;s</a>
                        <a href="/">Reviews</a>
                    </div>
                    <div className="col-12 col-md-3">
                        <p className="fw-bold fs-6 mb-2">Contact Info</p>
                        <p className="fs-6 mb-1 fw-bold">Call Us</p>
                        <p className="mb-1">+1 (642) 45678901</p>
                        <p className="fs-6 mb-1 fw-bold">Bussiness Hours</p>
                        <p className="mb-1">Mon - Fri, 10AM - 6PM</p>
                        <p className="fs-6 mb-1 fw-bold">Mail</p>
                        <p className="mb-0">wandaazhar@gmail.com</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
