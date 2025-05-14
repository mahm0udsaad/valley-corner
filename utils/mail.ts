import nodemailer from 'nodemailer';

// Create a reusable transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saad123mn123@gmail.com',
    pass: 'lblslwqqfvnezark', // App password for Gmail
  },
});

// Define recipient email
const RECIPIENT_EMAIL = 'valleycornertravel@gmail.com';

/**
 * Send a contact form email
 * @param name Sender's name
 * @param email Sender's email
 * @param phone Sender's phone number
 * @param subject Email subject
 * @param message Email message
 * @returns Promise that resolves when email is sent
 */
export async function sendContactEmail(
  name: string, 
  email: string, 
  phone: string,
  subject: string, 
  message: string
) {
  const mailOptions = {
    from: `"Valley Corner Travel" <saad123mn123@gmail.com>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `[Contact Form] ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

/**
 * Send a package booking inquiry email
 * @param packageName Name of the package
 * @param fullName Customer's full name
 * @param email Customer's email
 * @param phone Customer's phone number
 * @param adults Number of adults
 * @param children Number of children
 * @param departureDate Preferred departure date
 * @param returnDate Preferred return date
 * @param requests Additional requests
 * @returns Promise that resolves when email is sent
 */
export async function sendPackageInquiryEmail(
  packageName: string,
  fullName: string,
  email: string,
  phone: string,
  adults: number,
  children: number,
  departureDate: string,
  returnDate: string,
  requests: string
) {
  const mailOptions = {
    from: `"Valley Corner Travel" <saad123mn123@gmail.com>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `[Package Inquiry] ${packageName}`,
    html: `
      <h2>New Package Booking Inquiry</h2>
      <p><strong>Package:</strong> ${packageName}</p>
      <p><strong>Customer:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Number of Adults:</strong> ${adults}</p>
      <p><strong>Number of Children:</strong> ${children}</p>
      <p><strong>Departure Date:</strong> ${departureDate}</p>
      <p><strong>Return Date:</strong> ${returnDate}</p>
      <p><strong>Additional Requests:</strong></p>
      <p>${requests ? requests.replace(/\n/g, '<br>') : 'None'}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

/**
 * Send a service request email
 * @param service Name of the service
 * @param name Customer's name
 * @param email Customer's email
 * @param phone Customer's phone number
 * @param details Service request details
 * @returns Promise that resolves when email is sent
 */
export async function sendServiceRequestEmail(
  service: string,
  name: string,
  email: string,
  phone: string,
  details: string
) {
  const mailOptions = {
    from: `"Valley Corner Travel" <saad123mn123@gmail.com>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `[Service Request] ${service}`,
    html: `
      <h2>New Service Request</h2>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Customer:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Details:</strong></p>
      <p>${details ? details.replace(/\n/g, '<br>') : 'None'}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
} 