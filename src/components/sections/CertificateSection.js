import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles';
import { MediumText, H3, Caption, SmallText } from '../../styles/TextStyles';

const CertificateSection = () =>{
    return(
        <Wrapper>
            <ContentWrapper>

                <Certfiate>
                        <Certificate1>
                            <Certificate2>
                                <Img2>
                                    <Img1 src="/images/logos/pen_tool-logo.svg"/>
                                </Img2>
                                <Certificate3>
                                    <Img src="/images/logos/swiftui-logo.svg"/>
                                    <Certificate4>
                                        <Img src="/images/logos/figma-logo.svg"/>
                                    </Certificate4>
                                </Certificate3>
                            </Certificate2>
                        </Certificate1>
                </Certfiate>

                <TextWrapper>
                    <Header>CREATE A PROFILE</Header>
                    <Title>Get certificates</Title>
                    <Description>
                        After passing a test, we’ll award you with an online certificate. You can also submit projects as a result of taking our courses.
                    </Description>
                    <Footer>
                        <Footer1 src="/images/icons/certificates.svg" />
                        <Footer2> Create account </Footer2>
                    </Footer>
                </TextWrapper>

            </ContentWrapper>
        </Wrapper>
    );
}

export default CertificateSection;

 
const Wrapper = styled.div`

`

const ContentWrapper = styled.div`
    width: 1061px;
    height: 280px;
    max-width: 1234px;

    margin: auto;
    margin-bottom: 40px;
    margin-top: 184px;

    display: grid;
    grid-template-columns: 641px 360px;

    gap: 40px;
`

const Certfiate = styled.div`
    width: 641px;
    height: 280px;
   
    margin: auto;
   
    display: flex;
`

const TextWrapper = styled.div`
    width: 360px;
    height: 237px;

    display: grid;
    gap: 10px;
`

const Header = styled(Caption)`
    color: ${themes.dark.text2};
`

const Title = styled(H3)`
    color: ${themes.light.text1};
`

const Description = styled(Caption)`

    max-width: 290px;
    color: ${themes.dark.text2};
`

const Footer = styled.div`

    display: flex;
    
    align-items: flex-start;
    padding: 10px 14px;
    gap: 10px;

    width: 183px;
    height: 44px;

    background: ${themes.dark.text2};
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

    align-items: center;
`

const Footer1 = styled.img`

`

const Footer2 = styled(SmallText)`
    color: ${themes.dark.text1};
`

const Certificate1 = styled.div`

    box-sizing: border-box;

    position: relative;
    left: 17em;

    width: 268.18px;
    height: 220px;

    background: linear-gradient(240.9deg, rgba(255, 255, 255, 0.6) 0.04%, rgba(255, 255, 255, 0) 100%);
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0px 30px 60px rgba(39, 77, 153, 0.1));
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 27.2727px;


    justify-self: flex-end;
`

const Certificate2 = styled.div`
    position: absolute;
    width: 295px;
    height: 220px;
    right: 44px;
    top: -1.3em;

    background: radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 30px 60px rgba(39, 77, 153, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
`

const Certificate3 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 315px;
    height: 220px;
    right: 74px;
    top: -1.3em;

    background: radial-gradient(100% 128.38% at 100% 100%, rgba(51, 168, 253, 0.2) 0%, rgba(76, 0, 200, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 30px 60px rgba(39, 77, 153, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
`

const Certificate4 = styled.div`
    box-sizing: border-box;

    position: absolute;

    width: 335px;
    height: 220px;
    right: 124px;
    top: -1.3em;


    background:  url('/images/icons/certificates.svg') no-repeat center, radial-gradient(218.51% 281.09% at 100% 100%, rgba(253, 63, 51, 0.6) 0%, rgba(76, 0, 200, 0.6) 45.83%, rgba(76, 0, 200, 0.6) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 30px 60px rgba(39, 77, 153, 0.2);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
   
`

const Img = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    right: 20px;
    top: 20px;

`

const Img2 = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    right: 20px;
    top: 20px;

    background: ${themes.dark.text1};
    border-radius: 70px;
    
    display: grid;
    justify-content: center;
    align-items: center;
`

const Img1 = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;

    right: 7px;
    top: 7px;
`