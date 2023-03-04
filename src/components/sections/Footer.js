import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, SmallText, H2, MediumText } from '../../styles/TextStyles'


const column1 = [
    {
        icone: '/images/mesIcones/Footer/home.svg',
        name: 'Home'
    },
    {
        icone: '/images/mesIcones/Footer/courses.svg',
        name: 'Courses'
    },
    {
        icone: '/images/mesIcones/Footer/tutorials.svg',
        name: 'Tutorials'
    },
    {
        icone: '/images/mesIcones/Footer/pricing.svg',
        name: 'Princing'
    },
    {
        icone: '/images/mesIcones/Footer/updates.svg',
        name: 'Updates'
    }
]

const column2 = [
    {
        icone: '/images/mesIcones/Footer/downloads.svg',
        name: 'Downloads'
    },
    {
        icone: '/images/mesIcones/Footer/search.svg',
        name: 'Search'
    },
    {
        icone: '/images/mesIcones/Footer/account.svg',
        name: 'Accounts'
    },
    {
        icone: '/images/mesIcones/Footer/license.svg',
        name: 'Gift Licenses'
    },
    {
        icone: '/images/mesIcones/Footer/help.svg',
        name: 'Help'
    }
]

const Footer= () =>{
    return(
        <Wrapper>
            <ContentWrapper>

                <Column>
                    {column1.map((item, index) => 
                    <Value key={`val_${index}`}>
                        <Icone src={item.icone} />
                        <Name> {item.name} </Name>
                    </Value>)}
                </Column>

                <Column>
                    {column2.map((item, index) => 
                    <Value key={`val_${index}`}>
                        <Icone src={item.icone} />
                        <Name> {item.name} </Name>
                    </Value>)}
                </Column>

                <Description>
                    <Language>Site made with React, Gatsby, Netlify and Contentful. Learn how.</Language>
                    <Source>Design+Code © 2020</Source>
                    <Comment>Terms of Service - Privacy Policy</Comment>
                </Description>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
`
const ContentWrapper = styled.div`
    margin: 140px auto 70px auto;
    display: grid;
    grid-template-columns: 160px 160px 280px;
    gap: 14px;

    justify-content: center;

`
const Column = styled.div`
    margin: auto;
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 160px;
    height: 300px;

    border-radius: 14px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const Value = styled.div`
    display: flex;

    align-items: center;
    
    padding: 10px;
    gap: 10px;

    width: 160px;
    height: 44px;

    :hover{
        
        background: rgba(255, 255, 255, 0.1);
        background-blend-mode: overlay;
        mix-blend-mode: normal;
        border: 0.5px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
    }

`
const Icone = styled.img`
`
const Name = styled(Caption)`
    color: ${themes.dark.text2};
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 280px;
    height: 108px;

    margin: auto;
    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
const Language = styled(SmallText)`
    color: ${themes.dark.text2};
`
const Source = styled(SmallText)`
    color: ${themes.dark.text2};
`
const Comment = styled(SmallText)`
    color: ${themes.dark.text2};
`
