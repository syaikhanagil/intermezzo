import React from 'react';
import styled from 'styled-components';
import shield from '@/assets/svg/shield.svg';

const OurServicesWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 50px 0;
`;

const ServiceCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: var(--color-white);
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, .1);

    .icon {
        height: 52px;
        width: 52px;

        img {
            height: 100%;
        }
    }
`;

const serviceArr: any[] = [
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { icon: shield, title: 'UI/UX Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
];

const OurServices: React.FC = () => {
    return (
        <OurServicesWrapper className="mb-3">
            <h5 className="fs-5 fw-bold mb-4 text-center">Our Services</h5>
            <div className="container">
                <div className="row align-items-center text-center">
                    {serviceArr.map((i: any, key: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={key} className="col-12 col-md-4 mb-4">
                            <ServiceCard>
                                <div className="icon">
                                    <img src={i.icon} alt="Intermezzo" />
                                </div>
                                <p className="mb-0 fw-bold">{i.title}</p>
                                <span>{i.desc}</span>
                            </ServiceCard>
                        </div>
                    ))}
                </div>
            </div>
        </OurServicesWrapper>
    );
};

export default OurServices;
