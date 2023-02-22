import React from "react";
import styled from "styled-components";
import { SmallText, Caption, MediumText, BodyIntro } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

const Waves = () =>{

        return(
            <Wrapper>
                <WrapperContent>
                    <Row1>
                        <TextWrapper>
                            <Text1>80 HOURS OF COURSES</Text1>
                            <Text2>Learn the best tools and platforms</Text2>
                            <Text3>We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.</Text3>
                        </TextWrapper>
                        <BrowseMenu>
                            <div className="p1">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p2">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p3">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p4">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p5">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p6">
                                <div><img  src="/images/mesIcones/HeroSection/pricing.svg"/></div>
                            </div>
                            <div className="p7">
                                <div> <img src="/images/mesIcones/HeroSection/pricing.svg" /></div>
                            </div>
                        </BrowseMenu>
                        <SearchInput><img src="/images/mesIcones/HeroSection/pricing.svg"/></SearchInput>
                    </Row1>
                    <Row2>
                        <CourseDetailCard><img src="/images/animations/mockup1.svg" /></CourseDetailCard>
                        <CourseMenu><img src="/images/animations/mockup1.svg" /></CourseMenu>
                    </Row2>
                    <Row3>
                        <CourseCard><img src="/images/animations/mockup1.svg" /></CourseCard>
                        <CourseCard><img src="/images/animations/mockup1.svg" /></CourseCard>
                        <CourseCard><img src="/images/animations/mockup1.svg" /></CourseCard>
                        <CourseCard><img src="/images/animations/mockup1.svg" /></CourseCard>
                    </Row3>
                    <Foot>
                        <img src="/images/mesIcones/HeroSection/pricing.svg" />
                        <SmallText>Browse courses</SmallText>
                    </Foot>
                </WrapperContent>
            </Wrapper>
        );
}

export default Waves;

const Wrapper = styled.div`
    background: linear-gradient(180deg, #242452 0%, #4926AD 100%);
`

const WrapperContent = styled.div`
    display: grid;
    gap:30px;
`

const Row1 = styled.div`
    display: grid;
    grid-template-columns: 360px 428px 204px;
    gap: 40px;
`

const Row2 = styled.div`
    display: grid;
    grid-template-columns: 597px 592px;
    align-items: center;
    justify-content: space-around;
    //gap:40px;
`
const Row3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;

    position: absolute;
    width: 1320px;
    height: 330px;
    left: 60px;
    top: 1673px;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 360px;
    height: 221px;
    left: 113px;
    top: 962px;
`

const Text1 = styled(SmallText)`
    color: ${themes.dark.text2};
`

const Text2 = styled(BodyIntro)`
    color: ${themes.dark.text1};
`

const Text3 = styled(SmallText)`
    color: ${themes.dark.text2};
`

const BrowseMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items:space-between;
    justify-content: end;
    padding: 20px 0px;
    
    gap: 16px;

    position: absolute;
    width: 428px;
    height: 44px;
    left: calc(50% - 428px/2 + 67px);
    top: 1139px;

    .p1{
       
    }

    .p1 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        box-shadow: 0px 0px 67.8302px rgba(64, 55, 216, 0.610768);
    }

    .p2{
       

    }

    .p2 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #0F1951;
    }

    .p3{
        
    }

    .p3 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #000000;
       
    }

    .p4{
       
    }

    .p4 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #000000;
    }

    .p5{
        
    }

    .p5 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #000000;
    }


    .p6{
        
        
    }

    .p6 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #4353FF;

    }

    .p7{
       
    }

    .p7 div{
        padding:5px;
        justify-content: center;
        align-items: center;

        border-radius: 30px;
        background: #000000;
    }
`

const SearchInput = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 4px;

    position: absolute;
    width: 204px;
    height: 44px;
    left: 1123px;
    top: 1139px;

    background: linear-gradient(180deg, rgba(99, 106, 150, 0.4) 0%, rgba(182, 186, 214, 0.25) 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
`
const CourseDetailCard = styled.div`
      //background: url("/images/mesIcones/HeroSection/pricing.svg");  
`
const CourseMenu = styled.div`
     //background: url("/images/animations/mockup4.svg");
`

const CourseCard = styled.div`
   
`

const Foot = styled.div`

    color: ${themes.dark.text1};
    background: ${themes.dark.text2};

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    
    align-items: flex-start;//redimensionne l'image pourquoi??
    padding: 10px 12px;
    justify-content: center; 
    gap: 2rem;

    position: absolute;
    width: 186px;
    height: 44px;
    left: calc(50% - 186px/2);
    top: 124rem;

   
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
`
