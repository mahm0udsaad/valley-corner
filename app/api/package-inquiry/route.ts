import { NextResponse } from 'next/server';
import { sendPackageInquiryEmail } from '@/utils/mail';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { 
      packageName,
      fullName, 
      email, 
      phone, 
      adults, 
      children, 
      departureDate, 
      returnDate, 
      requests 
    } = body;

    // Validate required fields
    if (!packageName || !fullName || !email || !phone || !adults || !departureDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email
    await sendPackageInquiryEmail(
      packageName,
      fullName,
      email,
      phone,
      adults,
      children || 0,
      departureDate,
      returnDate || 'Not specified',
      requests || ''
    );

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending package inquiry email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 