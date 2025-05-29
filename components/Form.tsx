"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  
} from "@/components/ui/form"
import {z} from 'zod';
import { Input } from "./ui/input"
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import sendEmail from './sendEmail'
import toast, { Toaster } from 'react-hot-toast';


const formSchema = z.object({
    sender_email: z.string().email(),
    message: z.string().min(10)
})



const MessageForm = () => {
    const form = useForm<z.infer<typeof formSchema>>(
    {
        resolver:zodResolver(formSchema),
        defaultValues:{
            sender_email:'',
            message:''
        }
    }
)


function onSubmit(values:z.infer<typeof formSchema>){      
    try {
      sendEmail(values.message, values.sender_email)
      toast.success("Message sent successfully!")
      form.reset()
     
    } catch (error) {
      toast.error("Failed to send message.")
      
    }
    
    
}
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-3'>
        <FormField
          control={form.control}
          name="sender_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full bg-[#03a9f4]'>Submit</Button>
    </form>
    </Form>
  )
}

export default MessageForm