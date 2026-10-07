# Sitemap — Internet from Thailand

**Folder:** `/workspace/research/internet-from-thailand/`  
**Date:** 7 Oct 2026 (Asia/Bangkok)  
**Stack:** static HTML + vanilla JS + shared CSS · no frameworks · no accounts

---

## Pages

| File | Purpose | SEO title ideas | AdSense placement notes |
|------|---------|-----------------|-------------------------|
| `index.html` | Hub: explain honesty policy, link to tools | “Internet from Thailand — free toolbox for expats & remote workers”; “Thailand internet tools: speed, DNS, NL–TH meeting times” | Leaderboard below hero; in-content rectangle after tool grid. Keep first screen useful before ads. |
| `check.html` | “Website from Thailand?” — browser reachability check with CORS honesty | “Is this website reachable? Browser check from your network”; “Website down or CORS? Honest client-side check” | One unit above the form; avoid ads inside the result box (looks like an error). |
| `speed.html` | Approximate client-side download speed | “Approximate download speed test (browser)”; “Quick Mbps estimate — labelled approximate” | Above tool; optional sticky footer unit on long results. Disclose approximate nature near the CTA. |
| `dns.html` | Public DNS A/AAAA/MX/NS/TXT via Cloudflare DoH | “DNS & IP lookup — Cloudflare DoH”; “Free domain DNS checker (A, MX, TXT)” | Above form; second unit below results table if table is tall. |
| `timezone.html` | Bangkok ↔ Amsterdam clocks + meeting overlap | “Bangkok Amsterdam time difference & meeting overlap”; “ICT ↔ CET/CEST meeting planner for NL–TH teams” | Above clocks; light touch — tool is visual, don’t crowd the clock cards. |
| `about.html` | Who/why, honesty policy, future contact | “About Internet from Thailand” | Single modest unit mid-page; low priority for ads. |
| `privacy.html` | Short privacy policy; AdSense disclosure placeholder | “Privacy — Internet from Thailand” | Prefer **no ads** on privacy (policy hygiene / AdSense review friendliness). |

**Shared assets:** `styles.css`, `common.js` (nav + helpers).

---

## URL ideas (when publishing)

- Primary: `internetfromthailand.com` or `fromthailand.net` / `thainet.tools`
- GitHub Pages path fine for v1: `username.github.io/internet-from-thailand/`

---

## Content / SEO notes (low liability)

- Target: expats, Dutch remote workers, freelancers in Thailand and NL–TH teams
- Keywords to lean on: Thailand internet speed, Bangkok Amsterdam time, DNS lookup, website reachable, ICT timezone.
- Avoid: tax, banking, medical, “guaranteed unblock”, VPN cure-alls as medical/legal claims.
- Affiliate later (VPN/eSIM) only with clear “we may earn a commission” — not in v1.

---

## AdSense slot map (comments in HTML)

Every tool page has `<!-- AdSense: … -->` plus a visible dashed `.ad-slot` placeholder. Remove placeholders when going live; keep comments as anchors.

Suggested density: **1–2 units per tool page**, not more. Privacy page: none.

---

## Out of scope for v1 (possible next)

- Real “probe from Thailand” via a cheap Thai/Singapore VPS or Cloudflare Worker in APAC (must be labelled).
- Upload speed, ping/jitter charts.
- DNS leak / WebRTC leak tests (higher support burden).
- CSV export of speed history via localStorage.
- Thai/English language toggle.
