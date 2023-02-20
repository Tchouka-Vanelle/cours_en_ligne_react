import React from 'react';
import styled from 'styled-components';

const MockupAnimation = () => {
    return (
        <Wrapper>
            <div className="mockup1" />
            <div className="mockup2" /> 
            <div className="mockup3" /> 
            <div className="mockup4" /> 
            <div className="mockup5" /> 
        </Wrapper>
    );
}

export default MockupAnimation;

const Wrapper = styled.div`
    position: relative;
    perspective: 800;//permet de creer un effet de profondeur, = distance de l'observateur a l'axe z
    perspective-origin: bottom right;//l'observateur est en bas a droite

    div {
        transform: rotateY(-20deg) rotateX(20deg);
        transform-origin: bottom left;
    }

    * {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover div {
        transform: rotateY(0deg) rotateX(0deg);

        :hover {
            filter: brightness(150%) saturate(120%);
        }

        // :hover div.mockup1
        &.mockup1 {// & == au parent direct
            transition-delay: 0.1s;
            transform: translate(-30px, -30px);
        }
        &.mockup2 {// & == au parent direct
            transition-delay: 0.2s;
            transform: translate(0, -30px);
        }
        &.mockup3 {// & == au parent direct
            transition-delay: 0s;
        }
        &.mockup4 {// & == au parent direct
            transition-delay: 0.1s;
            transform: translate(-120px, 30px);
        }
        &.mockup5 {// & == au parent direct
            transition-delay: 0.2s;
            transform: translate(-90px, 30px);
        }
    }

    .mockup1 {
        position: absolute;
        width: 183px;
        height: 120px;
        left: 0px;
        top: 0px;

        background: url("/images/animations/mockup1.svg"),
                    radial-gradient(
                        218.51% 281.09% at 100% 100%, 
                        rgba(253, 63, 51, 0.6) 0%,
                        rgba(76, 0, 200, 0.6) 45.83%, 
                        rgba(76, 0, 200, 0.6) 100%
                    );
        box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
        backdrop-filter: blur(10.9254px);
        border-radius: 16.3881px;
    }

    .mockup2 {
        position: absolute;
        width: 183px;
        height: 120px;
        left: 214px;
        top: 0px;

        background: url("/images/animations/mockup2.svg"),
                    linear-gradient(
                        198.85deg, 
                        #4316DB 12.72%, 
                        #9076E7 54.49%, 
                        #A2EEFF 100.01%
                    );
        box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
                    0px 16.3824px 32.7648px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(10.9216px);
        border-radius: 16.3881px;
    }

    .mockup3 {
        position: absolute;
        width: 701px;
        height: 428px;
        left: 40px;
        top: 60px;

        background: url("/images/animations/mockup3.svg"), rgba(23, 12, 61, 0.5);
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(13.6922px);
        border-radius: 16.3881px;
    }

    .mockup4 {
        position: absolute;
        width: 399px;
        height: 274px;
        left: 194px;
        top: 262px;

        background: url("/images/animations/mockup4.svg"), rgba(39, 28, 62, 0.3);
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 8px;
    }

    .mockup5 {
        position: absolute;
        width: 412px;
        height: 274px;
        left: 616px;
        top: 262px;

        background: url("/images/animations/mockup5.svg"), rgba(39, 28, 62, 0.3);
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        border-radius: 8px;
    }
`;