# Color Redirect

Simple Vercel app that redirects to the Raspberry Pi random color site via Cloudflare tunnel.

## Setup

1. Deploy to Vercel
2. Set environment variable `CLOUDFLARE_TUNNEL_URL` 
3. The tunnelNotifier on your Pi will automatically update this URL

## How it works

- Vercel app provides a permanent URL
- Redirects to current Cloudflare tunnel URL
- Pi's tunnelNotifier updates the URL automatically on restart
- No downtime even during Pi power outages
# Deployment trigger
