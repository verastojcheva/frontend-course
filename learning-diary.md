Lappeenrannan teknillinen yliopisto
LUT School of Engineering Science

Software Development Skills Front-End, Online course

Vera Stojcheva, 001164725

LEARNING DIARY

20.9.2025

I kicked off the course by making sure my tools were ready. VS Code was already installed, so I focused on version control. I checked that Git was available and decided to use GitHub Desktop because it makes the basics (staging, committing, pushing) visible and less intimidating. I created a public repository called frontend-course, cloned it locally, and set up a simple structure with coursework, project, and learning-diary.md.

What I took away today is that version control isn’t just a requirement- it actually lowers stress. Seeing a clear history of changes made me more confident to experiment, because I can always go back. My goal from here is to write small, frequent entries in this diary instead of “big dumps,” so I capture what I’m learning while it’s fresh.

24.9.2025

I started the tutorial with the base HTML and tried to be deliberate about semantics: proper headings, meaningful sectioning, and a clean outline. I noticed that even without styles, the page already felt more understandable. That was a small “aha” moment about accessibility—good structure benefits everyone, not only screen reader users.

I then set up core CSS: variables for colors and spacing, a fluid container, and simple typography. I experimented with rem and clamp() to keep things readable on small screens. The reflective part here was realizing how CSS variables act like a design “control panel.” When I changed a single value, the entire look shifted consistently. In the past I would have edited many scattered rules; this felt much more intentional.

27.9.2025

Today was about interaction and reusability. I styled buttons and created a few small utility classes. I was tempted to add lots of utilities, but I held back to avoid creating a confusing “micro-framework.” The main challenge was the mobile menu. I used a tiny JavaScript toggle and updated the aria-expanded attribute so assistive tech can understand the menu state. It worked, but it also reminded me that accessibility isn’t automatic—I need to think about it on purpose.

I also built the cards section with CSS Grid (auto-fit + minmax). The neat part was seeing the cards reflow naturally without hard-coded breakpoints. Comparing Grid to Flexbox helped me form a mental model: Grid for two-dimensional layouts (like the card area), Flex for one dimension (like navigation or button rows). That mental model is something I’ll reuse.

I added an FAQ using the native <details><summary> pattern. I liked how it comes with keyboard support “for free.” I did a quick keyboard-only test and adjusted focus styles to make it clearer what’s selected. That small test made me notice places where spacing was a bit tight, especially at narrow widths.

2.10.2025

I focused on responsiveness and polish. I refined media queries so the layout scales down without awkward gaps or overflow. A long link in the nav caused an unexpected wrap; I fixed it by adjusting padding and testing on very narrow widths. Another small but important check was verifying that the menu button’s aria-expanded updates correctly every time—easy to forget when you’re focused on visuals.

Overall, this part was more about mindset than code: start mobile-first, then gradually enhance. When I approached it this way, I wrote fewer overrides and made fewer “patch” fixes.

Following the tutorial gave me a complete front-end cycle: semantic HTML → core CSS (variables, typography, layout) → components (buttons, cards) → accessibility checks (FAQ and menu states) → responsive tuning with media queries → deployment on GitHub Pages. The most valuable lessons were (1) picking the right layout tool- Grid for structured two-dimensional areas and Flexbox for single-axis groups, (2) using CSS variables to keep design changes consistent, and (3) thinking about accessibility as part of the initial design instead of as an afterthought. I also learned to test earlier and smaller: keyboard-only navigation, very narrow viewports, and quick checks for overflow caught issues before they became bigger. Publishing to GitHub Pages closed the loop and made the work feel “real.” Going into my separate course project, I feel ready to adapt these patterns to my own content and style rather than just copying the exact tutorial layout.

3.10.2025

I turned the tutorial work into my own project: a “PM Dashboard” with four pages (Home, Metrics, Insights, About). On the Metrics page I grouped tiles by purpose—Product Usage, Conversion, Customer Sentiment, and Revenue & Growth—and used CSS Grid for the KPI layout and Flexbox for the Insights cards. I trimmed the copy to be neutral and product-focused and added accessible focus states.

I also drew on the Userpilot product dashboard article/example (https://userpilot.com/blog/product-dashboard/) to sanity-check which metric families to include (e.g., stickiness, TTV, NPS/CSAT, MRR/churn) and to keep the dashboard tied to a goal rather than a random metric list. Most of today went to debugging fundamentals (relative links vs. absolute, fixing the intex.html typo to index.html, CSS paths, and replacing optional chaining in JS). The habit that helped most was a quick checklist—right file? right path? cached?—plus DevTools Network to confirm 200 vs 404 before touching layout.

4.10.2025

I finished the “communication” pieces so the dashboard feels like a real product artifact. On About, I explained the purpose (at-a-glance product health), audience (PMs/Analysts, leads, stakeholders), what’s shown (usage, conversion, sentiment, revenue), and how to read it (start from the current goal; look at direction, not just absolutes). I added a FAQ (tabs + accordion) and linked it via #faq. On Home, I added a simple hero image and kept the page tall enough that the footer sits below the fold. In the footer I built a small newsletter form (email validation, ARIA live status, localStorage “subscribe”). Only “Process/Join Our Team” are disabled intentionally—Metrics and Insights still navigate normally.

Here again I referenced the Userpilot article/example (https://userpilot.com/blog/product-dashboard/) to validate the structure and the “group by decision area” approach. Reflection: this was about polish with intent—minimal copy, clear grouping, visible state (focus rings, aria-expanded), and hosting-friendly choices (relative URLs, cache-busting, case sensitivity). If I extend this, I’ll load the KPIs from a small JSON and add one trend chart—only if it answers a concrete question. For the assignment, the project now satisfies navigation, responsive CSS, Flexbox & Grid, and is ready for GitHub Pages deployment.

Project overview reflection

This project taught me how to turn front-end fundamentals into a clear communication artifact for product work. I built a four-page PM Dashboard (Home, Metrics, Insights, About) and focused on making information scannable, accessible and reliable to deploy—rather than just “styled.”

What I mainly learned

Structure first, then style. Starting with semantic HTML gave me a solid outline and better accessibility by default. Good headings and sections made the page understandable even before CSS.

The right layout tool for the job. I now have a strong mental model: Grid for structured, two-dimensional areas (my KPI tiles) and Flexbox for one-axis groups (navigation, insight cards). That alone simplified a lot of decisions.

Design consistency via CSS variables. Centralizing spacing, color and radius values meant small changes propagated cleanly. It felt like having a “design control panel.”

Accessibility is a behavior, not a checkbox. Focus rings, aria-expanded on the mobile menu, and readable copy made the UI more honest and usable. The FAQ interaction also reminded me to consider keyboard use.

Debugging like a developer. I stopped guessing and started verifying: file names (index.html vs. intex.html), relative paths (./ vs /), case sensitivity on static hosts, @import placement in CSS, and browser cache-busting. DevTools (Network 200/404) and a simple checklist (“right file? right path? cached?”) saved hours.

Deployment basics matter. Git/GitHub/GitHub Pages forced me to think about how files are served, which is a valuable habit beyond this course.

How the tutorial helped

The tutorial gave me a practical path through the core stack—semantic HTML → base CSS → components → responsiveness → tiny JS → deploy. It also modeled the mobile-first mindset and showed how modest, composable pieces add up to a complete site. I adapted those patterns to my PM Dashboard instead of copying the exact layout: I grouped metrics by decision area (Usage, Conversion, Sentiment, Revenue) and wrote concise “Notes”/“Insights” that connect numbers to actions.

The Userpilot product dashboard article/example further shaped my content choices. It validated which metric families to include (e.g., stickiness, TTV, NPS/CSAT, MRR/churn) and reinforced that dashboards should reflect a goal and direction, not just a list of numbers. That helped me keep the scope tight and purposeful.

Where I’d take it next

If I extend this, I’ll load KPI values from a small JSON and add one simple trend chart where it answers a real question. But the key outcome is already here: I can design and ship a small, responsive, accessible website that communicates product health clearly— skills I can carry directly into my product analyst/PM work.

Statement:
This document was developed with the support of generative AI tools (ChatGPT), which provided assistance only in editing and refining the content, based on their knowledge and capabilities as of September 2025.
For some sections I also used an online translator, Yandex, to assist me in the translation for organized and structured complex sentences, which may result in these sentences to be flagged as AI generated. I responsibly declare that the content in this diary was written by me.
