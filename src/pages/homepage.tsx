import React from "react";
import Header from "../layout/header";
import styled from "styled-components";
import BlueCircle from "../assets/blue_circle.png";
import PurpleCircle from "../assets/purple_circle.png";
import GreyCircle from "../assets/grey_circle.png";
import YellowCircle from "../assets/yellow_circle.png";
import RightArrow from "../assets/right_arrow.png";
import LogoWord from "../assets/logo_word.png";
import Fruit from "../assets/fruit.png";
import Art from "../assets/art.png";
import Footer from "../layout/footer";
import {useNavigate} from "react-router-dom";

const MainPageContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  flex-direction: column;
  display: flex;
`;

const StyledHeader = styled.div`
  display: flex;
  left: 0;
  top: 0;
  width: 100vw;
  height: 87px;
  padding: 0;
`;

const BlueCircleContainer = styled.div`
  margin-left: 83px;
  flex-direction: column;
  display: flex;
  width: 18px;
  height: 18px;
  margin-top: 108px;
`;
const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const IntroductionText = styled.text`
  font-size: 18px;
  margin-bottom: 15px;
`;

const LogoWordContainer = styled.div`
  width: 209px;
  height: 45px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 35px;
`;
const ServiceDetailButton = styled.button`
  display: flex;
  border-radius: 10px;
  width: 177px;
  height: 42px;
  padding: 11px 14px;
  background-color: #83bf5d;
  color: white;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 63px;
  gap: 10px;
`;
const GreyCircleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 99px;
`;

const GreyCircleWrapper = styled.div`
  height: 18px;
  width: 18px;
`;
const ServiceButton = styled.button`
  display: flex;
  background-color: transparent;
  border: 1px solid #333;
  color: #333;
  font-size: 15px;
  border-radius: 10px;
  width: 83px;
  height: 23px;
  padding: 5px 25px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
`;
const YellowCircleContainer = styled.div`
  width: 45px;
  height: 45px;
  margin-left: 27px;
  margin-bottom: 11px;
`;
const ExplainContainer = styled.text`
  color: #333;
  text-align: center;
  font-family: NanumGothic;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 34.25px;
`;
const SaleBoxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: #fff6db;
  width: 100vw;
  height: 163.75px;
  flex-shrink: 0;
  color: #333;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  overflow: visible;
`;
const SaleTextContainer = styled.div`
  justify-content: start;
  align-items: start;
  display: flex;
  flex-direction: column;
`;
const SaleButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 154px;
  height: 37px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  background: #c9a330;
  margin-top: 21px;
`;
const SaleImageContainer = styled.div`
  position: absolute; /* Position this relative to SaleBoxContainer */
  width: 141px; /* Set a fixed width for the image container */
  height: 156px; /* Set a fixed height for the image container */
  bottom: 23px; /* Align to the bottom of the SaleBoxContainer */
  right: 38px; /* Margin from the right edge of SaleBoxContainer */
  overflow: hidden; /* Ensure no overflow */
`;

const SaleImage = styled.img`
  width: 100%; /* Ensure the image scales to fit within the container */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Prevent extra spacing */
`;
const ContentContainer = styled.div`
  justify-content: space-between;
  width: 100vw;
  height: 163.75px;
  flex-shrink: 0;
  background-color: #dff9f2;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #333;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ContentTextContainer = styled.div`
  justify-content: start;
  align-items: start;
  display: flex;
  flex-direction: column;
`;
const ContentButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 154px;
  height: 37px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  background: #2cba94;
  margin-top: 21px;
`;
const ContentImageContainer = styled.div`
  width: 118px;
  height: 153px; 
  overflow: hidden; 
  margin-bottom: 11px;
  margin-right: 50px;
`;

const ContentImage = styled.img`
  width: 100%;
`;

const HomePage: React.FC = () => {
  const navigate=useNavigate();
  const handleServiceNavigate=()=>{
    navigate("/sale");
  };
  const handleContentNavigate=()=>{
    navigate("/create");
  };
  return (
    <MainPageContainer>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <BlueCircleContainer>
        <img src={BlueCircle} alt="bluecircle" />
      </BlueCircleContainer>
      <CircleContainer>
        <div style={{ marginLeft: "35px", height: "36px", width: "36px" }}>
          <img src={PurpleCircle} alt="purplecircle" />
        </div>
        <div
          style={{
            marginRight: "68px",
            marginTop: "18px",
            height: "9px",
            width: "9px",
          }}
        >
          <img src={GreyCircle} alt="greycircle" />
        </div>
      </CircleContainer>
      <IntroductionText>
        <div>농산물을 잇고, 가치를 더하다</div>
      </IntroductionText>
      <LogoWordContainer>
        <img src={LogoWord} alt="logoword" />
      </LogoWordContainer>
      <ServiceDetailButton>서비스 알아보기</ServiceDetailButton>
      <GreyCircleContainer>
        <GreyCircleWrapper>
          <img src={GreyCircle} alt="greycircle" />
        </GreyCircleWrapper>
      </GreyCircleContainer>
      <ServiceButton>services</ServiceButton>
      <YellowCircleContainer>
        <img src={YellowCircle} alt="yellowcircle" />
      </YellowCircleContainer>
      <ExplainContainer>
        Rural Link는 농촌 지역 주민들이 AI 매칭 기술을 통해 지역 상권에
        <br />
        농산물을 쉽게 납품하고, 맞춤형 마케팅 콘텐츠를 생성해 홍보하며,
        <br />
        소비자들이 신선한 농산물을 직접 구매할 수 있도록 돕는 웹 플랫폼입니다.
      </ExplainContainer>
      <SaleBoxContainer>
        <SaleTextContainer style={{ marginLeft: "38px" }}>
          <div>농산물 판매 및 구매</div>
          <SaleButton onClick={handleServiceNavigate}>
            <div>서비스 이용하기</div>
            <img
              src={RightArrow}
              alt="right_arrow"
              style={{ marginLeft: "13px", height: "14px", width: "16px" }}
            />
          </SaleButton>
        </SaleTextContainer>
        <SaleImageContainer>
          <SaleImage src={Fruit} alt="fruit" />
        </SaleImageContainer>
      </SaleBoxContainer>
      <ContentContainer>
        <ContentTextContainer style={{ marginLeft: "38px" }}>
          <div>맞춤형 콘텐츠 제작</div>
          <ContentButton onClick={handleContentNavigate}>
            <div>서비스 이용하기</div>
            <img
              src={RightArrow}
              alt="right_arrow"
              style={{ marginLeft: "13px", height: "14px", width: "16px" }}
            />
          </ContentButton>
        </ContentTextContainer>
        <ContentImageContainer>
          <ContentImage src={Art} alt="art" />
        </ContentImageContainer>
      </ContentContainer>
      <Footer></Footer>
    </MainPageContainer>
  );
};
export default HomePage;
