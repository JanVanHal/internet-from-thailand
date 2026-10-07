# Internet from Thailand

Static, vanilla-JS toolbox for people living or working online from Thailand (and NL–TH teams).

**No frameworks. No accounts. No live AdSense in this build** — HTML comments mark where ads would go.

## Pages

| Page | What it does |
|------|----------------|
| `index.html` | Hub |
| `check.html` | Client-side URL reachability (CORS-aware; optional public relay hint) |
| `speed.html` | Approximate download speed (Cloudflare speed endpoint + fallback) |
| `dns.html` | Public DNS via Cloudflare DNS-over-HTTPS |
| `timezone.html` | Bangkok ↔ Amsterdam clocks + meeting overlap |
| `about.html` / `privacy.html` | Meta pages |

See `sitemap.md` for SEO titles and AdSense notes.

## Local preview

Any static server from this folder:

```bash
cd /workspace/research/internet-from-thailand
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

Or open `index.html` directly in a browser (some fetch tools need `http://` not `file://`).

## Deploy: GitHub Pages

1. Create a repo (e.g. `internet-from-thailand`).
2. Push the contents of this folder to the repo root (or `/docs`).
3. **Settings → Pages →** Deploy from branch `main` / folder `/` (or `/docs`).
4. Site URL: `https://<user>.github.io/internet-from-thailand/`  
   If the site is in a subpath, ensure links stay relative (they already are: `href="dns.html"` etc.).
5. Optional custom domain: add `CNAME` file + DNS at your registrar.

```bash
git init
git add .
git commit -m "Initial Internet from Thailand v1"
git branch -M main
git remote add origin git@github.com:<user>/internet-from-thailand.git
git push -u origin main
```

## Deploy: Cloudflare Pages

1. Dash → **Workers & Pages → Create → Pages → Connect to Git** (or direct upload).
2. Build settings: **Framework preset = None**. Build command empty. **Output directory = /** (repo root with these HTML files).
3. Deploy. Optional: attach custom domain in Cloudflare DNS (proxied).

Direct upload:

```bash
npx wrangler pages deploy /workspace/research/internet-from-thailand --project-name=internet-from-thailand
```

(Requires a Cloudflare account and `wrangler` login.)

## Honesty / limits

- **check.html** does not probe from a Thailand VPS; it uses the visitor’s browser. CORS often blocks reading status; that ≠ site down.
- **speed.html** is approximate (CDN path ≠ full ISP test). No upload test in v1.
- **dns.html** uses public Cloudflare DoH — public records only; not a leak test.
- **timezone.html** uses `Asia/Bangkok` and `Europe/Amsterdam` via `Intl` (DST-aware on NL side).

## Before AdSense

1. Custom domain + Privacy contact email.
2. Replace `.ad-slot` placeholders with real units; keep privacy disclosure updated.
3. Avoid putting ads on `privacy.html`.
4. Don’t claim remote Thailand probing until you add a real APAC worker/VPS and label it.

## License

Use freely for Jan’s side project; replace branding/contact before public launch if needed.
