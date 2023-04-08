import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { BUTTON_THEME, COLORS } from "../utils/constant";

export const ButtonWrapper = styled.button`
  background: ${({ theme }) => COLORS[theme as BUTTON_THEME].backgroundColor};
  color: ${({ theme }) => COLORS[theme as BUTTON_THEME].textColor};
  border: ${({ theme }) =>
    COLORS[theme as BUTTON_THEME]?.borderColor
      ? `1px solid ${COLORS[theme as BUTTON_THEME].borderColor}`
      : "none"};
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  theme: BUTTON_THEME;
};

const Button = ({
  loading,
  theme,
  disabled = false,
  onClick,
  children,
  ...rest
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <ButtonWrapper
      theme={theme}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </ButtonWrapper>
  );
};

export default Button;
