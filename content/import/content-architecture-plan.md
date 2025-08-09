---
kind: content_architecture_plan
status: draft
version: 0.1.0
---
# Content Architecture & Expansion Plan

## Route Types
| Type | Pattern | Source | Generation Strategy |
|------|---------|--------|---------------------|
| Home | / | Hand-authored | Static RSC |
| Pillar | /{pillar-slug} | Consolidated services taxonomy | Static (manual authoring → future CMS) |
| Service Detail | /services/{service-slug} | Sub-service mapping | Optional Phase 2/3 |
| Blog Article | /blog/{slug} | Imported + new | MD/MDX (future content layer) |
| Use Case | /use-cases/{slug} | Derived from engagements | Phase 3 |
| Case Study | /case-studies/{slug} | Client outcomes | Phase 3 |
| Legal | /privacy, /terms | Net-new | Static |
| Contact | /contact | Net-new | Static + form action |

## Initial Pillar Pages (Draft List)
1. /automation-workflows
2. /ai-enablement
3. /cybersecurity-compliance
4. /connectivity-communications
5. /data-activation
6. /digital-growth-revenue-ops
7. /business-continuity-recovery

## Blog Migration Strategy
- Ingest existing douglaspc.com article(s) → normalized markdown (already started)
- Tagging: automation, security, growth, data
- Add frontmatter fields: title, description, date, tags, status, canonical

## Internal Linking Model
| Source Section | Links To |
|----------------|---------|
| Hero CTA | Contact, Key Pillar |
| Features Grid | Corresponding Pillar Pages |
| FAQ Answers | Pillar deep-dives |
| Pillar Body | Adjacent pillars + CTA + related blog |
| Blog Articles | Pillar pages + glossary (future) |

## Structured Data Roadmap
| Page Type | Schema |
|-----------|--------|
| Home | Organization, WebSite, FAQPage |
| Pillar | Service, FAQPage, BreadcrumbList |
| Service Detail | Service, FAQPage, BreadcrumbList |
| Blog Article | Article / BlogPosting |
| Case Study | CreativeWork + Review (if NPS/quote) |

## Content Production Workflow (Proposed)
1. Define outline (H2/H3 structure) per page
2. Draft copy (target 800–1200 words for pillars)
3. Add internal links (≥ 3 per 500 words) naturally
4. Add FAQ (3–5 targeted questions with schema)
5. Optimize metadata (title ≤ 60 chars, description 150–160 chars)
6. Technical review (accuracy + compliance)
7. Publish & submit URL for indexing
8. Measure (GSC impressions / clicks after 14–28 days)

## Metadata Template (YAML Frontmatter)
```
---
title: "<Title>"
description: "<Compelling meta description>"
slug: <slug>
status: draft
pillar: <pillar-slug>
tags: [tag1, tag2]
updated: 2025-08-09
---
```

## TODO
- Decide slug naming consistency (hyphen vs nested)
- Add glossary (/glossary) Phase 3 (structured definitions)
- Evaluate content layer (contentlayer vs custom) before scaling

