# Life OS

**Real progress. A world that notices.**

[Explore the project](https://lemengli0304.github.io/life-os-showcase/) · [Play the prototype](https://lemengli0304.github.io/life-os-showcase/demo.html)

An independent browser-based product by Lea Li, Computer Science at University College London. Life OS connects practical productivity tools with a persistent virtual town and eight state-driven NPCs.

## Try it

The public demo runs the actual prototype, without a sign-up or access to real player data. It skips the initial questionnaire and provides an English guide, translated core navigation and a live character-state panel. The original authored dialogue remains Chinese. First launch downloads approximately 33 MB of compressed application code and artwork.

Meet a resident, introduce yourself, chat and inspect their attributes. Advance game time to observe schedules and changing energy, stress and mood. Create and complete a real-world task to see XP, attribute growth and in-world currency.

## Technical focus

- Autonomous routines informed by needs and personality.
- Conditional authored dialogue using emotional state, relationship history, first-meeting status, time and context.
- Persistent relationships, messages, social posts and event continuity.
- Task completion, focus tools and eight dimensions of character growth.

## Commercial thesis

A useful productivity core paired with optional cosmetic and story content. The next beta should test whether world attachment increases repeat real-world action. Revenue, retention and product–market fit are hypotheses, not claimed results.

## Status and ownership

Working prototype in active development. Implementation is AI-assisted; product direction, world and interaction design, development priorities and testing are independently led. This repository contains the public showcase and isolated demo build. Full player accounts, production databases and private saves are not included. Music is omitted from the public demo.

## Hosting

Static GitHub Pages. `demo.html` installs the isolated demo asset pack for `/play/` through `demo-sw.js`. Session saves use a separate demo key. The English guide is maintained in `judge-guide.js`.
