import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalid' },
        { status: 400 }
      )
    }

    // TODO: În producție, aici ar trebui să trimiti email-ul către office@awareconnections.eu
    // folosind un serviciu precum SendGrid, Mailgun, sau Resend

    // Pentru moment, simulăm succesul
    console.log(`Newsletter signup: ${email} -> office@awareconnections.eu`)

    // În producție, aici ar fi cod similar cu:
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'office@awareconnections.eu' }],
          subject: 'Nou abonat newsletter',
        }],
        from: { email: 'noreply@awareconnections.eu' },
        content: [{
          type: 'text/plain',
          value: `Nou abonat la newsletter: ${email}`
        }]
      })
    })
    */

    return NextResponse.json(
      { message: 'Mulțumim pentru abonare!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Eroare la procesarea cererii' },
      { status: 500 }
    )
  }
}
