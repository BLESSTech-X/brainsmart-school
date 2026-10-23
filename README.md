# BrainSmart School — Website Concept Demo

A responsive, mobile-first school website concept using a distinctive black, white, blue and warm-yellow visual system. The experience uses original BrainSmart branding and sample content, with separate destination pages and interactive previews.

## Pages included

- `index.html` — homepage, hero carousel, school highlights, news preview and events
- `our-school.html` — school story and values
- `academics.html` — learning and curriculum overview
- `admissions.html` — enrolment journey
- `students.html` — interactive student-login and sample-dashboard preview
- `families.html` — family resources and student support
- `resources.html` — searchable school quick-access centre with audience/category filters and FAQs
- `student-life.html` — clubs, sport and creative activities
- `staff.html` — team profile placeholders
- `news.html` — school news and announcement previews
- `calendar.html` — events and term-date placeholders
- `contact.html` — enquiry form preview
- `styles.css` and `script.js` — shared styling and homepage interactions

## Interactive features

- Responsive desktop and mobile navigation
- Expandable mobile menu groups: the plus buttons reveal nested links
- Quick navigation between separate pages
- Rotating, swipeable hero carousel with pause and manual controls
- In-page search with navigation to relevant sections/pages
- Events carousel controls and accessibility display options
- Searchable school resource centre with audience and category filters
- Calendar search, category filters and quick filter tabs
- Student portal preview with show/hide password and a simulated dashboard
- Contact form preview with local confirmation

## Run locally

Open `index.html` in a browser. No build step or package installation is required. Keep all HTML pages, `styles.css`, and `script.js` in the same folder.

## Important demo limitations

Calendar events and dates are illustrative placeholders only and must be replaced with school-approved information. The searchable resource centre is a front-end demo; it does not connect to school systems or provide downloadable official policies. The student login is **not real authentication**. It accepts sample input only, does not connect to student records, does not save credentials and must never be used with real passwords. The contact form only displays a local confirmation; it does not send or store messages. No real student data, accounts, grades, attendance, messaging or school systems are connected.

Before using this for a real school, implement approved secure authentication and server-side form handling, privacy and safeguarding measures, and accessibility testing.

## Before launch

Replace sample photography and placeholder announcements with school-approved material. Confirm the school's actual address, phone number, email, calendar, admissions process, social links, policy documents, brand assets, approved languages and leadership/team biographies. The language control is a placeholder, not a translation engine. Confirm whether `hello@brainsmartschools.com` is an official contact address before publication.

## Hosting

The static project can be hosted on GitHub Pages, Cloudflare Pages, Netlify or another static host. The repository includes a GitHub Actions deployment workflow. If the expected Pages URL does not load, enable **Settings → Pages → Build and deployment → GitHub Actions** and inspect the **Actions** tab for the deployment result.
