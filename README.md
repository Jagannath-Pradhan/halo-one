# Halo One — 3D product showcase

Next.js 15 (App Router) · React Three Fiber · drei · Tailwind CSS v4 · Framer Motion · Zustand · Zod

## Run
```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy
Push to GitHub → import the repo in Vercel → Deploy. No env vars needed.

## Notes
- The headphone is built from Three.js primitives (no model files), so it loads instantly.
- To use your own model: `useGLTF("/model.glb")` from drei, replace `<Headphone />`.
- `app/api/waitlist/route.ts` stores emails in memory; connect MongoDB (you know it) to persist.
