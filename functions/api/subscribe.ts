interface Env {
  LOOPS_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { email } = await context.request.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Loops API integration
    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.LOOPS_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'landing-page',
        subscribed: true,
      }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed successfully!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Handle already subscribed
    if (response.status === 409) {
      return new Response(
        JSON.stringify({ success: true, message: "You're already on the list!" }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Failed to subscribe' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
