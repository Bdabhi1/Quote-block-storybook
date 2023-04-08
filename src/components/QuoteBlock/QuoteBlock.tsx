import React, { useContext } from "react";
import Button from "../Button";
import "../../App.css";
import { BRAND, brandTheme, quoteBlockData } from "../../utils/constant";
import { QuoteContext } from "../../provider/Quote";
import {
  QuoteBlockHeadSection,
  QuoteBlockTextBox,
  QuoteBlockTitle,
  QuoteBlockTitleUnderLine,
  QuoteBlockWrapper,
} from "./QuoteBlock.styled";

const QuoteBlock = () => {
  const { title, subTitle, description } = quoteBlockData;
  const {
    hideUnderline,
    backgroundColor,
    textBoxBackgroundColor,
    textColor,
    story,
  } = useContext(QuoteContext);
  const quoteBlockTheme = {
    backgroundColor,
    textBoxBackgroundColor,
    textColor,
    ...brandTheme[story as BRAND],
  };

  return (
    <QuoteBlockWrapper theme={quoteBlockTheme}>
      <QuoteBlockTextBox theme={quoteBlockTheme}>
        <QuoteBlockHeadSection>
          <QuoteBlockTitle theme={quoteBlockTheme}>{title}</QuoteBlockTitle>
          <h4 className="quote-subtitle">{subTitle}</h4>
          {!hideUnderline && (
            <QuoteBlockTitleUnderLine theme={quoteBlockTheme} />
          )}
        </QuoteBlockHeadSection>
        <div className="quote-right">
          <p className="quote-description">{description}</p>
          <div className="quote-action">
            <Button theme={brandTheme[story as BRAND].primaryBtn}>
              Buy ticket
            </Button>
            <Button theme={brandTheme[story as BRAND].secondaryBtn}>
              Buy ticket
            </Button>
          </div>
        </div>
      </QuoteBlockTextBox>
    </QuoteBlockWrapper>
  );
};

export default QuoteBlock;
