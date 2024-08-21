import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import SearchBox from "../components/searchbox";
import WriteIcon from "../assets/write_icon.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FilterModal from "../components/filtermodal";

const SalePageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const FilterButton = styled.button<{isOpen:boolean}>`
  color: ${(props) => (props.isOpen ? "#fff" : "#8a8a8a")};
  padding: 0px;
  margin-top: 21px;
  margin-left: 16px;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 47px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #8a8a8a;
  background-color: ${(props) => (props.isOpen ? "#83bf5d" : "transparent")};
`;
const AiFilterButton = styled.button<{isOpen:boolean}>`
  color: ${(props) => (props.isOpen ? "#fff" : "#8a8a8a")};
  padding: 0px;
  margin-top: 21px;
  margin-right: 16px;
  width: 52px;
  height: 19px;
  text-align: center;
  /* font-family: NanumGothic; */
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-shrink: 0;
  border: 1px solid #8a8a8a;
  background-color: ${(props) => (props.isOpen ? "#83bf5d" : "transparent")};
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
const FilterModalContainer = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 40px; /* FilterButton 바로 아래로 위치 조정 */
  left: 16px; /* FilterButton의 왼쪽과 맞춤 */
  z-index: 1000;
`;
const SalePage: React.FC = () => {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAiMatchingOpen,setIsAiMatchingOpen]=useState(false);
  const handleWriteNavigate = () => {
    navigate("/upload");
  };
  const handleFilterModal = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleAiMatching=()=>{
    setIsAiMatchingOpen(!isAiMatchingOpen);
  }
  const closeFilterModal = () => {
    setIsFilterOpen(false);
  };
  return (
    <>
    <SalePageContainer>
      <Header></Header>
      <FilterContainer>
        <FilterButton isOpen={isFilterOpen} onClick={handleFilterModal}>필터</FilterButton>
        <AiFilterButton isOpen={isAiMatchingOpen} onClick={handleAiMatching}>AI매칭</AiFilterButton>
        <FilterModalContainer isOpen={isFilterOpen}>
          <FilterModal onClose={closeFilterModal}/>
        </FilterModalContainer>
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
      <Footer></Footer>
    </SalePageContainer>
    <WriteImage
        src={WriteIcon}
        alt="write_icon"
        onClick={handleWriteNavigate}
      />
    </>
  );
};
export default SalePage;
