import { 
  Laptop, 
  Keyboard, 
  Cpu, 
  CircuitBoard, 
  Server, 
  AppWindow, 
  Briefcase, 
  Code, 
  Cloud, 
  ShieldCheck 
} from 'lucide-react';

export const servicesData = {
  hardware: [
    {
      id: 'laptops-desktops',
      title: 'Laptops & Desktops',
      description: 'Enterprise-grade computing solutions tailored for performance, durability, and business efficiency.',
      icon: Laptop,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.04.42%20AM.jpeg',
      details: 'We partner with global technology leaders like Dell, HP, Lenovo, and Apple to provide robust computing infrastructure for your workforce. Whether you need lightweight ultrabooks for your mobile sales team, powerful workstations for engineering, or reliable all-in-one desktops for administrative tasks, we ensure every device meets your specific performance benchmarks. Our end-to-end service includes bulk procurement, asset tagging, custom image deployment, and lifecycle management.',
      features: ['Intel Core i7/i9, Xeon & Apple M-Series Processors', 'Authorized Reseller Warranty & Support', 'Bulk Corporate Procurement & Leasing', 'On-site Installation & Data Migration']
    },
    {
      id: 'peripherals-accessories',
      title: 'Peripherals & Accessories',
      description: 'Optimizing professional workspaces with high-quality monitors, input devices, and connectivity hubs.',
      icon: Keyboard,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.05.31%20AM.jpeg',
      details: 'A productive workspace requires more than just a computer. We supply the essential ecosystem that drives efficiency. From high-resolution 4K and curved monitors for multitasking to ergonomic mechanical keyboards and precision mice that reduce strain. We also equip conference rooms with high-fidelity audio-video systems, noise-canceling headsets for remote collaboration, and universal USB-C docking stations for seamless connectivity.',
      features: ['4K, IPS & Curved Business Monitors', 'Ergonomic Keyboards & Precision Mice', 'Universal Thunderbolt & USB-C Docks', 'HD Webcams & Conference Room Solutions']
    },
    {
      id: 'custom-builds',
      title: 'Custom Builds',
      description: 'Purpose-built high-performance machines for gaming, 3D rendering, AI training, and specialized industrial tasks.',
      icon: Cpu,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.10.37%20AM.jpeg',
      details: 'When off-the-shelf commercial solutions fall short, our Custom Build division delivers. We engineer bespoke rigs tailored strictly to your software requirements. This includes liquid-cooled workstations for silence and thermal management, multi-GPU setups for deep learning and rendering, and overclocked systems for competitive gaming centers. Every build undergoes rigorous 72-hour stress testing before delivery.',
      features: ['NVIDIA RTX 40-Series & Quadro GPUs', 'Custom Liquid Cooling Loops', 'High-Speed DDR5 & ECC Memory', 'Stress-Tested for Stability & Thermals']
    },
    {
      id: 'electronic-components',
      title: 'Electronic Components',
      description: 'Global sourcing of reliable semiconductors, passives, and electromechanical parts for manufacturing and repair.',
      icon: CircuitBoard,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.12.39%20AM.jpeg',
      details: 'We bridge the gap in your supply chain. Whether you need microcontrollers for IoT device manufacturing, specific industrial sensors for automation lines, or hard-to-find obsolete components to repair legacy machinery, our global network ensures timely delivery. We strictly adhere to quality control standards, verifying authenticity and providing full traceability for all sourced components.',
      features: ['Semiconductors, ICs & Microcontrollers', 'Industrial IoT Sensors & Modules', 'Obsolete & Hard-to-Find Part Sourcing', 'Authenticity Verification & Traceability']
    },
    {
      id: 'servers-equipment',
      title: 'Servers & Equipment',
      description: 'Scalable data center infrastructure including rack servers, storage arrays, and enterprise-grade networking.',
      icon: Server,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.08.36%20AM.jpeg',
      details: 'Build a resilient digital backbone for your organization. We provide scalable rack, tower, and blade servers tailored for virtualization and database management. Our networking solutions include high-speed Layer 3 switches, enterprise routers, and next-gen firewalls from brands like Cisco, Ubiquiti, and Dell EMC. Our team also assists with server room design, thermal management, and structured cabling installation.',
      features: ['Rack, Tower & Blade Servers', 'NAS & SAN Enterprise Storage', 'Layer 3 Switches, Routers & Firewalls', 'Structured Cabling & Rack Installation']
    }
  ],
  software: [
    {
      id: 'operating-systems',
      title: 'Operating Systems & Office Suites',
      description: 'Licensing and installation for Windows, macOS, Linux, Microsoft Office, Google Workspace, and more.',
      icon: AppWindow,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.16.17%20AM.jpeg',
      details: 'Ensure your infrastructure is secure, compliant, and up-to-date with genuine software licensing. We manage Volume Licensing for Microsoft Windows 11 Enterprise and Windows Server, facilitate the deployment of Red Hat Enterprise Linux for mission-critical servers, and handle MDM solutions for macOS fleets. We also provide support for legacy OS virtualization needed for specialized industrial equipment.',
      features: ['Microsoft Volume Licensing (Open/CSP)', 'Red Hat Enterprise & Ubuntu Server', 'MacOS Device Management (MDM)', 'Legacy OS Support & Virtualization']
    },
    {
      id: 'security-software',
      title: 'Antivirus & Security Software',
      description: 'Robust protection against malware, ransomware, and cyber threats to keep your data safe.',
      icon: ShieldCheck,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.18.13%20AM.jpeg',
      details: 'In an era of sophisticated cyber attacks, reactive security is not enough. We deploy proactive defense mechanisms including top-tier Endpoint Detection and Response (EDR), Data Loss Prevention (DLP) tools, and advanced firewall software. We partner with leaders like Bitdefender, Sophos, and Symantec to ensure your intellectual property, customer data, and internal communications remain secure from ransomware and phishing.',
      features: ['Endpoint Detection & Response (EDR)', 'Ransomware & Malware Protection', 'Firewall, VPN & Network Security', 'Data Encryption & DLP Solutions']
    },
    {
      id: 'business-management',
      title: 'Business Management Software',
      description: 'CRM, ERP, accounting software, and project management tools to streamline your business processes.',
      icon: Briefcase,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.21.46%20AM.jpeg',
      details: 'Digitalize and automate your core business processes. We consult, license, and implement industry-standard software suites. This includes Accounting software (Tally, QuickBooks), Customer Relationship Management (Salesforce, Zoho CRM), and Enterprise Resource Planning systems (SAP, Oracle NetSuite). We ensure these tools are integrated seamlessly to allow data to flow between sales, finance, and inventory departments.',
      features: ['ERP Implementation & Consultation', 'CRM Setup & Customization', 'Accounting, Billing & Invoicing Tools', 'HRMS & Payroll Automation Systems']
    },
    {
      id: 'custom-development',
      title: 'Custom Software Development',
      description: 'Bespoke software tailored to your unique business requirements, from web applications to specialized tools.',
      icon: Code,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.23.47%20AM.jpeg',
      details: 'Your business is unique, and off-the-shelf software doesn\'t always fit. Our in-house development team builds secure, scalable, and custom applications using modern tech stacks like React, Node.js, Python, and Flutter. From internal dashboards and automation scripts to customer-facing mobile apps and eCommerce platforms, we handle the full lifecycle: requirement gathering, UI/UX design, development, testing, and deployment.',
      features: ['Full-Stack Web & Mobile App Development', 'API Development & System Integration', 'UI/UX Design & Prototyping', 'Agile Methodology & Ongoing Support']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Setup and management of cloud-based services for storage, collaboration, and application hosting.',
      icon: Cloud,
      image: 'https://698cd7bfb7349d44aaf1f497.imgix.net/WhatsApp%20Image%202026-02-12%20at%201.21.03%20AM.jpeg',
      details: 'Transition to the cloud with confidence. We analyze your on-premise infrastructure and execute seamless migrations to public, private, or hybrid clouds. Our certified experts manage environments on AWS, Microsoft Azure, and Google Cloud Platform. Services include setting up auto-scaling architectures, configuring CI/CD pipelines for developers, implementing disaster recovery plans, and optimizing cloud costs.',
      features: ['AWS, Azure & GCP Infrastructure', 'Serverless Architecture & Microservices', 'Automated Backups & Disaster Recovery', 'Cloud Cost Optimization & Monitoring']
    }
  ]
};