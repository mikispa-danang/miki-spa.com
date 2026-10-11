# Miki Beauty Concierge V3.1

The public frontend calls the same-origin `/api/chat` route. The route keeps the OpenAI key on the server, loads the approved Miki FAQ/business data, and returns a concise answer with optional current web research. If the server route is unavailable or not configured, the existing browser FAQ fallback remains available.

Deploy the project to a host that executes serverless Node functions. A static GitHub Pages or static Mắt Bão deployment can serve the site and images, but it cannot run `/api/chat` by itself.

See `MIKI-AI-GITHUB-SETUP.md` for the server variable checklist.
