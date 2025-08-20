# Nuvana

Nuvana creates stunning, custom websites for businesses of all sizes and industries. We empower your brand with expert web design and SEO solutions tailored to your unique vision. As a fully bilingual team, we're equipped to help you reach diverse markets and achieve your digital goals.

This is the official repository for the Nuvana website.

## Bot Security Configuration

The quote form includes layered bot protection to prevent spam submissions:

### Basic Protection (Always Active)
- **Honeypot Field**: Hidden field that bots typically fill out
- **Time-trap**: Prevents submissions faster than 3 seconds
- **Email Validation**: Enhanced regex validation for email format

### Advanced Protection (Optional)
Enable Cloudflare Turnstile for additional verification:

1. **Get Turnstile Keys**: Visit [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
2. **Configure Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and set:
   ```
   NEXT_PUBLIC_ENABLE_TURNSTILE=true
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
   TURNSTILE_SECRET_KEY=your_secret_key
   ```

### EmailJS Configuration
Current setup uses:
- **Service ID**: `service_fn20j9k`
- **Contact Template**: `template_el7imut` (sends to nurvanatec@gmail.com)
- **Auto-reply Template**: `template_iklgsca` (sends confirmation to customer)
- **Public Key**: `h67XnrewvXTkQZLJM`

### Testing Bot Protection
- **Honeypot Test**: Fill hidden field → submission blocked
- **Time-trap Test**: Submit within 3 seconds → submission blocked  
- **Email Test**: Enter invalid email → submission blocked
- **Turnstile Test** (if enabled): Missing/invalid token → submission blocked
- **Valid Test**: Normal submission → both emails sent via EmailJS

## Development

```bash
npm run dev    # Start development server on port 4211
npm run build  # Build for production
npm run start  # Start production server
```