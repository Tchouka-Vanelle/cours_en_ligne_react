import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, SmallText, H3 } from '../../styles/TextStyles'

const testi = [
    {
        picture: '...',
        name: 'Pablo Stanley',
        profession: 'DESIGNER AT BLUSH',
        description: "Meng To's book totally changed my design workflow. It even inspired me to start design workshops and YouTube tutorials."
    },
    {
        picture: '...',
        name: 'Liu Yi',
        profession: 'FOUNDER OF PRICE TAG',
        description: 'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.'
    }
]


const Testimonial = () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                {
                    testi.map((item, index) =>
                     (
                        <Testi key={`test-${index}`}>
                            <Img src={item.picture} />
                            <Name> {item.name} </Name>
                            <Profession> {item.profession} </Profession>
                            <Description> {item.description} </Description>
                        </Testi>
                    ))
                }
                <Content>
                    <Title>Trusted by teams</Title>
                    <SubTitle>75,000 people</SubTitle>
                    <Comment>Many companies look for designers who code and developers who design. They use our courses an example to train their new hires.</Comment>
                </Content>

            </ContentWrapper>
        </Wrapper>
    );
}

export default Testimonial;

const Wrapper = styled.div`
    margin: auto;
`

const ContentWrapper = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 60px;

    max-width: 1234px;

    margin: auto;
    margin-bottom: 140px;
`

const Testi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    gap: 14px;

    width: 340px;
    height: 224px;

    background: rgba(15, 14, 71, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
`

const Img = styled.img`
`

const Name = styled(Caption)`
    color: ${themes.dark.text2};
`

const Profession = styled(SmallText)`
    color: #FF9595;
`

const Description = styled(SmallText)`
    color: ${themes.dark.text2};
    max-height: 1%;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    width: 360px;
    height: 175px;


    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`

const Title = styled(Caption2)`
    width: 153px;
    height: 19px;

    /* Caption 2 */

    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    text-transform: uppercase;

    /* Text 2 */

    color: ${themes.dark.text2};


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

const SubTitle = styled(H3)`
    width: 360px;
    height: 48px;

    /* Header H2 */

    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */


    /* Text */

    color: ${themes.light.text1};

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

const Comment = styled(Caption)`
    width: 360px;
    height: 88px;

    max-width: 84%;

    /* Medium Text */

    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    /* or 22px */


    /* Text 2 */

    color: ${themes.dark.text2};

    mix-blend-mode: normal;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`