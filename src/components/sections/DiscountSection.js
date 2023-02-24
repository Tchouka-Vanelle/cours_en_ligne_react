import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, H3 } from '../../styles/TextStyles'


const logos = [
    {
        comment: '3 months free Figma Pro',
        logo: '/images/logos/figma-logo.svg',
    },
    {
        comment: '20% off Sketch',
        logo: '/images/logos/sketch-logo.svg',
    },
    {
        comment: '50% off Shape',
        logo: '/images/logos/shape-logo.svg',
    },
    {
        comment: '50% off Angle',
        logo: '/images/logos/angle-logo.svg',
    },
    {
        comment: '20% off ProtoPie',
        logo: '/images/logos/protopie-logo.svg',
    },
    {
        comment: '30% off UI8',
        logo: '/images/logos/ui8-logo.svg',
    }
   
]


const DiscountSection = () =>{
    return(
        <Wrapper>
            <ContentWrapper>

                <Content>
                    <Title>START WITH MORE</Title>
                    <SubTitle>Get discounts</SubTitle>
                    <Description>We’ve partnered with the biggest design tools on the market to help you get started.</Description>
                </Content>

                <Logos>
                    {
                        logos.map((item, index) => (
                                        <Logo key={`logo-${index}`} >
                                            <Logo2 logo={item.logo} > 
                                                <Logo1 src={item.logo} />
                                                {item.comment}
                                             </Logo2>
                                        </Logo>
                                                    )
                    )}
                </Logos>

            </ContentWrapper>
        </Wrapper>
    );
}

export default DiscountSection;

const Wrapper = styled.div`
     margin: 140px 0;
`

const ContentWrapper = styled.div`

    width: 1290px;
    height: 151px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    gap: 40px;

    margin: auto;
    justify-content: center;
    align-items: center;

    max-width: 1234px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 360px;
    height: 151px;
`

const Title = styled(Caption2)`
    color: ${themes.dark.text2};
`

const SubTitle = styled(H3)`
    color: ${themes.light.text1};
`

const Description = styled(Caption)`
    color: ${themes.dark.text2};
    max-width: 87%;
`

const Logos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;

    width: 870px;
    height: 142px;

`

const Logo = styled.div`
    width: 120px;
    height: 142px;
    display: grid;
    gap:0px;

    justify-content: center;
    align-items: center;
   
`

const Logo1 = styled.img`
    width: 44px;
    height: 44px;

    justify-self: center;

    position: absolute;

    top: -1.7em;
    //right: 50%;
`

const Logo2 = styled.div`
    width: 120px;
    height: 120px;
    display: grid;

    position: relative;

    justify-self: center;

    background-color: ${themes.dark.text2};
    
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);

    border-radius: 100px;

    text-align: center;//centre le texte horizontalement
    justify-content: center;//centre l'image horizontalement
    align-items: center;//centre l'image et le texte verticalement
`