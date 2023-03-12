import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, H2, H3, SmallText } from '../../styles/TextStyles'


const card = [
    {
        image: '/images/mesIcones/Insctruction_Card/Card1/image.svg',
        name: 'Meng To',
        profession: 'Designer and coder',
        description: 'I teach designers code and developers design.',
        picture1: '/images/mesIcones/Insctruction_Card/Card1/picture1.svg',
        picture2: '/images/mesIcones/Insctruction_Card/Card1/picture2.svg',
        picture3: '/images/mesIcones/Insctruction_Card/Card1/picture3.svg',

        title: '16 courses - 42 hours',

        image1: '/images/mesIcones/Insctruction_Card/Card1/image1.svg',
        bg1: '#4353FF',
        title1: 'UI Design for developers',
        hour1: '3 hrs',
        tape1: '13',// % de la largeur de la bande intérieur % a la bande exterieure
        explanation1: 'Learn the foundations of UI design and start designing...',

        image2: '/images/mesIcones/Insctruction_Card/Card1/image2.svg',
        bg2: '#18204D',
        title2: 'SwiftUI Part 3',
        hour2: '3 hrs',
        tape2: '7',
        explanation2: 'Learn how to create Neumorphic buttons, a login UI, Lottie...',

        image3: '/images/mesIcones/Insctruction_Card/Card1/image3.svg',
        bg3: '#18204D',
        title3: 'SwiftUI Part 2',
        hour3: '3 hrs',
        tape3: '43',
        explanation3: 'Learn about custom transitions, API calls and CMS in SwiftUI.',
    },
    {
        image: '/images/mesIcones/Insctruction_Card/Card2/image.svg',
        name: 'Daniel Nisttahuz',
        profession: 'Designer and coder',
        description: 'Motion Designer at Design+Code',
        picture1: '/images/mesIcones/Insctruction_Card/Card2/picture1.svg',
        picture2: '/images/mesIcones/Insctruction_Card/Card2/picture2.svg',
        picture3: '/images/mesIcones/Insctruction_Card/Card2/picture3.svg',

        title: '3 courses - 6 hours',

        image1: '/images/mesIcones/Insctruction_Card/Card2/image1.svg',
        bg1: '#1F0040',
        title1: 'Promo video in AE',
        hour1: '3 hrs',
        tape1: '13',// % de la largeur de la bande intérieur % a la bande exterieure
        explanation1: 'Learn the foundations of UI design and start designing...',

        image2: '/images/mesIcones/Insctruction_Card/Card2/image2.svg',
        bg2: '#FFFFFF',
        title2: 'Animating in Principle',
        hour2: '3 hrs',
        tape2: '7',
        explanation2: 'Learn how to create Neumorphic buttons, a login UI...',

        image3: '/images/mesIcones/Insctruction_Card/Card2/image3.svg',
        bg3: '#1F0040',
        title3: 'Motion Design in AE',
        hour3: '2 hrs',
        tape3: '43',
        explanation3: 'Learn After Effects to create motion graphic and animation',
    }

    
    
]

const Instruction_Card = () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                {card.map((item, index) => 
                (<Card key={`card-${index}`}>
                    <Left>
                        <Image src={item.image}/>
                        <Name> {item.name} </Name>
                        <Profession> {item.profession} </Profession>
                        <Description> {item.description} </Description>
                        <Icone>
                            <Picture src={item.picture1} />
                            <Picture src={item.picture2} />
                            <Picture src={item.picture3} />
                        </Icone>
                    </Left>
                    <Right>
                        <Title> {item.title} </Title>

                        <Row>
                            <SubRow>
                                <Logo src={item.image1} bg={item.bg1} />
                                <Middle>
                                    <SubTitle> {item.title1} </SubTitle>
                                    <Tape>
                                        <SubTape tape={item.tape1} />
                                    </Tape>
                                </Middle>
                                <Hours> {item.hour1} </Hours>
                            </SubRow>
                            <SubRow>
                                <Explanation>{item.explanation1}</Explanation>
                            </SubRow>
                        </Row>

                        <Row>
                            <SubRow>
                                <Logo src={item.image2} bg={item.bg2}/>
                                <Middle>
                                    <SubTitle> {item.title2} </SubTitle>
                                    <Tape>
                                        <SubTape tape={item.tape2} />
                                    </Tape>
                                </Middle>
                                <Hours> {item.hour2} </Hours>
                            </SubRow>
                            <SubRow>
                                <Explanation>{item.explanation2}</Explanation>
                            </SubRow>
                        </Row>

                        <Row>
                            <SubRow>
                                <Logo src={item.image3} bg={item.bg3}/>
                                <Middle>
                                    <SubTitle> {item.title3} </SubTitle>
                                    <Tape>
                                        <SubTape tape={item.tape3} />
                                    </Tape>
                                </Middle>
                                <Hours>{item.hour3}</Hours>
                            </SubRow>
                            <SubRow>
                            <Explanation>{item.explanation3}</Explanation>
                            </SubRow>
                        </Row>

                    </Right>
                </Card>)
            )}
               
            </ContentWrapper>
        </Wrapper>
    );
}

export default Instruction_Card;

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
    max-width: 88%;//em se base sur la taille du texte du parent pour obtenir sa taille
    margin: 7% auto;// top-bottom puis droit-gauche

    display: grid;
    grid-template-columns: 614px 614px;
    gap: 30px;

    justify-content: center;
    align-items: center;

    text-align: center;

`


const Card = styled.div`
    background: rgba(15, 14, 71, 0.3), url('/images/mesIcones/Insctruction_Card/Card2.svg');
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;

    height: 400px;

    padding: 20px;
`

const Left = styled.div`
    position: absolute;
    width: 240px;
    height: 360px;

    padding: 2%;
    padding-top: 7%;
    padding-bottom: 7%;
    

    /* Gradient 7 */

    background: linear-gradient(200.42deg, #844FFC 13.57%, #491EB8 98.35%);
    border-radius: 10px;
    margin: auto;

    display: grid;
    
    gap: 0px;

    justify-content: center;
    align-items: center;
`


const Image = styled.img`
    margin: auto;
`

const Name = styled(H3)`
    color:${themes.dark.text1};
`

const Profession = styled(Caption2)`
    color:${themes.dark.text2};
`

const Description = styled(SmallText)`
    color:${themes.dark.text2};
    max-width: 77%;
    margin: auto;
`

const Icone = styled.div`
    display: flex;
    gap:14px;
    margin: auto;
    justify-content: center;
    align-items: center;
`

const Picture = styled.img`
    width: 32px;
    height: 32px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 4px;

    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
    margin: auto;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    gap: 14px;

    position: absolute;
   
    left: 264px;

    width: 334px;
    height: 348px;

    padding: 20px;


`
const Title = styled(Caption2)`
   color:${themes.dark.text2};
`

const Row = styled.div`
    display: grid;
    gap: 7px;

    padding: 5px;

    
    :hover {
        width: 106%;
        background: rgba(255, 255, 255, 0.1);
        background-blend-mode: overlay;
        mix-blend-mode: normal;
        box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
`

const SubRow = styled.div`
    display: flex;
    gap: 14px;
    text-align: left;
`

const Logo = styled.img`
    width: 32px;
    height: 32px;

    border-radius: 30px;
    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: flex-start;
    flex-grow: 0;
    background: ${props => props.bg} ;

    padding: 4px;
`


const Middle = styled.div`
    display: grid;
    gap:7px;
`

const SubTitle = styled(Caption)`
    color:${themes.dark.text1};
`

const Tape = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1px;
    gap: 10px;

    width: 170px;
    height: 5px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`

const SubTape = styled.div`
    width: ${props => props.tape}%;

    height: 3px;

    background: rgba(255, 255, 255, 0.7);
    border: 0.360963px solid rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const Hours = styled(Caption)`

    color: ${themes.dark.text2};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 6px;
    gap: 10px;

    width: auto;
    height: 20px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: flex-start;
    flex-grow: 0;
`

const Explanation = styled(Caption)`
    color: ${themes.dark.text2};
`