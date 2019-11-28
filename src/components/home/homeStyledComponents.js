import styled from 'styled-components';
import { Card } from 'reactstrap';

export const Heading1 = styled.h1`
  font-size: 43px;
  text-align: center;
  text-transform: uppercase;
  color: #CF4338;
  min-width: 158px;
  max-height: 24px;
  margin: 2rem 0 5.5rem;
  @media(max-width: 600px) {
    font-size: 30px;
  }
`

export const InnovationHeading1 = styled.h1`
  font-size: ${props => props.fontSize};
  text-align: center;
  // text-transform: uppercase;
  color: #FF7B71;
  min-width: 158px;
  max-height: 24px;
  margin: 2rem 0 3.5rem;
`

export const TestimonialBox = styled.div`
  border-color: #D76964;
  border: 0.5px;
  height: 206px;
  width: 295px;
  border-radius: 12px 12px 12px 12px;
  background: #EFEFEF;
  margin-left: 60px;
  z-index: 10;
  position: relative;
`

export const ClientNameBox = styled.div`
  border-color: #D76964;
  border: 0.5px;
  height: 100px;
  width: 228px;
  border-radius: 22px 22px 22px 22px;
  background: #D76964;
  margin-left: 61px;
  margin-top: -15%;
  position: relative;
  z-index: 9;
`

export const ClientDesignationBox = styled.div`
  border-color: #AF5B57;
  border: 0.5px;
  height: 100px;
  width: 111px;
  border-radius: 15px 15px 15px 15px;
  background: #AF5B57;
  margin-top: -11%;
  position: relative;
  z-index: 9;
  left: 244px;
  top: -23px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;

  & span {
    // width: 42px;
    // height: 29px;
    color: #fff;
    font-size: 11px;
    text-align: center;
  }
`

export const TestimonialBoxText = styled.span`
  width: 254px;
  height: 118px;
  font-size: 12px;
  color: #0D0D0D;
  margin-left: 19px;
  margin-right: 20px;
  position: absolute;
  top: 50px;

`

export const Quotes = styled.div`
  height: 70px;
  width: 20px;
  font-size: 56px
  position: relative;
  right: 6px;
`

export const ClientName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: #fff;
`

export const Circle = styled.div`
  height: 8px;
  width: 8px
  background-color: #666666;

  & .slick-active {
    background-color: #FF0000;
  }
`
export const BannerText = styled.span`
  font-size: 52px;
  // padding-left: 19px;
  font-family: lato, black;
  line-height: 62px;
  color: #A8A8A8;
`

export const BannerSubText = styled.div`
  min-width: 230px;
  min-height: 55px;
  text-align: left;
  font-size: 24px;
  font-weight: 300;
  color: #FFFFFF;
`

export const ConctactUsRightText = styled.span`
  color: #FFFFFF;
`

export const ParallaxImg = styled.div`
  background-image: ${(props) => `url(${props.logo})`} ;
  width: 100%;
  height: ${(props) => props.height};
  background-repeat: round;
`

export const CurvedCard = styled(Card)`
  border-radius: 16px 16px 16px 16px;
`

export const CompanyDetailsText = styled.div`
  float: ${(props) => props.pull};
  width: ${(props) => props.width};
  color: #fff;

  @media(max-width: 900px) {
    & span {
      font-size: 11px;
      // font-weight: 100;
    }
    & h5 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 4px;
    }
    line-height: 24px;
  }
`
export const InnovationBox = styled.span`
  height: 124px;
  width: 159px;
  border-radius: 8px 8px 8px 8px;
`

export const Heading1Orange = styled.h1`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "51px"};
  text-align: -webkit-right;
  font-family: lato light;
  color: #FF7B71;
`
export const Heading1Black = styled.h1`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "27px"};
  text-align: -webkit-right;
  font-family: lato light;
  color: #666666;
  width: 446px;
  height: 66px;
  word-wrap: break-work;
`
export const DomainText = styled.div`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"};
  color: #FFFFFF;
  height: 20px;
  font-family: lato light;
`

export const Text = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"};
  &:before {
    content: ${(props) => `url(${props.url})`};
    padding-right: 20px;
    vertical-align: middle;
  }
`

export const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"}
`

export const CompanyBackground = styled.div`
  background-image: ${(props) => `url(${props.image})`} ;
  width: auto;
  height: 722px;
  background-repeat: round;
  background-size: auto 100%;
`
