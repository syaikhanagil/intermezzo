/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import img1 from '@/assets/img/iphone-12.jpg';

const CaseStudyWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 20px 0 50px;
`;

const SliderWrapper = styled.div`
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    border-radius: 50px;

    .pic {
        position: relative;
        height: 512px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50px;
    }
`;

const CaseStudy: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        centerPadding: '20px',
        cssEase: 'linear'
    };
    return (
        <CaseStudyWrapper>
            <h5 className="fs-5 fw-bold mb-4 text-center">Case Study</h5>
            <div className="container">
                <Slider {...settings}>
                    <SliderWrapper>
                        <div className="pic" style={{ backgroundImage: `url(${img1})` }} />
                    </SliderWrapper>
                    <SliderWrapper>
                        <div className="pic" style={{ backgroundImage: `url(${img1})` }} />
                    </SliderWrapper>
                </Slider>
            </div>
        </CaseStudyWrapper>
    );
};

export default CaseStudy;
