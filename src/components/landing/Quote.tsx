"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createMessage } from "@/app/admin/quote/action"; // server action

export default function QuoteDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false); // <-- new state

  const handleSubmit = async (formData: FormData) => {
    try {
      await createMessage(formData); // call server action
      setSubmitted(true); // show thank-you
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-amber-300 px-6 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get Quote
      </Button>

      <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSubmitted(false); }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div className="p-4 text-center text-green-700 font-semibold">
              Thank you! Your quote request has been submitted.
            </div>
          ) : (
            <form 
              action={handleSubmit} // call client wrapper
              className="space-y-4 mt-2"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your inquiry"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-green-500 focus:border-green-500"
                  rows={4}
                />
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  Send Quote
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
