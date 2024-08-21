import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./dropdown";
import CheckBox from "../components/checkbox";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #8a8a8a;
  background: #fff;
  padding: 24px 10px;
  position: absolute;
  top: 5px;
`;
const CategoryContainer = styled.text`
  text-align: start;
  color: #000;
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
const PriceConnect = styled.text`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom:18px;
`;
const PriceInput = styled.div`
  width: 99px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #8a8a8a;
  background-color: transparent;
`;
const FilterApplyButtonContainer=styled.div`
  display: flex;
  justify-content: center;
`
const FilterApplyButton = styled.button`
  display: flex;
  align-items: center;
  width: 78px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #b7d051;
  color: #fff;
  text-align: center;
  font-family: NanumGothic;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
interface FilterModalProps {
  onClose: () => void; // 모달 창을 닫는 함수
}

const FilterModal: React.FC<FilterModalProps> = ({onClose}) => {
  //유기농 checkbox 조작
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  // target radiobutton 조작 hook
  const [consumer, setConsumer] = useState("");
  const handleClickRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsumer(e.target.value);
  };
  const handleFilterApply = () => {
    // 필터 적용 로직 추가 (필요에 따라)
    onClose(); // 필터 적용 후 모달 닫기
  };
  return (
    <FilterContainer>
      <CategoryContainer>판매 대상</CategoryContainer>
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
      <CategoryContainer>농산물 품종</CategoryContainer>
      <DropdownMenu menu={["test1", "test2"]} hinttext="채소"></DropdownMenu>
      <DropdownMenu menu={["test1", "test2"]} hinttext="과일"></DropdownMenu>
      <CategoryContainer>생산지</CategoryContainer>
      <DropdownMenu
        menu={["생산지가 등록이 안되어있습니다"]}
        hinttext="생산지"
      ></DropdownMenu>
      <CategoryContainer>유기농 여부</CategoryContainer>
      <CheckBox
        category="유기농"
        isChecked={isChecked}
        onChange={handleCheckBoxChange}
      />
      <CategoryContainer>가격</CategoryContainer>
      <PriceContainer>
        <PriceInput></PriceInput>
        <PriceConnect>~</PriceConnect>
        <PriceInput></PriceInput>
      </PriceContainer>
      <FilterApplyButtonContainer>
      <FilterApplyButton onClick={handleFilterApply}>필터적용</FilterApplyButton>
      </FilterApplyButtonContainer>
    </FilterContainer>
  );
};
export default FilterModal;
