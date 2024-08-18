import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import SearchBox from "../components/searchbox";
import WriteIcon from "../assets/write_icon.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SalePageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterButton = styled.button`
  padding: 0px;
  margin-top: 21px;
  margin-left: 16px;
  text-align: center;
  color: #8a8a8a;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 47px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  background: transparent;
`;
const AiFilterButton = styled.button`
  padding: 0px;
  margin-top: 21px;
  margin-right: 16px;
  width: 52px;
  height: 19px;
  color: #fff;
  text-align: center;
  /* font-family: NanumGothic; */
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-shrink: 0;
  background-color: #83bf5d;
`;
const BoundaryLine = styled.line`
  width: 100vw;
  height: 1px;
  background-color: #8a8a8a;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #8a8a8a;
  /* font-family: NanumGothic; */
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 16px;
  margin-right: 54px;
  margin-top: 7px;
  margin-bottom: 7px;
`;
const WriteImage = styled.img`
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 55px;
  height: 55px;
`;
const SalePage: React.FC = () => {
  const navigate = useNavigate();
  const handleWriteNavigate = () => {
    navigate("/upload");
  };
  return (
    <SalePageContainer>
      <Header></Header>
      <FilterContainer>
        <FilterButton>필터</FilterButton>
        <AiFilterButton>AI매칭</AiFilterButton>
      </FilterContainer>
      <SearchBox></SearchBox>
      <BoundaryLine />
      <CategoryContainer>
        <div>농산물</div>
        <div>가격/상호명</div>
        <div>등록일</div>
      </CategoryContainer>
      <BoundaryLine />
      {/* 이제 여기에 서버에서 받아온 정보로 틀 만들어서 정렬해야함. */}
      <WriteImage
        src={WriteIcon}
        alt="write_icon"
        onClick={handleWriteNavigate}
      />
      <Footer></Footer>
    </SalePageContainer>
  );
};
export default SalePage;
