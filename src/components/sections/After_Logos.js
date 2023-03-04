import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, H2 } from '../../styles/TextStyles'


const After_Logos = () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                <Title>who’s behind</Title>
                <SubTitle>Meet the instructors</SubTitle>
                <Description>We all try to be consistent with our way of teaching step-by-step, providing source files and prioritizing design in our courses.</Description>
            </ContentWrapper>
        </Wrapper>
    );
}

export default After_Logos;

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
    max-width: 28%;//em se base sur la taille du texte du parent pour obtenir sa taille
    margin: 7% auto;// top-bottom puis droit-gauche

    display: grid;
    gap: 30px;

    justify-content: center;
    align-items: center;

    text-align: center;
`

const Title = styled(Caption2)`
    color: ${themes.light.text2};
`

const SubTitle = styled(H2)`
    color: ${themes.dark.text1};
`

const Description = styled(Caption)`
    color: ${themes.dark.text2};
`