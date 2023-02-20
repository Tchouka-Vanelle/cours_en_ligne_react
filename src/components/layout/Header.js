import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { menuData } from '../../data/menuData';
import  MenuButton from '../buttons/MenuButton';


const Header = () => {
    return (
        <Wrapper>
            <img src="/images/logos/logo.svg" alt="logo" />

            <MenuWrapper>
                {menuData.map(item => (
                   <MenuButton item={item}/>
                ))}
            </MenuWrapper>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    padding: 0 30px;

    position: absolute;
    top: 30px;

    display: grid;
    grid-template-columns: 44px auto;
    justify-content: space-between;//ca espace au maximum les enfants directs
    align-items: center;
`;

const MenuWrapper = styled.div`
    display: grid;//aligne les enfants direct en verticale(colonne)
    grid-template-columns: repeat(7 , auto);
    gap: 30px;
`;

