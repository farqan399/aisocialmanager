# Architecture
Command → intent validation → brand context → strategy → content/media generation → QA → approval/auto mode → schedule → BullMQ job → OAuth token refresh → provider publish → webhook/analytics sync.

Recommended API groups: `/api/command`, `/api/campaigns`, `/api/posts`, `/api/schedule`, `/api/social-accounts`, `/api/media`, `/api/analytics`, `/api/billing`, `/api/admin`.

Use workspace authorization on every route. Encrypt OAuth access/refresh tokens at rest. Add CSRF protection for browser mutations, strict Zod validation, rate limits, audit logs, webhook signature verification and malware/content checks for uploads.
