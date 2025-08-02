"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function QuoteDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <Button 
        onClick={() => setOpen(true)} 
        className="bg-green-600 hover:bg-green-700 text-amber-300 px-6 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Get Quote
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
          </DialogHeader>

          <form className="space-y-4 mt-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="Tell us about your inquiry"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-green-500 focus:border-green-500"
                rows={4}
              />
            </div>

            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Send Quote
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
