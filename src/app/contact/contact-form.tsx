'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { contactContent } from '@/content/contact';
import { FormField } from '@/components/forms/form-field';
import { submitContactEnquiry } from '@/actions/contact';

// Define strict validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid work email address.' }),
  brand: z.string().min(2, { message: 'Brand or Company name must be specified.' }),
  collabType: z.string().min(1, { message: 'Please select a collaboration type.' }),
  budget: z.string().min(1, { message: 'Please select an estimated budget range.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get('service') || '';

  const { heading, description, collabOptions, budgetOptions, fields } = contactContent.form;
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  // Match URL parameter to the correct option value
  const defaultCollabType = React.useMemo(() => {
    const matchedOption = collabOptions.find((opt) => opt.value.includes(serviceParam));
    return matchedOption ? matchedOption.value : '';
  }, [serviceParam, collabOptions]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      brand: '',
      collabType: defaultCollabType,
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle');
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        formData.append(key, val);
      });

      const res = await submitContactEnquiry(null, formData);
      if (res.success) {
        setSubmitStatus('success');
        reset();
      } else {
        console.error('Server action returned error:', res.message);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-card border border-emerald-500/20 rounded-3xl p-8 text-center flex flex-col items-center shadow-xs">
        <CheckCircle className="h-12 w-12 text-emerald-500 mb-4 shrink-0" />
        <h3 className="font-heading text-xl font-bold tracking-tight text-foreground mb-2">
          Enquiry Sent Successfully!
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm mb-6">
          Thank you for reaching out. Mango J and her collaboration team will review your proposal and get in touch within 24-48 business hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98]"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/60 rounded-3xl p-6 md:p-8 shadow-xs">
      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground mb-2">
        {heading}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {submitStatus === 'error' && (
        <div className="mb-6 flex gap-3 items-start bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Oops! Something went wrong.</p>
            <p className="text-xs mt-0.5">Please check your inputs and try again, or email us directly.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name and Email side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label={fields.name} error={errors.name?.message} required>
            <input
              id="name"
              type="text"
              {...register('name')}
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </FormField>

          <FormField label={fields.email} error={errors.email?.message} required>
            <input
              id="email"
              type="email"
              {...register('email')}
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </FormField>
        </div>

        {/* Brand/Company */}
        <FormField label={fields.brand} error={errors.brand?.message} required>
          <input
            id="brand"
            type="text"
            {...register('brand')}
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </FormField>

        {/* Collab Type and Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label={fields.collabType} error={errors.collabType?.message} required>
            <select
              id="collabType"
              {...register('collabType')}
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl border border-input bg-card px-4 py-2 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              <option value="">Select an option</option>
              {collabOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label={fields.budget} error={errors.budget?.message} required>
            <select
              id="budget"
              {...register('budget')}
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl border border-input bg-card px-4 py-2 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              <option value="">Select range</option>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Message */}
        <FormField label={fields.message} error={errors.message?.message} required>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            disabled={isSubmitting}
            className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-sm transition focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[120px]"
          />
        </FormField>

        {/* Submit trigger */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md transition hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin shrink-0" />
              <span>Sending Proposal...</span>
            </>
          ) : (
            <span>Send Enquiry Proposal</span>
          )}
        </button>
      </form>
    </div>
  );
}
