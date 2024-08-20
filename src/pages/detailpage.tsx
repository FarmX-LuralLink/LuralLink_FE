import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackNavigation from "../assets/back_navigation.png";
import Footer from "../layout/footer";

const DeatailPageContainer = styled.div`
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemImage = styled.img`
  width: 194px;
  height: 183px;
  margin: 36px;
`;
const ItemInfo = styled.text`
  text-align: start;
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: calc(25vw / 2);
  margin-bottom: 5px;
  width: 100vw;
`;
const ItemDetail = styled.div`
  display: flex;
  justify-content: center;
  width: 85vw;
  height: 34px;
  border-radius: 10px;
  border: 1px solid var(--Gray-Gray_dark, #8a8a8a);
  background: rgba(217, 217, 217, 0);
  margin-bottom: 18px;

  color: var(--Gray-Gray_dark, #8a8a8a);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;
const DetailContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 80vw;
  height: 222px;
  border-radius: 10px;
  border: 1px solid var(--Gray-Gray_dark, #8a8a8a);
  background: rgba(217, 217, 217, 0);
  margin-bottom: 18px;

  color: var(--Gray-Gray_dark, #8a8a8a);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  align-items: start;
  justify-content: start;
  padding: 10px 15px;
  text-align: start;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #b7d051;
  padding: 0;

  color: #fff;
  text-align: center;
  /* font-family: NanumGothic; */
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

const DetailPage: React.FC = () => {
  // 이전페이지 네비게이션버튼 조작 hook
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <DeatailPageContainer>
      <HeaderContainer>
        <BackButton onClick={handleGoBack}>
          <NavImage src={BackNavigation} alt="back_naviagation" />
        </BackButton>
        <HeaderText>{/* 백엔드 정보 넣기 {itemname} */}</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ItemImage /> {/* url 넣기 */}
        <ItemInfo>판매자 정보</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>농산물 품종</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>구매 무게</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>단위당 가격(원)</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>유기농</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>생산일자</ItemInfo>
        <ItemDetail></ItemDetail>
        <ItemInfo>상세 정보</ItemInfo>
        <DetailContainer>
          싱싱하고 맛도 좋은 양파 품질은 확실히 보장합니다!싱싱하고 맛도 좋은
          양파 품질은 확실히 보장합니다!싱싱하고 맛도 좋은 양파 품질은 확실히
          보장합니다!
        </DetailContainer>
        <BuyButton>구매하기</BuyButton>
      </ContentContainer>
      <Footer></Footer>
    </DeatailPageContainer>
  );
};
export default DetailPage;
