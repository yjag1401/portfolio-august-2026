# ADR 001: Technology Stack

**Date:** August 2026
**Status:** Approved

## Context
We are building a highly interactive, performant personal developer portfolio. The developer is targeting SDE roles and wants to demonstrate an understanding of modern, industry-standard tools while maintaining a highly polished, animation-rich user interface.

## Decision
We will use a modern Full-Stack React architecture:
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion (and potentially Three.js/WebGL for specific hero effects)
* **Backend/Database:** Supabase (for a small dynamic feature, e.g., view counter or guestbook)

## Reasoning
1. **Industry Relevance:** Next.js and TypeScript are the absolute standard for modern React development. Demonstrating competence here is highly attractive to engineering managers.
2. **Animation Capabilities:** Framer Motion integrates perfectly with React and allows for the "cool effects" we want (scroll reveals, layout animations) without destroying performance.
3. **Backend Choice:** Supabase is an excellent, Postgres-based alternative to Firebase. Since the developer is already familiar with it, it reduces learning overhead while still demonstrating competence with modern Backend-as-a-Service tools.

## Consequences
- The junior developer will need to learn TypeScript alongside React.
- We must carefully manage performance. "Cool animations" often come at the cost of slow load times. We will establish a strict rule: *Animations must serve the UX, and performance metrics (Lighthouse) must remain above 90.*
