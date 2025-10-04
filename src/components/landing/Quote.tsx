"use client";

import { useActionState, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createMessage } from "@/app/admin/quote/action"; // server action
import { toast } from "sonner";
import { Dock, QuoteIcon, Signature } from "lucide-react";

export default function QuoteDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false); // <-- new state

  // const handleSubmit = async (formData: FormData) => {
  //   try {
  //     await createMessage(formData); // call server action
  //     setSubmitted(true); // show thank-you
  //   } catch (error) {
  //     console.error(error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

const [state, action] = useActionState(createMessage, null);

useEffect(() => {
  if (state?.success) {
    toast("Thank you! Your quote request has been submitted.");
    setOpen(false)
  } else if (!(state?.success)){
    toast.success(state?.error)
  }

}, [state]);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-amber-300 px-6 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get Quote
      </Button>

      <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) setSubmitted(false); }}>
        <DialogContent className="w-full max-w-lg">
          <DialogHeader>
            <DialogTitle>
                <Signature  />
              Request a Quote</DialogTitle>
          </DialogHeader>

          {submitted ? (
            <div className="p-4 text-center text-green-700 font-semibold">
              Thank you! Your quote request has been submitted.
            </div>
          ) : (
            <form 
              action={action} // call client wrapper
              className="space-y-4 mt-2"
            >
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="grid gap-2">
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
