This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

This project is configured for deployment to Cloudflare Pages using `@cloudflare/next-on-pages`.

### One-time setup
1. Install dependencies (includes wrangler and next-on-pages):
	 ```bash
	 npm install
	 ```
2. Authenticate Wrangler (follow the browser login):
	 ```bash
	 npx wrangler login
	 ```
3. (Optional) Create the Pages project in the Cloudflare dashboard named `next-douglaspc-website` if it does not already exist.

### Build locally for Cloudflare
```bash
npm run build:cf
```
The output will be placed under `.vercel/output/` which `next-on-pages` adapts for Cloudflare.

### Preview locally with Cloudflare emulation
```bash
npm run preview:cf
```

### Deploy to Cloudflare Pages
```bash
npm run deploy:cf
```

If you need environment variables, add them to `wrangler.toml` under `[vars]` or configure them in the Cloudflare Pages dashboard.

### CI deployment (example GitHub Action)
Add a workflow similar to:
```yaml
name: Deploy
on: { push: { branches: [ main ] } }
jobs:
	deploy:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- uses: actions/setup-node@v4
				with:
					node-version: 20
					cache: npm
			- run: npm ci
			- run: npm run build:cf
			- name: Publish
				run: npx wrangler pages deploy .vercel/output/static --project-name=next-douglaspc-website
				env:
					CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
					CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

Create a Cloudflare API token with Pages Write permissions and store `CLOUDFLARE_API_TOKEN` and your `CLOUDFLARE_ACCOUNT_ID` as repo secrets.
