# Website Product Requirements & Site Plan

Last Updated: 2025-08-09
Status: Draft (Phase 1 implementation in progress)
Owner: TODO assign

<!--
Original Prompt Reference (Snapshot)
User requested creation of a consolidated AI / automation / digital marketing website pulling and unifying:
 - Service + content themes from https://douglaspc.com
 - Service + content themes from https://brevardpc.com
 - Services taxonomy (only) from GitHub repo: https://github.com/Douglas-PC/rapidAI
 - Visual / styling direction inspiration from GitHub repo: https://github.com/eric4479/magic
 - Add broader digital marketing agency service layer (SEO, demand gen, funnel optimization) in addition to automation & AI.
Priority: Highest possible SEO foundation (structured data, internal linking plan, pillar/cluster model) while keeping site static & performant on Cloudflare Pages.
-->

## 0. Source Inputs & Provenance
| Source | Purpose | Notes |
|--------|---------|-------|
| https://douglaspc.com | Existing service descriptions | Used to seed automation/IT support style offerings (to be reframed) |
| https://brevardpc.com | Additional service wording | Cross-referenced for overlap & differentiation |
| https://github.com/Douglas-PC/rapidAI | AI / automation service taxonomy | Only conceptual categories ingested (no code reuse) |
| https://github.com/eric4479/magic | Design/styling inspiration | Referenced for gradient, layout, component density patterns |
| (User Prompt Text) | Strategic consolidation directive | Paraphrased in HTML comment above; exact wording available in chat history |

---
## 1. Executive Summary
Build a high-performance, SEO-forward, predominantly static Next.js 15 (App Router) marketing site that clearly communicates AI automation, data activation, and digital growth consulting services. The site must load fast globally (Cloudflare Pages), support structured data for rich results, and be modular for future CMS & i18n expansion.

Primary Objectives:
1. Organic acquisition: Rank for automation, AI enablement, revenue operations, and digital growth intent queries.
2. Conversion clarity: Above-the-fold value proposition + clear CTA (strategy call / contact).
3. Performance excellence: Lighthouse Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 95, Best Practices ≥ 90.
4. Extensibility: Architecture ready for content scaling (blog, case studies, service detail pages) without refactor.

---
## 2. Business Goals & KPIs
| Goal | KPI | Target (Initial 90 Days) | Notes |
|------|-----|--------------------------|-------|
| Increase qualified inbound leads | Strategy call form submissions | +30 vs baseline (baseline = 0) | Form to be added Phase 2 |
| Improve organic visibility | Non-branded impressions (GSC) | 250+/month | Pillar + cluster content rollout |
| Establish authority | Avg. time on key pillar pages | > 90s | Requires deeper content Phase 2/3 |
| Conversion optimization | Hero CTA CTR | ≥ 4% | Test copy variants later |
| Engagement funnel | Scroll depth to FAQ/CTA | ≥ 55% users | Use analytics event |

---
## 3. Target Audiences / Personas (Draft)
| Persona | Description | Primary Pain | Desired Outcome | Key Messaging Angle |
|---------|-------------|--------------|-----------------|--------------------|
| Ops Lead (SMB/Mid) | Oversees fragmented manual processes | Time drain, errors | Streamlined automated workflows | "Remove repetitive friction" |
| RevOps / GTM Strategist | Owns funnel & tooling alignment | Siloed data & attribution gaps | Unified lifecycle visibility | "Operationalize data → revenue" |
| Founder / Exec | Needs leverage quickly | Slow scaling & cost creep | Efficient growth engine | "Compounding leverage from day one" |
| Digital Marketing Manager | Channel performance plateau | Inefficient spend & low conversion | Optimized acquisition + retention loops | "Turn data into lift & retention" |

Open: Validate vertical-specific segment (e.g., SaaS B2B, professional services, local multi-location). 

---
## 4. Scope (MVP / Phase Breakdown)
Phase 1 (In Progress):
- Core landing page sections (Hero, Social Proof placeholder, Problem→Solution, Features, Use Cases, Testimonials placeholder, FAQ, Final CTA)
- Global metadata + Organization & WebSite JSON-LD
- Accessibility basics (semantic structure, skip link)
- Theming & tokens foundation

Phase 2 (Planned):
- Pillar Pages (e.g., /automation-workflows, /ai-consulting, /revenue-operations, /digital-growth, /data-activation)
- Service detail schema (Service JSON-LD)
- FAQPage scoped to each pillar
- Contact / Strategy Call form (server action or edge-compatible handler)
- Basic analytics (prefer privacy-friendly, e.g. Posthog/Umami) – instrumentation hooks

Phase 3 (Deferred):
- Blog / Resources (content layer integration)
- Case Studies (structured success stories with schema)
- Pricing / Engagement Models page
- Search function (site-level search action already stubbed in WebSite schema)
- Client logo carousel (prefetch optimized images)

Out of Scope (Now):
- Authenticated user areas
- Custom dashboards
- Heavy client-side interactivity

---
## 5. Information Architecture (Current + Near-Term)
Primary Navigation (future header): Hero anchor links initially → later top nav.
Planned Top-Level Routes (Phase 2/3):
- / (Home)
- /automation-workflows
- /ai-consulting
- /revenue-operations
- /digital-growth
- /data-activation
- /contact (Phase 2)
- /blog (Phase 3)
- /case-studies (Phase 3)

---
## 6. Content Sections (Implemented / Planned)
| Order | Section | Status | Notes |
|-------|---------|--------|-------|
| 1 | Hero | Implemented | Server component, single H1 |
| 2 | Social Proof | Placeholder | Logos TBD |
| 3 | Problem → Solution | Implemented | List mapping problems to solutions |
| 4 | Features / Outcomes | Implemented | Distills core value clusters |
| 5 | Use Cases | Implemented | Add deeper links later |
| 6 | Testimonials | Placeholder | Real quotes Phase 2 |
| 7 | FAQ | Implemented | Placeholder answers; JSON-LD later per-page |
| 8 | Final CTA | Implemented | Drives strategy call |

---
## 7. Copy Guidelines
Tone: Pragmatic, expert, outcome-focused. Avoid hype adjectives without quantification. Use active voice. Short paragraphs (≤ 2 sentences preferred). Provide value articulation + proof placeholders.

TODO: Add brand voice guardrails once stakeholder review complete.

---
## 8. SEO & Structured Data Strategy
Structured Data (Current): Organization, WebSite.
Upcoming: FAQPage (home + per pillar), Service, BreadcrumbList, Article (blog futures), Review (case studies), HowTo (process tutorials if created).

On-Page Basics:
- One H1 per page (Hero)
- Section headings descend logically (H2/H3)
- Anchor IDs (#features, #faq, etc.) for internal linking / jump menus
- Canonical per route via metadata (to be added with real domain)

Internal Linking Plan (Phase 2): Each pillar links to: related pillar, FAQ anchors, CTA, and use cases. Use contextual inline links in first 150 words where natural.

Target Keyword Pillars (Draft – refine with research):
1. Workflow Automation Consulting
2. AI Implementation / AI Enablement
3. Revenue Operations Optimization
4. Digital Growth Strategy / Demand Generation
5. Data Activation / Customer Data Infrastructure

Technical SEO:
- Static HTML generation (avoid dynamic blocking calls)
- Preload key font(s) – (Geist handled by next/font)
- Avoid layout shifts (hero sized text & spacing stable)
- Add robots + sitemap (sitemap in Phase 2; robots meta already added)

---
## 9. Performance & Non-Functional Requirements
| Category | Requirement | Rationale |
|----------|------------|-----------|
| Performance | LCP < 1.8s (Fast 3G emulation) | Core Web Vital target |
| Performance | CLS = 0 | Stable layout |
| Performance | JS Bundle minimal (no client components unless needed) | Faster TTFB/stream |
| Accessibility | Semantic landmarks + skip link | WCAG compliance |
| Accessibility | Color contrast AA | Legibility |
| Security | No inline user-generated HTML | Prevent injection |
| Deployment | Edge-friendly (no Node-only APIs) | Cloudflare compatibility |
| Observability (Phase 2) | Basic event tracking hooks | Funnel analysis |

Monitoring (Future): Add synthetic check (uptime + LCP). 

---
## 10. Technical Architecture Overview
Stack: Next.js 15 App Router (Server Components), Tailwind CSS v4 (design tokens via CSS vars + @theme inline), Cloudflare Pages adapter.

Runtime: Edge / Static (prefer fully static output). No server-side DB integration yet.

Directory Conventions:
- `src/app/` routes & layout
- `src/components/` pure server components (no state)
- `src/lib/` pure utilities (SEO, schema builders)

Extensibility Hooks:
- Future CMS: map component props to content fields 1:1
- JSON-LD: centralize builders in `schema.ts`

---
## 11. Component Inventory (Current)
| Component | Purpose | Props (Key) | Notes |
|-----------|---------|-------------|-------|
| SectionWrapper | Consistent section spacing/container | id, ariaLabel, className | Base semantic wrapper |
| HeroSection | Above-the-fold value & CTAs | heading, subheading, primaryCta, secondaryCta | Gradient backdrop |
| SocialProofSection | Logos / trust markers | logos, heading | Placeholder state |
| ProblemSolutionSection | Problem → solution mapping | items[] | Each item: problem, solution |
| FeatureList | Outcome / capability grid | features[], heading, columns | ID anchor (#features) |
| UseCasesSection | Use case cards | cases[] | 3-column grid |
| TestimonialsSection | Social validation | testimonials[] | Placeholder copy |
| FAQSection | Common questions | faqs[] | Future FAQPage schema injection per route |
| CTASection | Final conversion nudge | heading, subheading, primaryCta | Distinct gradient accent |

---
## 12. Metadata & Structured Data Implementation
Metadata Strategy:
- Title template: "%Page Title | AI Automation & Digital Growth Consulting"
- Replace placeholder brand & domain once finalized.

JSON-LD Injection Points:
- Global (layout): Organization, WebSite
- Page-Level (future): FAQPage (if FAQ present), Service (service detail pages), BreadcrumbList (multi-level pages)

Validation Tools: Google Rich Results Test, Schema.org validator, Lighthouse.

---
## 13. Analytics & Measurement (Phase 2)
Planned Events:
- hero_cta_click (label=primary|secondary)
- scroll_depth (percentage thresholds 25/50/75/90)
- faq_toggle (if interactive version added later)
- form_submit (contact strategy form)

Tooling Options (Evaluate): Posthog (self-host / cloud), Plausible, Umami. Avoid heavy vendor scripts that hurt performance.

---
## 14. Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|-----------|
| Placeholder copy shipped | Lower conversion & trust | Medium | Flag TODOs and schedule copy review sprint |
| Scope creep (features before traffic) | Delays initial launch | High | Phase gating & acceptance criteria |
| Performance regression from added scripts | SEO ranking impact | Medium | Performance budget & PR check-list |
| Brand/domain late decision | Metadata delays | Medium | Use placeholders; batch update before launch |
| Tailwind v4 changes (preview) | Build breaks on upgrade | Low | Pin dependency; document tokens |

---
## 15. Acceptance Criteria (Phase 1 Completion)
- [ ] All listed section components present & rendering without console errors
- [ ] Lighthouse (local) SEO ≥95 / Performance ≥90 / Accessibility ≥95 / Best Practices ≥90
- [ ] No TypeScript or ESLint errors
- [ ] Structured data (Organization + WebSite) validates
- [ ] Page fully static (no RSC dynamic warnings in build)
- [ ] Single H1, logical heading order
- [ ] Skip link usable via keyboard (Tab → Enter focuses main)
- [ ] Anchors (#features, #faq, etc.) exist for internal linking

---
## 16. Open Questions
- Final brand name & domain? (Placeholder: Example Company / example.com)
- Primary conversion mechanism: form vs. calendaring (Cal.com / Calendly)?
- Vertical focus for initial SEO cluster? (SaaS B2B, professional services, etc.)
- Will case studies be anonymized or attributed?
- Legal pages (Privacy / Terms) needed Phase 1 or Phase 2?

---
## 17. Future Enhancements (Backlog)
- Automated sitemap generation & submission
- Edge middleware for geo-based experimentation (if justified)
- Contentlayer integration for MDX knowledge base
- Interactive ROI calculator (client component, deferred)
- A/B testing framework (small flags system)

---
## 18. Implementation Notes
- Do not add client components until interaction required.
- Keep JSON-LD minimal; omit null/undefined fields.
- Consolidate common gradient styles into design tokens if reused >2 times.

---
## 19. Changelog
| Date | Change | Author |
|------|--------|--------|
| 2025-08-09 | Initial PRD & Site Plan extraction from Websites.prompt.md | AI Agent |

---
## 20. Next Actions (Immediate)
1. Replace placeholder brand/domain values in metadata & schemas.
2. Add Service schema builder for Phase 2 pillar pages.
3. Draft /automation-workflows pillar page structure.
4. Prepare form strategy (decide: native form + email, or headless form service).
5. Define KPI baseline instrumentation plan.

---
END
