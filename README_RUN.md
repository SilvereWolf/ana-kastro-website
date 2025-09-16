Local dev instructions

1. Install dependencies:
   npm install

2. Run dev server:
   npm run dev

Notes:
- This workspace had missing UI primitives (components under `@/components/ui`) and no package.json; I scaffolded minimal stubs and a Vite setup so you can run the site locally for basic navigation and testing the contact form.
- If you have a backend API, set `REACT_APP_API_BASE` in a `.env` file before starting so the contact form posts to the correct endpoint.

Troubleshooting:
- Resolve any file casing conflicts (Components/Hero vs Components/hero) if you see errors about differing file names only in casing; delete or consolidate duplicates and restart the dev server.
