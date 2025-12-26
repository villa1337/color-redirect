export default function handler(req, res) {
  const tunnelUrl = process.env.CLOUDFLARE_TUNNEL_URL || 'https://robots-advantages-painted-dealtime.trycloudflare.com';
  
  // Simple redirect to the Pi's color site
  res.redirect(302, tunnelUrl);
}
