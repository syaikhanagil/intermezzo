/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import Accordion from '@/components/Accordion';

const FaqWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 50px 0;
    border-radius 100px 100px 10px 10px;
`;

const faqArr: any[] = [
    { title: 'Product', desc: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Product', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Product', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
];

const Faq: React.FC = () => {
    return (
        <div className="container">
            <FaqWrapper>
                <p className="fs-2 fw-bold text-center">FAQ&apos;s</p>
                <div className="accordion" id="faq-accordion">
                    {faqArr.map((i: any, key: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Accordion key={key} title={i.title} body={i.desc} />
                    ))}
                </div>
            </FaqWrapper>
        </div>
    );
};

export default Faq;
