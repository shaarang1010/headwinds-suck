import { z } from 'zod';

export const DurationSchema = z
	.object({
		hours: z.number().int().positive().min(0).max(23).describe('Hours'),
		minutes: z.number().int().positive().min(0).max(59).describe('Minutes')
	})
	.transform((data) => ({
		...data,
		totalMinutes: data.hours * 60 + data.minutes,
		toString: () => `${data.hours}h ${data.minutes}m`
	}));

export const formSchema = z.object({
	suburb: z.string({ required_error: 'Please enter suburb or postcode' }).min(2).max(50),
	zone: z.number({ required_error: 'Please select a zone' }),
	FTP: z.number({ required_error: 'Please enter your FTP' }).default(145.0),
	maxHR: z.number({ required_error: 'Please enter your max HR' }).int().positive(),
	minHR: z.number({ required_error: 'Please enter your min HR' }).int().positive(),
	durationHrs: z.number().positive().default(0),
	durationMins: z.number().positive().default(10)
});

export type FormSchema = typeof formSchema;
