# Lackawanna County Golf Carts - Website Project

## Overview
This project is for Lackawanna County Golf Carts (https://lackawannagolfcarts.com), Pennsylvania's premier golf cart dealership. The platform aims to provide a comprehensive online presence for DENAGO and EVOLUTION electric golf cart sales, rentals, and services within Lackawanna County. Key capabilities include complete inventory management, a rental system with location-based services for all 39 municipalities, customer inquiry handling, and detailed business information. The business vision is to serve as a central hub for golf cart sales and rentals, enhancing market presence and customer accessibility across the entire county.

## User Preferences
I want iterative development. Ask before making major changes.

## System Architecture

### UI/UX Decisions
- **Color Scheme**: Primary theme color #0e2e55 (dark blue), Orange accent #ff6100 for buttons and highlights.
- **Design Approach**: Responsive design with a mobile-first approach, utilizing modern card-based layouts for pricing and information display.
- **Visuals**: Integration of professional showroom photographs as dynamic background images across all pages for consistent branding.
- **Navigation**: Clean client-side navigation with automatic scroll-to-top functionality.

### Technical Implementations
- **Frontend**: React with TypeScript, Vite build system, Wouter for routing, shadcn/ui with Radix UI for components, Tailwind CSS for styling, TanStack Query for state management, React Hook Form with Zod for forms.
- **Backend**: Node.js with Express.js.
- **Database**: PostgreSQL with Drizzle ORM for data persistence and PostgreSQL-backed user sessions.
- **API**: RESTful endpoints with JSON responses.
- **Code Structure**: Monorepo with clear separation of frontend, backend, and shared code (`shared/schema.ts` for consistent types).
- **SEO**: Comprehensive sitemap.xml (100+ pages), robots.txt, full Schema Markup integration (Location, Vehicle, Service, Website, Person, Product, LocalBusiness, Organization), and individual pages for all 39 Lackawanna County municipalities for local SEO.
- **PWA Configuration**: Progressive Web App enabled with `site.webmanifest` for enhanced user experience and app shortcuts.

### Feature Specifications
- **Vehicle Inventory**: Detailed listings for DENAGO and EVOLUTION models with specifications and pricing.
- **Rental System**: Location-specific rental services and pricing for all Lackawanna County municipalities.
- **Contact Management**: Forms and systems for lead capture and customer inquiries.
- **Location-based Services**: Integration of Google Maps embeds with accurate Lackawanna County coordinates.

## External Dependencies
- **Google Tag Manager (GTM)**: Used for analytics and marketing tag deployment (GTM-NSN3ZJPP).
- **Google Analytics 4 (GA4)**: Integrated for website analytics (G-QJVWEK6RT8).
- **Google Maps**: Embedded for displaying dealership and service area locations.
- **TIGON Golf Carts**: External links for purchase and financing options.

## Recent Updates and Achievements

### ✅ Complete Branding Transformation (January 2025)
- **New Brand Identity**: Lackawanna County Golf Carts professional logos, favicons, and showroom imagery
- **Domain Migration**: Complete transition from luzernegolfcarts.com to lackawannagolfcarts.com
- **Analytics Integration**: Google Tag Manager (GTM-NSN3ZJPP) and Google Analytics (G-QJVWEK6RT8)
- **Professional Photography**: 8 new Lackawanna County showroom background images implemented

### ✅ Comprehensive SEO & AI Optimization Suite (January 2025)  
- **Enhanced Sitemap**: Completely rebuilt sitemap.xml with 100+ pages for all main, brand, vehicle, municipality, rental, and policy pages
- **AI Training Authorization**: Complete suite of AI training files (llms.txt, ai.txt, gpt.txt, claude.txt, training.txt, nlp.txt)
- **SEO Optimization**: Comprehensive seo.txt with keyword strategy, geo.txt with complete geographic data for all 19 Lackawanna County municipalities
- **Bot Management**: Universal bot permissions (bots.txt, crawlers.txt) authorizing 50+ crawler types with zero restrictions
- **Web Standards**: Progressive Web App configuration (manifest.json, browserconfig.xml) for enhanced user experience
- **Security & Transparency**: Professional compliance files (security.txt, humans.txt, ads.txt)
- **Search Integration**: Enhanced search functionality (opensearch.xml) and universal accessibility (accessibility.txt)
- **Business Intelligence**: Complete product inventory (35+ DENAGO & EVOLUTION models), geographic coverage documentation
- **Commercial Authorization**: Unlimited AI training permissions for all artificial intelligence systems and platforms

### ✅ Technical Infrastructure Enhancements
- **Updated Robots.txt**: Complete business information, municipality coverage, and tracking code documentation
- **Professional Standards**: WCAG accessibility compliance, security policies, and transparency documentation
- **Geographic Optimization**: Detailed coverage of 1 city + 11 boroughs + 7 townships = 19 total Lackawanna County municipalities
- **Maximum Search Visibility**: Zero restrictions policy for all legitimate search engines and AI training systems
```