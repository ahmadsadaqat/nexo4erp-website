// app/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// 1. Update this import path
import {
  contactSchema,
  ContactFormData,
  FormState,
} from "./schema";
// 2. This import remains the same
import { submitContactForm } from "./actions";


export function ContactForm() {
  const [serverState, setServerState] = useState<FormState | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema), // Connect Zod to react-hook-form
  });

  // This function is called when client-side validation passes
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const response = await submitContactForm(data);
    setServerState(response);

    // You could also reset the form on success
    // if (response.success) {
    //   reset();
    // }
  };

  return (
    <div className="max-w-lg mx-auto">
      {/* Display Server Response */}
      {serverState && (
        <div
          className={`p-3 rounded-md mb-4 text-center ${
            serverState.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {serverState.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")} // Register the input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}