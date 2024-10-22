'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { sql } from 'drizzle-orm';


// Schemas //

const CardFormSchema = z.object({
    id: z.number(),
    front: z.string({
      invalid_type_error: 'Front cannot be blank.',
    }),
    back: z.string({
      invalid_type_error: 'Back cannot be blank.',
    }),
    deck: z.number(),
    createdOn: z.string().datetime(),
});

const CreateCard = CardFormSchema.omit({ id: true, createdOn: true});
const UpdateCard = CardFormSchema.omit({ id: true, createdOn: true });


const DeckFormSchema = z.object({
    id: z.number(),
    name: z.string({
      invalid_type_error: 'Front cannot be blank.',
    }),
    owner: z.number(),
    createdOn: z.string().datetime(),
    isPublic: z.boolean(),
});

const CreateDeck = CardFormSchema.omit({ id: true, createdOn: true});
const UpdateDeck = CardFormSchema.omit({ id: true, createdOn: true });


// Actions //


export async function createCard(formData: FormData) {
    const front = formData.get('front');
    const back = formData.get('back');
    const deck = formData.get('deck');

    await db.execute(sql`
    INSERT INTO cards (front, back, deck)
    VALUES (${front}, ${back}, ${deck})
    `);

    
    revalidatePath('/testform');
    redirect('/testform');
}

// export async function updateInvoice(id: string, formData: FormData) {
//     const { customerId, amount, status } = UpdateInvoice.parse({
//       customerId: formData.get('customerId'),
//       amount: formData.get('amount'),
//       status: formData.get('status'),
//     });
   
//     const amountInCents = amount * 100;
   
//     try {
//       await sql`
//         UPDATE invoices
//         SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//         WHERE id = ${id}
//       `;
//     } catch(error) {
//       return {
//         message: 'Database Error: Failed to update invoice.'
//       };
//     }
   
//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
//   }


  export async function AddCard(formData: FormData) {
    'use server';
    const front = formData.get('front');
    const back = formData.get('back');
    const deck = formData.get('deck');
    console.log('Submitting card...')
    await db.execute(sql`
        INSERT INTO cards (front, back, deck)
        VALUES (${front}, ${back}, ${deck})
        `);
    console.log('Submitted!');
}