export interface NavLink {
  label: string;
  path: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  note?: string;
}

export interface ServiceSection {
  title: string;
  intro?: string;
  bullets?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  eyebrow?: string;
  summary: string;
  detailIntro: string;
  highlights: string[];
  sections: ServiceSection[];
}

export interface PartnerItem {
  name: string;
  logo: string;
  description: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Partners', path: '/partners' },
  { label: 'Contact', path: '/contact' }
];

export const companyProfile = {
  brand: 'SRISIMHA TECH',
  legalName: 'SRISIMHA TECH CONSULTANCY LLC',
  tagline: 'Reliable system delivery for validated, inspection-ready operations.',
  heroSummary:
    'We help life sciences and regulated teams implement, validate, support, and improve business-critical platforms with a practical compliance-first mindset.',
  overview:
    'SRISIMHA TECH CONSULTANCY LLC is a U.S.-based IT consulting firm dedicated to delivering reliable and compliant technology solutions. We specialize in system reviews, implementation, validation, and training to ensure your business operates efficiently and securely.',
  mission:
    'To empower businesses with robust IT systems that meet regulatory standards and drive operational success.',
  whyChooseUs: [
    'Experienced consultants with industry expertise',
    'Tailored solutions for your business needs',
    'Commitment to quality and compliance',
    'Knowledge transfer that supports long-term sustainability'
  ],
  focusAreas: ['Quality', 'Regulatory', 'Clinical', 'Manufacturing'],
  operatingPrinciples: [
    'Risk-based delivery aligned to GxP expectations',
    'Pragmatic use of platform-native capabilities',
    'Clear documentation, validation traceability, and release readiness',
    'Flexible engagement models from project delivery to ongoing support'
  ],
  metrics: [
    { value: 'U.S.', label: 'Consulting footprint' },
    { value: 'GxP', label: 'Compliance-first delivery' },
    { value: 'Veeva Vault', label: 'Specialized service line' },
    { value: 'End-to-end', label: 'Lifecycle support model' }
  ],
  engagementModels: [
    'Project-based implementations',
    'Validation-only or remediation support',
    'Managed services and post-go-live support',
    'Staff augmentation with Veeva-experienced consultants'
  ],
  website: 'https://www.sstechconsulting-us.com',
  address: '22226 Fulmer Ave, Clarksburg, Maryland 20871, USA',
  contactChannels: [
    {
      label: 'Website',
      value: 'www.sstechconsulting-us.com',
      href: 'https://www.sstechconsulting-us.com'
    },
    {
      label: 'Operations Email',
      value: 'operations@sstechconsulting-us.com',
      href: 'mailto:operations@sstechconsulting-us.com'
    },
    {
      label: 'Business Email',
      value: 'lalitha.bobba@sstechconsulting-us.com',
      href: 'mailto:lalitha.bobba@sstechconsulting-us.com'
    },
    {
      label: 'Inquiry Inbox',
      value: 'srisimha.techconsultancy@gmail.com',
      href: 'mailto:srisimha.techconsultancy@gmail.com',
      note: 'Primary inbox used by the website contact form'
    },
    {
      label: 'Primary Phone',
      value: '+1 (240) 406-6571',
      href: 'tel:+12404066571'
    },
    {
      label: 'Support Phone',
      value: '+1 (510) 289-9724',
      href: 'tel:+15102899724'
    }
  ],
  partnerIntro:
    'We collaborate with leading technology providers and industry experts to deliver the best solutions for our clients.'
};

export const services: ServiceItem[] = [
  {
    id: 'veeva-vault',
    title: 'Professional Services for Veeva Vault',
    eyebrow: 'Document Management and Validation Management',
    summary:
      'End-to-end Veeva Vault services for compliant document, quality, and validation processes across regulated GxP environments.',
    detailIntro:
      'We offer end-to-end professional services for Veeva Vault, helping life sciences organizations implement, optimize, and sustain compliant, efficient, and scalable content and quality processes. Our services are designed to accelerate value realization while ensuring regulatory compliance across GxP environments.',
    highlights: [
      'Vault QualityDocs and Vault Platform implementation support',
      'Migration, metadata readiness, reporting, and workflow optimization',
      'Risk-based validation aligned to SaaS delivery and continuous releases'
    ],
    sections: [
      {
        title: 'Our Veeva Vault Expertise',
        intro:
          'Our team combines deep Veeva Vault platform knowledge with hands-on life sciences domain experience, enabling support across Quality, Regulatory, Clinical, and Manufacturing functions.',
        bullets: [
          'Industry best practices aligned with FDA, EMA, and global regulatory expectations',
          'Veeva-native design choices that minimize customization and long-term support burden'
        ]
      },
      {
        title: 'Veeva Vault Document Management Services',
        intro:
          'We help organizations establish a robust and compliant document management foundation using Veeva Vault QualityDocs and Vault Platform capabilities.'
      },
      {
        title: 'Vault Document Management Implementation',
        bullets: [
          'Requirements gathering and solution design',
          'Vault configuration for document types, lifecycles, metadata, and security',
          'Workflow design and optimization',
          'User role and permission modeling'
        ]
      },
      {
        title: 'Content Migration and Data Readiness',
        bullets: [
          'Legacy system assessment and migration strategy',
          'Metadata mapping and data cleansing',
          'Migration execution and validation support'
        ]
      },
      {
        title: 'Process Optimization',
        bullets: [
          'SOP authoring, review, approval, and effective date management',
          'Change control and controlled document workflows',
          'Periodic review and archival strategies'
        ]
      },
      {
        title: 'Integration and Reporting',
        bullets: [
          'Integration with upstream and downstream systems where applicable',
          'Vault reporting and dashboards for document status and compliance metrics'
        ]
      },
      {
        title: 'Document Management Business Value',
        bullets: [
          'Improved document lifecycle control and traceability',
          'Faster review and approval cycles',
          'Reduced audit findings related to documentation',
          'Scalable platform aligned with future Vault applications'
        ]
      },
      {
        title: 'Veeva Vault Validation Management Services',
        intro:
          'We provide risk-based, compliant validation services tailored to the Veeva Vault ecosystem, ensuring systems are inspection-ready while avoiding unnecessary documentation overhead.'
      },
      {
        title: 'Validation Approach',
        bullets: [
          'GAMP 5 risk-based principles',
          'FDA 21 CFR Part 11 and Annex 11 expectations',
          'Veeva-recommended validation practices'
        ]
      },
      {
        title: 'Validation Strategy and Planning',
        bullets: [
          'Validation Master Plan support',
          'Risk assessment and system impact analysis',
          'Validation approach aligned to SaaS delivery and the Veeva release model'
        ]
      },
      {
        title: 'Validation Documentation',
        bullets: [
          'User Requirements Specifications',
          'Functional and configuration specifications where applicable',
          'IQ, OQ, PQ, or scripted testing aligned to Vault standards',
          'Requirements Traceability Matrix'
        ]
      },
      {
        title: 'Test Execution and Defect Management',
        bullets: [
          'Configuration and workflow testing',
          'Security and access control verification',
          'Issue tracking, resolution, and re-testing'
        ]
      },
      {
        title: 'Release and Change Validation',
        bullets: [
          'Impact assessments for Veeva Vault releases',
          'Change control and regression testing support',
          'Ongoing validation maintenance'
        ]
      },
      {
        title: 'Validation Business Value',
        bullets: [
          'Inspection-ready Vault environment',
          'Reduced validation effort through risk-based testing',
          'Faster deployment timelines',
          'Sustainable validation model for continuous releases'
        ]
      },
      {
        title: 'Flexible Engagement Models',
        bullets: companyProfile.engagementModels
      },
      {
        title: 'Why Choose Us',
        bullets: [
          'Proven experience delivering Veeva Vault document and validation solutions',
          'Strong understanding of regulated manufacturing and quality environments',
          'Pragmatic, risk-based approach focused on compliance and efficiency',
          'Emphasis on knowledge transfer and long-term sustainability'
        ]
      }
    ]
  },
  {
    id: 'periodic-reviews',
    title: 'Periodic Reviews for IT Computer Systems',
    summary:
      'We conduct regular audits to ensure your IT infrastructure remains secure, compliant, and optimized for performance.',
    detailIntro:
      'Our periodic reviews give you a structured way to confirm system fitness, document compliance, and identify operational risks before they become audit issues.',
    highlights: [
      'Structured system health and control reviews',
      'Evidence review for access, backup, change, and incident controls',
      'Actionable remediation guidance for ongoing compliance'
    ],
    sections: [
      {
        title: 'What We Deliver',
        bullets: [
          'System inventory and compliance health checks',
          'Review of access, backup, change, and incident records',
          'Gap assessments with practical remediation actions'
        ]
      },
      {
        title: 'Business Value',
        bullets: [
          'Stronger inspection readiness',
          'Clear visibility into aging risks and control weaknesses',
          'Improved confidence in ongoing system performance'
        ]
      }
    ]
  },
  {
    id: 'implementation-validation',
    title: 'IT Systems Implementation and Validation',
    summary:
      'From planning to deployment, we provide end-to-end support for implementing new systems and validating them against industry standards.',
    detailIntro:
      'We support implementation programs from requirements through release so new platforms are configured correctly, documented properly, and ready for regulated use.',
    highlights: [
      'Requirements-to-release implementation support',
      'Risk-based validation strategy and testing',
      'Cross-functional coordination for deployment readiness'
    ],
    sections: [
      {
        title: 'Implementation Support',
        bullets: [
          'Requirements gathering and vendor coordination',
          'Process mapping, configuration support, and deployment planning',
          'Stakeholder alignment across business and IT teams'
        ]
      },
      {
        title: 'Validation Support',
        bullets: [
          'Risk-based validation strategy and test planning',
          'Execution support for qualification and user acceptance activities',
          'Traceability, defect follow-up, and release readiness reviews'
        ]
      }
    ]
  },
  {
    id: 'system-support',
    title: 'IT System Support',
    summary:
      'Our team offers comprehensive troubleshooting and maintenance services to keep your systems running smoothly.',
    detailIntro:
      'We provide dependable support coverage to help teams resolve issues quickly, stabilize critical workflows, and maintain compliant day-to-day operations.',
    highlights: [
      'Issue triage, root-cause analysis, and change support',
      'Workflow, access, and configuration troubleshooting',
      'Sustained operational support after go-live'
    ],
    sections: [
      {
        title: 'Support Areas',
        bullets: [
          'Incident triage and root-cause analysis',
          'Change coordination and release support',
          'User access, workflow, and configuration troubleshooting'
        ]
      },
      {
        title: 'Business Value',
        bullets: [
          'Reduced downtime for business users',
          'Faster issue resolution and cleaner handoffs',
          'Sustained operational performance after go-live'
        ]
      }
    ]
  },
  {
    id: 'training',
    title: 'Training Material and Training Videos',
    summary:
      'We create custom training resources and video tutorials to help your team master new systems and processes.',
    detailIntro:
      'Training deliverables are tailored to your operating model so teams can adopt new systems faster and follow approved processes with confidence.',
    highlights: [
      'Role-based training material and SOP support',
      'Video walkthroughs for critical workflows',
      'Reusable onboarding assets for future teams'
    ],
    sections: [
      {
        title: 'Training Deliverables',
        bullets: [
          'Role-based user guides and SOP support',
          'Short-form video walkthroughs for key workflows',
          'Reusable onboarding materials for future hires'
        ]
      },
      {
        title: 'Business Value',
        bullets: [
          'Higher user adoption and fewer support tickets',
          'More consistent execution of validated processes',
          'Stronger retention of system knowledge across teams'
        ]
      }
    ]
  }
];

export const partners: PartnerItem[] = [
  {
    name: 'MacroGenics',
    logo: 'assets/partners/macroGenics.png',
    description:
      'A trusted client and partner relationship supporting regulated technology delivery in the life sciences space.'
  },
  {
    name: 'Veeva',
    logo: 'assets/partners/veeva.png',
    description:
      'A strategic platform ecosystem aligned with our Veeva Vault consulting, document management, and validation service offerings.'
  }
];

export function getServiceById(serviceId: string | null | undefined): ServiceItem {
  return services.find((service) => service.id === serviceId) ?? services[0];
}
