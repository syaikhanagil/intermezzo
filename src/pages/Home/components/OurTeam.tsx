import React from 'react';
import styled from 'styled-components';
import img from '@/assets/img/hero.jpg';

const OurTeamWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background: var(--color-white);
    padding: 50px 0;
    margin: 50px 0;
`;

const TeamCard = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: var(--color-white);
    color: var(--color-white);
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 12px 6px rgba(0, 0, 0, .08);

    .profile-img {
        position: relative;
        height: 100px;
        width: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100px;
    }

    p, span {
        z-index: 1;
    }

    &::before {
        content: '';
        position: absolute;
        background: rgba(0, 0, 0, .6);
        width: 100%;
        height: 70%;
        left: 0;
        bottom: 0;
        border-radius: 100% 100% 10px 10px;
        z-index: 0;
    }
`;

const teamArr: any[] = [
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { name: 'John Doe', profile: img, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
];

const OurTeam: React.FC = () => {
    return (
        <OurTeamWrapper>
            <h5 className="fs-5 fw-bold mb-3 text-center">Our Team</h5>
            <div className="container">
                <div className="row align-items-center text-center">
                    {teamArr.map((i: any, k: number) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={k} className="col-6 col-md-4 mb-4">
                            <TeamCard>
                                <div className="profile-img" style={{ backgroundImage: `url(${i.profile})` }} />
                                <p className="mb-0 fw-bold">{i.name}</p>
                                <span>{i.desc}</span>
                            </TeamCard>
                        </div>
                    ))}
                </div>
            </div>
        </OurTeamWrapper>
    );
};

export default OurTeam;
