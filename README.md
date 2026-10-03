# AI Social Manager
One Command. Complete Social Media Automation.

## Stack
Next.js + TypeScript + Prisma/PostgreSQL + Redis/BullMQ + provider adapters.

## Local setup
1. Copy `.env.example` to `.env` and set secrets.
2. `npm install`
3. `npx prisma generate && npm run db:push`
4. `npm run db:seed`
5. `npm run dev`
6. In another process: `npm run worker`

## Production
Use managed PostgreSQL, Redis and S3-compatible object storage. Deploy the Next.js app on Vercel/Render/Railway/AWS and run the worker as a separate long-running service. Set HTTPS callback URLs for every OAuth app. Store all secrets in the hosting provider's secret manager.

## OAuth
Each provider adapter is deliberately isolated. Register an OAuth application with the provider, request only the scopes actually needed, and configure the redirect URI in your environment. Platform approval/review may be required before real publishing. Never ask users for social passwords.

## AI/media
Replace `lib/ai/orchestrator.ts` with a provider implementation using your selected AI model. Keep generated assets in private object storage and issue signed URLs. Add a video provider adapter with webhook callbacks before enabling long-running generation jobs.

## Safety/idempotency
Publishing jobs use deterministic job IDs and a unique `Post.idempotencyKey`. A production provider adapter should persist the provider request ID and reconcile unknown outcomes before retrying, preventing duplicate publication.
