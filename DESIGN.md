---
name: Mohammed Bagowabair
description: Morning-edition page. Mineral field, stone paper, one amber thread.
colors:
  field: "#143f46"
  field-deep: "#0e3238"
  thread: "#e3b23c"
  paper: "#e7eeef"
  paper-bright: "#f4f7f6"
  white: "#ffffff"
  ink: "#102226"
  ink-soft: "#2a4549"
  mist: "#d5e4e2"
  line: "rgba(16, 34, 38, 0.16)"
  line-light: "rgba(244, 247, 246, 0.34)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(2.55rem, 6.1vw, 6rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "clamp(1.45rem, 2vw, 1.85rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Schibsted Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk, \"Avenir Next\", \"Segoe UI\", sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
rounded:
  pill: "999px"
  frame: "14px"
  sharp: "0px"
spacing:
  gutter: "1rem"
  control-y: "0.65rem"
  control-x: "1.2rem"
  cluster: "1.35rem"
  stack: "1.5rem"
  group: "2.5rem"
  columns: "4rem"
  bar: "4.25rem"
  band-bottom: "4.25rem"
  band-top: "5.25rem"
components:
  button-primary:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.2rem"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.2rem"
  button-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.2rem"
  button-field-hover:
    backgroundColor: "{colors.field-deep}"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1.2rem"
  nav-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.paper-bright}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.95rem"
  nav-toggle-hover:
    backgroundColor: "transparent"
    textColor: "{colors.thread}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.95rem"
  nameplate:
    backgroundColor: "{colors.field}"
    textColor: "{colors.paper-bright}"
    padding: "0.7rem 1rem"
    height: "4.25rem"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-link-field:
    textColor: "{colors.paper-bright}"
    typography: "{typography.label}"
  browser-frame:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "14px 14px 0 0"
  service-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "1.15rem 0 1.25rem"
  process-rail:
    backgroundColor: "{colors.thread}"
    width: "3px"
---

# Design System: Mohammed Bagowabair

## Overview

**Creative North Star: "The Morning Edition"**

The page reads as a morning edition. A mineral field holds the nameplate and the lead; stone paper holds the services and the demos. Schibsted Grotesk, self-hosted, sets the nameplate, the display line, and the body. One amber thread is the only accent, and it stays on the field.

The pace is an edition's. A display headline, a short deck, and one pill. Services and demos are hairline indexes. The process carries the same thread down a rail beside the steps. Ground changes do the work of depth. The browser frame is the single lifted object, and it crosses from the field onto the paper.

Selection, the caret, the scrollbar, and the focus ring come from the field, the paper, and the thread. Motion is one gesture. The thread draws along the nameplate, the browser opens from a clip, and the process rail fills as the steps move through the viewport. With reduced motion, or if the motion library does not load, those three are already complete.

**Key Characteristics:**

- Two grounds: mineral field for the nameplate, lead, process, and close; stone paper for services and demos
- Deep field for the pressed field button and the colophon
- One amber thread, only on the field
- One self-hosted grotesque, variable weights 400–700, no italic
- Pills for actions, square bands, 1px indexes
- One shadow, under the browser frame
- Focus, selection, caret, and scrollbar taken from the palette

## Colors

A mineral teal field on cool stone paper, with ink, mist, and a single amber thread. The document sets `color-scheme: light`, and the theme color is the mineral field.

### Primary

- **Mineral Field** (#143f46): Nameplate, lead, process band, and closing band. Also the focus ring on paper, the text selection, the caret, and the scrollbar thumb.
- **Deep Field** (#0e3238): Hover of a field-colored button, and the colophon ground.

### Secondary

- **Amber Thread** (#e3b23c): The 3px nameplate rule, focus rings on the nameplate and on field bands, underlines of links that sit on the field, the process step numerals, and the process rail fill.

### Neutral

- **Stone Paper** (#e7eeef): Page ground, scrollbar track, and the browser chrome strip.
- **Bright Paper** (#f4f7f6): Hire pills on the field, the browser frame body, the skip link, and the color of selected text.
- **Paper White** (#ffffff): Hover fill of the bright-paper pill.
- **Ink** (#102226): Text on paper, and text on bright-paper pills.
- **Soft Ink** (#2a4549): Secondary text on paper. Service descriptions, project summaries, the services introduction, the browser address, and the lead caption.
- **Mist** (#d5e4e2): Secondary text on the field. The deck, ledes on field bands, the place line under the name, and the colophon.
- **Hairline** (rgba(16, 34, 38, 0.16)): 1px rules on paper, between services and between projects. Ink at 16% opacity.
- **Field Line** (rgba(244, 247, 246, 0.34)): The process rail track, and the menu toggle's resting border. Bright paper at 34% opacity.

**The Thread Rule.** Amber appears only on the field. It marks the nameplate, field focus, field underlines, process numerals, and the process rail. It is never a text fill. On stone paper it falls to about 1.7:1, so the build keeps it off the paper entirely.

**The Tint Rule.** Secondary text is a tint of the same mineral hue. Soft ink on paper, mist on the field. A neutral gray is not a text color in this system.

## Typography

**Display Font:** Schibsted Grotesk (with Avenir Next, Segoe UI, sans-serif)
**Body Font:** Schibsted Grotesk (with Avenir Next, Segoe UI, sans-serif)

There is no second family and no monospace. The self-hosted Latin variable file covers weights 400–700. Italic is not in the file.

**Character:** A news grotesque used as both headline and text. Wide enough to stay calm at display size, and plain enough for a product page, with one family doing both jobs.

### Hierarchy

- **Display** (560, clamp(2.55rem, 6.1vw, 6rem), line-height 0.98, tracking −0.035em): The lead headline. The measure caps at 9.2em. Headings balance their lines.
- **Headline** (560, clamp(2rem, 3.6vw, 3.25rem), line-height 1.05, tracking −0.03em): Section titles, with 1rem under them.
- **Title** (560, clamp(1.45rem, 2vw, 1.85rem), line-height 1.05, tracking −0.03em): Project names and process steps, with 0.45rem under them. Service names sit just under this size, at clamp(1.4rem, 2vw, 1.8rem), line-height 1.15, same weight and tracking.
- **Body** (450, 1.0625rem, line-height 1.55): Reading text, max measure 65ch. The lead deck is 1.2rem at line-height 1.45, in mist, max 40rem. A section lede is 1.15rem, with 2rem under it. The colophon is 0.98rem.
- **Label** (600, 1.0625rem on in-band pills, line-height 1.2, tracking −0.02em): Hire pills and emphasized text links. The nameplate hire control is 1.05rem. The nameplate name is 1.05rem at weight 650 and tracking −0.03em; the place line under it is 0.9375rem in mist. Section links are 1rem at weight 500 from 880px, and 1.25rem at weight 530 below that. The browser address is 0.875rem in soft ink.

**The One Family Rule.** Schibsted Grotesk is the only voice. The loaded file is the Latin variable, weights 400–700, self-hosted, with `font-display: swap`. Avenir Next, then Segoe UI, then a generic sans, are the fallbacks. Italic is not loaded.

**The Measure Rule.** Body stops at 65ch. The deck stops at 40rem. Service lines and the lead caption stop at 62ch. Display tracking is −0.035em. Shared heading tracking is −0.03em. Display size ends at 6rem.

## Layout

The content column is `min(72rem, 100%)`, centered. Bands, the lead, the nameplate, and the colophon inset the page by 1rem. The lead caption sits outside a band and uses the same inset, `min(72rem, calc(100% - 2rem))`.

The nameplate sticks to the top. A 3px thread runs along its top edge. The bar is a wrapping row, minimum height 4.25rem, with 0.7rem of vertical padding. Anchors clear it with 6.5rem of scroll margin.

Bands pad 5.25rem on top and 4.25rem on the bottom. The lead pads 1.35rem on top and nothing on the bottom, so the browser can cross the seam. The figure's bottom margin is −3.25rem. The caption pads 4.15rem on top to clear that overlap.

Services stack at a 2.5rem gap. The process stacks at 2.25rem. From 960px both split into `minmax(16rem, 0.78fr)` and `1.22fr`, with a 4rem gap, aligned to the start. The process introduction then sticks at 7rem from the top of the viewport, and each step grows to at least 34vh. Projects stack on a 1px rule. From 800px each row is 1.25fr / 0.75fr with a 2.5rem gap, and even rows swap so the image leads from the other side.

Below 880px a menu toggle reveals a stacked nav, the page scroll locks while it is open, and the main column and colophon go inert. From 880px the toggle hides, the links sit in a row with a 1.35rem gap, and the lead screenshot crops to 248px tall, anchored at 58% of the image.

**The Seam Rule.** The lead browser belongs to both grounds. It overlaps the paper by 3.25rem. Its top corners are 14px. Its bottom edge is square where it meets the paper. The caption begins 4.15rem below that crossing.

## Elevation & Depth

The system is flat. Field, paper, bright paper, and deep field do the layering. The browser frame is the exception: one soft shadow, offset down, used nowhere else.

Motion lives on the thread and on that frame. When motion is allowed, the nameplate thread scales up from the left over 1.05s, and the browser opens from a clip of `inset(7% 4% 10% 4%)` to fully open over 1.2s. Both use a power3 ease out. The browser starts 0.06s after the thread. The process rail fill scales up from the top, tied to scroll with a 0.4s scrub and a linear ease, from when the step list hits 72% of the viewport until its bottom hits 68%. Reduced motion, or a missing motion library, leaves the thread, the frame, and the rail fully drawn. Document scroll is smooth only when motion is allowed.

### Shadow Vocabulary

- **Browser** (`box-shadow: 0 22px 44px rgba(8, 24, 28, 0.28)`): The frame where the lead crosses onto the paper.

**The Flat Paper Rule.** Bands, rows, pills, and the nameplate cast no shadow. A surface that needs to separate changes ground. The browser shadow is the only exception, and it stays on that frame.

## Shapes

Controls that perform an action are full pills (999px): the hire button, the menu toggle, and the skip link. The scrollbar thumb is the same full curve at 99px, with a 3px paper border inside a 12px track. Bands, service rows, and project rows are square. The browser frame rounds only its top corners (14px) and stays square along the bottom. The three window marks are 0.5rem circles. The nameplate thread and the process rail are 3px wide.

**The Pill and Hairline Rule.** A pill means an action. An index is a square row closed by a 1px line: ink at 16% on paper. The rail track and the resting menu border use bright paper at 34%.

## Components

### Buttons

The hire control is the action. Minimum height 48px, padding 0.65rem 1.2rem, weight 600, tracking −0.02em, line-height 1.2, full pill. The build has no separate active or disabled style.

- **Shape:** Full pill (999px).
- **On the field:** Bright paper fill, ink text. Hover fills paper white (#ffffff). The focus ring is the thread, 2px, offset 3px.
- **On paper:** Field fill, bright paper text. Hover fills deep field. The focus ring is the field, 2px, offset 3px.
- **In the nameplate:** The same bright-paper pill, at 1.05rem, with 0.35rem of space before it.

### Navigation

The nameplate is field, with bright paper type and a mist place line. The name is 1.05rem at weight 650 and tracking −0.03em. The place line is 0.9375rem, 0.1rem under the name. Below 880px a pill toggle reads Menu or Close, minimum height 44px, padding 0.35rem 0.95rem, weight 560, with a field-line border. Hover turns that border and the label to the thread. Nav links are plain text. The row target is 48px below 880px and 44px from 880px. Hover, on every link except the hire pill, turns the label to the thread. Focus on the nameplate is the thread.

### Text links

An emphasized link uses weight 600 and tracking −0.02em. Underlines sit 0.22em off the text. On the field, including the profile links in the close, the underline is the thread. On paper, the underline stays ink. Profile links add a 48px target and padding 0.35rem 0.7rem. The link in the lead caption keeps the body weight.

### Index rows

Services are a definition list. Each row pads 1.15rem on top and 1.25rem on the bottom, with a hairline above, and the last row adds a hairline below. The description is soft ink, max 62ch, 0.4rem under the name. Projects use the same hairline, with 2rem of padding above the row. Image and text stack until 800px, then sit side by side.

### Browser frame

Bright paper body, stone paper chrome strip (padding 0.7rem 0.9rem), ink text, soft ink address at 0.875rem. Three 0.5rem circles in one local tone (#8aa0a3) stand in for window controls. Top radius 14px, bottom square, with the browser shadow underneath. With motion, the frame reveals from `clip-path: inset(7% 4% 10% 4%)` to open. The live frame holds a demo screenshot; the chrome is the system, the picture is the work.

### Process rail

A 3px track in the field line runs the height of the steps. The fill is the thread, scaling from the top. Each step indents 1.35rem. The numeral comes from the list count, takes the thread color, and sits in the step title with 0.45em of space after it. From 960px each step is at least 34vh and centers its text vertically.

### Skip link

Bright paper pill, ink text, padding 0.6rem 0.9rem. It sits above the viewport until it receives focus, then returns to the top left of the page.

**The Field Focus Rule.** The focus ring is 2px, offset 3px. On paper it is the field. On the nameplate, the lead, and any field band it is the thread. The skip link uses the focus event itself to come back into view, because it is hidden until then.

## Do's and Don'ts

### Do:

- **Do** print the nameplate, the lead, the process, and the close on the mineral field, the colophon on deep field, and the services and demos on stone paper.
- **Do** keep the amber thread on the field: the 3px nameplate rule, field focus, field underlines, process numerals, and the process rail.
- **Do** use a bright-paper pill on the field and a field pill on paper, both at a 48px minimum height.
- **Do** separate index rows with a 1px hairline, ink at 16% on paper.
- **Do** theme selection (field ground, bright paper text), the caret (field), and the scrollbar (field thumb, paper track, 12px).
- **Do** leave the nameplate thread, the browser, and the process rail fully drawn when motion is reduced.

### Don't:

- **Don't** set the thread as text, or place it on paper. Against stone paper it is about 1.7:1.
- **Don't** add a second accent, a gray for secondary text, or a second type family. Italic is not loaded.
- **Don't** shadow bands, rows, or pills. The browser frame is the only shadow.
- **Don't** turn service or project indexes into cards. They are square rows with a hairline.
- **Don't** round the bottom of the lead browser. The square edge is the seam with the paper.
