import React from 'react';
import styled from 'styled-components';
import { H3, MediumText } from '../../styles/TextStyles';
import { themes } from '../../styles/ColorStyles';

const CourseCard = (props) => {
    const  { bg, title, thumbnail, duration, avatars } = props;
    
    return (
        <Wrapper bg={bg}>
            <ContentWrapper>
                
                <Avatars>
                    <Avatar src={avatars[0]}/>
                    <Avatar src={avatars[1]}/>
                </Avatars>
                <ContentWrapper>
                    <Illustration src={thumbnail} />

                    <Title>{ title }</Title>

                    <Subtitle>{ duration }</Subtitle>

                    <ActionWrapper>
                        <Icon src="/images/icons/notification.svg" />
                        <Icon src="/images/icons/like.svg" />
                    </ActionWrapper>
                </ContentWrapper>

                
            </ContentWrapper>
        </Wrapper>
    );
}

export default CourseCard;

const Wrapper = styled.div`
    width: 240px;
    height: 330px;

    background: ${props => props.bg};
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.05)) 
            drop-shadow(0px 20px 40px rgba(251, 94, 84, 0.3));
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`;


const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
`;

const Illustration = styled.img``;

const Title = styled(H3)`
    text-align: center;
`;

const Subtitle = styled(MediumText)`
    color: #fff;
`;

const ActionWrapper = styled.div`
    color: ${themes.dark.text2};
`;

const Icon = styled.div`
    width: 32px;
    height: 32px;
    display: inline-block;

    border-radius: 50%;
    background: url(${props => props.src}) no-repeat center, rgba(0, 0, 0, 0.2);
`;

const Avatars = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 10px;

    position: absolute;
    width: 32px;
    height: 74px;
    right: 20px;
    top: -44px;
`
const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 30px;
    
    justify-content: center;
    align-items: center;
`
