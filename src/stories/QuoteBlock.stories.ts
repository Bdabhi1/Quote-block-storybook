import QuoteBlock from "../components/QuoteBlock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "QuoteBlock",
  component: QuoteBlock,
} satisfies Meta<typeof QuoteBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandA: Story = {
  args: {
    hideUnderline: false,
    backgroundColor: "#FFFFFF",
    textBoxBackgroundColor: "#FFFFFF",
    textColor: "#282828",
  },
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["#FFFFFF", "#FAF5EB"],
    },
    textBoxBackgroundColor: {
      control: "select",
      options: ["#FFFFFF", "#FAF5EB"],
    },
    textColor: {
      control: "select",
      options: ["#282828", "#FFFFFF"],
    },
  },
};

export const BrandB: Story = {
  args: {
    hideUnderline: false,
    backgroundColor: "#F6F6F6",
    textBoxBackgroundColor: "#FFFFFF",
    textColor: "#282828",
  },
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["#F6F6F6", "#E6F1FA"],
    },
    textBoxBackgroundColor: {
      control: "select",
      options: ["#FFFFFF", "#FAF5EB", "#F6F6F6", "#E6F1FA", "#0057B7"],
    },
    textColor: {
      control: "select",
      options: ["#282828", "#FFFFFF", '#000000'],
    },
  },
};
