import React from 'react';
import styled from 'styled-components';
import logo from '@/assets/img/logo-placeholder.png';

const HeaderWrapper = styled.header`
    position: fixed;
    display: block;
    width: 100%;
    height: auto;
    padding: 0 2rem;
    background: var(--color-white);
    top: 0;
    left: 0;
    box-shadow: 0 4px 12px 6px rgba(0, 0, 0, .075);
    z-index: 100;
`;

const HeaderItemRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderItem = styled.div`
    position: relative;
    display: block;
    width: auto;

    .logo {
        position: relative;
        height: 60px;
        padding: 5px 0;

        img {
            height: 100%;
        }
    }
`;

const HeaderMenuList = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: .3s ease;

    &.open {
        left: 0;
    }

    @media only screen and (max-width: 768px) {
        position: fixed;
        flex-direction: column;
        padding: 50px 0 0;
        width: 60%;
        height: 100%;
        background: var(--color-white);
        top: 0;
        left: -120%;
        z-index: 100;
    }
`;

const HeaderMenuItem = styled.div`
    position: relative;
    display: block;
    width: auto;
    height: 100%;
    padding: 5px 15px;

    &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        left: auto;
        right: 0;
        bottom: 0;
        background: #000;
        border-radius: 100px;
        transition: .3s ease;
    }

    &:hover::before {
        width: 100%;
        right: auto;
        left: 0;
    }

    @media only screen and (max-width: 768px) {
        margin: 5px 0;
        height: auto;

        &::before {
            content: none;
        }
    }
`;

const BurgerBtn = styled.div`
    position: relative;
    display: none;
    width: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    gap: 6px;
    padding: 5px 0;
    cursor: pointer;
    z-index: 99;

    i {
        position: relative;
        height: 2px;
        width: 100%;
        right: 0;
        background: var(--color-black);
        transition: .3s ease;
        
        &:nth-of-type(1) {
            width: 50%;
        }
        &:nth-of-type(3) {
            width: 70%;
        }
    }

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`;

const menuList: any[] = [
    {
        id: 0,
        title: 'Home',
        section_id: 'home-section'
    },
    {
        id: 1,
        title: 'About',
        section_id: 'home-section'
    },
    {
        id: 2,
        title: 'Contact',
        section_id: 'home-section'
    },
    {
        id: 3,
        title: 'Faq\'s',
        section_id: 'home-section'
    },
    {
        id: 4,
        title: 'Services',
        section_id: 'home-section'
    },
    {
        id: 5,
        title: 'Reviews',
        section_id: 'home-section'
    }
];

class Header extends React.Component {
    handleBurgerClick = (): void => {
        const menu = document.getElementById('menu-list');
        menu?.classList.toggle('open');
    };

    render(): React.ReactNode {
        return (
            <HeaderWrapper>
                <HeaderItemRow>
                    <HeaderItem>
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </HeaderItem>
                    <HeaderItem style={{ textAlign: 'right' }}>
                        <BurgerBtn onClick={this.handleBurgerClick}>
                            <i />
                            <i />
                            <i />
                        </BurgerBtn>
                        <HeaderMenuList id="menu-list">
                            {menuList.map((i: any) => (
                                <HeaderMenuItem key={i.id}>
                                    {i.title}
                                </HeaderMenuItem>
                            ))}
                        </HeaderMenuList>
                    </HeaderItem>
                </HeaderItemRow>
            </HeaderWrapper>
        );
    }
}

export default Header;
