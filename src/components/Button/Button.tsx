import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: any;
  onClick?: () => void;
}
const Button = (props: ButtonProps) => {
  const { children, onClick } = props;

  return(
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 5px 15px;
  background-color: #3498db;
  border: 0;
  border-radius:3px;
  color: white;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`;

export default Button;