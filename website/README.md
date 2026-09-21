# Awan Smith · React portfolio

A responsive personal portfolio built with React, Vite, and React Bits Threads (OGL/WebGL). Content comes from the existing GitHub profile.

## Run locally

Requires Node.js 20.19+ or 22.12+ (Node 24 recommended).

```sh
cd website
npm ci
npm run dev
```

Open the Local URL printed by Vite. To create a production build:

```sh
npm run build
npm run preview
```

The generated `dist/` directory is a static website. Relative asset paths support hosting under a subdirectory. The GitHub profile README is independent of this website; GitHub cannot execute its React components.

## Content and appearance

- `src/main.jsx`: biography, bilingual motto, current work, and contacts.
- `src/style.css`: palette, typography, responsive layouts, and hover effects.
- `src/components/Threads.jsx`: React Bits interactive shader, adapted to retain a static fallback when WebGL creation fails.
- The Motion button enables/disables animation. The system reduced-motion preference is respected, and off-screen WebGL rendering is skipped.
- Google Fonts serves Manrope; the system sans-serif fallback remains usable when unavailable.

## Credits

[React Bits Threads](https://reactbits.dev/backgrounds/threads) by David Haz. Its upstream source is included as part of this website with the [MIT + Commons Clause license](src/components/REACT-BITS-LICENSE.md). The bilingual typewriter quote and static orbital fallback use original CSS.

The site has a private Sites hosting identity in `.openai/hosting.json`. This is separate from your existing domains and does not change their configuration.
