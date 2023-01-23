import React from 'react';
import styled from 'styled-components';
import c1 from '@/assets/img/bank-of-america.png';
import c2 from '@/assets/img/university-of-michigan.png';
import c3 from '@/assets/img/chevrolet.png';
import c4 from '@/assets/img/taco-bell.png';

const OurClientWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background: var(--color-white);
    padding: 50px 0;
`;

const ClientRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        padding: 0 1rem;
        justify-content: space-between;
    }
`;

const ClientWrapper = styled.div`
    position: relative;
    display: block;
    width: 20%;
    height: 200px;
    flex: 0 1 calc(20% - 30px);

    img {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        height: auto;
        flex: 0 1 calc(50% - 30px);
    }
`;

const clientArr: any[] = [
    { name: 'Bank of America', logo: c1 },
    { name: 'University of Michigan', logo: c2 },
    { name: 'Chevrolet', logo: c3 },
    { name: 'Taco Bell', logo: c4 },
    { name: 'Bank of America', logo: c1 },
    { name: 'University of Michigan', logo: c2 },
    { name: 'Chevrolet', logo: c3 },
    { name: 'Taco Bell', logo: c4 },
    { name: 'Bank of America', logo: c1 },
    { name: 'Chevrolet', logo: c3 }
];

const OurClient: React.FC = () => {
    return (
        <OurClientWrapper>
            <h5 className="fs-5 fw-bold mb-3 text-center">Our Client</h5>
            <div className="container">
                <ClientRow>
                    {clientArr.map((i: any, key: any) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <ClientWrapper key={key}>
                            <img src={i.logo} alt={i.name} />
                        </ClientWrapper>
                    ))}
                </ClientRow>
            </div>
        </OurClientWrapper>
    );
};

export default OurClient;
