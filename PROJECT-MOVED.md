# This folder is no longer the project

The Aether storefront lives in:

    C:\Users\mytsk\Downloads\Project-1

## Why it was moved

Next.js (both Turbopack and webpack) and Tailwind CSS v4 treat `#` in a file
path as a URL fragment separator. Inside a folder called `Project #1` every
build failed before it started, for example:

    The argument 'path' must be a string, Uint8Array, or URL without null bytes.
    Received 'C:\Users\mytsk\Downloads\Project \x00#1\node_modules\tailwindcss\index.css'

This is not something the project can work around — the path itself is
unsupported — so the source was moved to a `#`-free folder next to this one.

## What is still here

Only the old `node_modules` and `.next` folders, which are safe to delete. The
new folder has its own freshly installed dependencies.

Open `Downloads\Project-1` in your editor and run `npm run dev` there.
