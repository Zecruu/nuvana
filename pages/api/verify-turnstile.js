export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ 
        success: false, 
        error: 'Verification failed',
        'error-codes': data['error-codes'] 
      });
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
