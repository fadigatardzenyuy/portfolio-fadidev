export interface Project {
    slug: string;
    title: string;
    tagline: string;
    category: string;
    stack: string[];
    year: string;
    status: 'Live' | 'In Progress' | 'Archived';
    coverImage: string;
    description: string;
    problem: string;
    approach: string;
    outcome: string;
    href?: string;
    githubHref?: string;
    client?: string;
    screenshots?: string[];
    keyCapabilities?: string[];
    technicalHighlights?: string[];
}

export const PROJECTS: Project[] = [
    {
        slug: 'zigex',
        title: 'Zigex',
        tagline: "Matches students with internships that actually fit them, not just whatever's open.",
        category: 'Web Application',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
        year: '2025',
        status: 'Live',
        coverImage: '/projects/zigex/landing.png',
        href: 'https://www.zigexconnect.com/',
        description: "Zigex pulls internship listings into one place and matches students to roles based on their actual skills and field of study, instead of leaving it to luck and whoever saw the WhatsApp message first.",
        problem: "In Cameroon, internship listings mostly travel by word of mouth — they show up in WhatsApp groups and are often gone before most students even see them. Nobody's really matched to anything; students apply to whatever they can find, and companies end up sorting through applicants who don't fit.",
        approach: "I built the frontend in Next.js and React with Tailwind, and a REST API behind it to handle profiles, matching, and listings. Instead of keyword search or manual filtering, student profiles and internship requirements each get converted into embeddings, and matches are ranked by how similar they are.",
        outcome: "Zigex is live now, matching students to listings this way instead of the old apply-to-everything approach.",
        keyCapabilities: [
            "Students fill in a profile covering their skills, education, and the kind of work they're after",
            'A matching engine that embeds both sides and ranks them by similarity, not keywords',
            'Companies post their own listings with the requirements spelled out',
        ],
        technicalHighlights: [
            'Frontend in Next.js and React with Tailwind, built for fast iteration',
            'A REST API handling profile, matching, and listings data',
            "Matching runs on embedding similarity rather than a rules engine — closer to \"these two read alike\" than checking boxes",
        ],
        screenshots: ['/projects/zigex/landing.png', '/projects/zigex/matching-results.png', '/projects/zigex/community.png'],
        githubHref: 'https://github.com/fadigatardzenyuy',
    },
    {
        slug: 'camland',
        title: 'CamLand',
        tagline: 'A digital land registry that makes it possible to actually verify who owns what land in Cameroon.',
        category: 'Geospatial / GovTech',
        stack: ['Next.js', 'TypeScript', 'Django REST Framework', 'PostgreSQL', 'PostGIS', 'Google Maps API'],
        year: '2026',
        status: 'In Progress',
        client: 'Rinork Inc',
        coverImage: '/projects/camland/hero.png',
        description: "CamLand turns the land registry into something you can actually search. Every parcel is mapped as a polygon with its ownership history, documents, and boundaries attached, so pulling up a record takes seconds instead of weeks in a paper archive.",
        problem: "Land ownership records in Cameroon are still mostly on paper. They're slow to check, easy to lose, and a big part of why land disputes and duplicate sales keep happening. Verifying a single parcel can mean weeks of digging through physical archives.",
        approach: "I modeled the parcel data in PostgreSQL with PostGIS so boundaries and spatial queries hold up, then served it through a Django REST API to a Next.js/TypeScript frontend. Parcels show up as polygons on an interactive Google Maps view, so boundaries are something you look at rather than read out of a document.",
        outcome: "It's currently in internal testing at Rinork Inc, running through real parcel data before it goes out to a pilot.",
        keyCapabilities: [
            'Parcels rendered as polygons on an interactive map, boundary coordinates and all, powered by PostGIS',
            'Each parcel carries its title documents, transfer history, and owner details',
            'You can look up a parcel by reference number, owner name, or just by clicking the map',
            "Registry officials and the public see different views, depending on what they're allowed to touch",
        ],
        technicalHighlights: [
            'PostgreSQL with PostGIS for storing parcel polygons and running spatial queries',
            'A Django REST API in front of it, feeding parcel geometry and ownership data to the Next.js/TypeScript frontend',
            'Map rendering on the Google Maps API, tuned so polygon overlays stay smooth as parcel counts grow',
        ],
        screenshots: ['/projects/camland/hero.png', '/projects/camland/map-view.png', '/projects/camland/parcel-detail.png'],
    },
    {
        slug: 'logistics-tracking',
        title: 'GlobalTrack',
        tagline: 'Real-time package tracking from dispatch to delivery.',
        category: 'Web Application',
        stack: ['Next.js', 'React', 'Express', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Leaflet'],
        year: '2024',
        status: 'Live',
        coverImage: '/projects/logistics-tracking/hero.png',
        href: 'https://getglobaltrack.com/',
        description: "A shipment tracking system — customers punch in a tracking code and see exactly where their package is, from dispatch to delivery.",
        problem: "A regional logistics company was tracking shipments by hand. Customers called in dozens of times a day just asking where their package was, and staff spent more time on those calls than on actually moving packages.",
        approach: "I built the frontend in Next.js and React with Tailwind CSS, backed by an Express REST API and Supabase for the database. Shipment locations render on a Leaflet map, warehouse staff update status from a simple mobile-friendly screen, and customers get an SMS when something changes.",
        outcome: "Support call volume dropped 60% in the first month, and the operations team processes tracking updates about 4x faster now. The admin dashboard shows pipeline bottlenecks as they happen instead of after the fact.",
        keyCapabilities: [
            'Customers track a shipment live on a map by entering their tracking code',
            'A step-by-step status view — pending, picked up, in transit, delivered',
            'Coverage across active logistics corridors and country hubs',
            'Direct line to a logistics specialist for support on any shipment',
        ],
        screenshots: ['/projects/logistics-tracking/hero.png', '/projects/logistics-tracking/tracking-detail.png', '/projects/logistics-tracking/corridors.png'],
        githubHref: 'https://github.com/fadigatardzenyuy',
    },
    {
        slug: 'pet-rental',
        title: 'Roxy Puppy Club',
        tagline: 'Turned a pet business that ran entirely out of DMs into a proper online storefront.',
        category: 'E-Commerce',
        stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        year: '2025',
        status: 'Live',
        client: 'Client Project',
        coverImage: '/projects/pet-rental/catalog.png',
        href: 'https://roxypuppyclub.com',
        description: "Customers can browse the catalog, filter by breed, check pricing and availability, and go straight from a listing into a purchase conversation without any extra steps.",
        problem: "The client's pet business ran entirely on word of mouth and DMs. There was nowhere for customers to browse what was available or compare options, every inquiry meant manual back-and-forth, and once a dog sold, people who hadn't heard yet would still message asking about it.",
        approach: "I built the storefront in Next.js and TypeScript, with an admin dashboard behind it so the client can post and update listings without needing me. Customers browse by breed, add dogs to a cart-style list, and jump straight into a WhatsApp conversation instead of typing out a cold message. If nothing in the catalog fits, there's a request form for breed, gender, age, and budget so we can still follow up.",
        outcome: "It's live at roxypuppyclub.com now, so the client has a storefront customers can browse any time, instead of hoping people catch an Instagram post before the dog is gone.",
        keyCapabilities: [
            'A catalog with breed filtering, where each breed gets its own page',
            'Customers build up a list of dogs they like and submit it as one inquiry instead of messaging about each one separately',
            'Prices and availability — sold, discounted, available — update per listing',
            'One tap from any listing straight into a WhatsApp chat',
            "A request form for when nothing in stock matches what someone's after",
            'FAQ, policies, a photo gallery, and testimonials, all part of the same site',
        ],
        technicalHighlights: [
            'Next.js and TypeScript, with Open Graph metadata and real page titles so listings actually show up well when shared or searched',
            'Dynamic routes for each breed category and each individual listing',
            'Availability and discount states handled consistently across the whole catalog',
            'An admin dashboard on top of a database, so the client posts and edits listings without touching code',
        ],
        screenshots: ['/projects/pet-rental/catalog.png', '/projects/pet-rental/gallery.png'],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find(p => p.slug === slug);
}

export function getAllProjects(): Project[] {
    return PROJECTS;
}
