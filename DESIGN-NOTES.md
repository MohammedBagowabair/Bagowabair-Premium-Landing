# Design notes

Studied 26 November 2026 from the live heroes of the eight reference sites. Screenshots were taken in a desktop browser at 1440×900. Cosmos and Giga needed a short wait for the page to paint; the others were captured on first paint, cookie banners included where the site showed them.

## What I took from each site

**Origin (useorigin.com).** The hero is a full-bleed sky with a large light headline set directly in the photograph, a quiet translucent bar, and one pale button. I took the commitment to a single atmosphere and a single action, with the type sitting in the field rather than inside a card.

**Cosmos (cosmos.so).** An off-white ground, a heavy black headline, and many small photographs drifting through the type, some touching the letters. A black pill is the only strong control. I took the permission to let a real picture interrupt the composition, and the restraint of not explaining the product with a feature grid in the first screen.

**Sana (sanalabs.com).** The headline is enormous and near-black on a light field; the product enters from below as an object, under a quiet navigation. I took the scale relationship: the sentence is the hero, and the thing that was built is allowed to be large as soon as the sentence has landed.

**Duna (duna.com).** A painted landscape fills the top of the viewport and gives way to white where a large grotesque headline and one dark pill sit. I took the seam. The picture belongs to the lead story, then the page becomes a reading surface. I did not take the illustration style.

**Giga (giga.ai).** A dark curtain of gold, burgundy, and blue carries a short headline, a supporting sentence, and an outlined product frame. The orange control is the only hot color. I took the idea of one committed field color and one accent, and of showing a screen inside a simple frame rather than a glossy device.

**Superhuman (superhuman.com).** A dusk gradient, a huge white headline, and pieces of the product floating around a portrait. I took the confidence of white type on a colored field. I left the collage behind: this page has three real demos, and one frame at a time is enough.

**Apple (apple.com).** Near-white ground, the product name set very large, a filled button and an outline button, and the object itself bigger than the explanation. The next product is already starting at the bottom edge. I took the pacing: one idea per band, generous quiet, and the artifact larger than the caption.

**Dovetail (dovetail.com).** A black field, a giant headline with an object sitting in the words, a short line and two actions above it. I took the headline-as-architecture lesson: the first line should be large enough to be the layout. I left the mascot, the star ratings, and the logo row. This page does not have equivalent proof, and it must not invent any.

## Palette

Chosen for a business owner reading at a desk in late-morning north light. The lead story is printed on a deep mineral field; the rest of the edition is cool stone. Amber is a single thread, used only on the field, never as body text.

| Hex | Role |
| --- | --- |
| `#143F46` | Field. Nameplate, lead story, process band, and closing band. |
| `#0E3238` | Field, pressed. Hover on field-colored buttons. |
| `#E7EEEF` | Paper. The reading ground for services and demos. |
| `#F4F7F6` | Bright paper. Buttons on the field, and the browser frame. |
| `#102226` | Ink. Primary text on paper, text on bright buttons. |
| `#2A4549` | Soft ink. Secondary text on paper. A dark tint of the field, not neutral gray. |
| `#D5E4E2` | Mist. Secondary text on the field. A light tint of the same hue. |
| `#E3B23C` | Thread. The one chromatic accent: the nameplate rule, the process rail, focus on the field, and the step markers. |

Contrast was checked as pairs: ink on paper is about 14:1, soft ink on paper about 8.7:1, mist on the field about 8.8:1, bright paper on the field about 10.7:1, and the thread on the field about 5.9:1. The thread is not used for text on paper, where it would fall to about 1.7:1.

## Type

**Schibsted Grotesk**, self-hosted, Latin variable file, weights 400–700. One family for the nameplate, the headline, and the body.

It is a news grotesque: wide enough to feel calm at display size, plain enough to read as a modern product page, and specific enough not to collapse into the usual geometric sans. The morning-edition structure (nameplate, one lead, then the paper) wanted a text face that could also be a headline, so a second display family would have been costume. Italic is not loaded.

The headline is capped at 6rem, tracked no tighter than −0.035em, and kept to a short measure so it wraps into a few lines instead of stretching across the viewport.

## How the references became this page

The first screen is a field, like Origin, Giga, and Superhuman, with Apple’s restraint about how many ideas are allowed in it. The Artvue demo sits in a plain browser frame and crosses onto the paper, which is the Duna seam without the painted landscape. Services are a typographic index, not six equal cards. The process is the only scroll-linked motion: the same amber thread that rules the nameplate draws down the steps. Demos are shown large and labeled as concepts. There are no ratings, client logos, or counts, because none of the references’ social-proof devices can be used honestly here.
