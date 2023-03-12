import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, SmallText, H3 } from '../../styles/TextStyles'

const liste = [
    {
        picture: '/images/mesIcones/Logos/icone_square.svg',
        name: 'Square'
    },

    {
        picture: '/images/mesIcones/Logos/icone_apple.svg',
        name: '...'
    },

    {
        picture: '...',
        name: 'facebook'
    },

    {
        picture: '/images/mesIcones/Logos/airbnb.svg',
        name: '...'
    },

    {
        picture: '/images/mesIcones/Logos/google.svg',
        name: '...'
    },

    {
        picture: '/images/mesIcones/Logos/amazon.svg',
        name: '...'
    }

]

const Logos = () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                {liste.map((item, index) => 
                (<Logo key={`logo-${index}`}>
                    <Picture src={item.picture}/>
                    <Name>{item.name}</Name>
                </Logo>)
                 )}
            </ContentWrapper>
        </Wrapper>
    );
}

export default Logos;

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
    max-width: 70%;
    max-height: 46px;

    display: flex;
    gap: 30px;

    margin: auto;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    display: flex;
    gap: 10px;

`

const Picture = styled.img`
    margin: auto;
`

const Name = styled(H3)`
margin: auto;
`