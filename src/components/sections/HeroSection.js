//cette section est celle tout a gauche en haut de la partie main
import React from 'react';
import styled from 'styled-components';
import { H1, MediumText, SmallText } from '../../styles/TextStyles';
import { themes } from '../../styles/ColorStyles';
import PurchaseButton from '../buttons/PurchaseButton';

const HeroSection = (props) => {
    return(
        <Wrapper>
            <ContentWrapper>
                <img src="/images/logos/logo.svg" alt="logo" />

                <TextWrapper>
                    <Title>Design <br /> and code React apps.</Title>

                    <Description>
                        Don’t skip design. 
                        Learn design and code, by building real apps with React and Swift. 
                        Complete courses about the best tools.
                    </Description>

                    <PurchaseButton />
                    <Comment>
                        Get access to 30 premium courses, tutorials and livestreams. 
                        Over 80 hours of content, source files and priority support.
                    </Comment>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default HeroSection;


const Wrapper = styled.div`
    background: linear-gradient(140deg, #4316db 0%, #9076e7 70%);
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;
`;

const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px; //espace entre les éléments est en display flex / grid
`;

const Title = styled(H1)`
    color: ${themes.dark.text1};
`;

const Description = styled(MediumText)`
`;

const Comment = styled(SmallText)`
    color: ${themes.light.text2};
    max-width: 280px;

`