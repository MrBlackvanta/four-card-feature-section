# Four card feature section

My solution to the [Four card feature section](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://four-card-feature-section.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/Four-card-feature-section

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

**No colour moved.** Everything on this page passes as drawn. The tightest pairing is the
card description at 4.95:1. I held the card titles to 4.5:1 rather than the large-text 3:1
because they're weight 600 and axe only counts 700+ as bold.

The four accent bars are under 3:1 against the card white and ship as drawn. 1.4.11 covers
graphics needed to understand the content, and these carry no information the heading and
description don't already. Same for the illustrations, which are `aria-hidden`.

**The accent bar's width in the design file is wrong at mobile and tablet.** The rectangle
is 350px in all three frames while the card is 314 at those two, so it overhangs by 18px a
side. Frontend Mentor's own render clips it to the card, and so do I. It's a `border-top`
so its corners follow the card's radius.

**Breakpoints between 768 and 1440 are mine, since the design has no frame there.** The
three-column pinwheel starts at 1024, where cards come out 300px wide and every
description still fits on two lines. I checked the case that actually decides it: with a
classic 15px scrollbar the media query fires at 1024 while layout gets 1009, which still
holds two lines. The two-column layout keeps its 660px cap up to 1023, because letting the
container grow would put 465px cards on screen, much further from the design than wide
gutters are.

**Cards use a min-height, not a fixed one.** They're exactly the design's 250px whenever
the descriptions run to two lines, which holds from 320px up. Fixed would clip at large
text zoom, which is a 1.4.4 failure that neither Lighthouse nor axe tests for.

**The heading wraps below about 360px.** 24px Poppins needs 299px for "Reliable, efficient
delivery" and 320px leaves 260 after the gutters. The design's smallest frame is 375. I
wrapped rather than shrank, because the only size that fits at 320 is the same size as the
card titles, which would read as broken hierarchy.

**The attribution is positioned out of flow.** It isn't part of the design, and in flow its
23px pushed the document past `100dvh` and added a pointless scrollbar on anything shorter
than 991px.

**Nothing on this page animates, deliberately.** At desktop the whole design is one screen,
so a scroll reveal would either never fire or animate content already painted. Only mobile
scrolls enough to run one, and motion that exists on phones and nowhere else is worse than
none. There's no reveal CSS and no reduced-motion block, because there's nothing to gate.

Two line heights in the design file contradict its own typography presets. Dividing each
node's box height by its line count settles both in favour of the presets.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
