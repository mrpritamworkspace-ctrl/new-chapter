# [BUSINESS NAME] Fabrication Works — Static Website

A production-ready single-page HTML/CSS/Vanilla JavaScript fabrication website. No React, Next.js, Vue, database or secret API keys are required.

## Files

- `index.html` — page structure and SEO metadata.
- `style.css` — responsive industrial/premium UI.
- `script.js` — **single source of truth** for business details, services, gallery, testimonials, FAQs, service areas and functionality.
- `assets/images/` — local image folders and editable placeholder SVGs.

## 1. Open locally

Double-click `index.html` for a basic preview. For best results, use a local static server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 2. Change business name and contact details

Open `script.js` and edit the clearly marked `BUSINESS_CONFIG` at the top:

- `name`
- `phone`
- `phoneRaw`
- `whatsapp`
- `whatsappRaw`
- `email`
- `address`
- `mapUrl`
- `mapEmbedUrl`
- `googleBusinessUrl`
- `workingHours`
- `logo`
- `heroImage`
- `aboutImage`
- `serviceAreas`
- `socialLinks`
- `seo`
- `counters`

Do not duplicate important business information in HTML. The page reads it from this configuration.

**Important:** `phoneRaw` and `whatsappRaw` should contain digits only. For WhatsApp, include the country code without `+`.

## 3. Replace logo

Replace `assets/images/logo.svg` with your real logo, or change `BUSINESS_CONFIG.logo` to another local path.

Recommended: transparent SVG or WebP/PNG, roughly 200–600 px wide.

## 4. Replace hero/about images

Change:

```js
heroImage: "assets/images/hero-fabrication.svg",
aboutImage: "assets/images/workshop.svg",
```

to your real local images.

Recommended hero: 1600×1000 or similar.
Recommended about image: 1000×1000 or similar.
Prefer WebP/AVIF for real photos and keep individual images reasonably compressed.

## 5. Add, remove or edit services

All service names are inside `SERVICE_CATEGORIES` in `script.js`.

Each category contains a normal JavaScript array. Add or remove strings there.

`SERVICE_INFO` controls the category description, icon and typical use case.

The service cards are generated automatically. Enquiry buttons open the modal and pre-select the service.

## 6. Add gallery photos

Edit `GALLERY_DATA`.

Each item follows:

```js
[
  "Project title",
  "Category",
  "assets/images/gates/gate-01.webp",
  "Meaningful image alt text",
  "Short project description"
]
```

The current 24 SVG files are development placeholders. Replace them with genuine project photos or properly licensed/royalty-free reference images.

Suggested image size: around 1200×900 or 1200×1200 depending on composition. Use WebP when possible.

## 7. Image naming

Use descriptive names such as:

- `gates/sliding-gate-01.webp`
- `railings/ss-glass-railing-01.webp`
- `staircases/spiral-staircase-01.webp`
- `vehicles/truck-dala-01.webp`

Every gallery image is rendered with meaningful alt text and lazy loading.

## 8. WhatsApp

Change `whatsappRaw` in `BUSINESS_CONFIG`.

The enquiry form creates a pre-filled WhatsApp message. Gallery lightbox sharing also includes the selected design title.

No WhatsApp API key is required for this static approach.

## 9. Real enquiry backend

The front-end currently uses WhatsApp as the default lead channel.

A backend can later be connected through Formspree, EmailJS or a custom API. Do not put private API keys or server secrets in `index.html`, `style.css` or `script.js`.

For production backend work, validate and sanitize data again on the server.

## 10. Google Maps

Set:

```js
mapUrl: "YOUR_GOOGLE_MAPS_LINK",
mapEmbedUrl: "YOUR_EMBED_URL"
```

If `mapEmbedUrl` is blank, the site shows a placeholder and an "Open Google Maps" button.

Do not publish a private workshop address unless the business owner has approved it.

## 11. SEO

Edit `BUSINESS_CONFIG.seo` for title, description and canonical URL.

For a real domain, replace the canonical URL and update Open Graph image metadata in `index.html`.

The site includes LocalBusiness JSON-LD generated from `BUSINESS_CONFIG`. It intentionally does not add fake ratings, fake reviews or fake awards.

## 12. Netlify

Drag the project folder into Netlify Drop, or connect a Git repository.

No build command is required.

## 13. GitHub Pages

Upload the files to a GitHub repository and enable Pages from the repository settings. The project is static, so no build step is needed.

## 14. Vercel

Import the repository into Vercel and deploy as a static site. No framework is required.

## 15. cPanel/shared hosting

Upload `index.html`, `style.css`, `script.js`, `README.md` and the complete `assets` folder into `public_html`.

## 16. Custom domain

Point the domain DNS records to your chosen hosting provider and configure HTTPS. Then update `BUSINESS_CONFIG.seo.canonical`.

## 17. Google Analytics later

Add your approved Google Analytics/Tag Manager snippet to `index.html` after obtaining the real measurement ID.

There are no hard-coded analytics IDs in this starter.

## 18. Testimonials

The testimonial section contains clearly marked sample placeholders. Replace every sample with genuine customer feedback before publishing.

Do not publish invented names, reviews, star ratings or claims as if they were real.

## 19. Vehicle modification disclaimer

The site includes:

> Vehicle body fabrication and modification is subject to applicable laws, safety standards, manufacturer requirements and necessary approvals. Customers should confirm approval requirements before using modified vehicles on public roads.

Do not promise guaranteed RTO/legal approval. Approval depends on the actual alteration, vehicle, manufacturer requirements and applicable authority rules.

## 20. Mobile testing

Test at minimum:

- 360 px mobile
- 390 px mobile
- 768 px tablet
- 1024 px laptop/tablet
- 1366 px desktop

Test the menu, phone links, WhatsApp, quote modal, service filtering, gallery filtering/search, lightbox, FAQ, form validation and mobile bottom CTA.

## Basic maintenance checklist

- Replace all TODO business information.
- Replace placeholder counters with verified figures.
- Replace sample testimonials with genuine reviews.
- Replace placeholder images with owned/licensed photos.
- Verify phone and WhatsApp numbers.
- Verify Google Maps link.
- Verify service areas.
- Test all forms and WhatsApp messages.
- Test mobile layout.
- Compress new images.
- Run a browser console check before publishing.
- Add a real privacy policy/terms page or approved legal content if required by the business.

## Notes

This project is intentionally framework-free and database-free. It is suitable for Netlify, GitHub Pages, Vercel static deployment and shared hosting.

The quotation guide does **not** calculate fake prices. Final pricing is left to the business owner because it depends on actual material, dimensions, design, weight, finish, transport, installation and site conditions.
