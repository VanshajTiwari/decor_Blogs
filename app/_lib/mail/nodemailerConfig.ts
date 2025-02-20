
import nodemailer from "nodemailer";
import enquiry from "./template/enquiryTemplate";
const smtpTransport = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE || undefined, // Use only if needed
    host: process.env.NODEMAILER_HOST ,
    port: Number(process.env.NODEMAILER_PORT) || 587,
    secure: process.env.NODEMAILER_PORT === "465", // SSL for port 465
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});
type mailBody={
    email:string,
    subject?:string,
    to?:string|undefined,
    message?:string,
    fullname?:string|undefined,
    phone?:string
}

async function sendMailToAdmin(sender:mailBody){
    try{
        var mailOptions = {
            from: "kazuyakazami19@gmail.com",
            to:"kazuyakazami19@gmail.com", 
            subject: "Contact for Contract",
            text: sender.message,
            html:enquiry(sender)
        }
       await smtpTransport.sendMail(mailOptions);
       console.log("sent!");
    }
    catch(err:any){
        console.log(err.message);
    }
}

export default sendMailToAdmin; 