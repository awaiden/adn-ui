"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "../button";
import { FieldControl, FieldError, FieldLabel, FieldRoot } from "../field";
import { FormRoot } from "./form";

export function FormDemo() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (email.endsWith("@example.com")) {
      setErrors({ email: "Example email domain is restricted." });
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
    setLoading(false);
  };

  return (
    <div className="w-80">
      <FormRoot errors={errors} onSubmit={handleSubmit}>
        <FieldRoot name="email">
          <FieldLabel>Work Email</FieldLabel>
          <FieldControl placeholder="name@company.com" required type="email" />
          <FieldError />
        </FieldRoot>
        <Button disabled={loading} type="submit">
          {loading ? "Submitting..." : "Submit Form"}
        </Button>
      </FormRoot>
    </div>
  );
}
