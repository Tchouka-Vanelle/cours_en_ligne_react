//cette section est celle tout a gauche en haut de la partie main
import React from 'react';
import styled from 'styled-components';

// Components
import PurchaseButton from '../buttons/PurchaseButton';
import MockupAnimation from '../animations/MockupAnimation';

// Styles
import { themes } from '../../styles/ColorStyles';
import { H1, MediumText, SmallText } from '../../styles/TextStyles';


const HeroSection = (props) => {
    return(
        <Wrapper>
            <ContentWrapper>
                {/* <img src="/images/logos/logo.svg" alt="logo" /> */}

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

                <MockupAnimation />
            </ContentWrapper>
        </Wrapper>
    );
}

export default HeroSection;


const Wrapper = styled.div`
    background: linear-gradient(140deg, #4316db 0%, #9076e7 70%);
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 200px 30px;

    display: grid;
    grid-template-columns: 360px auto;
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