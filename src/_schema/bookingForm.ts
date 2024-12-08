import { z } from 'zod';
import { stations } from '@/lib/station';

export const BookingFormSchema = z
  .object({
    origin: z.string({
      required_error: 'Please select the origin station',
    }),
    destination: z.string({
      required_error: 'Please select the destination station',
    }),
  })
  .refine((data) => data.origin !== data.destination, {
    message: 'The destination is incorrect. Please try again.',
    path: ['destination'],
  })
  .refine((data) => {
    
  });

export type BookingFormDefs = z.infer<typeof BookingFormSchema>;
