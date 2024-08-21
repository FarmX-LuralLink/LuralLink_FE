import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackNavigation from "../assets/back_navigation.png";
import TextBox from "../components/textbox";
import FileUpload from "../components/fileupload";
import CheckBox from "../components/checkbox";
import DropdownMenu from "../components/dropdown";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #83bf5d;
  width: 100vw;
  height: 59px;
  flex-shrink: 0;
  padding: 0;
`;
const BackButton = styled.button`
  position: absolute;
  left: 16px; /* Adjust as needed */
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const NavImage = styled.img`
  position: absolute;
  left: 14px;
  width: 12px;
  height: 24px;
`;
const HeaderText = styled.text`
  color: #fff;
  text-align: center;
  /* font-family: NanumGothic; */
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ContentContainer = styled.div`
  display: flex;
  padding: 21px 24px;
  flex-direction: column;
  justify-content: start;
`;
const ItemInput = styled.text`
  color: #000;
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  margin-bottom: 8px;
`;

const TargetSelection = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 15px;
`;
const RadioLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 22px;
  color: #8a8a8a;
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 2px;
`;
const DetailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailInput = styled.textarea`
  width: 85vw;
  height: 222px;
  display: flex;
  text-align: start;
  border: 1px solid #8a8a8a;
  border-radius: 10px;
  padding: 10px 9px;
  font-size: 12px;
  flex-shrink: 0;
  margin-bottom: 20px;
  overflow: auto;
  text-align: top;
`;
const SubmitButton = styled.button`
  background-color: #d9d9d9;
  border-radius: 15px;
  width: 90vw;
  height: 40px;
  color: white;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 23px;
  margin-bottom: 37px;
  border: none;
`;
const FileDetailText = styled.text`
  color: #8f8f8f;
  /* font-family: Inter */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  margin-top: 8px;
  margin-left: 16px;
`;

const UploadPage: React.FC = () => {
  // 이전페이지 네비게이션버튼 조작 hook
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  // target radiobutton 조작 hook
  const [consumer, setConsumer] = useState("");
  const handleClickRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsumer(e.target.value);
  };
  //유기농 checkbox 조작
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <BodyContainer>
      <HeaderContainer>
        <BackButton onClick={handleGoBack}>
          <NavImage src={BackNavigation} alt="back_naviagation" />
        </BackButton>
        <HeaderText>상품 등록하기</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ItemInput>판매 대상 선택</ItemInput>
        <TargetSelection>
          <RadioLabel>
            <input
              type="radio"
              value="소상공인"
              checked={consumer === "소상공인"}
              onChange={handleClickRadioButton}
            />
            소상공인
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="소비자"
              checked={consumer === "소비자"}
              onChange={handleClickRadioButton}
            />
            소비자
          </RadioLabel>
        </TargetSelection>
        <ItemInput>농산물 상위 품종 선택</ItemInput>
        <DropdownMenu menu={["과일","채소"]} hinttext="종류" width="90vw" height="40px"/>
        <ItemInput>농산물 하위 품종 선택</ItemInput>
        <DropdownMenu menu={["test1","test2"]} hinttext="종류" width="90vw" height="40px"/>
        <ItemInput>판매 단위(kg)</ItemInput>
        <TextBox hinttext="kg"></TextBox>
        <ItemInput>단위당 가격(원)</ItemInput>
        <TextBox hinttext="원"></TextBox>
        <ItemInput>유기농 여부</ItemInput>
        <CheckBox
        category="유기농"
        isChecked={isChecked}
        onChange={handleCheckBoxChange}
      />
        <ItemInput>생산일자</ItemInput>
        <TextBox hinttext="YYMMDD"></TextBox>
        <ItemInput>상세 정보</ItemInput>
        <DetailInputContainer>
          <DetailInput placeholder="추가 사항"></DetailInput>
        </DetailInputContainer>
        <ItemInput>첨부 파일</ItemInput>
        <FileUpload></FileUpload>
        <FileDetailText>
          첨부 파일은 최대 3개, 30MB까지 등록 가능합니다.
        </FileDetailText>
        <SubmitButton>등록</SubmitButton>
      </ContentContainer>
    </BodyContainer>
  );
};
export default UploadPage;
