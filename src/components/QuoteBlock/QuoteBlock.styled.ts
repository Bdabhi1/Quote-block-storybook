import styled from "styled-components";

export const QuoteBlockWrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
  padding: 12px 16px;
  margin: 50px 20px 0px;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.backgroundColor};
  font-family: ${({ theme }) => theme.fontFamily};
  @media (min-width: 1200px) {
    margin: 50px auto 0px;
  }
`;

export const QuoteBlockHeadSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const QuoteBlockTextBox = styled.div`
  background: ${({ theme }) => theme.textBoxBackgroundColor};
  padding: 7px 15px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const QuoteBlockTitleUnderLine = styled.div`
  background: ${({ theme }) => theme.titleTextColor};
  height: 1px;
  width: 60px;
`;

export const QuoteBlockTitle = styled.h2`
  color: ${({ theme }) => theme.titleTextColor};
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 400;
`;
