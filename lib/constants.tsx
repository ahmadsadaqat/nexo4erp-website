import {
  Factory,
  Landmark,
  Stethoscope,
  Hotel,
  ShoppingBag,
  ShoppingCart,
  GraduationCap,
  Truck,
  Droplet,
  ArrowLeftRight,
  HardHat,
  Calculator,
  Users,
  Package,
  FileText,
  CreditCard,
  UserCheck,
  Server,
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  Bot,
  Zap,
  ShieldCheck,
  Box,
  TruckIcon,
  LayoutDashboard,
  Settings,
  ShieldAlert,
  BarChartHorizontal,
  ClipboardCheck,
  Wrench,
  Shield,
  FileBarChart,
  Coins,
  BookOpen,
  Briefcase,
  Layers,
  Activity,
  Stethoscope as HealthIcon,
  FileSpreadsheet,
  Construction as ConstructionIcon,
  Container,
  Cloud,
  Code,
  Database,
} from 'lucide-react'
import {
  NavLink,
  Industry,
  Feature,
  PackageTier,
  Integration,
  Testimonial,
  FeatureTab,
  FAQItem,
  BlogPost,
} from '@/lib/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'NEXO Editions', href: '#packages' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
]

export const TRANSLATIONS: any = {
  en: {
    heroTag: 'ERPNext & Odoo Implementation Partner',
    heroHeadline:
      'ERPNext & Odoo Implementation Services for Pakistani Businesses',
    heroSubheadline:
      'NEXO ERP is a Lahore-based ERP implementation company with extensive hands-on Frappe ERPNext and Odoo experience. We help manufacturing, retail, healthcare, and logistics businesses across Pakistan eliminate manual processes, unify operations, and grow \u2014 with open-source ERP that actually fits your business.',
    solutions: 'Services',
    features: 'Features',
    industries: 'Industries',
    editions: 'Editions',
    blog: 'Blog',
    about: 'About',
    demo: 'Book Free Consultation',
    contactSales: 'Talk to Sales',
    requestQuote: 'Request Quote',
    editionsHeader: 'Choose Your Edition',
    editionsSub:
      'Select the framework that aligns with your business maturity.',
    sectorsHeader: 'Industries We\u2019ve Implemented ERP For',
    sectorsSub:
      'Tailored ERPNext and Odoo implementations built for the specific challenges of your industry.',
    ecosystemHeader: 'End-to-End ERP Services Built Around Your Business',
    ecosystemSub:
      'We don\u2019t just install software. Our team of certified Frappe and Odoo consultants works alongside your team \u2014 from scoping and configuration through to training, go-live, and long-term support.',
    capabilitiesHeader: 'Powerful Features',
    capabilitiesSub:
      'A complete suite of tools designed to optimize every aspect of your business operations.',
    integrationsHeader: 'Seamlessly integrated with your favourite tools',
    trustedClientsHeader: 'Trusted by Industry Leaders',
    aboutHeader: 'Why Businesses in Pakistan Choose NEXO ERP',
    supportHeader: 'ERPNext & Odoo Questions, Answered',
    supportSub:
      'Clear answers about implementation timelines, migration, compliance, support, and choosing the right ERP for Pakistan.',
    exploreEdition: 'Explore Edition',
    learnMore: 'Learn More',
    consultSpecialist: 'Consult a Specialist',
    requestIndustryDemo: 'Request Industry Demo',
    backHome: 'Back to Home',
    contactHeader: 'Get in Touch',
    contactSub: 'Talk to Our ERP Consultants',
    contactDesc:
      'Whether you\u2019re exploring ERP for the first time or looking to migrate from your current system, we\u2019re happy to talk through your requirements. No sales pressure \u2014 just an honest conversation about what\u2019s right for your business.',
    emailUs: 'Email Us',
    callUs: 'Call Us',
    whatsappUs: 'WhatsApp Us',
    whatsappChat: 'Chat on WhatsApp',
    workingHours: 'Working Hours',
    scheduleDemo: 'Schedule a Demo',
    fullName: 'Full Name',
    bizEmail: 'Business Email',
    phone: 'Phone Number',
    message: 'Message',
    sendMessage: 'Send Message',
    footerProduct: 'Services',
    footerResources: 'Resources',
    footerLegal: 'Legal',
    testimonialsHeader: 'Testimonials',
    testimonialsSub: 'Chosen By The Best',
    testimonialsDesc:
      'See what our partners have to say about their journey with NEXO ERP.',
    blogHeader: 'Insights',
    blogSub: 'Latest News & Articles',
    blogDesc:
      'Stay ahead of the curve with expert insights on ERPNext, Odoo, and ERP implementation in Pakistan.',
    modalConnect: 'Connect with NEXO ERP',
    modalSub: 'Complete the details below to start your journey.',
    modalSubject: 'Subject',
    modalSubjectPlaceholder: 'e.g. ERPNext Implementation',
    modalSubmit: 'Submit Request',
    understood: 'Understood',
    agreed: 'Agreed',
  },
}

export const TRUST_POINTS = [
  {
    text: 'Extensive Frappe ERPNext expertise — not a generalist IT firm that learned ERPNext last month',
  },
  {
    text: 'Pakistan-based team — we understand local tax (FBR), EOBI, payroll, and compliance requirements',
  },
  {
    text: 'Open-source advantage — no per-user licensing fees; ERPNext and Odoo are free at the core',
  },
  {
    text: 'Full project ownership — one team from scoping to support, no handoffs to third parties',
  },
  {
    text: 'Proven across 6 industries — manufacturing, retail, healthcare, NGO, logistics, and services',
  },
]

export const SOLUTIONS_CONTENT = [
  {
    id: 'erpnext-implementation',
    title: 'Fresh ERPNext Implementation',
    description:
      'From initial scoping to go-live, we implement ERPNext (via our nexoERP platform) tailored to your industry \u2014 manufacturing, retail, NGO, healthcare, logistics, or professional services.',
    icon: Database,
  },
  {
    id: 'odoo-implementation',
    title: 'Odoo Implementation',
    description:
      'Full Odoo ERP deployment for Pakistani businesses. We configure accounting, inventory, CRM, HR, and manufacturing modules to match your exact workflows.',
    icon: Globe,
  },
  {
    id: 'customization',
    title: 'Customization & Module Development',
    description:
      'Our Frappe framework developers build custom doctypes, reports, workflows, and integrations \u2014 so your ERP works exactly the way your team works.',
    icon: Code,
  },
  {
    id: 'migration',
    title: 'Migration from Legacy Software',
    description:
      'Moving from QuickBooks, Microsoft Dynamics, SAP B1, or a custom system? We handle data migration, mapping, validation, and cutover with minimal downtime.',
    icon: ArrowLeftRight,
  },
  {
    id: 'training',
    title: 'Training & Onboarding',
    description:
      'Structured training programs for end users, department heads, and system administrators \u2014 delivered in Urdu or English across Pakistan.',
    icon: BookOpen,
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    description:
      'Post go-live, we\u2019re still here. Monthly support retainers, bug fixes, system updates, new module rollouts, and performance reviews.',
    icon: Shield,
  },
]

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Streamline production and supply chains.',
    icon: Factory,
    heroHeadline: 'ERP Built for Manufacturing Excellence',
    heroSubheadline:
      'From raw material to finished goods—fully controlled. Optimize shop-floor operations, eliminate wastage, and drive precision with NEXO 4.',
    bgImage: '/Manufacturing.jpg',
    painPoints: [
      {
        problem: 'Poor Production Visibility',
        result:
          'Operational blind spots leading to missed deadlines and machine idle time.',
      },
      {
        problem: 'Inventory Wastage & Stockouts',
        result:
          'Inflated carrying costs and production halts due to material unavailability.',
      },
      {
        problem: 'Manual Planning & Costing',
        result:
          'Inaccurate margins and delayed financial reporting across complex BOMs.',
      },
      {
        problem: 'Quality Tracking Issues',
        result:
          'High scrap rates, failed audits, and significant compliance risks.',
      },
    ],
    solvesDescription:
      'NEXO ERP integrates manufacturing, inventory, finance, and quality into one cohesive ecosystem. Designed for growing and enterprise-scale manufacturers, it provides the authoritative oversight needed to manage complex multi-level BOMs and high-volume production cycles with absolute confidence.',
    packages: [
      {
        name: 'Manufacturing Edition Pro',
        price: 'Operations-First',
        features: [
          'Core Manufacturing & Work Orders',
          'Advanced Inventory Control',
          'Standard BOM Management',
          'Finance Integration',
        ],
      },
      {
        name: 'Manufacturing Edition Elite',
        price: 'Enterprise-Ready',
        features: [
          'Advanced Production Planning',
          'Quality Management Suite',
          'Fixed Asset Tracking',
          'AI-Driven Costing Dashboards',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Manufacturing',
        description:
          'Complete shop floor control from planning to work order execution.',
        icon: Settings,
      },
      {
        name: 'Stock & Inventory',
        description:
          'Real-time tracking of raw materials, WIP, and finished goods.',
        icon: Box,
      },
      {
        name: 'Accounting',
        description:
          'Automatic production costing and unified financial ledgers.',
        icon: Calculator,
      },
      {
        name: 'Buying & Selling',
        description:
          'Streamlined procurement and seamless sales order fulfillment.',
        icon: ShoppingCart,
      },
      {
        name: 'Quality Management',
        description:
          'Integrated inspection points to maintain rigorous standards.',
        icon: ShieldCheck,
      },
      {
        name: 'Assets',
        description:
          'Comprehensive maintenance and depreciation for shop machinery.',
        icon: Wrench,
      },
      {
        name: 'Dashboards',
        description: 'Real-time OEE, yield tracking, and operational KPIs.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'IIoT Integration',
        description:
          'Connect shop-floor machinery directly for automated production logging.',
      },
      {
        name: 'Maintenance App',
        description:
          'Preventive and breakdown maintenance management for your assets.',
      },
      {
        name: 'AI Demand Forecasting',
        description:
          'Predict raw material requirements based on historical trends and market data.',
      },
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Unified commerce for modern retail.',
    icon: ShoppingBag,
    heroHeadline: 'Unified ERP for Modern Retail Businesses',
    heroSubheadline:
      'POS, inventory, accounting, and HR—fully connected in one powerful system. Stop managing silos and start scaling your commerce.',
    bgImage:
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Stock Mismatches Across Outlets',
        result:
          'Lost sales opportunities and customer frustration due to inaccurate availability.',
      },
      {
        problem: 'Manual POS & Fragmented Reporting',
        result:
          'Hundreds of hours lost to data entry and reconciling daily sales logs.',
      },
      {
        problem: 'No Real-Time Sales Visibility',
        result:
          'Blind decision-making and inventory wastage due to delayed data insights.',
      },
      {
        problem: 'Separated HR & Payroll',
        result:
          'Inefficient staff management and high overheads across multiple locations.',
      },
    ],
    solvesDescription:
      'NEXO ERP connects POS, inventory, finance, and HR in real time—giving retailers complete control across single or multi-store operations. Our unified architecture ensures that every transaction is instantly reflected in your ledger and stock levels.',
    packages: [
      {
        name: 'Retail Edition Essentials',
        price: 'Value-First',
        features: [
          'Single-store Retail ERP',
          'Cloud-Native POS',
          'Core Inventory Management',
          'Basic Financials',
        ],
      },
      {
        name: 'Retail Edition Pro',
        price: 'Growth-Focused',
        features: [
          'Multi-store Support',
          'Advanced CRM',
          'Management Dashboards',
          'Automated Reordering',
        ],
      },
      {
        name: 'Retail Edition Elite',
        price: 'Enterprise',
        features: [
          'Full Customization',
          'AI Sales Analytics',
          'Global Supply Chain Sync',
          '24/7 Dedicated Support',
        ],
      },
    ],
    coreModules: [
      {
        name: 'POS (Retail)',
        description:
          'Fast, secure checkout that works offline and syncs automatically.',
        icon: CreditCard,
      },
      {
        name: 'Stock & Inventory',
        description:
          'Real-time multi-location tracking with smart reorder levels.',
        icon: Box,
      },
      {
        name: 'Accounting',
        description: 'Automated ledger entries from every sales transaction.',
        icon: Calculator,
      },
      {
        name: 'Selling & Buying',
        description:
          'Manage vendor relationships and sales channels seamlessly.',
        icon: ShoppingCart,
      },
      {
        name: 'HR & Payroll',
        description: 'Unified employee management for your entire retail team.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description:
          'Visual data for sales trends, top-moving items, and store performance.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'BI Sales Analytics',
        description:
          'Deep-dive reports to identify growth opportunities and high-margin products.',
      },
      {
        name: 'Loyalty Integrations',
        description:
          'Reward recurring customers and manage personalized marketing campaigns.',
      },
      {
        name: 'ESS App',
        description:
          'Employee Self-Service for shift tracking, payroll access, and leave management.',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient-centric operations and pharmacy control.',
    icon: Stethoscope,
    heroHeadline: 'Integrated ERP for Healthcare Excellence',
    heroSubheadline:
      'Unified pharmacy inventory, staff payroll, and institutional financials. Ensure patient care is never compromised by operational silos.',
    bgImage:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Critical Drug Stockouts',
        result: 'Compromised patient care and emergency procurement overheads.',
      },
      {
        problem: 'Inaccurate Staff Billing',
        result:
          'High turnover due to payroll errors and administrative friction.',
      },
      {
        problem: 'Compliance Blind Spots',
        result:
          'Regulatory risks and audit failures in pharmacy and asset management.',
      },
    ],
    solvesDescription:
      'NEXO 4 for Healthcare bridges the gap between medical care and administrative efficiency. By automating pharmacy stock management and staff scheduling, we allow your team to focus on what matters most: patient outcomes.',
    packages: [
      {
        name: 'Healthcare Edition Pro',
        price: 'Growth-Ready',
        features: [
          'Pharmacy Inventory Control',
          'Core HR & Payroll',
          'Institutional Accounting',
        ],
      },
      {
        name: 'Healthcare Edition Elite',
        price: 'Enterprise',
        features: [
          'Multi-department Dashboards',
          'Asset Maintenance (Bio-med)',
          'Advanced Compliance Suite',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Health',
        description: 'Patient records and appointment scheduling integration.',
        icon: HealthIcon,
      },
      {
        name: 'HR & Payroll',
        description:
          'Specialized healthcare shift management and allowance tracking.',
        icon: Users,
      },
      {
        name: 'Accounting',
        description:
          'Automated revenue cycle management and departmental ledgers.',
        icon: Calculator,
      },
      {
        name: 'Inventory (Pharmacy)',
        description: 'Batch-wise expiry tracking and automated reorder points.',
        icon: Box,
      },
      {
        name: 'Dashboards',
        description: 'Real-time occupancy and pharmacy throughput metrics.',
        icon: Activity,
      },
      {
        name: 'Asset Management',
        description: 'Maintenance logs for high-value medical equipment.',
        icon: Wrench,
      },
    ],
    addOns: [
      {
        name: 'Patient Portal',
        description: 'Secure self-service for records and billing history.',
      },
      {
        name: 'LIMS Integration',
        description:
          'Seamless data flow between laboratory systems and the central ERP.',
      },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Full student lifecycle and institutional management.',
    icon: GraduationCap,
    heroHeadline: 'Connected ERP for Modern Educational Institutions',
    heroSubheadline:
      'From enrollment to graduation—manage student records, fees, and LMS in one unified ecosystem.',
    bgImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Fragmented Student Data',
        result: 'Administrative chaos and errors in academic record keeping.',
      },
      {
        problem: 'Fee Collection Leaks',
        result: 'Inaccurate financial reporting and cash flow bottlenecks.',
      },
      {
        problem: 'Disconnected LMS',
        result: 'Poor student engagement and fragmented learning experiences.',
      },
    ],
    solvesDescription:
      'NEXO 4 simplifies campus management. We integrate student fee collection with your central ledger and link staff HR with departmental performance, creating a transparent, growth-driven institution.',
    packages: [
      {
        name: 'Education Edition Pro',
        price: 'Operations-First',
        features: ['Student Fee Management', 'LMS Core', 'Academic Accounting'],
      },
      {
        name: 'Education Edition Elite',
        price: 'Institutional',
        features: [
          'Advanced CRM for Admissions',
          'Global Dashboards',
          'Multi-Campus Sync',
        ],
      },
    ],
    coreModules: [
      {
        name: 'LMS',
        description:
          'Course management, assessments, and learning progress tracking.',
        icon: BookOpen,
      },
      {
        name: 'Education',
        description: 'Student lifecycle management and academic scheduling.',
        icon: GraduationCap,
      },
      {
        name: 'Accounting',
        description:
          'Unified financials for tuition, grants, and operational spend.',
        icon: Calculator,
      },
      {
        name: 'HR & Payroll',
        description:
          'Staff tenure, credentials, and automated payroll processing.',
        icon: UserCheck,
      },
      {
        name: 'CRM',
        description: 'Manage admission inquiries and alumni relationships.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description:
          'Visual insights into enrollment trends and financial health.',
        icon: LayoutDashboard,
      },
      {
        name: 'Student Fee Management',
        description:
          'Automated invoicing, reminders, and online payment integration.',
        icon: Coins,
      },
    ],
    addOns: [
      {
        name: 'Alumni Portal',
        description:
          'Engage with former students and manage fundraising campaigns.',
      },
      {
        name: 'Exam Management',
        description:
          'Secure digital processing of grading and results publication.',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Transport & Logistics',
    description: 'Fleet management and route optimization.',
    icon: Truck,
    heroHeadline: 'Logistics ERP: Total Visibility from Origin to Destination',
    heroSubheadline:
      'Eliminate dead miles and paperwork. Manage fleets, track shipments, and automate billing on one integrated platform.',
    bgImage:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Opaque Fleet Costs',
        result: 'Inability to track fuel, maintenance, and driver performance.',
      },
      {
        problem: 'Manual Routing',
        result:
          'Inefficient paths leading to delayed deliveries and high fuel costs.',
      },
      {
        problem: 'Complex Billing',
        result: 'Weeks of delay in invoicing clients due to lost PODs.',
      },
    ],
    solvesDescription:
      'Speed and transparency are the pillars of logistics. NEXO ERP automates the heavy lifting of route planning and fleet maintenance, letting you focus on growth.',
    packages: [
      {
        name: 'Logistics Edition Pro',
        price: 'Fleet-Focused',
        features: [
          'Fleet Asset Tracking',
          'Core Logistics CRM',
          'Route Optimization',
        ],
      },
      {
        name: 'Logistics Edition Global',
        price: 'Enterprise',
        features: [
          'Advanced Inventory Sync',
          'Digital POD',
          'AI Fuel Prediction',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Stock',
        description: 'Real-time warehouse tracking for transit inventory.',
        icon: Box,
      },
      {
        name: 'Accounting',
        description: 'Multi-currency freight billing and expense management.',
        icon: Calculator,
      },
      {
        name: 'Fleet Assets',
        description: 'Vehicle maintenance, fuel logs, and driver assignments.',
        icon: TruckIcon,
      },
      {
        name: 'CRM',
        description:
          'Client shipment history and automated status notifications.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description: 'Real-time delivery KPIs and fleet utilization metrics.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'Driver Mobile App',
        description:
          'Real-time assignments and instant digital proof of delivery.',
      },
      {
        name: 'Customer Tracking',
        description: 'Allow clients to see their shipment status in real-time.',
      },
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'High-stakes asset management and quality control.',
    icon: Droplet,
    heroHeadline: 'Precision ERP for the Energy Sector',
    heroSubheadline:
      'Maximize asset uptime, ensure stringent quality compliance, and manage inventory across remote locations.',
    bgImage: '/Oil & Gas.png',
    painPoints: [
      {
        problem: 'Unplanned Asset Downtime',
        result: 'Massive operational losses and safety risks.',
      },
      {
        problem: 'Complex Inventory Sync',
        result:
          'Material shortages at remote rigs and overstocking at central hubs.',
      },
      {
        problem: 'Compliance Failures',
        result:
          'Environmental penalties and operational halts due to quality lapses.',
      },
    ],
    solvesDescription:
      'NEXO 4 provides the robust infrastructure needed for the energy sector. We centralize maintenance schedules and quality audits into a single dashboard, ensuring every rig operates at peak efficiency and safety.',
    packages: [
      {
        name: 'Energy Edition Pro',
        price: 'Reliability-First',
        features: [
          'Asset Maintenance',
          'Core Quality Control',
          'Remote Stock Sync',
        ],
      },
      {
        name: 'Energy Edition Global',
        price: 'Enterprise',
        features: [
          'Predictive Maintenance',
          'Advanced Quality Audits',
          'Multi-Entity Financials',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Asset Management',
        description:
          'Preventive and predictive maintenance for mission-critical equipment.',
        icon: Wrench,
      },
      {
        name: 'Inventory',
        description:
          'Multi-location tracking for specialized tools and consumables.',
        icon: Box,
      },
      {
        name: 'Accounting',
        description:
          'Project-based costing and high-volume transaction processing.',
        icon: Calculator,
      },
      {
        name: 'Quality',
        description:
          'Digital inspection logs and automated compliance reporting.',
        icon: ShieldCheck,
      },
      {
        name: 'Dashboards',
        description:
          'Asset performance trends and operational risk visibility.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'HSE Compliance App',
        description:
          'Health, Safety, and Environment incident reporting and tracking.',
      },
      {
        name: 'Rig Performance Sync',
        description:
          'Satellite-ready data sync for offshore or remote locations.',
      },
    ],
  },
  {
    id: 'trading',
    name: 'Trading & Distribution',
    description: 'High-speed supply chain and margin management.',
    icon: ArrowLeftRight,
    heroHeadline: 'Agile ERP for Trading & Distribution Hubs',
    heroSubheadline:
      'Accelerate turnover, protect margins, and unify your global sales channels in one real-time system.',
    bgImage:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Slim Margin Visibility',
        result:
          'Selling at a loss due to hidden procurement and logistics costs.',
      },
      {
        problem: 'Slow Supply Chain Turnaround',
        result: 'Excessive capital tied up in slow-moving inventory.',
      },
      {
        problem: 'Fragmented Sales Channels',
        result: 'Inconsistent pricing and availability across B2B and retail.',
      },
    ],
    solvesDescription:
      'Success in trading is built on speed and data. NEXO 4 unifies your buying cycles with your CRM, ensuring that your sales team always knows exactly what is in stock and at what margin.',
    packages: [
      {
        name: 'Trading Edition Pro',
        price: 'Speed-Focused',
        features: [
          'Buying & Selling Sync',
          'Core CRM',
          'Standard Stock Control',
        ],
      },
      {
        name: 'Trading Edition Global',
        price: 'Enterprise',
        features: [
          'Multi-channel Management',
          'Advanced CRM',
          'Global Supply Chain Analytics',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Buying & Selling',
        description:
          'Streamlined vendor RFQs and rapid sales order processing.',
        icon: ShoppingCart,
      },
      {
        name: 'Stock',
        description: 'Automated reordering and multi-warehouse bin management.',
        icon: Box,
      },
      {
        name: 'Accounting',
        description: 'Real-time margin analysis and automated tax handling.',
        icon: Calculator,
      },
      {
        name: 'CRM',
        description: '360° customer view with integrated communication logs.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description: 'Stock aging reports and top-performing item analysis.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'B2B Portal',
        description:
          'Let your wholesale clients place orders directly into your system.',
      },
      {
        name: 'Drop-shipping Sync',
        description:
          'Automate fulfillment for orders shipped directly from vendors.',
      },
    ],
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Project timelines, job costing, and resource management.',
    icon: HardHat,
    heroHeadline: 'Command Your Construction Projects with NEXO 4',
    heroSubheadline:
      'Master job costing, track heavy equipment, and manage multi-site payroll in one authoritative system.',
    bgImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      {
        problem: 'Project Budget Overruns',
        result:
          'Eroding profit margins due to poor visibility into material and labor costs.',
      },
      {
        problem: 'Equipment Idle Time',
        result:
          'High rental costs and project delays due to inefficient asset allocation.',
      },
      {
        problem: 'Complex Site Payroll',
        result:
          'Administrative overhead and compliance risks across multiple job sites.',
      },
    ],
    solvesDescription:
      'NEXO 4 for Construction is designed for the field and the office. We link project milestones directly with your financial ledger, ensuring that every expense is tracked against the correct budget line in real time.',
    packages: [
      {
        name: 'Construction Edition Pro',
        price: 'Budget-Ready',
        features: [
          'Core Project Tracking',
          'Job Costing',
          'Basic Asset Management',
        ],
      },
      {
        name: 'Construction Edition Elite',
        price: 'Enterprise',
        features: [
          'Multi-site Dashboards',
          'Advanced Resource Planning',
          'Full Site HR',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Project Management',
        description:
          'Milestone tracking, resource allocation, and Gantt charts.',
        icon: ConstructionIcon,
      },
      {
        name: 'Accounting',
        description:
          'Integrated job costing and sub-contractor billing management.',
        icon: Calculator,
      },
      {
        name: 'Assets',
        description: 'Heavy machinery maintenance and utilization tracking.',
        icon: Wrench,
      },
      {
        name: 'HR & Payroll',
        description: 'Site-based attendance and automated wage calculations.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description:
          'Real-time budget vs actual and project progress visualization.',
        icon: LayoutDashboard,
      },
    ],
    addOns: [
      {
        name: 'Site Supervisor App',
        description:
          'Mobile tool for daily logs, progress photos, and material requests.',
      },
      {
        name: 'Sub-contractor Portal',
        description: 'Secure collaboration for bidding and invoice submission.',
      },
    ],
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Institutional-grade security and reporting.',
    icon: Landmark,
    heroHeadline: 'Secure & Compliant ERP for Financial Institutions',
    heroSubheadline:
      'Manage assets, automate regulatory reporting, and ensure zero-trust security across your entire financial operation.',
    bgImage: '/Financial.jpg',
    painPoints: [
      {
        problem: 'Compliance & Audit Risks',
        result:
          'Potential legal liabilities and heavy penalties due to evolving regulatory requirements.',
      },
      {
        problem: 'Manual & Error-Prone Reporting',
        result:
          'Inaccurate financial statements and delayed filings caused by spreadsheet reliance.',
      },
      {
        problem: 'Fragmented Finance Systems',
        result:
          'Inconsistent data across front-office client management and back-office accounting.',
      },
    ],
    solvesDescription:
      'NEXO ERP provides the structural integrity and technical security that financial firms demand. By unifying loan processing, client relationship management, and institutional accounting, we create an immutable audit trail for every transaction.',
    packages: [
      {
        name: 'Finance Edition Essentials',
        price: 'Compliance-First',
        features: [
          'Core Institutional Accounting',
          'Secure CRM',
          'Standard Regulatory Reporting',
          'Audit Trail Logs',
        ],
      },
      {
        name: 'Finance Edition Pro',
        price: 'Reporting-Rich',
        features: [
          'Advanced Loan Management',
          'Real-time Risk Dashboards',
          'Consolidated Financial Statements',
          'Automated KYC Workflows',
        ],
      },
    ],
    coreModules: [
      {
        name: 'Accounting',
        description:
          'Multi-currency GL with automated tax and multi-entity consolidation.',
        icon: Calculator,
      },
      {
        name: 'CRM',
        description:
          '360-degree client views with secure document vault and KYC tracking.',
        icon: Users,
      },
      {
        name: 'Dashboards',
        description:
          'Instant visibility into liquidity, asset performance, and risk metrics.',
        icon: LayoutDashboard,
      },
      {
        name: 'HR & Payroll',
        description:
          'Highly secure employee management with automated benefits and tax handling.',
        icon: UserCheck,
      },
      {
        name: 'Loan Management',
        description:
          'End-to-end processing from application and appraisal to disbursement.',
        icon: Coins,
      },
    ],
    addOns: [
      {
        name: 'AI Risk Analysis',
        description:
          'Predictive modeling for credit risk and market volatility assessments.',
      },
      {
        name: 'Secure Client Portal',
        description:
          'Self-service dashboard for investors and loan applicants.',
      },
      {
        name: 'Blockchain Audit Trail',
        description:
          'Immutable transaction logging for high-security environments.',
      },
    ],
  },
]

export const FEATURES: Feature[] = [
  {
    title: 'Finance & Accounting',
    description: 'Real-time GL, multi-currency, audit-ready statements.',
    icon: Calculator,
  },
  {
    title: 'Sales & CRM',
    description: 'Leads to invoices, customer 360 views.',
    icon: Users,
  },
  {
    title: 'Inventory & Warehouse',
    description: 'Batch/serial tracking, smart re-order levels.',
    icon: Package,
  },
  {
    title: 'Purchasing',
    description: 'Vendors, RFQs, approvals, GRN control.',
    icon: FileText,
  },
  {
    title: 'Point of Sale (POS)',
    description: 'Fast billing, multiple payments, returns.',
    icon: CreditCard,
  },
  {
    title: 'HR & Payroll',
    description: 'Employees, attendance, allowances, deductions.',
    icon: UserCheck,
  },
]

export const FEATURE_TABS: FeatureTab[] = [
  {
    id: 'finance',
    label: 'Financial Control',
    title: 'Master Your Finances',
    description:
      'Gain complete visibility over your financial health with our comprehensive accounting suite. From automated bank reconciliation to complex tax handling, NEXO 4 keeps you audit-ready.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    points: [
      'Multi-currency & Multi-company support',
      'Real-time General Ledger updates',
      'Automated tax calculations',
      'Budgeting & Cost Center analysis',
    ],
  },
  {
    id: 'ops',
    label: 'Operations & Supply',
    title: 'Streamline Operations',
    description:
      'Optimize your supply chain from procurement to fulfillment. Our intelligent inventory system predicts shortages and automates reordering to ensure you never miss a sale.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    points: [
      'Smart Inventory Management',
      'Automated Procurement Workflows',
      'Supplier Scorecards',
      'Warehouse & Bin Management',
    ],
  },
  {
    id: 'sales',
    label: 'Sales & CRM',
    title: 'Accelerate Growth',
    description:
      'Turn relationships into revenue. Manage leads, track opportunities, and support customers all from a single dashboard integrated directly with your inventory and finance.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    points: [
      '360° Customer View',
      'Opportunity & Pipeline Management',
      'Integrated Quotations & Invoicing',
      'Campaign Management',
    ],
  },
]

export const INTEGRATIONS: Integration[] = [
  {
    name: 'PayPal',
    logo: 'https://cdn.simpleicons.org/paypal',
    description:
      'Seamlessly process payments globally. Features include automatic reconciliation, refund handling, and multi-currency support directly within your ERP dashboard.',
  },
  {
    name: 'Dropbox',
    logo: 'https://cdn.simpleicons.org/dropbox',
    description:
      "Secure file storage and sharing. Automatically sync invoices, reports, and documents generated by the ERP to your team's shared folders.",
  },
  {
    name: 'Razorpay',
    logo: 'https://cdn.simpleicons.org/razorpay',
    description:
      'Empower your business with easy-to-integrate payment solutions. Supports subscriptions, payment links, and smart routing for high success rates.',
  },
  {
    name: 'Slack',
    logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    description:
      'Real-time notifications for your team. Get alerts for low inventory, new orders, and approval requests directly in your Slack channels.',
  },
  {
    name: 'Google',
    logo: 'https://cdn.simpleicons.org/google',
    description:
      'Integrate with Google Workspace. Sync calendars for meetings, export reports to Sheets, and manage user access via Google SSO.',
  },
  {
    name: 'Stripe',
    logo: 'https://cdn.simpleicons.org/stripe',
    description:
      'The standard for modern payments. Handle recurring billing, manage fraud, and issue virtual cards for expenses directly from the platform.',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    description:
      'Leverage the power of cloud computing. Secure data backups, scalable hosting for custom modules, and advanced analytics processing.',
  },
  {
    name: 'WooCommerce',
    logo: 'https://cdn.simpleicons.org/woocommerce',
    description:
      'Connect your WordPress store. Sync products, inventory levels, and orders in real-time to prevent stockouts and streamline fulfillment.',
  },
  {
    name: 'Shopify',
    logo: 'https://cdn.simpleicons.org/shopify',
    description:
      'Unified commerce for your Shopify store. Centralize multi-channel sales, manage shipping, and analyze customer behavior from one place.',
  },
]

export const PACKAGE_TIERS: PackageTier[] = [
  {
    name: 'NEXO Edition: Essentials',
    category: 'ERP',
    description:
      'Empower small and medium enterprises with a robust, easy-to-implement ERP solution. Perfect for businesses looking to streamline operations without complexity.',
    target: 'Small-Medium Enterprises',
    modules: [
      'Accounting',
      'Selling',
      'Buying',
      'Stock',
      'HR & Payroll (Basic)',
      'POS (Retail)',
      'User Management',
    ],
  },
  {
    name: 'NEXO Edition: PRO',
    category: 'ERP',
    isPopular: true,
    description:
      'Tailored for growing businesses that require advanced functionality and greater flexibility. Includes enhanced inventory and detailed analytics.',
    target: 'Growth-Focused Mid-market',
    modules: [
      'Accounting',
      'Selling',
      'Buying',
      'Stock',
      'HR & Payroll',
      'POS (Retail)',
      'Manufacturing',
      'Dashboards',
      'Project Management',
      'CRM',
    ],
  },
  {
    name: 'NEXO Edition: ELITE',
    category: 'ERP',
    description:
      'The ultimate solution for large enterprises. Offers comprehensive customization, advanced AI-driven analytics, and dedicated support.',
    target: 'Large Enterprises',
    modules: [
      'Accounting',
      'Selling',
      'Buying',
      'Advance Stock',
      'HR & Payroll (Elite)',
      'POS (Retail)',
      'Manufacturing',
      'AI Dashboards & BI',
      'Project Management',
      'Loan Management',
      'Quality',
      'Assets Management',
      'CRM',
    ],
  },
  {
    name: 'NEXO Edition: HRMS Basic',
    category: 'HRMS',
    description:
      'The ultimate HRMS solution for Small-Medium enterprises with biometric integration. Plug n play, zero customizations required.',
    target: 'SME People Management',
    modules: [
      'Biometric Integration',
      'Attendance',
      'Core Payroll',
      'Employee Records',
    ],
  },
  {
    name: 'NEXO Edition: HRMS Elite',
    category: 'HRMS',
    description:
      'Comprehensive HRMS for large enterprises. Features biometric integration, ESS App, and full Loan Management with ongoing customization.',
    target: 'Enterprise People Management',
    modules: [
      'Biometric Integration',
      'ESS Mobile App',
      'Loan Management',
      'Custom Workflows',
      'Advanced Reporting',
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sidrah Hassan',
    role: 'Head of HR – Vital Petroleum',

    quote:
      'NEXO 4 ERP streamlined our HR and Payroll operations with an efficient, integrated system. The ESS solution has made employee self-service easier while improving accuracy and reducing manual work',
  },
  {
    name: 'Afzal Ahmad',
    role: 'CEO & Director – Lal Khan Oil Mills',

    quote:
      'NEXO 4 ERP transformed our business from manual registers to a complete digital ERP system. The implementation improved our control over accounts, inventory, sales, purchasing, and daily operations. Their team understood our requirements and delivered a smooth transition to a more efficient way of working.',
  },
  {
    name: 'Kashif',
    role: 'Director – Pak United Foods (Pvt.) Ltd.',

    quote:
      'NEXO 4 ERP helped us bring our Mart, Bakery, and Restaurant operations onto one integrated system. It has given us better control, visibility, and efficiency across all three businesses',
  },
]

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/nexo4erp' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nexo4erp' },
]

export const FAQS: FAQItem[] = [
  {
    question: 'How long does an ERPNext or Odoo implementation take?',
    answer:
      'It depends on your business size and complexity. A standard ERPNext implementation for a small business can be ready in 2\u20134 weeks. Larger implementations with custom modules, data migration, and multi-department rollouts typically take 3\u20136 months. We provide a dedicated implementation manager and a clear timeline from day one.',
  },
  {
    question: 'Can I migrate data from QuickBooks, Tally, or SAP?',
    answer:
      'Yes. We handle full data migration from legacy systems including QuickBooks, Tally, Microsoft Dynamics, SAP B1, and custom-built software. Our team manages schema mapping, data extraction, transformation, validation, and parallel-run testing so nothing gets lost.',
  },
  {
    question: 'Do you handle FBR tax configuration and Pakistani compliance?',
    answer:
      'Absolutely. We configure FBR sales tax, withholding tax, and income tax. We also set up EOBI and PESSI payroll deductions, Pakistani chart of accounts, and SRB (Sindh Revenue Board) compliance where applicable. Local compliance is built into every implementation.',
  },
  {
    question: 'What is the difference between ERPNext and Odoo?',
    answer:
      'Both are excellent open-source ERPs. ERPNext (Frappe) excels at manufacturing, NGO accounting, and deep customization without breaking upgrades. Odoo has a more polished UI and stronger POS and e-commerce modules. We implement both and recommend the right fit based on your industry and requirements.',
  },
  {
    question: 'What is nexoERP?',
    answer:
      'nexoERP is our branded ERPNext implementation \u2014 Frappe ERPNext configured, customised, and optimised for Pakistani business workflows. You get the full power of open-source ERPNext (zero licensing fees) with our layer of industry-specific customizations, local compliance configurations, and dedicated support.',
  },
  {
    question: 'Do you provide post-implementation support?',
    answer:
      'Yes. We offer monthly support retainers covering bug fixes, user queries, system updates, new module rollouts, and monthly performance reviews. You get a dedicated point of contact \u2014 not a ticket queue.',
  },
  {
    question: 'Is the system customizable?',
    answer:
      'Deeply. ERPNext\u2019s Frappe framework allows us to add custom fields, workflows, print formats, reports, and entirely new modules without modifying core code \u2014 which keeps upgrades stable. Odoo offers similar flexibility through its studio and Python customization layer.',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'erpnext-vs-odoo-pakistan-guide',
    title:
      'ERPNext vs Odoo in Pakistan: Which ERP Is Better for Your Business?',
    excerpt:
      'Compare ERPNext and Odoo for Pakistani businesses based on cost, compliance, customization, support, and industry fit.',
    content:
      'Choosing between ERPNext and Odoo depends on your business goals, budget, and internal process maturity. ERPNext is often a strong fit for organizations that want deep customization, stronger manufacturing workflows, and a simpler implementation path. Odoo can be a better choice for businesses that value a polished interface, strong POS, and e-commerce features.\n\nFor Pakistani companies, the decision should also include local accounting needs, tax configuration, support availability, and the ability to adapt the ERP to your real workflows without breaking upgrades.\n\nThis guide breaks down the differences in pricing, modules, customization, local support, and implementation effort so you can choose the right ERP with confidence.',
    date: 'May 15, 2025',
    author: 'Dr. Elena Rostova',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Comparison',
    readTime: '5 min read',
  },
  {
    id: 'erpnext-implementation-cost-pakistan',
    title: 'ERPNext Implementation Cost in Pakistan: What to Expect in 2025',
    excerpt:
      'A practical pricing guide for ERPNext implementation, migration, customization, and support for Pakistani businesses.',
    content:
      'ERPNext pricing in Pakistan usually depends on scope, number of modules, custom development, data migration, training, and support. The software itself is open source, but implementation work, hosting, integrations, and change management create the real project cost.\n\nIf you only need a basic rollout, costs are relatively low. If you need custom workflows, manufacturing, compliance, or multi-branch support, the budget should reflect the extra design and testing required.\n\nThis article explains how to estimate the true cost of an ERPNext project and avoid hidden implementation surprises.',
    date: 'April 28, 2025',
    author: 'James Miller',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Pricing',
    readTime: '4 min read',
  },
  {
    id: 'erp-consultant-pakistan',
    title: 'How to Choose the Right ERP Consultant in Pakistan',
    excerpt:
      'A buyer-focused checklist for selecting an ERP implementation partner with local support, industry knowledge, and delivery discipline.',
    content:
      'Picking the wrong ERP consultant is often more expensive than picking the wrong ERP. The best partners will ask about your processes, recommend a realistic rollout plan, and explain what is included before signing.\n\nLook for strong local knowledge, proven implementation experience, clear support terms, and the ability to explain tradeoffs without overpromising.\n\nThis guide shows you how to evaluate ERPNext and Odoo consultants in Pakistan so you can avoid common implementation failures and choose a partner that can actually deliver.',
    date: 'April 10, 2025',
    author: 'Sarah Jenkins',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Decision',
    readTime: '6 min read',
  },
]
