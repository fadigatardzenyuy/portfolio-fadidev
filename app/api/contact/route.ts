import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: NextRequest) {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Send via Resend if API key is configured
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: ['fadidevstudio@gmail.com'],
                reply_to: email,
                subject: `New message from ${name}`,
                text: `From: ${name} <${email}>\n\n${message}`,
                html: `
                    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                    <hr/>
                    <p>${message.replace(/\n/g, '<br/>')}</p>
                `,
            }),
        });

        if (!res.ok) {
            const err = await res.json();
            console.error('Resend error:', err);
            return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    }

    // No email service configured — log and return success in dev
    console.log('[Contact Form]', { name, email, message });
    return NextResponse.json({ success: true });
}
