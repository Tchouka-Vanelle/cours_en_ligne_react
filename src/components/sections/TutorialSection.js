import React from "react";
import styled from 'styled-components';

// Components
import HandBook from "../cards/HandBook";

// Styles
import { themes } from '../../styles/ColorStyles';
import { MediumText, H2, SmallText } from '../../styles/TextStyles';


const handBook = [
    {
        bg: '#C3485E',
        title: 'FEATURED',
        subTitle: 'The Figma Handbook',
        description: 'A comprehensive guide to the best tips and tricks in SwiftUI',
        logo: '...',
        image1: '...',
        texte1: '30 free tutorials',
        image2: '...',
        texte2: 'Videos, PDF, files',
        texte3: 'PRO',
        bgShadow: 'rgba(248, 107, 181)'
    },

    {
        bg: '#4A48C3',
        title: 'FEATURED',
        subTitle: 'The SwiftUI Handbook',
        description: 'A comprehensive guide to the best tips and tricks in SwiftUI',
        logo: '...',
        image1: '...',
        texte1: '30 free tutorials',
        image2: '...',
        texte2: 'Videos, PDF, files',
        texte3: 'PRO',
        bgShadow: 'rgba(107, 112, 248, 0.5)'
    }
]

const TutorialSection = () =>{
    return(
        <Wrapper>
            <WrapperContent>
                <WrapperTuto>
                    <Title>PRENIUM TUTORIALS</Title>
                    <SubTitle>Tutorials to guide you beyond</SubTitle>
                    <Description>Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge.</Description>
                    <Footer>
                        <Img src='...'/>
                        <Msg>Browse tutorials</Msg>
                    </Footer>
                </WrapperTuto>

                {handBook.map( (item, index) => ( <HandBook key={`card-${index}`} bg={item.bg} title={item.title} subTitle={item.subTitle} description={item.description} logo={item.logo} image1={item.image1} texte1={item.texte1} image2={item.image2} texte2={item.texte2} texte3={item.texte3} bgShadow={item.bgShadow} /> )
                )}
 
            </WrapperContent>
        </Wrapper>
    );
}


export default TutorialSection;

const Wrapper = styled.div`
    
`

const WrapperContent = styled.div`
    display: grid;
    max-width: 1034px;
    margin: auto;
    margin-top: 100px;
    justify-content: center;
    grid-template-columns: 360px 300px 300px;
    gap: 60px;

    margin-bottom: 40px;

`

const WrapperTuto = styled.div`
    width: 360px;
    height: 285px;
    display: grid;
    gap: 7px;
    margin: auto;
`


const Title = styled(MediumText)`
    color: ${themes.light.text2};

`

const SubTitle = styled(H2)`
    color: ${themes.light.text1};
`

const Description = styled(SmallText)`
    color: ${themes.dark.text2};
`


const Footer = styled.div`
      display: flex;
    
    align-items: center;
    padding: 12px 14px;
    gap: 14px;


    width: 186px;
    height: 44px;

    background: linear-gradient(180deg, rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%);
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
`

const Img = styled.img`
`

const Msg = styled.div`
`