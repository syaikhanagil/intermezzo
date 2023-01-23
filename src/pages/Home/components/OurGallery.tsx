import React from 'react';
import styled from 'styled-components';
import iosImg from '@/assets/img/iphone-12.jpg';

const OurGalleryWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background: var(--color-white);
    padding: 50px 0;

    .pic {
        position: relative;
        display: block;
        width: 100%;
        cursor: pointer;

        &:hover::before {
            opacity: 1;
        }

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .25);
            border-radius: 10px;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: 1;
        }

        img {
            width: 100%;
            border-radius: 10px;
        }
    }
`;

const OurGallery: React.FC = () => {
    return (
        <OurGalleryWrapper className="mb-3">
            <h5 className="fs-5 fw-bold mb-4 text-center">Our Gallery</h5>
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-6 col-md-3 mb-3 mb-md-0">
                        <div className="pic">
                            <img src={iosImg} alt="Gallery 1" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-md-0">
                        <div className="pic">
                            <img src={iosImg} alt="Gallery 1" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-md-0">
                        <div className="pic">
                            <img src={iosImg} alt="Gallery 1" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3 mb-md-0">
                        <div className="pic">
                            <img src={iosImg} alt="Gallery 1" />
                        </div>
                    </div>
                </div>
            </div>
        </OurGalleryWrapper>
    );
};

export default OurGallery;
