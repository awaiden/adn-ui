import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Field, Form } from "@adn-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const meta: Meta<typeof Form> = {
  title: "Form/Form",
};

export default meta;
type Story = StoryObj<typeof meta>;

function Container({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>{children}</div>
  );
}

export const BasicForm: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => console.log(data)}
        >
          <Field
            name='email'
            isRequired
          >
            <Field.Label>Email</Field.Label>
            <Field.Input
              type='email'
              placeholder='Enter your email'
            />
            <Field.HelperText>Please enter a valid email address.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>

          <Field
            name='password'
            isRequired
          >
            <Field.Label>Password</Field.Label>
            <Field.Input
              type='password'
              placeholder='Enter your password'
            />
            <Field.HelperText>Your password must be at least 8 characters long.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>

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
    const form = useForm<LoginForm>({
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
          form={form}
          onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
        >
          <Field
            name='email'
            isRequired
          >
            <Field.Label>Email</Field.Label>
            <Field.Input
              type='email'
              placeholder='john@example.com'
            />
            <Field.ErrorMessage />
          </Field>

          <Field
            name='password'
            isRequired
          >
            <Field.Label>Password</Field.Label>
            <Field.Input
              type='password'
              placeholder='••••••••'
            />
            <Field.ErrorMessage />
          </Field>

          <Field
            name='terms'
            isRequired
          >
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>I agree to the terms and conditions</span>
            </Field.Label>
            <Field.ErrorMessage />
          </Field>

          <Field name='remember'>
            <Field.Label className='flex items-center gap-2'>
              <Field.Checkbox />
              <span>Remember me</span>
            </Field.Label>
          </Field>

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

const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  country: z.string().min(1, "Please select a country"),
  notifications: z.enum(["all", "important", "none"]),
});

type ProfileForm = z.infer<typeof profileSchema>;

export const CompleteForm: Story = {
  render: () => {
    const form = useForm<ProfileForm>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        country: "",
        notifications: "all",
      },
    });

    return (
      <Container>
        <Form
          form={form}
          onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
        >
          <h2 className='text-2xl font-bold'>Profile Settings</h2>

          <div className='grid grid-cols-2 gap-4'>
            <Field name='firstName'>
              <Field.Label>First Name</Field.Label>
              <Field.Input placeholder='John' />
              <Field.ErrorMessage />
            </Field>

            <Field name='lastName'>
              <Field.Label>Last Name</Field.Label>
              <Field.Input placeholder='Doe' />
              <Field.ErrorMessage />
            </Field>
          </div>

          <Field name='email'>
            <Field.Label>Email Address</Field.Label>
            <Field.Input
              type='email'
              placeholder='john.doe@example.com'
            />
            <Field.ErrorMessage />
          </Field>

          <Field name='bio'>
            <Field.Label>Bio</Field.Label>
            <Field.TextArea
              placeholder='Tell us about yourself...'
              rows={4}
            />
            <Field.HelperText>Maximum 500 characters.</Field.HelperText>
            <Field.ErrorMessage />
          </Field>

          <Field name='country'>
            <Field.Label>Country</Field.Label>
            <Field.Select>
              <option value=''>Select a country</option>
              <option value='us'>United States</option>
              <option value='uk'>United Kingdom</option>
              <option value='ca'>Canada</option>
              <option value='tr'>Turkey</option>
              <option value='de'>Germany</option>
              <option value='fr'>France</option>
            </Field.Select>
            <Field.ErrorMessage />
          </Field>

          <Field name='notifications'>
            <Field.Label>Email Notifications</Field.Label>
            <Field.RadioGroup
              orientation='vertical'
              className='space-y-2'
            >
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='all' />
                <span>All notifications</span>
              </Field.Label>
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='important' />
                <span>Important only</span>
              </Field.Label>
              <Field.Label className='flex items-center gap-2'>
                <Field.Radio value='none' />
                <span>No notifications</span>
              </Field.Label>
            </Field.RadioGroup>
            <Field.ErrorMessage />
          </Field>

          <div className='flex gap-4'>
            <Button
              type='button'
              variant='outline'
              onClick={() => form.reset()}
              className='flex-1'
            >
              Reset
            </Button>
            <Button
              type='submit'
              className='flex-1'
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Container>
    );
  },
};
