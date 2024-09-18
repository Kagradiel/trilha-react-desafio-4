import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  opacity: ${(props) => (props.disabled ? "1" : "0.6")};
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: ${(props) => (props.disabled ? "pointer" : "not-allowed")};
  }
`;
