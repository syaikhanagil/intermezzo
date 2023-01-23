import React from 'react';
import styled from 'styled-components';
import img from '@/assets/img/hero.jpg';

const StartProjectWrapper = styled.div`
    position: relative;
    display: block;
    padding: 70px 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    color: var(--color-white);
    border-radius 10px 10px 100px 100px;

    p, span, button {
        position: relative;
        text-align: center;
        z-index: 2;
    }
    
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius 10px 10px 100px 100px;
        background: var(--color-black);
        top: 0;
        left: 0;
        opacity: .7;
        z-index: 1;
    }

    @media only screen and (max-width: 768px) {
        padding: 50px 0;
        border-radius: 10px 10px 50px 50px;
        &::before {
        border-radius 10px 10px 50px 50px;
        }
    }
`;

const StartProject: React.FC = () => {
    return (
        <div className="container">
            <StartProjectWrapper>
                <p className="fs-2 fw-bold">Start a Project?</p>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className="btn btn-light d-block m-auto">Join Our Term &gt;</button>
            </StartProjectWrapper>
        </div>
    );
};

export default StartProject;
