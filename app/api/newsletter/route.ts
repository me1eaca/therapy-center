import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // In production, you would:
    // 1. Validate email format
    // 2. Store in database
    // 3. Send confirmation email
    // 4. Add to mailing list service (Mailchimp, ConvertKit, etc.)

    // For now, we'll just simulate success
    console.log(`Newsletter subscription: ${email}`)
    
    // You could send an email to office@awareconnections.eu here
    // using a service like Resend, SendGrid, or Nodemailer

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}