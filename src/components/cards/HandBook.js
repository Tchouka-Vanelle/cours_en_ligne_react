import React from "react";
import styled from "styled-components";
import {BodyIntro, Caption, SmallText} from '../../styles/TextStyles'
import {themes} from '../../styles/ColorStyles'

const HandBook = (props) =>{

    const { bg, title, subTitle, description, logo, image1, texte1, image2, texte2, texte3, bgShadow } = props;

    return(
        <WrapperHand bg={bg} bgShadow={bgShadow}>
            <ContentWrapper>

                <Header>
                    <Title>{title}</Title>
                    <Logo src={logo} />
                </Header>

                <SubTitle>{subTitle}</SubTitle>

                <Description>{description}</Description>

                <Footer>

                    <Footer1>
                        <Image1 src={image1} />
                        <Texte1> {texte1} </Texte1>
                    </Footer1>

                    <Footer2>
                        <Image2 src={image2} />
                        <Texte2> {texte2} </Texte2>
                        <Texte3> {texte3} </Texte3>
                    </Footer2>

                </Footer>

            </ContentWrapper>
        </WrapperHand>
    );
}

export default HandBook;

const WrapperHand = styled.div`
    width: 300px;
    background: ${props => props.bg};
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);

    box-shadow: 10px 10px 1px ${props => props.bgShadow};
    
`

const ContentWrapper = styled.div`
    display: grid;
    gap:17px;
    padding:1em;
    
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled(SmallText)`
    color: ${themes.dark.text2};
`

const Logo = styled.img`
    width: 32px;
    height: 32px;
`

const SubTitle = styled(BodyIntro)`
    color: ${themes.dark.text1};
    max-width: 200px;
    height: 72px;
`

const Description = styled(Caption)`
    color: ${themes.dark.text2};
    max-width: 17em;
`

const Footer = styled.div`
   display: grid;
   gap:24px
`

const Footer1 = styled.div`
   display: grid;
   grid-template-columns: 32px 117px;

   align-items: center;

   gap:10px
`
const Image1 = styled.img`
   height: 32px;
   width: 32px;
`

const Texte1 = styled(SmallText)`
    width: 117px;
    height: 18px;
`

const Footer2 = styled.div`
   display: grid;
   grid-template-columns: 32px 126px 40px;

   align-items: center;

   gap:10px
`

const Image2 = styled.img`
   height: 32px;
   width: 32px;
`

const Texte2 = styled(SmallText)`
    width: 126px;
    height: 18px;
`

const Texte3 = styled(SmallText)`
    width: 40px;
    height: 20px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    
    text-align: center;
`
