import React from 'react'
import { db } from '@/db/prisma'
import ContactFormDataTable from './ContactFormDataTable'
export default async function ContactFormAdminPage() {
  const submissions = await db.contactFormSubmission.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Form Submissions</h1>
      <ContactFormDataTable
        data={submissions}
        onDelete={async (id: string) => {
          "use server"
          await db.contactFormSubmission.delete({
            where: { id },
          })
        }}
      />
      {/* <hr className="my-8" />
      <h2 className="text-xl font-semibold mb-4">Raw Submissions Table</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Submitted At</th>
            </tr> 
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{submission.name}</td>
                <td className="border border-gray-300 px-4 py-2">{submission.email}</td>
                <td className="border border-gray-300 px-4 py-2">{submission.message}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(submission.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}

    </div>
  )
}
