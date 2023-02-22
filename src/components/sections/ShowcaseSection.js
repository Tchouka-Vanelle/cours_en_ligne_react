import React from 'react';
import styled from 'styled-components';
import { H3, SmallText, SmallText2, MediumText } from '../../styles/TextStyles';
import { themes } from '../../styles/ColorStyles';
import CourseCard from '../cards/CourseCard';

const thumbnailsSrc = [
    '/images/logos/swiftui-logo.svg',
    '/images/logos/react-logo.svg',
    '/images/logos/figma-logo.svg',
    '/images/logos/framer-logo.svg',
    '/images/logos/webflow-logo.svg',
    '/images/logos/protopie-logo.svg'
];

const courses = [
    {
        title: 'UI Design for Developers',
        duration: '20 videos - 3 hours',
        thumbnail: '/images/icons/tutorials.svg',
        avatars: ['', ''],
        bg: 'linear-gradient(180deg, #DC5F93 0%, #9356D0 100%)'
    },
    {
        title: 'UI Design for Android',
        duration: '20 videos - 3 hours',
        thumbnail: '/images/icons/tutorials.svg',
        avatars: ['', ''],
        bg: 'linear-gradient(200.42deg, #FF8570 13.57%, #F9504A 98.35%)'
    },
    {
        title: 'Design & Code in Framer web',
        duration: '20 videos - 3 hours',
        thumbnail: '/images/icons/tutorials.svg',
        avatars: ['', ''],
        bg: 'linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%)'
    },
    {
        title: 'React for Designers',
        duration: '20 videos - 3 hours',
        thumbnail: '/images/icons/tutorials.svg',
        avatars: ['', ''],
        bg: 'linear-gradient(180deg, #343563 0%, #4926AD 100%)'
    },
    {
        title: 'Flutter for Designers',
        duration: '20 videos - 3 hours',
        thumbnail: '/images/icons/tutorials.svg',
        avatars: ['', ''],
        bg: 'linear-gradient(360deg, #2FB8FF 0%, #9EECD9 100%)'
    }
]

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
                        {thumbnailsSrc.map((src, index) => (
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
                {courses.map(item => (
                    <CourseCard 
                        bg={item.bg}
                        title={item.title}
                        duration={item.duration}
                        thumbnail={item.thumbnail}
                        avatars={item.avatars}
                    />
                ))}
            </CoursesWrapper>
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