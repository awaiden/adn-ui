import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "@adn-ui/react";
import { Switch } from "@adn-ui/react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <Template>
        <Label>
          <Switch.Root>
            <Switch.Thumb />
          </Switch.Root>
          Switch
        </Label>
      </Template>
    );
  },
};
