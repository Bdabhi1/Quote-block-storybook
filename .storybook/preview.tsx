import type { Preview } from "@storybook/react";
import { QuoteContextProvider } from "../src/provider/Quote";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story, context) => {
    return (
      <QuoteContextProvider quoteContext={{...context.args, story: context.story}}>
        <Story />
      </QuoteContextProvider>
    );
  },
];
