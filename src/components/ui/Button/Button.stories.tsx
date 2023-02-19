import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "@/components/ui/Button";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default {
  component: Button,
} as ComponentMeta<T>;

export const Default: Story = {
  args: {
    href: "/",
    children: "リンクボタン",
  },
};
