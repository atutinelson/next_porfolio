'use server'
import { Resend } from 'resend'


const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

function sendEmail(message:string, sender_email:string){
 const send_message = (message + "from"+ sender_email)
resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'nelsonatuti27@gmail.com',
  subject: 'Hello World',
  text: message
});
  
}

export default sendEmail