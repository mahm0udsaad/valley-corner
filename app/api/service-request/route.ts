import { NextResponse } from 'next/server';
import { sendServiceRequestEmail } from '@/utils/mail';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { service, name, email, phone, details } = body;

    // Validate required fields
    if (!service || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send the email
    await sendServiceRequestEmail(service, name, email, phone, details || '');

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending service request email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 