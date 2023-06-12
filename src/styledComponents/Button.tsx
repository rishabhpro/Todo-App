import styled from "styled-components";
export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff6f00;
  color: white;
  display: flex;
  align-items: center;
  font-size:50px;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8f00;
  }
`;
