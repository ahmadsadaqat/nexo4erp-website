
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
  Database
} from 'lucide-react';
import { NavLink, Industry, Feature, PackageTier, Integration, Testimonial, FeatureTab, FAQItem, BlogPost } from '@/lib/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'NEXO Editions', href: '#packages' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
];

export const TRANSLATIONS: any = {
  en: {
    heroTag: "Introducing Next-Gen ERP",
    heroHeadline: "Architecting Your Digital Future",
    heroSubheadline: "Engineering the next wave of intelligent enterprises through a fully integrated suite of custom software, data-driven ERP, and frictionless digital commerce.",
    solutions: "Solutions",
    features: "Features",
    industries: "Industries",
    editions: "NEXO ERP Editions",
    blog: "Blog",
    about: "About",
    demo: "Book A Free Demo",
    contactSales: "Talk to Sales",
    requestQuote: "Request Quote",
    editionsHeader: "Choose Your Edition",
    editionsSub: "Select the framework that aligns with your business maturity.",
    sectorsHeader: "Industries We Serve",
    sectorsSub: "Tailored ERP solutions built to meet the unique challenges of your industry.",
    ecosystemHeader: "Integrated Solutions",
    ecosystemSub: "A unified architecture where every digital service connects to the core.",
    capabilitiesHeader: "Powerful Features",
    capabilitiesSub: "A complete suite of tools designed to optimize every aspect of your business operations.",
    integrationsHeader: "Seamlessly integrated with your favorite tools",
    trustedClientsHeader: "Trusted by Industry Leaders",
    aboutHeader: "Zero Chaos – Maximum Control",
    exploreEdition: "Explore Edition",
    learnMore: "Learn More",
    consultSpecialist: "Consult a Specialist",
    requestIndustryDemo: "Request Industry Demo",
    backHome: "Back to Home",
    contactHeader: "Get in Touch",
    contactSub: "Let's Build Your Future",
    contactDesc: "Ready to streamline your operations? Fill out the form or reach out to us directly.",
    emailUs: "Email Us",
    callUs: "Call Us",
    workingHours: "Working Hours",
    scheduleDemo: "Schedule a Demo",
    fullName: "Full Name",
    bizEmail: "Business Email",
    message: "Message",
    sendMessage: "Send Message",
    footerProduct: "Product",
    footerResources: "Resources",
    footerLegal: "Legal",
    testimonialsHeader: "Testimonials",
    testimonialsSub: "Chosen By The Best",
    testimonialsDesc: "See what our partners have to say about their journey with NEXO 4 ERP.",
    blogHeader: "Insights",
    blogSub: "Latest News & Articles",
    blogDesc: "Stay ahead of the curve with expert insights on ERP technology, digital transformation, and business growth.",
    modalConnect: "Connect with NEXO 4",
    modalSub: "Complete the details below to start your journey.",
    modalSubject: "Subject",
    modalSubjectPlaceholder: "e.g. Alexander Vance",
    modalSubmit: "Submit Request",
    understood: "Understood",
    agreed: "Agreed"
  },
  ar: {
    heroTag: "نقدم الجيل القادم من دعم ERP",
    heroHeadline: "هندسة مستقبلك الرقمي",
    heroSubheadline: "بناء الموجة القادمة من المؤسسات الذكية من خلال مجموعة متكاملة من البرمجيات المخصصة، وERP المدعوم بالبيانات، والتجارة الرقمية السلسة.",
    solutions: "حلولنا",
    features: "المميزات",
    industries: "الصناعات",
    editions: "إصدارات نيكسو",
    blog: "المدونة",
    about: "من نحن",
    demo: "احجز عرضاً تجريبياً",
    contactSales: "تحدث إلى المبيعات",
    requestQuote: "طلب عرض سعر",
    editionsHeader: "اختر إصدارك",
    editionsSub: "حدد الإطار الذي يتماشى مع نضج عملك وأهداف نموك.",
    sectorsHeader: "الصناعات التي نخدمها",
    sectorsSub: "حلول ERP مخصصة لمواجهة التحديات الفريدة لصناعتك.",
    ecosystemHeader: "حلول متكاملة",
    ecosystemSub: "بنية موحدة حيث تتصل كل خدمة رقمية بالنظام الأساسي.",
    capabilitiesHeader: "مميزات قوية",
    capabilitiesSub: "مجموعة كاملة من الأدوات المصممة لتحسين كل جانب من جوانب عمليات عملك.",
    integrationsHeader: "تكامل سلس مع أدواتك المفضلة",
    trustedClientsHeader: "موثوق به من قبل قادة الصناعة",
    aboutHeader: "فوضى صفرية - تحكم أقصى",
    exploreEdition: "استكشف الإصدار",
    learnMore: "تعرف على المزيد",
    consultSpecialist: "استشر متخصصاً",
    requestIndustryDemo: "طلب عرض تجريبي للصناعة",
    backHome: "العودة للرئيسية",
    contactHeader: "تواصل معنا",
    contactSub: "دعونا نبني مستقبلك",
    contactDesc: "هل أنت مستعد لتبسيط عملياتك؟ املأ النموذج أو تواصل معنا مباشرة.",
    emailUs: "راسلنا بالبريد الإلكتروني",
    callUs: "اتصل بنا",
    workingHours: "ساعات العمل",
    scheduleDemo: "احجز عرضاً تجريبياً",
    fullName: "الاسم الكامل",
    bizEmail: "البريد الإلكتروني للعمل",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",
    footerProduct: "المنتج",
    footerResources: "الموارد",
    footerLegal: "قانوني",
    testimonialsHeader: "آراء العملاء",
    testimonialsSub: "موثوق به من قبل قادة الصناعة",
    testimonialsDesc: "اطلع على ما يقوله شركاؤنا عن رحلتهم مع NEXO 4 ERP.",
    blogHeader: "رؤى",
    blogSub: "أحدث الأخبار والمقالات",
    blogDesc: "ابق في الطليعة مع رؤى الخبراء حول تقنية ERP والتحول الرقمي ونمو الأعمال.",
    modalConnect: "تواصل مع NEXO 4",
    modalSub: "أكمل التفاصيل أدناه لبدء رحلتك.",
    modalSubject: "الموضوع",
    modalSubmit: "إرسال الطلب",
    understood: "مفهوم",
    agreed: "أوافق"
  }
};

export const SOLUTIONS_CONTENT = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke applications designed to solve your unique business challenges with precision and scale.',
    icon: Code
  },
  {
    id: 'erp-crm',
    title: 'ERP & CRM',
    description: 'Unified platforms that connect your entire business architecture, from leads to financial ledgers.',
    icon: Database
  },
  {
    id: 'digital-commerce',
    title: 'Digital Commerce',
    description: 'High-performance e-commerce and POS solutions that bridge the gap between digital and physical sales.',
    icon: ShoppingCart
  },
  {
    id: 'cloud-infra',
    title: 'Cloud & Infrastructure',
    description: 'Secure, scalable cloud environments built on top-tier infrastructure for maximum uptime and reliability.',
    icon: Cloud
  }
];

export const INDUSTRIES: Industry[] = [
  { 
    id: 'manufacturing',
    name: 'Manufacturing', 
    description: 'Streamline production and supply chains.', 
    icon: Factory,
    heroHeadline: 'ERP Built for Manufacturing Excellence',
    heroSubheadline: 'From raw material to finished goods—fully controlled. Optimize shop-floor operations, eliminate wastage, and drive precision with NEXO 4.',
    bgImage: "/Manufacturing.jpg",
    painPoints: [
      { problem: 'Poor Production Visibility', result: 'Operational blind spots leading to missed deadlines and machine idle time.' },
      { problem: 'Inventory Wastage & Stockouts', result: 'Inflated carrying costs and production halts due to material unavailability.' },
      { problem: 'Manual Planning & Costing', result: 'Inaccurate margins and delayed financial reporting across complex BOMs.' },
      { problem: 'Quality Tracking Issues', result: 'High scrap rates, failed audits, and significant compliance risks.' }
    ],
    solvesDescription: 'NEXO 4 ERP integrates manufacturing, inventory, finance, and quality into one cohesive ecosystem. Designed for growing and enterprise-scale manufacturers, it provides the authoritative oversight needed to manage complex multi-level BOMs and high-volume production cycles with absolute confidence.',
    packages: [
      { name: 'Manufacturing Edition Pro', price: 'Operations-First', features: ['Core Manufacturing & Work Orders', 'Advanced Inventory Control', 'Standard BOM Management', 'Finance Integration'] },
      { name: 'Manufacturing Edition Elite', price: 'Enterprise-Ready', features: ['Advanced Production Planning', 'Quality Management Suite', 'Fixed Asset Tracking', 'AI-Driven Costing Dashboards'] }
    ],
    coreModules: [
      { name: 'Manufacturing', description: 'Complete shop floor control from planning to work order execution.', icon: Settings },
      { name: 'Stock & Inventory', description: 'Real-time tracking of raw materials, WIP, and finished goods.', icon: Box },
      { name: 'Accounting', description: 'Automatic production costing and unified financial ledgers.', icon: Calculator },
      { name: 'Buying & Selling', description: 'Streamlined procurement and seamless sales order fulfillment.', icon: ShoppingCart },
      { name: 'Quality Management', description: 'Integrated inspection points to maintain rigorous standards.', icon: ShieldCheck },
      { name: 'Assets', description: 'Comprehensive maintenance and depreciation for shop machinery.', icon: Wrench },
      { name: 'Dashboards', description: 'Real-time OEE, yield tracking, and operational KPIs.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'IIoT Integration', description: 'Connect shop-floor machinery directly for automated production logging.' },
      { name: 'Maintenance App', description: 'Preventive and breakdown maintenance management for your assets.' },
      { name: 'AI Demand Forecasting', description: 'Predict raw material requirements based on historical trends and market data.' }
    ]
  },
  { 
    id: 'retail',
    name: 'Retail', 
    description: 'Unified commerce for modern retail.', 
    icon: ShoppingBag,
    heroHeadline: 'Unified ERP for Modern Retail Businesses',
    heroSubheadline: 'POS, inventory, accounting, and HR—fully connected in one powerful system. Stop managing silos and start scaling your commerce.',
    bgImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Stock Mismatches Across Outlets', result: 'Lost sales opportunities and customer frustration due to inaccurate availability.' },
      { problem: 'Manual POS & Fragmented Reporting', result: 'Hundreds of hours lost to data entry and reconciling daily sales logs.' },
      { problem: 'No Real-Time Sales Visibility', result: 'Blind decision-making and inventory wastage due to delayed data insights.' },
      { problem: 'Separated HR & Payroll', result: 'Inefficient staff management and high overheads across multiple locations.' }
    ],
    solvesDescription: 'NEXO 4 ERP connects POS, inventory, finance, and HR in real time—giving retailers complete control across single or multi-store operations. Our unified architecture ensures that every transaction is instantly reflected in your ledger and stock levels.',
    packages: [
      { name: 'Retail Edition Essentials', price: 'Value-First', features: ['Single-store Retail ERP', 'Cloud-Native POS', 'Core Inventory Management', 'Basic Financials'] },
      { name: 'Retail Edition Pro', price: 'Growth-Focused', features: ['Multi-store Support', 'Advanced CRM', 'Management Dashboards', 'Automated Reordering'] },
      { name: 'Retail Edition Elite', price: 'Enterprise', features: ['Full Customization', 'AI Sales Analytics', 'Global Supply Chain Sync', '24/7 Dedicated Support'] }
    ],
    coreModules: [
      { name: 'POS (Retail)', description: 'Fast, secure checkout that works offline and syncs automatically.', icon: CreditCard },
      { name: 'Stock & Inventory', description: 'Real-time multi-location tracking with smart reorder levels.', icon: Box },
      { name: 'Accounting', description: 'Automated ledger entries from every sales transaction.', icon: Calculator },
      { name: 'Selling & Buying', description: 'Manage vendor relationships and sales channels seamlessly.', icon: ShoppingCart },
      { name: 'HR & Payroll', description: 'Unified employee management for your entire retail team.', icon: Users },
      { name: 'Dashboards', description: 'Visual data for sales trends, top-moving items, and store performance.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'BI Sales Analytics', description: 'Deep-dive reports to identify growth opportunities and high-margin products.' },
      { name: 'Loyalty Integrations', description: 'Reward recurring customers and manage personalized marketing campaigns.' },
      { name: 'ESS App', description: 'Employee Self-Service for shift tracking, payroll access, and leave management.' }
    ]
  },
  { 
    id: 'healthcare',
    name: 'Healthcare', 
    description: 'Patient-centric operations and pharmacy control.', 
    icon: Stethoscope,
    heroHeadline: 'Integrated ERP for Healthcare Excellence',
    heroSubheadline: 'Unified pharmacy inventory, staff payroll, and institutional financials. Ensure patient care is never compromised by operational silos.',
    bgImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Critical Drug Stockouts', result: 'Compromised patient care and emergency procurement overheads.' },
      { problem: 'Inaccurate Staff Billing', result: 'High turnover due to payroll errors and administrative friction.' },
      { problem: 'Compliance Blind Spots', result: 'Regulatory risks and audit failures in pharmacy and asset management.' }
    ],
    solvesDescription: 'NEXO 4 for Healthcare bridges the gap between medical care and administrative efficiency. By automating pharmacy stock management and staff scheduling, we allow your team to focus on what matters most: patient outcomes.',
    packages: [
      { name: 'Healthcare Edition Pro', price: 'Growth-Ready', features: ['Pharmacy Inventory Control', 'Core HR & Payroll', 'Institutional Accounting'] },
      { name: 'Healthcare Edition Elite', price: 'Enterprise', features: ['Multi-department Dashboards', 'Asset Maintenance (Bio-med)', 'Advanced Compliance Suite'] }
    ],
    coreModules: [
      { name: 'Health', description: 'Patient records and appointment scheduling integration.', icon: HealthIcon },
      { name: 'HR & Payroll', description: 'Specialized healthcare shift management and allowance tracking.', icon: Users },
      { name: 'Accounting', description: 'Automated revenue cycle management and departmental ledgers.', icon: Calculator },
      { name: 'Inventory (Pharmacy)', description: 'Batch-wise expiry tracking and automated reorder points.', icon: Box },
      { name: 'Dashboards', description: 'Real-time occupancy and pharmacy throughput metrics.', icon: Activity },
      { name: 'Asset Management', description: 'Maintenance logs for high-value medical equipment.', icon: Wrench }
    ],
    addOns: [
      { name: 'Patient Portal', description: 'Secure self-service for records and billing history.' },
      { name: 'LIMS Integration', description: 'Seamless data flow between laboratory systems and the central ERP.' }
    ]
  },
  { 
    id: 'education',
    name: 'Education', 
    description: 'Full student lifecycle and institutional management.', 
    icon: GraduationCap,
    heroHeadline: 'Connected ERP for Modern Educational Institutions',
    heroSubheadline: 'From enrollment to graduation—manage student records, fees, and LMS in one unified ecosystem.',
    bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Fragmented Student Data', result: 'Administrative chaos and errors in academic record keeping.' },
      { problem: 'Fee Collection Leaks', result: 'Inaccurate financial reporting and cash flow bottlenecks.' },
      { problem: 'Disconnected LMS', result: 'Poor student engagement and fragmented learning experiences.' }
    ],
    solvesDescription: 'NEXO 4 simplifies campus management. We integrate student fee collection with your central ledger and link staff HR with departmental performance, creating a transparent, growth-driven institution.',
    packages: [
      { name: 'Education Edition Pro', price: 'Operations-First', features: ['Student Fee Management', 'LMS Core', 'Academic Accounting'] },
      { name: 'Education Edition Elite', price: 'Institutional', features: ['Advanced CRM for Admissions', 'Global Dashboards', 'Multi-Campus Sync'] }
    ],
    coreModules: [
      { name: 'LMS', description: 'Course management, assessments, and learning progress tracking.', icon: BookOpen },
      { name: 'Education', description: 'Student lifecycle management and academic scheduling.', icon: GraduationCap },
      { name: 'Accounting', description: 'Unified financials for tuition, grants, and operational spend.', icon: Calculator },
      { name: 'HR & Payroll', description: 'Staff tenure, credentials, and automated payroll processing.', icon: UserCheck },
      { name: 'CRM', description: 'Manage admission inquiries and alumni relationships.', icon: Users },
      { name: 'Dashboards', description: 'Visual insights into enrollment trends and financial health.', icon: LayoutDashboard },
      { name: 'Student Fee Management', description: 'Automated invoicing, reminders, and online payment integration.', icon: Coins }
    ],
    addOns: [
      { name: 'Alumni Portal', description: 'Engage with former students and manage fundraising campaigns.' },
      { name: 'Exam Management', description: 'Secure digital processing of grading and results publication.' }
    ]
  },
  { 
    id: 'logistics',
    name: 'Transport & Logistics', 
    description: 'Fleet management and route optimization.', 
    icon: Truck,
    heroHeadline: 'Logistics ERP: Total Visibility from Origin to Destination',
    heroSubheadline: 'Eliminate dead miles and paperwork. Manage fleets, track shipments, and automate billing on one integrated platform.',
    bgImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Opaque Fleet Costs', result: 'Inability to track fuel, maintenance, and driver performance.' },
      { problem: 'Manual Routing', result: 'Inefficient paths leading to delayed deliveries and high fuel costs.' },
      { problem: 'Complex Billing', result: 'Weeks of delay in invoicing clients due to lost PODs.' }
    ],
    solvesDescription: 'Speed and transparency are the pillars of logistics. NEXO 4 ERP automates the heavy lifting of route planning and fleet maintenance, letting you focus on growth.',
    packages: [
      { name: 'Logistics Edition Pro', price: 'Fleet-Focused', features: ['Fleet Asset Tracking', 'Core Logistics CRM', 'Route Optimization'] },
      { name: 'Logistics Edition Global', price: 'Enterprise', features: ['Advanced Inventory Sync', 'Digital POD', 'AI Fuel Prediction'] }
    ],
    coreModules: [
      { name: 'Stock', description: 'Real-time warehouse tracking for transit inventory.', icon: Box },
      { name: 'Accounting', description: 'Multi-currency freight billing and expense management.', icon: Calculator },
      { name: 'Fleet Assets', description: 'Vehicle maintenance, fuel logs, and driver assignments.', icon: TruckIcon },
      { name: 'CRM', description: 'Client shipment history and automated status notifications.', icon: Users },
      { name: 'Dashboards', description: 'Real-time delivery KPIs and fleet utilization metrics.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'Driver Mobile App', description: 'Real-time assignments and instant digital proof of delivery.' },
      { name: 'Customer Tracking', description: 'Allow clients to see their shipment status in real-time.' }
    ]
  },
  { 
    id: 'oil-gas',
    name: 'Oil & Gas', 
    description: 'High-stakes asset management and quality control.', 
    icon: Droplet,
    heroHeadline: 'Precision ERP for the Energy Sector',
    heroSubheadline: 'Maximize asset uptime, ensure stringent quality compliance, and manage inventory across remote locations.',
    bgImage: "/Oil & Gas.png",
    painPoints: [
      { problem: 'Unplanned Asset Downtime', result: 'Massive operational losses and safety risks.' },
      { problem: 'Complex Inventory Sync', result: 'Material shortages at remote rigs and overstocking at central hubs.' },
      { problem: 'Compliance Failures', result: 'Environmental penalties and operational halts due to quality lapses.' }
    ],
    solvesDescription: 'NEXO 4 provides the robust infrastructure needed for the energy sector. We centralize maintenance schedules and quality audits into a single dashboard, ensuring every rig operates at peak efficiency and safety.',
    packages: [
      { name: 'Energy Edition Pro', price: 'Reliability-First', features: ['Asset Maintenance', 'Core Quality Control', 'Remote Stock Sync'] },
      { name: 'Energy Edition Global', price: 'Enterprise', features: ['Predictive Maintenance', 'Advanced Quality Audits', 'Multi-Entity Financials'] }
    ],
    coreModules: [
      { name: 'Asset Management', description: 'Preventive and predictive maintenance for mission-critical equipment.', icon: Wrench },
      { name: 'Inventory', description: 'Multi-location tracking for specialized tools and consumables.', icon: Box },
      { name: 'Accounting', description: 'Project-based costing and high-volume transaction processing.', icon: Calculator },
      { name: 'Quality', description: 'Digital inspection logs and automated compliance reporting.', icon: ShieldCheck },
      { name: 'Dashboards', description: 'Asset performance trends and operational risk visibility.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'HSE Compliance App', description: 'Health, Safety, and Environment incident reporting and tracking.' },
      { name: 'Rig Performance Sync', description: 'Satellite-ready data sync for offshore or remote locations.' }
    ]
  },
  { 
    id: 'trading',
    name: 'Trading & Distribution', 
    description: 'High-speed supply chain and margin management.', 
    icon: ArrowLeftRight,
    heroHeadline: 'Agile ERP for Trading & Distribution Hubs',
    heroSubheadline: 'Accelerate turnover, protect margins, and unify your global sales channels in one real-time system.',
    bgImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Slim Margin Visibility', result: 'Selling at a loss due to hidden procurement and logistics costs.' },
      { problem: 'Slow Supply Chain Turnaround', result: 'Excessive capital tied up in slow-moving inventory.' },
      { problem: 'Fragmented Sales Channels', result: 'Inconsistent pricing and availability across B2B and retail.' }
    ],
    solvesDescription: 'Success in trading is built on speed and data. NEXO 4 unifies your buying cycles with your CRM, ensuring that your sales team always knows exactly what is in stock and at what margin.',
    packages: [
      { name: 'Trading Edition Pro', price: 'Speed-Focused', features: ['Buying & Selling Sync', 'Core CRM', 'Standard Stock Control'] },
      { name: 'Trading Edition Global', price: 'Enterprise', features: ['Multi-channel Management', 'Advanced CRM', 'Global Supply Chain Analytics'] }
    ],
    coreModules: [
      { name: 'Buying & Selling', description: 'Streamlined vendor RFQs and rapid sales order processing.', icon: ShoppingCart },
      { name: 'Stock', description: 'Automated reordering and multi-warehouse bin management.', icon: Box },
      { name: 'Accounting', description: 'Real-time margin analysis and automated tax handling.', icon: Calculator },
      { name: 'CRM', description: '360° customer view with integrated communication logs.', icon: Users },
      { name: 'Dashboards', description: 'Stock aging reports and top-performing item analysis.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'B2B Portal', description: 'Let your wholesale clients place orders directly into your system.' },
      { name: 'Drop-shipping Sync', description: 'Automate fulfillment for orders shipped directly from vendors.' }
    ]
  },
  { 
    id: 'construction',
    name: 'Construction', 
    description: 'Project timelines, job costing, and resource management.', 
    icon: HardHat,
    heroHeadline: 'Command Your Construction Projects with NEXO 4',
    heroSubheadline: 'Master job costing, track heavy equipment, and manage multi-site payroll in one authoritative system.',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000',
    painPoints: [
      { problem: 'Project Budget Overruns', result: 'Eroding profit margins due to poor visibility into material and labor costs.' },
      { problem: 'Equipment Idle Time', result: 'High rental costs and project delays due to inefficient asset allocation.' },
      { problem: 'Complex Site Payroll', result: 'Administrative overhead and compliance risks across multiple job sites.' }
    ],
    solvesDescription: 'NEXO 4 for Construction is designed for the field and the office. We link project milestones directly with your financial ledger, ensuring that every expense is tracked against the correct budget line in real time.',
    packages: [
      { name: 'Construction Edition Pro', price: 'Budget-Ready', features: ['Core Project Tracking', 'Job Costing', 'Basic Asset Management'] },
      { name: 'Construction Edition Elite', price: 'Enterprise', features: ['Multi-site Dashboards', 'Advanced Resource Planning', 'Full Site HR'] }
    ],
    coreModules: [
      { name: 'Project Management', description: 'Milestone tracking, resource allocation, and Gantt charts.', icon: ConstructionIcon },
      { name: 'Accounting', description: 'Integrated job costing and sub-contractor billing management.', icon: Calculator },
      { name: 'Assets', description: 'Heavy machinery maintenance and utilization tracking.', icon: Wrench },
      { name: 'HR & Payroll', description: 'Site-based attendance and automated wage calculations.', icon: Users },
      { name: 'Dashboards', description: 'Real-time budget vs actual and project progress visualization.', icon: LayoutDashboard }
    ],
    addOns: [
      { name: 'Site Supervisor App', description: 'Mobile tool for daily logs, progress photos, and material requests.' },
      { name: 'Sub-contractor Portal', description: 'Secure collaboration for bidding and invoice submission.' }
    ]
  },
  { 
    id: 'financial-services',
    name: 'Financial Services', 
    description: 'Institutional-grade security and reporting.', 
    icon: Landmark,
    heroHeadline: 'Secure & Compliant ERP for Financial Institutions',
    heroSubheadline: 'Manage assets, automate regulatory reporting, and ensure zero-trust security across your entire financial operation.',
    bgImage: "/Financial.jpg",
    painPoints: [
      { problem: 'Compliance & Audit Risks', result: 'Potential legal liabilities and heavy penalties due to evolving regulatory requirements.' },
      { problem: 'Manual & Error-Prone Reporting', result: 'Inaccurate financial statements and delayed filings caused by spreadsheet reliance.' },
      { problem: 'Fragmented Finance Systems', result: 'Inconsistent data across front-office client management and back-office accounting.' }
    ],
    solvesDescription: 'NEXO 4 ERP provides the structural integrity and technical security that financial firms demand. By unifying loan processing, client relationship management, and institutional accounting, we create an immutable audit trail for every transaction.',
    packages: [
      { name: 'Finance Edition Essentials', price: 'Compliance-First', features: ['Core Institutional Accounting', 'Secure CRM', 'Standard Regulatory Reporting', 'Audit Trail Logs'] },
      { name: 'Finance Edition Pro', price: 'Reporting-Rich', features: ['Advanced Loan Management', 'Real-time Risk Dashboards', 'Consolidated Financial Statements', 'Automated KYC Workflows'] }
    ],
    coreModules: [
      { name: 'Accounting', description: 'Multi-currency GL with automated tax and multi-entity consolidation.', icon: Calculator },
      { name: 'CRM', description: '360-degree client views with secure document vault and KYC tracking.', icon: Users },
      { name: 'Dashboards', description: 'Instant visibility into liquidity, asset performance, and risk metrics.', icon: LayoutDashboard },
      { name: 'HR & Payroll', description: 'Highly secure employee management with automated benefits and tax handling.', icon: UserCheck },
      { name: 'Loan Management', description: 'End-to-end processing from application and appraisal to disbursement.', icon: Coins }
    ],
    addOns: [
      { name: 'AI Risk Analysis', description: 'Predictive modeling for credit risk and market volatility assessments.' },
      { name: 'Secure Client Portal', description: 'Self-service dashboard for investors and loan applicants.' },
      { name: 'Blockchain Audit Trail', description: 'Immutable transaction logging for high-security environments.' }
    ]
  }
];

export const FEATURES: Feature[] = [
  { title: 'Finance & Accounting', description: 'Real-time GL, multi-currency, audit-ready statements.', icon: Calculator },
  { title: 'Sales & CRM', description: 'Leads to invoices, customer 360 views.', icon: Users },
  { title: 'Inventory & Warehouse', description: 'Batch/serial tracking, smart re-order levels.', icon: Package },
  { title: 'Purchasing', description: 'Vendors, RFQs, approvals, GRN control.', icon: FileText },
  { title: 'Point of Sale (POS)', description: 'Fast billing, multiple payments, returns.', icon: CreditCard },
  { title: 'HR & Payroll', description: 'Employees, attendance, allowances, deductions.', icon: UserCheck },
];

export const FEATURE_TABS: FeatureTab[] = [
    {
        id: 'finance',
        label: 'Financial Control',
        title: 'Master Your Finances',
        description: 'Gain complete visibility over your financial health with our comprehensive accounting suite. From automated bank reconciliation to complex tax handling, NEXO 4 keeps you audit-ready.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        points: ['Multi-currency & Multi-company support', 'Real-time General Ledger updates', 'Automated tax calculations', 'Budgeting & Cost Center analysis']
    },
    {
        id: 'ops',
        label: 'Operations & Supply',
        title: 'Streamline Operations',
        description: 'Optimize your supply chain from procurement to fulfillment. Our intelligent inventory system predicts shortages and automates reordering to ensure you never miss a sale.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        points: ['Smart Inventory Management', 'Automated Procurement Workflows', 'Supplier Scorecards', 'Warehouse & Bin Management']
    },
    {
        id: 'sales',
        label: 'Sales & CRM',
        title: 'Accelerate Growth',
        description: 'Turn relationships into revenue. Manage leads, track opportunities, and support customers all from a single dashboard integrated directly with your inventory and finance.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        points: ['360° Customer View', 'Opportunity & Pipeline Management', 'Integrated Quotations & Invoicing', 'Campaign Management']
    }
];

export const INTEGRATIONS: Integration[] = [
  { 
    name: 'PayPal', 
    logo: 'https://cdn.simpleicons.org/paypal',
    description: 'Seamlessly process payments globally. Features include automatic reconciliation, refund handling, and multi-currency support directly within your ERP dashboard.'
  },
  { 
    name: 'Dropbox', 
    logo: 'https://cdn.simpleicons.org/dropbox',
    description: 'Secure file storage and sharing. Automatically sync invoices, reports, and documents generated by the ERP to your team\'s shared folders.'
  },
  { 
    name: 'Razorpay', 
    logo: 'https://cdn.simpleicons.org/razorpay',
    description: 'Empower your business with easy-to-integrate payment solutions. Supports subscriptions, payment links, and smart routing for high success rates.'
  },
  { 
    name: 'Slack', 
    logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    description: 'Real-time notifications for your team. Get alerts for low inventory, new orders, and approval requests directly in your Slack channels.'
  },
  { 
    name: 'Google', 
    logo: 'https://cdn.simpleicons.org/google',
    description: 'Integrate with Google Workspace. Sync calendars for meetings, export reports to Sheets, and manage user access via Google SSO.'
  },
  { 
    name: 'Stripe', 
    logo: 'https://cdn.simpleicons.org/stripe',
    description: 'The standard for modern payments. Handle recurring billing, manage fraud, and issue virtual cards for expenses directly from the platform.'
  },
  { 
    name: 'AWS', 
    logo: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
    description: 'Leverage the power of cloud computing. Secure data backups, scalable hosting for custom modules, and advanced analytics processing.'
  },
  { 
    name: 'WooCommerce', 
    logo: 'https://cdn.simpleicons.org/woocommerce',
    description: 'Connect your WordPress store. Sync products, inventory levels, and orders in real-time to prevent stockouts and streamline fulfillment.'
  },
  { 
    name: 'Shopify', 
    logo: 'https://cdn.simpleicons.org/shopify',
    description: 'Unified commerce for your Shopify store. Centralize multi-channel sales, manage shipping, and analyze customer behavior from one place.'
  },
];

export const PACKAGE_TIERS: PackageTier[] = [
  {
    name: 'NEXO Edition: Essentials',
    category: 'ERP',
    description: 'Empower small and medium enterprises with a robust, easy-to-implement ERP solution. Perfect for businesses looking to streamline operations without complexity.',
    target: 'Small-Medium Enterprises',
    modules: ['Accounting', 'Selling', 'Buying', 'Stock', 'HR & Payroll (Basic)', 'POS (Retail)', 'User Management'],
  },
  {
    name: 'NEXO Edition: PRO',
    category: 'ERP',
    isPopular: true,
    description: 'Tailored for growing businesses that require advanced functionality and greater flexibility. Includes enhanced inventory and detailed analytics.',
    target: 'Growth-Focused Mid-market',
    modules: ['Accounting', 'Selling', 'Buying', 'Stock', 'HR & Payroll', 'POS (Retail)', 'Manufacturing', 'Dashboards', 'Project Management', 'CRM'],
  },
  {
    name: 'NEXO Edition: ELITE',
    category: 'ERP',
    description: 'The ultimate solution for large enterprises. Offers comprehensive customization, advanced AI-driven analytics, and dedicated support.',
    target: 'Large Enterprises',
    modules: ['Accounting', 'Selling', 'Buying', 'Advance Stock', 'HR & Payroll (Elite)', 'POS (Retail)', 'Manufacturing', 'AI Dashboards & BI', 'Project Management', 'Loan Management', 'Quality', 'Assets Management', 'CRM'],
  },
  {
    name: 'NEXO Edition: HRMS Basic',
    category: 'HRMS',
    description: 'The ultimate HRMS solution for Small-Medium enterprises with biometric integration. Plug n play, zero customizations required.',
    target: 'SME People Management',
    modules: ['Biometric Integration', 'Attendance', 'Core Payroll', 'Employee Records'],
  },
  {
    name: 'NEXO Edition: HRMS Elite',
    category: 'HRMS',
    description: 'Comprehensive HRMS for large enterprises. Features biometric integration, ESS App, and full Loan Management with ongoing customization.',
    target: 'Enterprise People Management',
    modules: ['Biometric Integration', 'ESS Mobile App', 'Loan Management', 'Custom Workflows', 'Advanced Reporting'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alexander Vance",
    role: "CEO, VITAL",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    quote: "Implementing NEXO 4 was the turning point for VITAL. We unified our global supply chain and saw a 40% efficiency boost in the first quarter alone."
  },
  {
    name: "Sarah Jenkins",
    role: "CFO, Summit Manufacturing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    quote: "NEXO 4 ERP transformed our financial closing process from weeks to days. The real-time insights are a game-changer for our strategic planning."
  },
  {
    name: "Michael Chen",
    role: "Operations Director, TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
    quote: "The modular approach allowed us to scale without buying unnecessary features. It's the most flexible system we've used in a decade."
  }
];

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/nexo4erp' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nexo4erp' },
];

export const FAQS: FAQItem[] = [
    {
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary based on business size and complexity. A standard 'Basic ERP' setup can be ready in 2-4 weeks, while larger Enterprise solutions with custom integrations typically take 3-6 months. We provide a dedicated implementation manager to guide you through every step."
    },
    {
        question: "Can I migrate data from my existing software?",
        answer: "Yes, NEXO 4 ERP includes powerful data migration tools. We support importing data from Excel, CSV, and major legacy systems like Tally, QuickBooks, and SAP. Our team assists with data mapping and validation to ensure a smooth transition."
    },
    {
        question: "Is my data secure in the cloud?",
        answer: "Absolutely. We use bank-grade encryption (AES-256) for data at rest and in transit. Our servers are hosted on top-tier AWS infrastructure with automated daily backups, 24/7 monitoring, and strict role-based access controls."
    },
    {
        question: "Do you offer on-premise installation?",
        answer: "Yes, for Enterprise clients who require strict data sovereignty or operate in disconnected environments, we offer an on-premise deployment option. This gives you full control over your infrastructure while still receiving software updates."
    },
    {
        question: "Is the system customizable?",
        answer: "NEXO 4 is built on an API-first architecture. You can create custom fields, design custom print formats, and even build entirely new modules using our developer tools. Our 'Professional' and 'Enterprise' plans include access to these customization features."
    }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Future of ERP: AI-Driven Insights",
    excerpt: "Artificial Intelligence is no longer just a buzzword. Discover how predictive analytics is reshaping inventory management and financial forecasting.",
    content: "Artificial Intelligence is revolutionizing the Enterprise Resource Planning (ERP) landscape. Traditional ERPs were systems of record, excellent at storing data but passive in their utility. The next generation of ERPs, like NEXO 4, are systems of intelligence.\n\nBy leveraging Machine Learning algorithms, modern ERPs can predict inventory shortages before they happen, identify anomalies in financial transactions to prevent fraud, and even suggest optimal pricing strategies based on market trends. This shift from reactive data logging to proactive decision support is what gives businesses a competitive edge in a fast-paced market.\n\nIn this post, we explore three key areas where AI is making an impact: Supply Chain Optimization, Automated Financial Closing, and Intelligent Customer Relationship Management.",
    date: "May 15, 2025",
    author: "Dr. Elena Rostova",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: '2',
    title: "Scaling Your Business with Cloud-Native Architecture",
    excerpt: "Why moving to the cloud is essential for agility, security, and reducing total cost of ownership in the modern enterprise.",
    content: "The debate between on-premise and cloud ERP is largely settled. Cloud-native architectures offer scalability that on-premise solutions simply cannot match. For growing businesses, the ability to scale resources up or down based on demand is crucial for managing costs and ensuring performance during peak periods.\n\nBeyond scalability, cloud-native ERPs provide superior security. Providers like AWS and Azure invest billions in security infrastructure that individual companies cannot replicate. Furthermore, automatic updates ensure that you are always running the latest version of the software, patching vulnerabilities instantly and giving you access to new features without costly upgrade projects.\n\nWe delve into the TCO (Total Cost of Ownership) comparison and find that for 90% of SMEs, cloud ERP offers a 30-40% reduction in IT spend over 5 years.",
    date: "April 28, 2025",
    author: "James Miller",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Infrastructure",
    readTime: "4 min read"
  },
  {
    id: '3',
    title: "Why Digital Transformation Fails (And How to Fix It)",
    excerpt: "70% of digital transformation projects fall short of their goals. Learn the common pitfalls and the strategic approach to ensure success.",
    content: "Digital transformation is high on the agenda for every CEO, yet the success rate remains alarmingly low. The primary reason isn't technology—it's culture and strategy. Implementing a new ERP isn't just about installing software; it's about re-engineering business processes and managing change within the organization.\n\nCommon pitfalls include: lack of executive sponsorship, poor data quality, resistance to change from frontline employees, and trying to replicate old processes in new systems. \n\nSuccessful transformations start with a clear vision. They prioritize user experience to drive adoption and focus on 'Quick Wins' to build momentum. At NEXO 4, we emphasize a phased implementation approach that delivers value early and iterates based on user feedback.",
    date: "April 10, 2025",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Strategy",
    readTime: "6 min read"
  }
];
