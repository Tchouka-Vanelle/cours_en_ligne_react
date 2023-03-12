import React from "react";
import styled from "styled-components";
import { themes } from '../../styles/ColorStyles'
import { Caption2, Caption, SmallText, H2, MediumText } from '../../styles/TextStyles'

const boxBody = [[
    {
        First: 'Free',
        Second: 'courses'
    },
    {
        First: '5 Prenium',
        Second: 'Videos'
    },
    {
        First: 'Nottify me',
        Second: 'Like'
    },
], 
[
    {
        First: 'All courses',
        Second: 'and videos'
    },
    {
        First: 'Source files,',
        Second: 'ePub'
    },
    {
        First: 'Certficates,',
        Second: 'Projects'
    },
    {
        First: 'Prenium',
        Second: 'tutorials'
    },
    {
        First: 'UI,',
        Second: 'icons, illustrations'
    },
    {
        First: 'Commercial',
        Second: 'use'
    }
],   
[
    {
        First: '5 users',
        Second: '...'
    },
    {
        First: 'Manage',
        Second: 'Subscriptions'
    },
    {
        First: 'Teams',
        Second: 'progress'
    },
]]

const boxHeader = [
    {
        name: 'BASIC',
        type: 'Free',
        period: 'Trial',
        icon: '/images/mesIcones/Offers/pen.svg'
    },
    {
        name: 'PRO',
        type: '$19',
        period: 'per month, billed monthly',
        icon: '/images/mesIcones/Offers/credit.svg'
    },
    {
        name: 'Team',
        type: '$95',
        period: 'per year, billed monthly',
        icon: '/images/mesIcones/Offers/credit.svg'
    },

]

const Offers= () =>{
    return(
        <Wrapper>
            <ContentWrapper>
                {boxHeader.map( (item, index) => 
                <Backg key={`box-${index}`}>
                    <Box >
                        <HeaderCard>
                            <Name> {item.name} </Name>
                            <Type> {item.type} </Type>
                            <Period> {item.period} </Period>
                        </HeaderCard>

                        <BodyCard>
                            {boxBody[index].map((value, number) => 
                            (<Card key={`card-${number}`}>
                                <Check src='/images/mesIcones/Offers/check.svg' />
                                <First> {value.First} </First>
                                <Second> {value.Second} </Second>
                            </Card>)
                            )}
                        </BodyCard>

                        <FooterCard>
                                <Icon src={item.icon} />
                                <Msg> Subscribe </Msg>
                        </FooterCard>

                    </Box>
                </Backg> )}
            </ContentWrapper>
        </Wrapper>
    );
}

export default Offers;

const Wrapper = styled.div`
`

const ContentWrapper = styled.div`
    
    margin: 140px auto;
    display: grid;
    grid-template-columns: 360px 380px 360px;
    gap: 14px;

    align-items: center;
    justify-content: center;

    position: relative;

    
    
    :nth-child(1n) {

        //position: absolute;
        left: 6.94%;
        right: 68.06%;
        top: 80.39%;
        bottom: 12.85%;

        background: linear-gradient(180deg, rgba(108, 207, 238, 0.5) 0%, rgba(76, 127, 228, 0.5) 100%);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 0px 60px 60px 60px;
        transform: matrix(0.99, -0.14, 0.15, 0.99, 0, 0);
    }
  
    :nth-child(2n){

          //position: absolute;
        width: 380px;
        height: 519px;
        left: calc(50% - 380px/2);
        top: 5063px;  
        background: linear-gradient(180deg, #2FB8FF 0%, #9EECD9 100%);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 60px 60px 60px 0px;
        transform: matrix(0.99, 0.14, 0, 1, 0, 0);
      }
  
    :nth-child(3n){

          //position: absolute;
        width: 360px;
        height: 423px;
        right: 96.61px;
        top: 5011px;

        background: linear-gradient(180deg, #73B8F9 11.94%, #CBD8F1 80.98%);
        backdrop-filter: blur(20px);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 60px 0px 60px 60px;
        transform: matrix(0.99, 0.14, -0.11, 0.99, 0, 0);
     }

`

const Backg = styled.div`

    :nth-child(1n) {
          
          box-sizing: border-box;
  
          background: rgba(255, 255, 255, 0.3);
          border: 0.5px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(20px);
          /* Note: backdrop-filter has minimal browser support */
  
          border-radius: 0px 60px 60px 60px;
  
          width: 360px;
          height: 426px;

    }
  
    :nth-child(2n){
          
          box-sizing: border-box;
  
          background: rgba(255, 255, 255, 0.3);
          border: 0.5px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(20px);
          /* Note: backdrop-filter has minimal browser support */
  
          border-radius: 60px 60px 60px 0px;
  
          
          width: 380px;
          height: 519px;

    }
  
    :nth-child(3n){
  
          background: rgba(255, 255, 255, 0.3);
          border: 0.5px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(20px);
          /* Note: backdrop-filter has minimal browser support */
  
          border-radius: 60px 0px 60px 60px;
  
          
          width: 360px;
          height: 423px;

     }


`

const Box = styled.div`
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 20px;
`

const HeaderCard = styled.div`
    margin: auto;

    
    display: flex;
    flex-direction: column;
    gap: 10px;

    justify-content: center;
    align-items: center;

    padding-bottom: 20px;
`

const Name = styled(Caption2)`
color: ${themes.dark.text2};

`

const Type = styled(H2)`
  color: ${themes.light.text1};
`

const Period = styled(Caption)`
  color: ${themes.dark.text2};
`

const BodyCard = styled.div`
    display: grid;
    gap: 14px;
`
const Card = styled.div`
  display: flex;
  gap: 10px;
`

const Check = styled.img`
    padding-right: 5px;
`

const First = styled(Caption)`
  color: ${themes.light.text1};
`

const Second = styled(Caption)`
  color: ${themes.dark.text2};
`

const FooterCard = styled(MediumText)`
    display: flex;
   
    padding: 4px;
    gap: 14px;

    width: 169px;
    height: 48px;

    background: linear-gradient(180deg, #FFFFFF 0%, #D9DFFF 100%);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2);
    backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;

    align-items: center;

    margin: auto;
`

const Icon = styled.img`
    width: 32px;
    height: 32px;

    /* Gradient 9 */

    background: linear-gradient(200.44deg, #4316DB 13.57%, #9076E7 98.38%);
    box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
    border-radius: 30px;

    padding: 5px;
`
const Msg = styled.div`
  color: ${themes.light.text2};
`
