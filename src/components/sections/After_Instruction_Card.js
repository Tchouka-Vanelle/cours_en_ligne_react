import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, SmallText, H2 } from '../../styles/TextStyles'


const After_Instruction_Card= () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                <Title>Ready to start?</Title>
                <Description>Get access to all our premium courses, tutorials, downloads, certificates and priority support.</Description>
                <Toggle>
                    <Month>Monthly</Month>
                    <Annual>Annual</Annual>
                </Toggle>
                <Save>Save 48%</Save>
            </ContentWrapper>
        </Wrapper>
    );
}

export default After_Instruction_Card;

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 27px;
    max-width: 414px;

    margin: auto;
    margin-bottom: 2px;

    justify-content: center;
    align-items: center;
    
    position: relative;

`


const Title = styled(H2)`
    color: ${themes.light.text1};
`


const Description = styled(Caption)`
    color: ${themes.dark.text2};
    text-align: center;
`


const Toggle = styled.div`

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    
    align-items: center;
    padding: 4px;
    gap: 24px;

    position: absolute;
    width: 47%;
    max-width: 220px;
    height: 47%;
    min-height: 47px;
    left: 27%;
    top: 140%;

    background: linear-gradient(180deg, rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%);
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

`


const Month = styled(Caption)`

    color: ${themes.light.text2};

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;

    width: 98px;
    height: 35px;

    background: #FFFFFF;
    border-radius: 30px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`


const Annual = styled(Caption)`
    color: ${themes.dark.text2};
`

const Save = styled(SmallText)`

    color: #1F1F47;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 8px;

    position: absolute;
    width: 18%;
    max-width: 124px;

    height: 22px;
    left: 67%;
    top: 181%;

    background: #FFFFFF;
    border-radius: 10px;
`