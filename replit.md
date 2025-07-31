# Lackawanna County Golf Carts - Website Project

## Overview

Lackawanna County Golf Carts (https://lackawannagolfcarts.com) is a comprehensive website for Pennsylvania's premier golf cart dealership serving the major municipalities across Lackawanna County. The platform features complete inventory management, customer inquiries, rental systems, location-based services, and comprehensive business information for DENAGO and EVOLUTION electric golf cart sales.

## Business Information

**Company**: Lackawanna County Golf Carts  
**Website**: https://lackawannagolfcarts.com  
**Phone**: 1-844-844-6638  
**Email**: info@lackawannagolfcarts.com  
**Service Area**: Major Lackawanna County, Pennsylvania municipalities  
**Brands**: DENAGO and EVOLUTION electric golf carts  
**Services**: Sales, Rentals, Service, Parts, Financing  

**Design**: Primary theme color #0e2e55 (dark blue), Orange accent #ff6100 for buttons and highlights  
**Geographic Coverage**: 39 total municipalities in Lackawanna County (22 boroughs + 17 townships)  
**SEO**: Complete sitemap.xml with 100+ pages, comprehensive robots.txt, full municipality coverage

## Technical Architecture

### Frontend Technology Stack
- **Framework**: React with TypeScript and Vite build system
- **Routing**: Wouter for client-side navigation
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom Lackawanna County Golf Carts theming
- **State Management**: TanStack Query for API data management
- **Forms**: React Hook Form with Zod validation

### Backend Infrastructure
- **Server**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-backed user sessions
- **API Architecture**: RESTful endpoints with JSON responses
- **File Structure**: Shared types in `shared/schema.ts` for consistency

## Website Structure

### Main Pages (8)
1. **Home** (`/`) - Company overview and featured inventory
2. **Inventory** (`/inventory`) - Complete DENAGO and EVOLUTION golf cart listings
3. **Rentals** (`/rentals`) - Rental packages and pricing for all municipalities
4. **Services** (`/services`) - Service offerings and maintenance information
5. **About** (`/about`) - Company history and Luzerne County focus
6. **Contact** (`/contact`) - Contact forms and TIGON location details
7. **Showroom** (`/showroom`) - TIGON showroom locations and services
8. **Financing** (`/financing`) - Financing options and calculators

### Brand Pages (2)
- **DENAGO** (`/denago`) - Complete DENAGO vehicle lineup and specifications
- **EVOLUTION** (`/evolution`) - Complete EVOLUTION vehicle lineup and specifications

### Vehicle Detail Pages (37)
- Individual pages for all DENAGO and EVOLUTION models with specifications, pricing, and external TIGON links

### Location Pages (23)
- Dedicated pages for all Luzerne County municipalities linking to their respective rental pages

### Rental Pages (23)
- Location-specific rental services for all Luzerne County municipalities

### Policy Pages (12)
- Comprehensive business policies including terms, privacy, delivery, rental, and corporate policies

## Current Status (January 30, 2025)

### January 30, 2025 - COMPLETE Policy Pages Transformation to Lackawanna County
- ✅ **ALL Policy Pages Successfully Updated**: Completed comprehensive transformation of all 11 policy pages from Luzerne County to Lackawanna County:
  - **Geographic References**: Updated all "Luzerne County" to "Lackawanna County" throughout all content (49+ instances)
  - **Contact Information**: Updated all email addresses from "info@luzernegolfcarts.com" to "info@lackawannagolfcarts.com" (14 instances)
  - **Website References**: Updated all website URLs from "luzernegolfcarts.com" to "lackawannagolfcarts.com" (24 instances)
  - **Service Areas**: Updated all "Serving Luzerne County, Pennsylvania" to "Serving Lackawanna County, Pennsylvania" (10 instances)
  - **Company Names**: Updated all company name references throughout legal content and contact sections
  - **Legal Jurisdictions**: Updated court jurisdiction references from Luzerne County to Lackawanna County
- ✅ **Complete File Coverage**: Successfully updated all policy files:
  - POLICIES: Terms & Conditions, Return Policy, Privacy Policy
  - SERVICE POLICIES: Delivery Policy, Rental Policy, Storage Policy
  - CONTENT POLICIES: Publishing Policy, Feedback Policy, Corrections Policy
  - WORK POLICIES: Diversity Policy, Ethics Policy, Staffing Report
- ✅ **Quality Assurance**: Verification confirms zero remaining "Luzerne County" references in policy pages
- ✅ **Professional Standards**: All contact information, legal references, and geographic data now consistently reflect Lackawanna County branding

### January 30, 2025 - Complete Rental Page Pricing Structure & Color Scheme Update
- ✅ **Updated Rental Pricing Structure**: Implemented comprehensive new pricing across all 23 Luzerne County municipality rental pages:
  - **4-Seater Golf Carts**: Daily $245, 3-Day $685, Weekly $1,050, Monthly $2,800
  - **6-Seater Golf Carts**: Daily $295, 3-Day $825, Weekly $1,260, Monthly $3,360
  - **Utility Golf Carts**: Daily $275, 3-Day $770, Weekly $1,155, Monthly $3,080
- ✅ **Professional Layout Enhancement**: Redesigned rental pages with modern card-based pricing structure:
  - Added "Why Choose Our Golf Cart Rentals?" section with key features (street legal, fully charged, 24/7 support)
  - Implemented 4-column responsive grid layout for pricing plans
  - Added savings percentage calculations and daily rate displays
  - Professional "RESERVE TODAY" call-to-action buttons with orange theme color
- ✅ **Color Scheme Consistency**: Updated all buttons across rental pages to match site's orange theme (#ff6100):
  - Changed "RECOMMENDED" badges from red to orange theme color
  - Updated all "RESERVE TODAY" buttons to use theme-orange background
  - Maintained consistent hover states with orange-600 color
  - Updated "Book Your Rental Today!" buttons to orange theme color
- ✅ **Google Tag Manager Installation**: Successfully implemented GTM tracking across the entire website:
  - Added GTM script (GTM-K58N85RN) to the <head> section of index.html for optimal loading
  - Implemented noscript fallback immediately after <body> tag for JavaScript-disabled browsers
  - Complete coverage across all 100+ pages including main pages, vehicle pages, rental pages, and policy pages
  - Proper placement ensures accurate tracking of user interactions and conversions
- ✅ **Google Analytics Installation**: Added Google Analytics 4 tracking (G-X6JGDD9ZQD) to complement GTM:
  - Implemented gtag.js tracking code immediately after GTM in the <head> section
  - Proper dataLayer configuration for seamless integration with existing GTM setup
  - Comprehensive analytics coverage across all website pages and user interactions

## Previous Status (January 29, 2025)

### January 29, 2025 - Complete Google Maps Embeds Update & Luzerne County Coordinates Integration
- ✅ **Comprehensive Google Maps Embed Updates**: Successfully updated all Google Maps embeds across the website to display proper Luzerne County, PA coordinates:
  - **Updated Coordinates**: Changed from various previous coordinates to official Luzerne County coordinates (41.2451, -76.1273)
  - **Updated Geographic References**: Changed all map URLs from previous counties to "Luzerne County, PA" for accurate location display
  - **CarbonCountyMunicipalityPages.tsx**: Updated municipality location map URLs with Luzerne County coordinates and location references
  - **TownPage.tsx Component**: Updated all branding from "Ocean County Golf Carts" to "Luzerne County Golf Carts" with fallback map URL for Luzerne County
  - **AboutPage.tsx & NewAboutPage.tsx**: Maps previously updated to show correct Luzerne County locations
  - **Professional Accuracy**: All embedded maps now accurately display Luzerne County Pennsylvania locations for user navigation
- ✅ **Sitemap.xml Luzerne County Cleanup**: Removed 8 incorrect non-Luzerne County municipality entries that were left over from previous configurations:
  - **Removed Invalid Municipalities**: lower-milford-township, lynn-township, heidelberg-township, washington-township, weisenberg-township, lowhill-township, emmaus-borough, macungie-borough (these were Lehigh County municipalities)
  - **Verified Complete Coverage**: Confirmed exactly 23 Luzerne County municipality location pages and 23 Luzerne County municipality rental pages
  - **Data Integrity**: All sitemap entries now match the official LUZERNE_COUNTY_MUNICIPALITIES data structure (9 boroughs + 26 townships)
- ✅ **Home Page Location Updates**: Successfully updated the "Ready to Get Started?" section to display all three TIGON Golf Carts locations:
  - **3-Column Layout**: Changed from 2-column to 3-column grid (md:grid-cols-3) for proper display
  - **Complete TIGON Locations**: Hatfield (215-595-8736), Poconos (570-643-0152), Scranton (570-344-4443)
  - **Professional Design**: Consistent white cards with MapPin icons, addresses, and phone numbers in theme-orange

### Complete Luzerne County Golf Carts Implementation
- ✅ **Comprehensive Sitemap.xml Rebuild**: Completely rebuilt sitemap.xml with all Luzerne County pages for optimal SEO:
  - **Complete Page Coverage**: Added all 23 Luzerne County municipality location pages with proper URLs
  - **All Rental Pages**: Added all 23 Luzerne County municipality rental pages for comprehensive local coverage
  - **Professional Structure**: Organized sitemap with main pages, brand pages, vehicle pages, location pages, rental pages, and policy pages
  - **SEO Optimization**: Proper priority settings, change frequencies, and image metadata for search engine optimization
  - **Total Coverage**: 100+ pages including 8 main pages, 2 brand pages, 37 vehicle pages, 46 location/rental pages, and 12 policy pages
- ✅ **Enhanced Robots.txt Updates**: Updated robots.txt with comprehensive Luzerne County business information:
  - **Complete Municipality Listing**: Added all 23 Luzerne County municipalities (9 boroughs + 14 townships) for local SEO
  - **Site Structure Documentation**: Detailed breakdown of all page types and comprehensive coverage
  - **Professional SEO Implementation**: Complete documentation of site structure for search engine crawlers
  - **File Type Permissions**: Added comprehensive file type allowances for CSS, JS, images, and PDFs
- ✅ **Progressive Web App (PWA) Configuration**: Updated site.webmanifest for Luzerne County Golf Carts:
  - **Rebranding**: Changed from "Lehigh County Golf Carts" to "Luzerne County Golf Carts" with updated logo
  - **Enhanced Description**: Updated to reflect service to all 23 Luzerne County municipalities
  - **App Shortcuts**: Added quick access shortcuts for Inventory, Contact, and Rentals pages
  - **Professional Metadata**: Added categories, language settings, and enhanced icon configuration
- ✅ **Showroom Page Areas We Service Update**: Fixed showroom page to display Luzerne County municipalities:
  - **Dynamic Municipality Display**: Shows all 23 Luzerne County municipalities with interactive cards
  - **Location Page Links**: Each municipality links to its dedicated location page for local SEO
  - **Enhanced UI**: White cards with hover effects and proper borough/township type indicators
  - **SEO Updates**: Updated page title, description, and keywords for Luzerne County branding
- ✅ **Random Background Images Added**: Added professional background images to both DENAGO and EVOLUTION brand pages:
  - **DENAGO Page**: Consistent background using '/denago' seed for unique but stable image selection
  - **EVOLUTION Page**: Professional background using '/evolution' seed for brand consistency
  - **Visual Enhancement**: Both pages now feature high-quality Luzerne County Golf Carts showroom photography

### January 29, 2025 - Complete Brand Pages Luzerne County Migration
- ✅ **DENAGO and EVOLUTION Brand Pages Updated to Luzerne County**: Completed comprehensive Luzerne County branding transformation:
  - **SEO Updates**: Updated titles, descriptions, and keywords from Atlantic County NJ to Luzerne County PA
  - **Hero Content**: Changed all hero section references from "Atlantic County, New Jersey" to "Luzerne County, Pennsylvania"
  - **Brand Story Updates**: Modified content to reference "Luzerne County's diverse mountainous and suburban landscapes"
  - **Geographic References**: Updated terrain descriptions from coastal/suburban to mountainous/suburban communities
  - **Contact Sections**: Changed all references from "Atlantic County Golf Carts" to "Luzerne County Golf Carts"
  - **Service Area Updates**: Updated from New Jersey/Atlantic County to Pennsylvania/Luzerne County throughout

### January 29, 2025 - Complete Policy Pages Luzerne County Migration
- ✅ **All 12 Policy Pages Fully Updated to Luzerne County**: Completed the final phase of policy page migration with comprehensive contact information updates:
  - **Contact Information Updates**: Updated all contact sections across 12 policy pages from "Lehigh County Golf Carts" to "Luzerne County Golf Carts"
  - **Geographic References**: Changed all "Serving Lehigh County, Pennsylvania" references to "Serving Luzerne County, Pennsylvania"
  - **Content Consistency**: Updated business name references within policy content (Diversity Policy leadership commitment section)
  - **Community References**: Updated community impact sections in Staffing Report from Atlantic County/New Jersey to Luzerne County/Pennsylvania businesses
  - **Complete Coverage**: All policy categories now display unified Luzerne County branding:
    - POLICIES: Terms & Conditions, Return Policy, Privacy Policy
    - SERVICE POLICIES: Delivery Policy, Rental Policy, Storage Policy
    - CONTENT POLICIES: Publishing Policy, Feedback Policy, Corrections Policy
    - WORK POLICIES: Diversity Policy, Ethics Policy, Staffing Report
- ✅ **Contact Information Verification**: All 12 policy pages now consistently display info@luzernegolfcarts.com and 1-844-844-6638 with Luzerne County Pennsylvania service area

### January 29, 2025 - Complete Domain Migration & Luzerne County Branding
- ✅ **Complete Domain Migration**: Systematically replaced all lehighgolfcarts.com references with luzernegolfcarts.com across the entire codebase:
  - Updated all 50+ component files including schema, pages, and core components
  - Updated all vehicle detail pages (37 DENAGO and EVOLUTION models)
  - Updated all policy pages (12 comprehensive policy documents)
  - Updated all town pages and rental pages for Luzerne County municipalities
  - Updated SEO files: sitemap.xml and robots.txt with Luzerne County branding
  - Updated all schema markup and structured data for search engines
- ✅ **Complete Schema Markup Luzerne County Migration**: Updated all structured data components for proper Luzerne County SEO:
  - Updated LocationSchema.tsx: Luzerne County geographic references and coordinates (40.8751, -75.7321)
  - Updated VehicleSchema.tsx: Luzerne County Golf Carts seller information
  - Updated ServiceSchema.tsx: Luzerne County provider and address locality (Jim Thorpe)
  - Updated WebsiteSchema.tsx: Luzerne County business name and social media links
  - Updated PersonSchema.tsx: Luzerne County Golf Carts employment references
  - Updated ProductSchema.tsx: Luzerne County seller and address information
  - Updated LocalBusinessSchema.tsx: Luzerne County business location and service area
  - Updated OrganizationSchema.tsx: Luzerne County geographic and business data
  - All 8+ schema components now properly configured for Luzerne County Pennsylvania SEO optimization
- ✅ **Enhanced Rental Pricing Structure**: Implemented comprehensive pricing system:
  - 4-Seater Golf Carts: Daily ($245), 3-Day ($685), Weekly ($1,050), Monthly ($2,800)
  - 6-Seater Golf Carts: Daily ($295), 3-Day ($825), Weekly ($1,260), Monthly ($3,360)
  - Utility Golf Carts: Daily ($275), 3-Day ($770), Weekly ($1,155), Monthly ($3,080)
  - Professional savings badges and "RESERVE TODAY" call-to-action buttons
- ✅ **Complete SEO Optimization**: Updated robots.txt and sitemap.xml for Luzerne County:
  - Changed business name from "Lehigh County Golf Carts" to "Luzerne County Golf Carts"
  - Updated coverage area from Lehigh County to "All 23 Luzerne County municipalities"
  - Maintained all image metadata and structured data for search optimization

### January 29, 2025 - Random Background System & Municipality Migration
- ✅ **Random Background Image System**: Implemented comprehensive random background image system using 9 new Luzerne County Golf Carts showroom images:
  - Updated `client/src/utils/backgroundImages.ts` with professional showroom photographs
  - Applied random backgrounds across all main pages via `getHeroBackgroundStyle()` function
  - Updated EcoImpactPage CTA section and all vehicle detail pages with random backgrounds
- ✅ **Complete SEO & Meta Updates**: Systematic Luzerne County branding across all pages:
  - Updated all meta titles, descriptions, and canonical URLs to luzernegolfcarts.com
  - Updated Open Graph and Twitter Card metadata for Luzerne County, Pennsylvania
  - Updated vehicle page reviews and breadcrumbs to reference "Luzerne County Golf Carts"
- ✅ **Location Pages Background Enhancement**: Applied random background system to all Luzerne County location pages:
  - Updated CarbonCountyMunicipalityPages.tsx with random backgrounds for all 23 municipality pages
  - Updated CarbonCountyMunicipalityRentals.tsx with random backgrounds for all 23 rental pages
  - Each location page now uses unique seed-based random background from the 9 showroom images
  - Consistent professional branding across 46+ Luzerne County location pages

### January 29, 2025 - Complete Background Image Implementation Across ALL Pages
- ✅ **COMPLETED: All Pages Updated with Dynamic Background Images** - Successfully updated ALL pages with professional background image system:
  - **Vehicle Detail Pages**: Updated all DENAGO and EVOLUTION vehicle pages to use getHeroBackgroundStyle() with unique seeds
  - **Policy Pages**: Added hero sections with dynamic backgrounds to all 12 policy pages (Terms, Return, Publishing, Delivery, Rental, Storage, Feedback, Ethics, Corrections, Diversity, Staffing)
  - **Main Pages**: AboutPage, ThankYouPage, ContactPage, ServicesPage all using dynamic background system
  - **SEO Updates**: Fixed remaining branding issues (Luzerne County vs Ocean/Montgomery County references)
  - **Professional Enhancement**: All pages now feature professional golf cart dealership backgrounds with consistent overlay gradients
  - **Complete Coverage**: Every page across the entire website now uses the professional background image system instead of hardcoded images

## Key Features

### SEO Optimization
- **Complete Sitemap**: 100+ pages including all municipalities, vehicles, and policies
- **Robots.txt**: Comprehensive search engine guidelines with Luzerne County focus
- **Schema Markup**: Structured data for all page types and business information
- **Local SEO**: Individual pages for all 23 Luzerne County municipalities
- **Progressive Web App**: Full PWA configuration with app shortcuts and metadata

### Business Functionality
- **Vehicle Inventory**: Complete DENAGO and EVOLUTION lineup with specifications
- **Rental System**: Location-specific rental services for all municipalities
- **Contact Management**: Lead capture and customer inquiry systems
- **TIGON Integration**: External links to TIGON Golf Carts for purchases and financing

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Maps**: Location-specific Google Maps integration
- **Dynamic Backgrounds**: Random professional showroom images
- **Navigation**: Clean routing with automatic scroll-to-top functionality

The application follows a monorepo structure with clear separation between frontend, backend, and shared code. The build system is optimized for both development and production deployment, with TypeScript providing type safety across the entire stack.