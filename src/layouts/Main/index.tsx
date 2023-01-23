import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainWrapper = styled.main`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
`;

interface IMainProps {
    children: React.ReactNode | any
}

const Main: React.FC<IMainProps> = (props) => {
    const { children } = props;
    return (
        <MainWrapper>
            <Header />
            {children}
            <Footer />
        </MainWrapper>
    );
};

export default Main;
