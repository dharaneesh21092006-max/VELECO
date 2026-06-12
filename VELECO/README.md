# VELOCE — F50 Animated Shoe Website

A responsive, animated single-page product website for the "VELOCE F50" football boot,
built with plain HTML, CSS and JavaScript (no build step required). Inspired by the bold,
high-impact style of puma.com.

## Features
- Full-screen **video hero** using your shoe clip, with parallax + overlay.
- Styled display typography (Anton / Archivo / Inter via Google Fonts).
- Header nav: **Home, About, Services, Contact, Terms** + "Shop Now" CTA.
- Animated scroll reveals, marquee band, hover effects, animated loader.
- Sections: Hero, About, Showcase, Services cards, Image gallery, Contact form, Terms.
- **Footer with full contact details** (email, phone, address, hours) + socials.
- Working contact form (client-side validation + success note).
- **Fully responsive** with media queries for laptop, tablet and mobile,
  including a slide-in hamburger menu on small screens.
- Respects `prefers-reduced-motion`.

## Run it
No installation needed. Either:

1. Open `index.html` directly in a browser, **or**
2. Serve the folder (recommended, so the video loads reliably):

```bash
cd shoe-website
python3 -m http.server 8090
# then visit http://localhost:8090
```

## Structure
```
shoe-website/
├── index.html        # markup / page sections
├── styles.css        # design system, layout, animations, media queries
├── script.js         # nav, scroll-spy, reveal animations, form, parallax
└── assets/
    ├── video/shoe.mp4
    └── img/          # hero frames, gallery shots, poster
```

## Customize
- Brand name / copy: edit text in `index.html`.
- Colors: edit the CSS variables in `:root` at the top of `styles.css`.
- Contact details: update the `.contact__list` and `.footer__contact` blocks.
