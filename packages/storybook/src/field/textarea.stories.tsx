import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  Textarea,
  Button,
} from "@adn-ui/react";
import { useForm } from "react-hook-form";

const meta: Meta = {
  title: "Form/Field/Textarea",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

function Container({ children }: React.PropsWithChildren) {
  return <div className='w-full max-w-md rounded-lg border bg-white p-8 shadow-sm'>{children}</div>;
}

// ---------------------------------------------------------------------------
// DEFAULT TEXTAREA
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { message: "" },
    });

    return (
      <Container>
        <form
          onSubmit={handleSubmit(console.log)}
          className='space-y-4'
        >
          <FieldRoot
            name='message'
            error={errors.message?.message}
          >
            <FieldLabel>Message</FieldLabel>
            <Textarea
              placeholder='Enter your message...'
              {...register("message", { required: "Message is required" })}
            />
            <FieldErrorMessage />
          </FieldRoot>
          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// WITH ROWS (Custom Height)
// ---------------------------------------------------------------------------
export const WithRows: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { bio: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='bio'
            error={errors.bio?.message}
          >
            <FieldLabel>Bio</FieldLabel>
            <Textarea
              placeholder='Tell us about yourself...'
              rows={6}
              {...register("bio", { maxLength: { value: 500, message: "Too long!" } })}
            />
            <FieldDescription>Maximum 500 characters.</FieldDescription>
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// DISABLED
// ---------------------------------------------------------------------------
export const Disabled: Story = {
  render: () => {
    const { register } = useForm({
      defaultValues: { notes: "This is read-only" },
    });

    return (
      <Container>
        <FieldRoot name='notes'>
          <FieldLabel>Notes</FieldLabel>
          <Textarea
            disabled
            rows={4}
            {...register("notes")}
          />
          <FieldDescription>This field is disabled.</FieldDescription>
        </FieldRoot>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// WITH MAX LENGTH
// ---------------------------------------------------------------------------
export const WithMaxLength: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { comment: "" },
    });

    return (
      <Container>
        <form onSubmit={handleSubmit(console.log)}>
          <FieldRoot
            name='comment'
            error={errors.comment?.message}
          >
            <FieldLabel>Comment</FieldLabel>
            <Textarea
              placeholder='Leave a comment...'
              rows={4}
              {...register("comment", {
                maxLength: { value: 200, message: "Comment cannot exceed 200 characters" },
              })}
            />
            <FieldDescription>Maximum 200 characters.</FieldDescription>
            <FieldErrorMessage />
          </FieldRoot>
        </form>
      </Container>
    );
  },
};
