import React from 'react';
import styled from 'styled-components';
import heroImg from '@/assets/img/hero.jpg';
import searchIcon from '@/assets/svg/search.svg';
import codeIcon from '@/assets/svg/code.svg';
import imageIcon from '@/assets/svg/image.svg';
import cameraIcon from '@/assets/svg/camera.svg';

const HeroWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 80%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, .5), transparent);
        left: 0;
        top: 0;
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 40%;
        background: linear-gradient(to top, #efefef, transparent);
        left: 0;
        bottom: 0;
        z-index: 1;
    }

    .bg-hero {
        width: 100%;
    }

    .title-area {
        position: absolute;
        width: 100%;
        display: block;
        text-align: center;
        color: var(--color-white);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
    }
`;

const CardWrapper = styled.div`
    position: relative;
    display: block;
    width: 90%;
    background: var(--color-white);
    box-shadow: 0 4px 22px 12px rgba(0, 0, 0, .07);
    margin: auto;
    top: -150px;
    border-radius: 25px;
    z-index: 3;

    @media only screen and (max-width: 768px) {
        top: -50px;
    }
`;

const Hero: React.FC = () => {
    return (
        <div className="container" style={{ position: 'relative' }}>
            <HeroWrapper>
                <img className="bg-hero" src={heroImg} alt="Hero" />
                <div className="title-area">
                    <h2 className="fs-2 fw-bold">PRODUCT DESIGN & ENGINEERING</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </HeroWrapper>
            <CardWrapper className="p-4 p-md-5">
                <div className="row align-items-center mb-3 mb-md-5">
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">Creative Design</p>
                        <img src={searchIcon} alt="creative-design" />
                    </div>
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">Apps Development</p>
                        <img src={codeIcon} alt="development" />
                    </div>
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">Digital Marketing</p>
                        <img src={searchIcon} alt="Search" />
                    </div>
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">Branding</p>
                        <img src={cameraIcon} alt="branding" />
                    </div>
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">Content Creations</p>
                        <img src={imageIcon} alt="content-creations" />
                    </div>
                    <div className="col-6 col-md-2 mb-3 mb-md-0 text-center">
                        <p className="fs-6 mb-2">SEO & Domain</p>
                        <img src={searchIcon} alt="Search" />
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h3 className="fs-3 fw-bold text-center text-md-start">WE DO IT ALL THOSE THINGS</h3>
                        <p className="mb-0 text-center text-md-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-6 mb-3">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                            <div className="col-6 mb-3">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                            <div className="col-6">
                                <p className="fw-bold mb-1 text-center text-md-start">1000+</p>
                                <p className="mb-0 text-center text-md-start">Years of the years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </div>
    );
};

export default Hero;
