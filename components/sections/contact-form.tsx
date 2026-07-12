"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceCategories } from "@/content/services";

const budgetRanges = [
  "Under $5,000/mo",
  "$5,000 - $10,000/mo",
  "$10,000 - $20,000/mo",
  "$20,000+/mo",
];

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().min(2, "Enter your company name"),
  budget: z.string().min(1, "Select a budget range"),
  projectType: z.string().min(1, "Select a project type"),
  message: z.string().min(10, "Tell us a bit more about your goals"),
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      projectType: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl border border-foreground/10 bg-card shadow-surface p-10 text-center">
        <CheckCircle2 className="size-10 text-foreground/80" />
        <h3 className="mt-4 text-xl font-medium text-foreground">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. A member of our team will follow up within
          one business day to schedule your call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border border-foreground/10 bg-card shadow-surface p-8"
      noValidate
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Jane Cooper" {...register("name")} />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Company, Inc." {...register("company")} />
        {errors.company ? (
          <p className="text-xs text-destructive">{errors.company.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="budget" className="w-full">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget ? (
            <p className="text-xs text-destructive">{errors.budget.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <Controller
            control={control}
            name="projectType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="projectType" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.projectType ? (
            <p className="text-xs text-destructive">
              {errors.projectType.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your goals, current channels, and timeline."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="h-11 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
