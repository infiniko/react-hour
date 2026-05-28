"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";
const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.email("Please enter a valid email address"),
    fullname:
      formType === "sign-up"
        ? z
            .string()
            .min(2, "Full name must be at least 2 characters")
            .max(50, "Full name must be at most 50 characters")
        : z.string().optional(),
  });
};

function AuthForm({ type }: { type: FormType }) {
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data);
  }
  return (
    <>
      <form className="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="form-title">
          {type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <FieldGroup>
          {type === "sign-up" && (
            <Controller
              name="fullname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="fullname" className="px-5">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="fullname"
                    placeholder="Enter your full name"
                    className="h-12 rounded-full px-5"
                  />
                  {fieldState.invalid && (
                    <FieldError className="px-5" errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="email" className="px-5">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-full px-5"
                />
                {fieldState.invalid && (
                  <FieldError className="px-5" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          className="form-submit-button"
          disabled={isSubmitting}
        >
          {type === "sign-in" ? "Sign In" : "Sign Up"}
          {isSubmitting && (
            <Image
              src="/assets/icons/loader.svg"
              alt="loader"
              width={20}
              height={20}
              className="ml-2 animate-spin"
            />
          )}
        </Button>
        <div className="body-2 flex justify-center">
          <p className="text-light-100">
            {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="ml-1 font-medium text-brand"
          >
            {type === "sign-in" ? "sign-up" : "sign-in"}
          </Link>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
