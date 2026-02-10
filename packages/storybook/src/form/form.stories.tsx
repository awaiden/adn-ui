import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Checkbox,
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  Surface,
  Form,
} from "@adn-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const meta: Meta = {
  title: "Form/Form",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

function Container({ children }: React.PropsWithChildren) {
  return <Surface>{children}</Surface>;
}

// ---------------------------------------------------------------------------
// 1. BASIC FORM (Standard Register Usage)
// ---------------------------------------------------------------------------

export const BasicForm: Story = {
  render: () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: { email: "", password: "" },
    });

    console.log(errors);

    return (
      <Container>
        <Form onSubmit={handleSubmit((data) => console.log(data))}>
          <FieldRoot
            name='email'
            isRequired
            error={errors.email?.message}
          >
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              placeholder='Enter your email'
              {...register("email", { required: "Email is required" })}
            />
            <FieldDescription>Please enter a valid email address.</FieldDescription>
            <FieldErrorMessage />
          </FieldRoot>

          <FieldRoot
            name='password'
            isRequired
            error={errors.password?.message}
          >
            <FieldLabel>Password</FieldLabel>
            <Input
              type='password'
              placeholder='Enter your password'
              {...register("password", { required: "Password is required" })}
            />
            <FieldErrorMessage />
          </FieldRoot>

          <Button
            type='submit'
            className='w-full'
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// 2. WITH VALIDATION (Base UI Checkbox + Controller)
// ---------------------------------------------------------------------------

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type LoginForm = z.infer<typeof loginSchema>;

export const WithValidation: Story = {
  render: () => {
    const {
      register,
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginForm>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
        remember: false,
      },
    });

    return (
      <Container>
        <Form
          noValidate
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
          className='space-y-4'
        >
          <FieldRoot
            name='email'
            isRequired
            error={errors.email?.message}
          >
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              placeholder='john@example.com'
              {...register("email")}
            />
            <FieldErrorMessage />
          </FieldRoot>

          <FieldRoot
            name='password'
            isRequired
            error={errors.password?.message}
          >
            <FieldLabel>Password</FieldLabel>
            <Input
              type='password'
              placeholder='••••••••'
              {...register("password")}
            />
            <FieldErrorMessage />
          </FieldRoot>

          {/* BASE UI CHECKBOX İÇİN CONTROLLER ŞART AGA */}
          <Controller
            name='terms'
            control={control}
            render={({ field }) => (
              <FieldRoot
                name='terms'
                error={errors.terms?.message}
              >
                <div className='flex items-center gap-2'>
                  <Checkbox.Root
                    id='terms'
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  >
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                  <FieldLabel
                    htmlFor='terms'
                    className='m-0'
                  >
                    I agree to the terms
                  </FieldLabel>
                </div>
                <FieldErrorMessage />
              </FieldRoot>
            )}
          />

          <Button
            type='submit'
            className='w-full'
          >
            Sign In
          </Button>
        </Form>
      </Container>
    );
  },
};

// ---------------------------------------------------------------------------
// 3. COMPLETE FORM (Select, Radio, Textarea)
// ---------------------------------------------------------------------------

const profileSchema = z.object({
  firstName: z.string().min(2, "Too short"),
  lastName: z.string().min(2, "Too short"),
  email: z.string().email(),
  bio: z.string().max(500).optional(),
  country: z.string().min(1, "Select a country"),
  notifications: z.enum(["all", "important", "none"]),
});

type ProfileForm = z.infer<typeof profileSchema>;

export const CompleteForm: Story = {
  render: () => {
    const {
      register,
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<ProfileForm>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        notifications: "all",
      },
    });

    return (
      <Container>
        <Form
          onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
          className='space-y-4'
        >
          <h2 className='text-xl font-bold'>Profile Settings</h2>

          <div className='grid grid-cols-2 gap-4'>
            <FieldRoot
              name='firstName'
              error={errors.firstName?.message}
            >
              <FieldLabel>First Name</FieldLabel>
              <Input {...register("firstName")} />
              <FieldErrorMessage />
            </FieldRoot>

            <FieldRoot
              name='lastName'
              error={errors.lastName?.message}
            >
              <FieldLabel>Last Name</FieldLabel>
              <Input {...register("lastName")} />
              <FieldErrorMessage />
            </FieldRoot>
          </div>

          <FieldRoot
            name='email'
            error={errors.email?.message}
          >
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              {...register("email")}
            />
            <FieldErrorMessage />
          </FieldRoot>

          <FieldRoot
            name='bio'
            error={errors.bio?.message}
          >
            <FieldLabel>Bio</FieldLabel>
            <Textarea
              rows={4}
              {...register("bio")}
            />
            <FieldErrorMessage />
          </FieldRoot>

          <FieldRoot
            name='country'
            error={errors.country?.message}
          >
            <FieldLabel>Country</FieldLabel>
            <Select {...register("country")}>
              <option value=''>Select a country</option>
              <option value='tr'>Turkey</option>
              <option value='us'>United States</option>
            </Select>
            <FieldErrorMessage />
          </FieldRoot>

          {/* BASE UI RADIO GROUP CONTROLLER İSTER */}
          <Controller
            name='notifications'
            control={control}
            render={({ field }) => (
              <FieldRoot
                name='notifications'
                error={errors.notifications?.message}
              >
                <FieldLabel>Notifications</FieldLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className='space-y-1'
                >
                  <div className='flex items-center gap-2'>
                    <Radio
                      value='all'
                      id='n-all'
                    />
                    <label htmlFor='n-all'>All</label>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Radio
                      value='important'
                      id='n-imp'
                    />
                    <label htmlFor='n-imp'>Important</label>
                  </div>
                </RadioGroup>
                <FieldErrorMessage />
              </FieldRoot>
            )}
          />

          <div className='flex gap-4 pt-2'>
            <Button
              type='button'
              variant='outline'
              onClick={() => reset()}
              className='flex-1'
            >
              Reset
            </Button>
            <Button
              type='submit'
              className='flex-1'
            >
              Save
            </Button>
          </div>
        </Form>
      </Container>
    );
  },
};
