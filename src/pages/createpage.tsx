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
  position: relative;
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
const RatioButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
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
  cursor: pointer;
  position: relative;
`;
const RatioRectangle = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid #000;
`;
const RatioDropdown = styled.div<{isOpen:boolean}>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 19px;
  left: 0;
  width: 187px;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  background-color: #fff;
  z-index: 10;
`;
const RatioOption = styled.div`
display: flex;
flex-direction: row;
  padding: 8px 14px;
  font-size: 11px;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  gap: 9px;
  text-align: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 268px;
  background-color: #f3f3f3;
  margin-bottom: 18px;
  z-index: 0;
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
  height: 60px;
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
const PromptText = styled.textarea`
  padding: 0;
  border: none;
  height: auto;
  max-width: 240px;
  font-size: 15px;
  max-height: none;
  resize: none;
  white-space: pre-wrap; /* 공백 및 줄바꿈을 유지 */
  word-wrap: break-word; /* 단어를 넘지 않도록 줄바꿈 */
  overflow-wrap: break-word;
  overflow: hidden;
  outline: none;
`;
const PromptButton = styled.img`
  display: flex;
  align-items: center;
  margin: 0;
  width: 39px;
  height: 39px;
`;

const CreatePage: React.FC = () => {
  //dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //ratio 선택
  const [selectedRatio, seSelectedRatio] = useState("가로(4:3)");
  const handleSelectedRatio = (ratio: string) => {
    seSelectedRatio(ratio);
    setIsOpen(false);
  };

  const getRatioSize = () => {
    switch (selectedRatio) {
      case "가로(4:3)":
        return { width: 14, height: 10 };
      case "세로(3:4)":
        return { width: 13, height: 8 };
      case "정사각형(1:1)":
        return { width: 11, height: 11 };
      case "와이드스크린(16:9)":
        return { width: 17, height: 8 };
      default:
        return { width: 14, height: 10 };
    }
  };

  const { width, height } = getRatioSize();
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
          <RatioButton onClick={toggleDropdown}>
            <RatioRectangle width={width} height={height} />
            <div>{selectedRatio}</div>
          </RatioButton>
          <RatioDropdown isOpen={isOpen}>
            <RatioOption onClick={() => handleSelectedRatio("가로(4:3)")}><RatioRectangle width={14} height={10}/>가로(4:3)</RatioOption>
            <RatioOption onClick={() => handleSelectedRatio("세로(3:4)")}><RatioRectangle width={13} height={8}/>세로(3:4)</RatioOption>
            <RatioOption onClick={() => handleSelectedRatio("정사각형(1:1)")}><RatioRectangle width={11} height={11}/>정사각형(1:1)</RatioOption>
            <RatioOption onClick={() => handleSelectedRatio("와이드스크린(16:9)")}><RatioRectangle width={17} height={8}/>와이드스크린(16:9)</RatioOption>
          </RatioDropdown>
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
