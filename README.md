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
- `school-menu.html` — cafeteria/menu publication framework, dietary guidance and payment-service placeholder
- `supply-lists.html` — printable generic checklist with grade-group filter; official lists clearly marked pending
- `school-hours.html` — office hours, arrival, dismissal and attendance procedure framework
- `family-support.html` — wellbeing, health/clinic, library, learning support and digital-safety directory
- `family-services.html` — family technology, attendance, registration, records requests, engagement, after-school and district-calendar service framework
- `community.html` — volunteer and community partnership framework with safeguarding notes
- `school-profile.html` — school facts, leadership, achievements and accountability placeholders
- `policies.html` — policy library framework for safeguarding, privacy, accessibility and records
- `sitemap.html` — site-wide navigation index
- `student-life.html` — clubs, sport and creative activities
- `staff.html` — team profile placeholders
- `news.html` — school news and announcement previews
- `calendar.html` — searchable/filterable events plus a navigable month grid; no unverified event dates are invented
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


## School-specific information and launch readiness

The reference-inspired information architecture now includes cafeteria/menu, grade-level supplies, school hours and daily routines, family support services, family technology and records workflows, volunteer/community partnerships, school profile/accountability, policies/accessibility and a complete site map. School-specific facts remain visibly marked as awaiting approval wherever no verified information was supplied. The supply checklist, calendar navigation, resource search/filtering and news archive filters are front-end interactions only. Contact, newsletter, student login, meal payments, attendance, parent portal, records requests and safeguarding workflows are not connected to a backend and must not be presented as live services.

Before production launch, the school must provide approved contact details, hours, menus, supply lists, term dates, safeguarding contacts/policies, privacy notice, staff biographies, school registration/profile facts, partner approvals and any real portal or payment integrations.
