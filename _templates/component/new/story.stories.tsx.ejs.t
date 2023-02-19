---
to: "<%= category !== 'functional' ? `src/components/${category}/${componentName}/${componentName}.stories.tsx` : null %>"
---
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { <%= componentName %> } from "./<%= componentName %>";

type T = typeof <%= componentName %>;
type Story = ComponentStoryObj<T>;

const description = ``;

export default {
  component: <%= componentName %>,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
