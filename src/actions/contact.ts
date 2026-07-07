'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  brand: z.string().min(2),
  collabType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function submitContactEnquiry(prevState: any, formData: FormData) {
  const rawFields = {
    name: formData.get('name'),
    email: formData.get('email'),
    brand: formData.get('brand'),
    collabType: formData.get('collabType'),
    budget: formData.get('budget'),
    message: formData.get('message'),
  };

  const validated = contactSchema.safeParse(rawFields);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: 'Failed to validate enquiry form inputs.',
    };
  }

  try {
    // Architectural placeholder for database connection or mail trans-delivery
    // e.g. await db.insert(enquiries).values(validated.data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Enquiry received. The collaboration team will respond shortly.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Database connection failed. Please try again later.',
    };
  }
}
