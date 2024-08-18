import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #83bf5d;
  width: 393px;
  height: 59px;
  flex-shrink: 0;
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

const UploadPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <HeaderContainer>
        <BackButton onClick={handleGoBack}>&lt;</BackButton>
        <HeaderText>상품 등록하기</HeaderText>
      </HeaderContainer>
    </>
  );
};
export default UploadPage;
