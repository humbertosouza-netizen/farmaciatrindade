import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the event (in production, you'd send to your analytics service)
    console.log('Event received:', {
      event: body.event,
      term: body.term,
      route: body.route,
      timestamp: body.timestamp,
      url: body.url
    });

    // You could send to external services here
    // await sendToAnalytics(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing ping:', error);
    return NextResponse.json(
      { error: 'Failed to process event' },
      { status: 500 }
    );
  }
}
