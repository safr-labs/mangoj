'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  brand: z.string().min(2),
  collabType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function submitContactEnquiry(prevState: unknown, formData: FormData) {
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
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials (SMTP_USER / SMTP_PASS) are not configured in the .env file.');
      return {
        success: false,
        message: 'Mail delivery service credentials are not configured on the server.',
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${validated.data.name} via Manganikka Form" <${smtpUser}>`,
      to: smtpUser, // Send the enquiry to your own business inbox
      replyTo: validated.data.email, // Hit reply to write directly back to the brand!
      subject: `💼 New Collaboration: ${validated.data.brand} (${validated.data.collabType})`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d97706, #b45309); padding: 30px 20px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">New Collaboration Enquiry</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Manganikka Brand Sponsorship Form</p>
          </div>
          
          <!-- Content Body -->
          <div style="padding: 30px 24px;">
            <p style="font-size: 16px; line-height: 1.5; color: #374151; margin-top: 0;">
              Hi Mango J, you received a new sponsorship or collaboration request through your website's contact form.
            </p>
            
            <!-- Details Card -->
            <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 12px; padding: 20px; margin: 25px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 35%;">Client Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${validated.data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Brand/Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><strong>${validated.data.brand}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Work Email:</td>
                  <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${validated.data.email}" style="color: #2563eb; text-decoration: none;">${validated.data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Collab Type:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><span style="background-color: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: 600;">${validated.data.collabType}</span></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Est. Budget:</td>
                  <td style="padding: 8px 0; color: #059669; font-weight: bold;">${validated.data.budget}</td>
                </tr>
              </table>
            </div>
            
            <!-- Message Section -->
            <div style="margin-top: 25px;">
              <h3 style="font-size: 16px; font-weight: bold; color: #1f2937; margin: 0 0 10px 0;">Project Scope & Brief:</h3>
              <div style="font-size: 15px; line-height: 1.6; color: #4b5563; border-left: 4px solid #d97706; padding-left: 16px; margin: 0; font-style: italic; background-color: #fffbeb; padding-top: 12px; padding-bottom: 12px; border-radius: 0 8px 8px 0;">
                ${validated.data.message.replace(/\n/g, '<br />')}
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f3f4f6; padding: 15px 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
            This email was automatically generated and sent from Manganikka Web Platform.<br />
            To write back to the sender, simply hit <strong>Reply</strong> to this email.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Enquiry received. The collaboration team will respond shortly.',
    };
  } catch (error) {
    console.error('SMTP Mail delivery failure:', error);
    return {
      success: false,
      message: 'Mail delivery failed. Please try again later or email us directly.',
    };
  }
}
