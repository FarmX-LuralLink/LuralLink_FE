import React, { useState } from "react";
import styled from "styled-components";
import Header from "../layout/header";
import Ad from "../assets/advertisement.png";
import Cartoon from "../assets/cartoon.png";
import Poster from "../assets/poster.png";
import Footer from "../layout/footer";
import PromptIcon from "../assets/prompt.png";
import { useNavigate } from "react-router-dom";

const CreatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const BodyContainer = styled.div`
  padding: 22px;
`;
const MyTicket = styled.text`
  display: flex;
  justify-content: end;
  color: #000;
  text-align: right;
  /* font-family: NanumGothic; */
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 19px;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 23px;
`;
const AdImage = styled.img`
  width: 94px;
  height: 97px;
`;
const PosterImage = styled.img`
  width: 94px;
  height: 97px;
`;
const CartoonImage = styled.img`
  width: 94px;
  height: 97px;
`;
const RatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
`;
const RatioText = styled.text`
  color: #000;
  font-family: NanumGothic;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  text-align: start;
`;
const Ratio = styled.div`
display:flex;
align-items: center;
padding-left: 14px;
  width: 173px;
  height: 29px;
  border-radius: 10px;
  border: 1px solid #8a8a8a;
  color: #000;
  font-family: NanumGothic;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 268px;
  background-color: #f3f3f3;
  margin-bottom: 18px;
`;
const PromptContainer = styled.div`
  gap: 0;
  padding: 19px;
  display: flex;
  flex-direction: row;
  width: calc(100%-44px);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5.7px 3px rgba(197, 167, 167, 0.1);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 256px;
  height: 34px;
`;
const PromptName = styled.text`
  display: flex;
  color: #8a8a8a;
  text-align: center;
  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  margin-bottom: 9px;
`;
const PromptText = styled.input`
  padding: 0;
  border: none;
  width: 256px;
  height: 34px;
  max-width: 256px;
  font-size: 15px;
`;
const PromptButton = styled.img`
  display: flex;
  align-items: center;
  margin: 0;
  width: 39px;
  height: 39px;
`;
const RatioMenu = styled.div`
  border: 1px solid #8a8a8a;
  width: 173px;
  height: 102px;
  color: #000;
  /* font-family: NanumGothic; */
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CreatePage: React.FC = () => {
  //dropdown
  const [isOpen, setIsOpen] = useState(false);
  //페이지 이동
  const navigate = useNavigate();
  const handleExampleNavigate = () => {
    navigate("/airesult");
  };
  return (
    <CreatePageContainer>
      <Header></Header>
      <BodyContainer>
        <MyTicket>나의 이용권 3</MyTicket>
        <CategoryContainer>
          <AdImage src={Ad} alt="advertise_button" />
          <PosterImage src={Poster} alt="poster_button" />
          <CartoonImage src={Cartoon} alt="cartoon_button" />
        </CategoryContainer>
        <RatioContainer>
          <RatioText>가로세로비율</RatioText>
          <Ratio onClick={() => setIsOpen(!isOpen)}>비율 선택</Ratio>
          {isOpen && (
            <RatioMenu>
              <p>가로(4:3)</p>
              <p>세로(3:4)</p>
              <p>정사각형(1:1)</p>
              <p>와이드스크린(16:9)</p>
            </RatioMenu>
          )}
        </RatioContainer>
        <ImageContainer></ImageContainer>
        <PromptContainer>
          <TextContainer>
            <PromptName>프롬프트</PromptName>
            <PromptText placeholder="요청사항을 입력하세요"></PromptText>
          </TextContainer>
          <PromptButton src={PromptIcon} onClick={handleExampleNavigate} />
        </PromptContainer>
      </BodyContainer>
      <Footer></Footer>
    </CreatePageContainer>
  );
};
export default CreatePage;
