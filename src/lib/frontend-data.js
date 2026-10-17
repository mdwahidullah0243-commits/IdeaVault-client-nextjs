import { House, Lightbulb, MailBadge } from "lucide-react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegCommentDots } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { SiSimplelogin } from "react-icons/si";
import { TbSettings } from "react-icons/tb";

export const colors = ['#EC4899', '#06B6D4', '#F97316', '#6366F1', '#84CC16', '#10B981', '#4FC3F7', '#FF69B4', '#FFB347', '#FF6B6B', '#00C9A7', '#6C63FF'];

export const navItems = [
    {
        id: 1,
        content: 'Home',
        path: '/'
    },
    {
        id: 2,
        content: 'Ideas',
        path: '/ideas'
    },
    {
        id: 3,
        content: 'Add Idea',
        path: '/add-idea'
    },
    {
        id: 4,
        content: 'My Ideas',
        path: '/my-ideas'
    },
    {
        id: 5,
        content: 'My Interactions',
        path: '/my-interactions'
    }
];

export const slides = [
    {
        tag: "Welcome to IdeaVault",
        headline: "Where Bold Ideas\nFind Their Voice",
        sub: "Share your startup vision with a community of builders, thinkers, and early adopters who believe the next big thing starts with a spark.",
        bg: "#0f1117",
        accent: "#6C63FF",
        img: "💡",
    },
    {
        tag: "Collaborate & Validate",
        headline: "Your Idea Deserves\nReal Feedback",
        sub: "Stop guessing. Post your concept, gather reactions, and refine your pitch with people who are genuinely passionate about innovation.",
        bg: "#0a1628",
        accent: "#00C9A7",
        img: "🚀",
    },
    {
        tag: "Discover Trends",
        headline: "Explore What's\nTrending Today",
        sub: "Surf the latest waves in tech, sustainability, fintech, and more. Find co-founders, early adopters, and mentors—all in one place.",
        bg: "#160a28",
        accent: "#FF6B6B",
        img: "🔥",
    },
];

export const stats = [
    {
        id: 1,
        num: "12,400+",
        level: "Ideas Shared"
    },
    {
        id: 2,
        num: "8,200+",
        level: "Innovators"
    },
    {
        id: 3,
        num: "94K+",
        level: "Votes Cast"
    },
    {
        id: 4,
        num: "31K+",
        level: "Comments"
    }
];

export const ideas = [
    {
        id: 1,
        title: "AI-Powered Mental Health Coach",
        category: "HealthTech",
        imageUrl: "https://i.ibb.co.com/hFLnZdj0/coach-nova-21237327280.png",
        votes: 342,
        comments: 47,
        author: "Sara M.",
        avatarText: "SM",
        avatar: 'https://i.pravatar.cc/80?img=10',
        shortDesc: "An AI wellness companion offering 24/7 emotional support, mood tracking, and personalized stress management tools.",
        detailedDesc: "An AI-powered mental wellness platform designed to help users manage everyday stress, anxiety, and emotional challenges. The application provides conversational AI support, daily mood tracking, guided breathing exercises, journaling, and personalized self-care recommendations. Users can monitor their emotional patterns through interactive dashboards and receive suggestions based on their wellness goals. The platform emphasizes privacy, accessibility, and responsible AI, while clearly distinguishing wellness guidance from professional mental health treatment. It can also direct users to qualified professionals or emergency resources when appropriate.",
        audience: "Students, working professionals, remote workers, and adults seeking accessible emotional wellness support.",
        budget: "$2,000 - $4,000",
        problem: "Many people experience daily stress, anxiety, and emotional difficulties but lack affordable, accessible, and convenient wellness support.",
        solution: "Build an AI-powered wellness companion that provides 24/7 conversations, mood tracking, stress management exercises, and personalized self-care guidance.",
        tags: ["AI", "mental-health", "wellness", "chatbot", "self-care"]
    },
    {
        id: 2,
        title: "Blockchain-Based Supply Chain Tracker",
        category: "Logistics",
        imageUrl: "https://i.ibb.co.com/xSZ25B3d/images-q-tbn-ANd9-Gc-RDyw-Nl-T-SPJqp4-B9-ET-1lb-W5nsmux-By-MXIhi-F0500-Bw-s-10.jpg",
        votes: 289,
        comments: 31,
        author: "Rafi K.",
        avatarText: "RK",
        avatar: 'https://i.pravatar.cc/80?img=18',
        shortDesc: "A blockchain-powered platform that tracks products across supply chains with transparent, tamper-resistant records.",
        detailedDesc: "A blockchain-based supply chain management platform that improves transparency, traceability, and accountability throughout product distribution. Businesses can record product origins, manufacturing details, shipment updates, ownership transfers, and delivery confirmations on a shared blockchain ledger. QR codes allow authorized participants and consumers to verify product histories. Smart contracts can automate selected verification and approval processes. The system includes real-time tracking dashboards, role-based access controls, and analytics for identifying shipment delays or inconsistencies. By maintaining tamper-resistant records, the platform helps businesses reduce fraud, improve coordination, and build customer trust.",
        audience: "Manufacturers, logistics providers, distributors, retailers, agricultural exporters, and supply chain managers.",
        budget: "$7,000 - $12,000",
        problem: "Traditional supply chains often lack reliable product traceability, making it difficult to verify origins, detect fraud, and monitor shipments.",
        solution: "Develop a blockchain-based tracking system that records product movements, verifies ownership transfers, and provides transparent shipment histories.",
        tags: ["blockchain", "supply-chain", "logistics", "traceability", "smart-contracts"]
    },
    {
        id: 3,
        title: "Peer-to-Peer Skill Exchange Platform",
        category: "EdTech",
        imageUrl: "https://i.ibb.co.com/KxzCmvhZ/images-q-tbn-ANd9-Gc-Tmt-Cz4e-SDTS2ym-Clarcov-NQA1-RWODq-Eh4-CAt3u-Yq-E26w-s-10.jpg",
        votes: 256,
        comments: 52,
        author: "Leila T.",
        avatarText: "LT",
        avatar: 'https://i.pravatar.cc/80?img=24',
        shortDesc: "A community learning platform where people exchange skills, share knowledge, and learn from each other without paying.",
        detailedDesc: "A peer-to-peer learning platform that connects individuals who want to exchange knowledge and practical skills without traditional course fees. Users create profiles highlighting the skills they can teach and the subjects they want to learn. A smart matching system recommends compatible learning partners based on interests, availability, experience, and learning goals. The platform supports direct messaging, video sessions, scheduling, skill verification, and community reviews. Users can exchange lessons directly or earn learning credits by teaching others. The goal is to make education more affordable, collaborative, and accessible while encouraging meaningful community connections.",
        audience: "Students, freelancers, professionals, hobbyists, career changers, and lifelong learners.",
        budget: "$1,500 - $3,500",
        problem: "Many individuals cannot afford expensive courses or tutoring despite possessing valuable skills they could exchange with others.",
        solution: "Create a skill-sharing marketplace where users teach their expertise in exchange for lessons, learning credits, or mentorship.",
        tags: ["education", "skill-sharing", "peer-learning", "community", "mentorship"]
    },
    {
        id: 4,
        title: "Carbon Credit Marketplace for SMBs",
        category: "CleanTech",
        imageUrl: "https://i.ibb.co.com/C5BwMXD8/images-q-tbn-ANd9-Gc-SRYF0-Bd-jm-Ld-X0p-VKo-XKr-ZA3-Fd9inxbi-Fyjw-Wbc38-ZZo-Jv4fnaccsb-NT0-s-10.jpg",
        votes: 198,
        comments: 28,
        author: "Omar A.",
        avatarText: "OA",
        avatar: 'https://i.pravatar.cc/80?img=55',
        shortDesc: "A carbon credit marketplace helping small businesses discover, compare, and purchase verified environmental credits.",
        detailedDesc: "A digital carbon credit marketplace designed to make voluntary carbon markets more accessible to small and medium-sized businesses. The platform allows companies to explore carbon credit projects, compare prices, review independent verification information, and purchase credits in smaller quantities. Businesses can estimate their emissions, set sustainability goals, and monitor purchased credits through a centralized dashboard. The marketplace provides project details, registry references, retirement records, and educational resources to help buyers evaluate credit quality. Transparent pricing and transaction histories support more informed purchasing decisions while helping businesses participate in climate initiatives.",
        audience: "Small and medium-sized businesses, sustainability consultants, startups, and environmentally conscious organizations.",
        budget: "$5,000 - $9,000",
        problem: "Small businesses face high costs, complex verification processes, and limited transparency when accessing voluntary carbon credit markets.",
        solution: "Build an accessible marketplace offering verified project information, transparent pricing, small-volume credit purchases, and sustainability tracking.",
        tags: ["cleantech", "carbon-credits", "sustainability", "green-business", "marketplace"]
    },
    {
        id: 5,
        title: "Hyper-local Food Waste Redistribution",
        category: "FoodTech",
        imageUrl: "https://i.ibb.co.com/YTpPZv6F/chris-king-photography-food-waste-podcast-re-food-01.jpg",
        votes: 174,
        comments: 19,
        author: "Priya N.",
        avatarText: "PN",
        avatar: 'https://i.pravatar.cc/80?img=32',
        shortDesc: "A neighborhood platform connecting surplus food donors with nearby people and organizations to reduce edible food waste.",
        detailedDesc: "A hyper-local food redistribution platform that connects restaurants, grocery stores, bakeries, households, and event organizers with nearby volunteers, charities, and community members. Food donors can list available surplus items with quantities, pickup locations, expiration details, and handling requirements. Nearby recipients receive location-based notifications and can reserve suitable food donations. The platform includes interactive maps, pickup scheduling, donation tracking, and impact analytics showing estimated food rescued. Food safety guidelines, donor verification, and clear handling instructions help promote responsible redistribution. The project aims to reduce edible food waste while improving community access to surplus food.",
        audience: "Restaurants, grocery stores, bakeries, NGOs, food banks, community volunteers, and low-income households.",
        budget: "$2,500 - $5,000",
        problem: "Large amounts of edible food are discarded daily while nearby communities and charitable organizations struggle to access affordable food.",
        solution: "Develop a location-based food-sharing platform that connects surplus food donors with nearby recipients and coordinates safe, timely pickups.",
        tags: ["foodtech", "food-waste", "food-sharing", "sustainability", "community"]
    },
    {
        id: 6,
        title: "No-Code SaaS Builder for Freelancers",
        category: "Productivity",
        imageUrl: "https://i.ibb.co.com/B5jdRjG9/images-q-tbn-ANd9-Gc-TMs0dp-P66-l0w-XNuv-Xse4-Cif-Mq-EBo-G1nx96-FBoy-Rndg-s-10.jpg",
        votes: 163,
        comments: 36,
        author: "James W.",
        avatarText: "JW",
        avatar: 'https://i.pravatar.cc/80?img=59',
        shortDesc: "A no-code platform enabling freelancers to build, customize, and launch SaaS applications without programming knowledge.",
        detailedDesc: "A no-code SaaS development platform that enables freelancers, entrepreneurs, and small teams to create functional web applications without extensive programming knowledge. Users can build applications through a visual drag-and-drop interface, reusable templates, and configurable components. The platform offers database management, user authentication, payment integration, workflow automation, and API connections. AI-assisted features can help generate layouts, suggest database structures, and configure common business processes. Users can preview, test, and deploy their applications through an integrated publishing workflow. The goal is to reduce development complexity, shorten launch times, and make software entrepreneurship accessible to nontechnical founders.",
        audience: "Freelancers, solo entrepreneurs, startup founders, small business owners, and nontechnical creators.",
        budget: "$8,000 - $15,000",
        problem: "Freelancers and entrepreneurs often lack the technical skills, development budgets, and time needed to build and launch SaaS products.",
        solution: "Create a visual no-code application builder with ready-made templates, AI assistance, database tools, integrations, and simplified deployment.",
        tags: ["no-code", "saas", "productivity", "automation", "app-builder"]
    },
    {
        id: 7,
        title: "AI-Powered Personal Finance Assistant",
        category: "FinTech",
        imageUrl: "https://i.ibb.co.com/svQP72Wf/photo-1554224155-6726b3ff858f.jpg",
        votes: 231,
        comments: 42,
        author: "Nadia R.",
        avatarText: "NR",
        avatar: 'https://i.pravatar.cc/80?img=31',
        shortDesc: "An AI-powered finance assistant helping users track expenses, create budgets, and improve their daily money management.",
        detailedDesc: "An intelligent personal finance management platform designed to help individuals understand and control their finances. Users can track income and expenses, categorize transactions, create monthly budgets, and set savings goals. AI-powered insights identify spending patterns, detect unusual expenses, and recommend practical budgeting adjustments. The platform includes interactive financial dashboards, bill reminders, subscription tracking, and personalized financial reports. Users can manually enter transactions or connect supported financial accounts through secure integrations. The goal is to make financial planning simpler, more accessible, and actionable for everyday users.",
        audience: "Students, young professionals, freelancers, families, and individuals seeking better financial management.",
        budget: "$4,000 - $7,000",
        problem: "Many individuals struggle to monitor expenses, control unnecessary spending, and build consistent savings habits.",
        solution: "Develop an AI-powered financial dashboard that tracks expenses, automates budgeting, identifies spending patterns, and provides personalized savings recommendations.",
        tags: ["fintech", "AI", "budgeting", "personal-finance", "expense-tracking"]
    },
    {
        id: 8,
        title: "Smart Agriculture Monitoring Platform",
        category: "AgriTech",
        imageUrl: "https://i.ibb.co.com/G4Dr93N3/photo-1625246333195-78d9c38ad449.jpg",
        votes: 218,
        comments: 34,
        author: "Hasan M.",
        avatarText: "HM",
        avatar: 'https://i.pravatar.cc/80?img=65',
        shortDesc: "An IoT-based farming platform that monitors soil conditions, weather, and irrigation to help farmers improve crop production.",
        detailedDesc: "A smart agriculture platform that combines IoT sensors, weather information, and data analytics to support better farming decisions. Farmers can monitor soil moisture, temperature, humidity, and environmental conditions through a centralized dashboard. The system provides irrigation recommendations, weather alerts, crop monitoring reports, and historical data visualization. Optional automation allows compatible irrigation systems to respond to predefined moisture thresholds. Farmers can manage multiple fields, track resource consumption, and receive notifications about unusual conditions. The platform aims to improve water efficiency, reduce manual monitoring, and support more productive agricultural operations.",
        audience: "Small and medium-sized farmers, agricultural cooperatives, greenhouse operators, and agribusinesses.",
        budget: "$6,000 - $11,000",
        problem: "Farmers often lack real-time information about soil conditions and irrigation needs, resulting in wasted water and inefficient crop management.",
        solution: "Build an IoT-enabled agriculture dashboard that monitors field conditions and provides actionable irrigation and crop management recommendations.",
        tags: ["agritech", "IoT", "smart-farming", "agriculture", "automation"]
    },
    {
        id: 9,
        title: "Remote Team Collaboration Hub",
        category: "Productivity",
        imageUrl: "https://i.ibb.co.com/1tqy9Xk5/photo-1521737711867-e3b97375f902.jpg",
        votes: 187,
        comments: 29,
        author: "Emily C.",
        avatarText: "EC",
        avatar: 'https://i.pravatar.cc/80?img=40',
        shortDesc: "An all-in-one workspace for remote teams to manage projects, communicate, share files, and track progress efficiently.",
        detailedDesc: "A centralized collaboration platform designed to help distributed teams organize work and communicate effectively. The application combines project boards, task assignments, team messaging, shared documents, file management, and progress tracking. Team members can create projects, set deadlines, assign responsibilities, and monitor work through Kanban boards and calendar views. Real-time notifications keep everyone informed about updates, while integrations with popular productivity tools reduce workflow fragmentation. Managers can access workload summaries and project analytics. The platform focuses on making remote collaboration more organized, transparent, and productive.",
        audience: "Remote teams, startups, digital agencies, freelancers, and small to medium-sized businesses.",
        budget: "$3,000 - $6,000",
        problem: "Remote teams frequently struggle with scattered communication, unclear responsibilities, missed deadlines, and disconnected productivity tools.",
        solution: "Create a unified collaboration workspace combining task management, team communication, document sharing, and project progress monitoring.",
        tags: ["remote-work", "collaboration", "project-management", "productivity", "teamwork"]
    },
    {
        id: 10,
        title: "AI-Powered Resume and Career Coach",
        category: "CareerTech",
        imageUrl: "https://i.ibb.co.com/V07r7c6m/photo-1586281380349-632531db7ed4.jpg",
        votes: 264,
        comments: 56,
        author: "Daniel P.",
        avatarText: "DP",
        avatar: 'https://i.pravatar.cc/80?img=51',
        shortDesc: "An AI career assistant that improves resumes, prepares candidates for interviews, and recommends personalized career paths.",
        detailedDesc: "An AI-driven career development platform that helps job seekers improve their applications and prepare for employment opportunities. Users can upload resumes, receive structured feedback, generate tailored resume drafts, and compare their skills with job descriptions. The platform offers simulated interview sessions, practice questions, communication feedback, and personalized career development recommendations. An application tracker helps users organize job opportunities, deadlines, and interview schedules. Skill gap analysis can recommend relevant learning resources based on career goals. The system emphasizes accurate resume content and encourages users to review AI-generated suggestions before submitting applications.",
        audience: "University students, recent graduates, job seekers, career changers, and professionals seeking advancement.",
        budget: "$2,200 - $4,800",
        problem: "Job seekers often struggle to create effective resumes, identify skill gaps, and prepare confidently for interviews.",
        solution: "Develop an AI career assistant offering resume feedback, job-specific optimization, interview practice, and personalized learning recommendations.",
        tags: ["careertech", "AI", "resume-builder", "interview-preparation", "job-search"]
    },
    {
        id: 11,
        title: "Electric Vehicle Charging Station Finder",
        category: "MobilityTech",
        imageUrl: "https://i.ibb.co.com/xqr4NYkq/images-q-tbn-ANd9-Gc-Rm-3vrp3-U4pi-I3k3h-DIWm-CBBMhod3-Bl-Uvb-WAtd-IWBi9kt7-Tbn9l9940mk-s-10.jpg",
        votes: 176,
        comments: 23,
        author: "Alex T.",
        avatarText: "AT",
        avatar: 'https://i.pravatar.cc/80?img=33',
        shortDesc: "A location-based platform helping EV drivers discover compatible charging stations, compare prices, and plan trips.",
        detailedDesc: "A smart electric vehicle charging discovery platform that helps drivers locate suitable charging stations and plan charging stops. Users can explore stations through an interactive map, filter results by connector type, charging speed, network, and pricing, and view available station details. Where supported by charging providers, the platform displays live charger availability and operational status. Drivers can save favorite stations, review charging experiences, and plan routes with charging stops based on vehicle specifications. The application can integrate with supported charging networks to provide updated station information and improve trip planning.",
        audience: "Electric vehicle owners, commercial EV fleet operators, ride-sharing drivers, and sustainable transportation users.",
        budget: "$4,500 - $8,500",
        problem: "EV drivers often face difficulties locating compatible charging stations, comparing costs, and planning reliable long-distance journeys.",
        solution: "Build a location-based EV charging discovery platform with station filters, provider integrations, user reviews, and charging-aware route planning.",
        tags: ["mobilitytech", "electric-vehicles", "charging-stations", "maps", "sustainability"]
    },
    {
        id: 12,
        title: "Virtual Event and Networking Platform",
        category: "EventTech",
        imageUrl: "https://i.ibb.co.com/CrcC1t0/photo-1540575467063-178a50c2df87.jpg",
        votes: 205,
        comments: 38,
        author: "Sophia L.",
        avatarText: "SL",
        avatar: 'https://i.pravatar.cc/80?img=21',
        shortDesc: "A virtual event platform for hosting webinars, conferences, workshops, and interactive professional networking sessions.",
        detailedDesc: "A virtual event management platform that enables organizations to host online conferences, workshops, webinars, and networking events. Event organizers can create branded event pages, manage registrations, publish agendas, and coordinate speakers. Attendees can join live sessions through integrated video services, participate in Q&A discussions, respond to polls, and connect with other participants. The platform supports virtual networking rooms, attendee profiles, event reminders, and post-event feedback collection. Organizers can monitor attendance, engagement, and session performance through analytics dashboards. The goal is to make professional online events easier to organize and more engaging for participants.",
        audience: "Event organizers, educational institutions, professional communities, startups, and corporate training teams.",
        budget: "$5,500 - $10,500",
        problem: "Organizing virtual events often requires multiple disconnected tools for registration, video hosting, attendee engagement, and networking.",
        solution: "Create an integrated virtual event platform combining registration, live sessions, interactive networking, engagement tools, and event analytics.",
        tags: ["eventtech", "virtual-events", "networking", "webinars", "community"]
    }
];

export const comments = [
    {
        id: 1,
        user: "Rahim Uddin",
        avatar: "https://i.pravatar.cc/80?img=12",
        text: "Next.js দিয়ে এই প্রজেক্টটা দারুণ হয়েছে!",
        timeStamp: "2h",
        replies: [
            {
                id: 2,
                user: "Karim Hasan",
                avatar: "https://i.pravatar.cc/80?img=33",
                text: "ধন্যবাদ ভাই! Tailwind দিয়েই সব করেছি।",
                timeStamp: "1h",
                replies: [
                    {
                        id: 3,
                        user: "Nusrat Jahan",
                        avatar: "https://i.pravatar.cc/80?img=47",
                        text: "কোড শেয়ার করলে ভালো হতো।",
                        timeStamp: "45m",
                    },
                ],
            },
            {
                id: 4,
                user: "Sadia Akter",
                avatar: "https://i.pravatar.cc/80?img=5",
                text: "UI অনেক clean লাগছে 👌",
                timeStamp: "30m",
            },
        ],
    },
    {
        id: 5,
        user: "Tanvir Ahmed",
        avatar: "https://i.pravatar.cc/80?img=15",
        text: "Dark mode সাপোর্ট আছে কি?",
        timeStamp: "10m",
    },
];

export const positions = {
    left: [10, 60, 80, 30, 70, 5],
    top: [10, 5, 40, 70, 80, 55]
};

export const width = [280, 180, 240, 200, 160, 300];

export const styles = {
    stepActive: { border: `1.5px solid #e8b84b`, background: "#e8b84b1f" },
    stepDone: { background: '#e8b84b', border: `1.5px solid #e8b84b` },
    stepLine: { flex: 1, height: 1, background: "#ffffff1a", margin: "0 4px" },
    stepLineDone: { background: `#e8b84b88` },
    stepLabel: { position: "absolute", top: 36, left: "50%", transform: "translateX(-50%)", fontSize: 13, color: "#ffffff4d", whiteSpace: "nowrap", letterSpacing: "0.3px" },
    stepLabelActive: { color: '#e8b84b', fontWeight: 500 },
}

export const steps = ["Basics", "Details", "Solution", "Review"];

export const formInfo = {
    title: "",
    shortDesc: "",
    detailedDesc: "",
    category: "",
    tags: [],
    imageUrl: "",
    budget: "",
    audience: "",
    problem: "",
    solution: ""
};

export const categories = ["Tech", "Health", "AI", "Education", "Finance", "Environment", "Social", "E-Commerce", "SaaS", "Other"];

export const tagSuggestions = ["mobile", "web", "B2B", "B2C", "marketplace", "automation", "open-source"];

export const budgetRanges = ["$1,000", "$1,000 – $10,000", "$10,000 – $50,000", "$50,000 – $200,000", "$200,000+", "No Budget"];

export const navItemsMenu = [
    { icon: <CgProfile size={20} />, label: "View Profile", page: "/profile" },
    { icon: <TbSettings size={20} />, label: "Edit Profile", page: "/profile/edit" },
    { icon: <House size={20} />, label: 'Home', page: '/' },
    { icon: <Lightbulb size={20} />, label: 'Ideas', page: '/ideas' },
    { icon: <BsDatabaseFillAdd size={20} />, label: 'Add Idea', page: '/add-idea' },
    { icon: <FcIdea size={20} />, label: "My Ideas", page: "/my-ideas" },
    { icon: <FaRegCommentDots size={20} />, label: "My Interactions", page: "/my-interactions" },
    { icon: <SiSimplelogin size={20} />, label: "Login", page: "/login" },
    { icon: <MailBadge size={20} />, label: "Register", page: "/register" }
];

// Tabs class
export const listClassName = [
    "rounded-xl border border-[#051727] bg-[#060b10] p-1",
    "**:data-[slot=tabs-tab]:rounded-lg",
    "**:data-[slot=tabs-tab]:bg-transparent",
    "**:data-[slot=tabs-tab]:text-slate-400",
    "**:data-[slot=tabs-tab]:opacity-100",
    "**:data-[slot=tabs-tab]:transition-colors",
    "**:data-[slot=tabs-tab]:data-[hovered=true]:not-data-[selected=true]:bg-[#101828]",
    "**:data-[slot=tabs-tab]:data-[hovered=true]:not-data-[selected=true]:text-[#d3e8fb]",
    "**:data-[slot=tabs-tab]:data-[pressed=true]:not-data-[selected=true]:bg-accent-soft-hover",
    "**:data-[slot=tabs-tab]:data-[focus-visible=true]:ring-2",
    "**:data-[slot=tabs-tab]:data-[focus-visible=true]:ring-accent/15",
    "**:data-[slot=tabs-tab]:data-[selected=true]:font-medium",
    "**:data-[slot=tabs-tab]:data-[selected=true]:text-[#d3e8fb]",
    "**:data-[slot=tabs-tab]:shadow-none",
    "**:data-[slot=tabs-indicator]:rounded-lg",
    "**:data-[slot=tabs-indicator]:bg-[#0485f7]",
    "**:data-[slot=tabs-indicator]:shadow-none",
].join(" ");