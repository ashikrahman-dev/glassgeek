import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset,
    setValue
  } = useForm();
  register('serviceType', {
    required: 'Please select a service'
  });
  const onSubmit = async data => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`Quote request failed with status ${response.status}`);
      }
      toast.success('Quote request submitted successfully');
      reset();
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
      console.error('Quote submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const inputClasses = "mt-2 bg-background border-border focus:border-secondary focus:ring-secondary/20 text-foreground transition-all duration-200 rounded-lg";
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot for spam bots; hidden from real visitors. */}
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="fullName" className="text-primary font-bold">Full Name</Label>
          <Input id="fullName" type="text" className={inputClasses} placeholder="Enter your full name" {...register('fullName', {
          required: 'Full name is required'
        })} />
          {errors.fullName && <p className="text-sm text-destructive mt-1.5">{errors.fullName.message}</p>}
        </div>

        <div>
          <Label htmlFor="phone" className="text-primary font-bold">Phone Number</Label>
          <Input id="phone" type="tel" className={inputClasses} placeholder="(239) 123-4567" {...register('phone', {
          required: 'Phone number is required'
        })} />
          {errors.phone && <p className="text-sm text-destructive mt-1.5">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-primary font-bold">Address</Label>
        <Input id="email" type="email" className={inputClasses} placeholder="your.email@example.com" {...register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })} />
        {errors.email && <p className="text-sm text-destructive mt-1.5">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="serviceType" className="text-primary font-bold">Service Type</Label>
        <Select onValueChange={value => setValue('serviceType', value, {
        shouldValidate: true
      })}>
          <SelectTrigger className={inputClasses}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="rounded-lg border-border shadow-lg bg-card">
            <SelectItem value="sliding-door-repair">Sliding Door Repair</SelectItem>
            <SelectItem value="window-repair">Window Repair</SelectItem>
            <SelectItem value="roller-replacement">Roller Replacement</SelectItem>
            <SelectItem value="track-replacement">Track Replacement</SelectItem>
            <SelectItem value="glass-replacement">Glass Replacement</SelectItem>
            <SelectItem value="lock-repair">Lock & Handle Repair</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.serviceType && <p className="text-sm text-destructive mt-1.5">{errors.serviceType.message}</p>}
      </div>

      <div>
        <Label htmlFor="description" className="text-primary font-bold">Project Details</Label>
        <Textarea id="description" className={`${inputClasses} min-h-[120px] resize-y`} placeholder="Please describe your repair needs in detail..." {...register('description', {
        required: 'Description is required'
      })} />
        {errors.description && <p className="text-sm text-destructive mt-1.5">{errors.description.message}</p>}
      </div>

      <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg rounded-lg font-bold transition-colors duration-200" disabled={isSubmitting}>
        {isSubmitting ? <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </> : <>
            <Send className="w-5 h-5 mr-2" />
            Request Free Quote
          </>}
      </Button>
    </form>;
}
export default QuoteForm;