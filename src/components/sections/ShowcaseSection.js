import React from 'react';
import styled from 'styled-components';

// Components
import CourseCard from '../cards/CourseCard';

// Styles
import { H3, SmallText, SmallText2, MediumText } from '../../styles/TextStyles';
import {themes} from '../../styles/ColorStyles'

// Data
import { courseData, thumbnailsData } from '../../data';



const ShowcaseSection = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <DescriptionWrapper>
                    <TextWrapper>
                        <Comment>80 hours of courses</Comment>

                        <Title>Learn the best tools and platforms</Title>

                        <Description>
                            We focus on industry leading platforms so that you can be prepared for your next job. 
                            Then we teach all we can about them.
                        </Description>
                    </TextWrapper>

                    <ThumbnailsWrapper>
                        {thumbnailsData.map((src, index) => (
                            <Thumbnail src={src} key={`thumbnail-${index}`} />
                        ))}
                    </ThumbnailsWrapper>

                    <SearchWrapper>
                        <IconSearch src="/images/icons/search.svg" />
                        <Placeholder>Search</Placeholder>
                    </SearchWrapper>
                </DescriptionWrapper>

                <CourseInfoWrapper>
                    <CourseDetailCard />
                    <CourseMenu />
                </CourseInfoWrapper>
            </ContentWrapper>

            <CoursesWrapper>
                {courseData.map(item => (
                    <CourseCard 
                        bg={item.bg}
                        title={item.title}
                        duration={item.duration}
                        thumbnail={item.thumbnail}
                        avatars={item.avatars}
                    />
                ))}
            </CoursesWrapper>

            <FooterWrapper>
                <Footer1>
                    <div className="f1" />
                    <div className="f2" /> 
                    <div className="f3" /> 
                    <div className="f4" /> 
                    <div className="f5" /> 
                </Footer1>
                <Footer2>
                    <Img src='...'/>
                    <Msg>Browse courses</Msg>
                </Footer2>
            </FooterWrapper>
        </Wrapper>
    );
}

export default ShowcaseSection;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    max-width: 1234px;
    margin: 0 auto;
    padding: 100px 30px;
    display: grid;
    gap: 100px;
`;

const DescriptionWrapper = styled.div`
    display: grid;
    grid-template-columns: 360px auto 204px;
    justify-content: space-between;
    align-items: flex-end;
`;

const TextWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

const ThumbnailsWrapper = styled.div`
    max-width: 428px;

    display: grid;
    grid-template-columns: repeat(7, auto);
    gap: 20px;
`;

const SearchWrapper = styled.div`
    width: 204px;
    height: 44px;
    padding-left: 15px;

    background: linear-gradient(
                    180deg, 
                    rgba(99, 106, 150, 0.4) 0%,
                    rgba(182, 186, 214, 0.25) 100%
                );
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;

    display: grid;
    grid-template-columns: 24px auto;
    align-items: center;
    gap: 10px;
`;

const Comment = styled(SmallText2)`
    color: ${themes.dark.text2};
`;

const Title = styled(H3)`
    color: ${themes.dark.text1};
`;

const Description = styled(MediumText)`
    color: ${themes.dark.text2};
`;

const Thumbnail = styled.img`
    width: 44px;
    height: 44px;

    background-color: #555;
    border-radius: 22px;
`;

const IconSearch = styled.img``;

const Placeholder = styled(MediumText)`
    color: ${themes.dark.text2};
`;

const CourseInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 35px;
`;

const CourseDetailCard = styled.div`
    height: 400px;

    background: url(), rgba(15, 14, 71, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 20px;
`;

const CourseMenu = styled.div`
    height: 400px;

    background: rgba(15, 14, 71, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 20px;
`;

const CoursesWrapper = styled.div`
    max-width: 1320px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FooterWrapper = styled.div`
    display:grid;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap:20px;
    position: relative;
    padding: 20px 0;
`;

const Footer1 = styled.div`
       
        display: flex;
        gap: 7px;
        width: 87px;
        height: 9px;
        justify-content: center;
        margin: auto;
        
        
    .f1 {
        width: 9px;
        height: 9px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.5);
    }

    .f2 {
        width: 9px;
        height: 9px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.1);
    }

    .f3 {
        width: 9px;
        height: 9px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.1);
    }

    .f4 {
        width: 9px;
        height: 9px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.1);
    }

    .f5 {
        width: 9px;
        height: 9px;
        border-radius: 30px;
        background: rgba(0, 0, 0, 0.1);
    }

`;

const Footer2 = styled.div`
    display: flex;
    
    align-items: center;
    padding: 12px 14px;
    gap: 14px;


    width: 186px;
    height: 44px;

    background: linear-gradient(180deg, rgba(24, 32, 79, 0.4) 0%, rgba(24, 32, 79, 0.25) 100%);
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

`;


const Img = styled.img`

`

const Msg = styled.div`
    
`