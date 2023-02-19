//est la petite section qui comporte une icone dans la section HeroButton
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Caption2, SmallText } from '../../styles/TextStyles';
import { themes } from '../../styles/ColorStyles';

const PurchaseButton = () => {
    return (
        <Link to="/page-2">
            <Wrapper>
                <IconWrapper>
                    <IconCredit src="/images/mesIcones/HeroSection/pricing.svg" className="icon" />
                    <IconRing src="/images/mesIcones/HeroSection/icon-ring.svg" />
                </IconWrapper>

                <TextWrapper>
                    <Title>Get Pro Access</Title>
                    <SubTitle>$19 per month</SubTitle>
                </TextWrapper>
            </Wrapper>
        </Link>
    );
};

export default PurchaseButton;

const Wrapper = styled.div`
    width: 280px;
    height: 77px;
    padding: 12px;//creer un espace de chaque coter de ces bordures intereures pour ne pas etre en contact avec ses enfants

    background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2), 
                inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    display: grid;
    grid-template-columns: 53px auto;
    align-items: center;
    gap: 20px;//distance verticale entre chacun des enfants du wrapper
    
    *, & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 
                    0px 20px 40px rgba(23, 0, 102, 0.2),
                    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
                
        transform: translateY(-3px);

        .icon {
            transform: scale(1.2);
        }
    }
`;

const TextWrapper = styled.div`
    display: grid;
    gap: 4px;
`;

const IconWrapper = styled.div`
    width: 53px;
    height: 53px;

    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
    border-radius: 50%;

    display: grid; 
    justify-content: center;//aligne ses enfants sur a l'axeprincipale(verticale)
    align-content: center;///aligne ses enfants sur a l'axe secondaire(horizontale) (cross axe)
    justify-self: center;//?????????aligne l'elt lui-meme % a quoi??????????????????? sa presence ne chnage rien appear

    position: relative;//car IconRing a la position absolute, enfait on veut positonner IconRing par rapport au IconWrapper ie % a son parent le plus proche (ce dernier doit donc avoir une position relative ou absolu)
`;

const Title = styled(Caption2)`
    color: ${themes.light.text1};
`;

const SubTitle = styled(SmallText)`
    color: ${themes.light.text2};
`;

const IconCredit = styled.img`
    width: 29px;
    height: 29px;
`;

const IconRing = styled.img`
    position: absolute;
    top: -11px; 
    left: -12px;
    transform: scale(1.1);

    ${Wrapper}:hover & {
        filter: hue-rotate(10deg) brightness(150%) saturate(120%);
        transform: rotate(30deg) scale(1.2) translate(1px, 1px);//pour agrandir la taille de element
    }
`;
