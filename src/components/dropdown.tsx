import React, { useState } from "react";
import styled from "styled-components";
import ToggleOpen from "../assets/toggleopen_icon.png";

const DropDownContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const DropdownButton = styled.button<{ height?: string }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #8a8a8a;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
  background-color: transparent;
  border: 1px solid #8a8a8a;
  width: 100%;
  height: ${(props) => props.height || "auto"};
`;
const MenuDropdown = styled.div<{ isOpen: boolean; width?: string }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #8a8a8a;
  gap: 8px;
  padding: 8px;
  overflow: hidden;
  font-size: 12px;
  z-index: 10;
  position: absolute;
  top: 101%;
  width: 95%;
`;
const MenuOption = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  color: var(--Gray-Gray_dark, #8a8a8a);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 25px;
`;

interface DropdownMenuProps {
  menu: string[];
  hinttext: string;
  width?: string;
  height?: string;
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  menu,
  hinttext,
  width,
  height,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleOptionClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <DropDownContainer width={width}>
      <DropdownButton onClick={toggleDropdown} height={height}>
        <div style={{ fontSize: "12px", color: "#8A8A8A", fontWeight: "400" }}>
          {selectedItem || hinttext}{" "}
          {/* Display the selected item or hinttext */}
        </div>
        <img
          src={ToggleOpen}
          alt="toggleopen_icon"
          style={{ width: "15px", height: "9px" }}
        />
      </DropdownButton>
      <MenuDropdown isOpen={isOpen} width={width}>
        {menu.map((item, index) => (
          <MenuOption key={index} onClick={() => handleOptionClick(item)}>
            {item}
          </MenuOption>
        ))}
      </MenuDropdown>
    </DropDownContainer>
  );
};
export default DropdownMenu;
