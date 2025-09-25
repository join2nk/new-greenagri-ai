'use server'
import {z} from 'zod'
import { db } from '@/db/prisma'
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  company : z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})
export async function SubmitContactForm(initialData:unknown,formData: FormData) {

  const data = Object.fromEntries(formData.entries())

  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return {error : result.error.issues}
    throw new Error('Invalid form data')
  }

  // Process the valid form data
  const { name, email, message } = result.data
  console.log('Form submitted:', { name, email, message })

  // Save the form data to the database
  await db.contactFormSubmission.create({
    data: {
      name,
      email,
      message,
    },
  })
  return { success: true }
}

