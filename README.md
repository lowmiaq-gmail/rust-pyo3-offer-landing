# Rust/PyO3 Hot-Path Offer Landing

Single-page Next.js (App Router, TypeScript) landing for a fixed-price **$199** offer: take one Python hot-path dependency (or named bottleneck), deliver a Rust/PyO3 drop-in wheel + migration notes + rollback.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- No auth, no SaaS, no blog, no secrets in the repo

## Local development

```bash
cp .env.example .env.local
# edit .env.local — optional for local preview (CTA degrades gracefully)

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_CHECKOUT_URL` | For live purchases | Primary **Buy for $199** button `href`. If missing/empty, the button is **disabled** and shows **Checkout coming soon**. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Recommended | Mailto fallback / contact links on the page. |

Both are `NEXT_PUBLIC_*` so they are inlined at build time for the client components.

## Stripe Payment Link ($199)

1. Open [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create a product/price of **$199.00 USD** (one-time).
3. Create a Payment Link for that price.
4. Copy the Payment Link URL into `NEXT_PUBLIC_CHECKOUT_URL` (locally in `.env.local`, on Vercel in Project → Settings → Environment Variables).
5. Redeploy so the client bundle picks up the new value.

Do **not** commit real checkout URLs or secrets; use env vars only.

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (default). Build command: `npm run build`. Output: Next.js defaults.
4. Add env vars:
   - `NEXT_PUBLIC_CHECKOUT_URL` = your Stripe Payment Link
   - `NEXT_PUBLIC_CONTACT_EMAIL` = your public contact address
5. Deploy. Confirm the CTA shows **Buy for $199** and links to checkout.

Or with Vercel CLI:

```bash
npx vercel
npx vercel env add NEXT_PUBLIC_CHECKOUT_URL
npx vercel env add NEXT_PUBLIC_CONTACT_EMAIL
npx vercel --prod
```

## Scripts

```bash
npm run dev      # development server
npm run build    # production build (must succeed)
npm run start    # serve production build
npm run lint     # ESLint
```

## Sample proof (referenced on the page)

- Repo: https://github.com/lowmiaq-gmail/fast-rfc3339-validator-rs
- PyPI: https://pypi.org/project/fast-rfc3339-validator-rs/
- Import: `from rfc3339_validator import validate_rfc3339`
- Benchmarks: median **5.81×–6.83×** on Apple M4 Pro / macOS / CPython 3.14.6 / abi3 wheel (see `BENCHMARK.md`) — machine- and artifact-specific, not a universal guarantee.

## Out of scope for this site

No SaaS product, authentication, blog, or secrets committed to the repository.
