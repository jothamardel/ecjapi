import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get('reference');

  if (!reference) {
    return NextResponse.json(
      { success: false, message: 'Transaction reference is required' },
      { status: 400 }
    );
  }

  const paystackSecret = process.env.PAYSTACK_SECRET_KEY;
  if (!paystackSecret) {
    console.error('PAYSTACK_SECRET_KEY is not configured in the environment.');
    return NextResponse.json(
      { success: false, message: 'Payment verification is currently misconfigured.' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${paystackSecret}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      console.error('Paystack verification error response:', errorResponse);
      return NextResponse.json(
        { success: false, message: 'Failed to verify transaction with payment provider.' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Paystack returns data.status = true if the request was successful,
    // and data.data.status = 'success' if the transaction was successful.
    if (data.status && data.data && data.data.status === 'success') {
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully.',
        data: {
          reference: data.data.reference,
          amount: data.data.amount / 100, // convert back to standard currency units (e.g. NGN)
          currency: data.data.currency,
          customer: data.data.customer,
          metadata: data.data.metadata,
          paidAt: data.data.paid_at,
        },
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || 'Payment verification failed or payment is pending.',
        status: data.data?.status || 'failed',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Exception during transaction verification:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred during verification.' },
      { status: 500 }
    );
  }
}
