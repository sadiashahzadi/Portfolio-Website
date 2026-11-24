/**
 * Editable portfolio content for Sadia Shahzadi.
 * Update text, links, or image paths (/assets/...) here without touching UI components.
 * All image files reside in /public/assets/ organized by folder:
 *   - /public/assets/websites/
 *   - /public/assets/social/
 *   - /public/assets/design/
 *   - /public/assets/documents/
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'coordination' | 'web' | 'social' | 'design' | 'video' | 'ecommerce';
}

export interface WebsiteProject {
  id: string;
  name: string;
  url: string;
  displayDomain: string;
  description: string;
  techStack: string[];
  /** Live screenshot service URL; falls back cleanly to a browser-window mockup if unavailable */
  screenshotUrl: string;
  /** Optional local override image path in /assets/websites/ */
  localFallbackImage?: string;
  highlights: string[];
  accentTone: 'teal' | 'slate' | 'emerald';
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
  alt: string;
  client?: string;
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide';
}

export interface LiveProfileLink {
  id: string;
  label: string;
  url: string;
}

export interface AdminWorkItem {
  id: string;
  title: string;
  description: string;
  icon: 'attendance' | 'excel' | 'reports' | 'events' | 'exams';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  current?: boolean;
}

export interface SkillGroup {
  id: string;
  category: string;
  items: string[];
}

export const portfolioContent = {
  navigation: {
    brand: 'Sadia Shahzadi',
    links: [
      {label: 'About', href: '#about'},
      {label: 'Services', href: '#services'},
      {label: 'Websites', href: '#websites'},
      {label: 'Portfolio', href: '#social-media'},
      {label: 'Experience', href: '#experience'},
    ] as NavItem[],
    cta: {
      label: 'Contact',
      href: '#contact',
    },
  },

  hero: {
    name: 'SADIA SHAHZADI',
    title: 'QEC & Academic Administration',
    subtitle:
      'Computer Science Educator · Full-Stack Developer · Digital Marketing Specialist',
    summary:
      'Supporting educational institutions with structured quality assurance, academic record-keeping, and classroom instruction—alongside full-stack web development and digital media execution.',
    primaryAction: {
      label: 'View My Work',
      href: '#websites',
    },
    pillars: [
      {
        label: 'Academic Operations',
        detail: 'QEC compliance, attendance registers, Excel reporting & LMS coordination',
      },
      {
        label: 'Computer Science Instruction',
        detail: 'Structured curriculum delivery, practical labs & examination assessment',
      },
      {
        label: 'Digital & Web Systems',
        detail: 'Full-stack TypeScript/React sites, institutional branding & social campaigns',
      },
    ],
  },

  contactInfo: {
    phone: '+92-345-0474651',
    whatsappUrl: 'https://wa.me/923450474651',
    location: 'Gujrat, Punjab, Pakistan',
    email: 'sadiashahzadi760@gmail.com',
  },

  about: {
    heading: 'About Me',
    paragraphs: [
      'Academic and administrative professional with experience in the Quality Enhancement Cell (QEC) at Mukabbir University of Science & Technology (MUST), Gujrat, where I monitor classes, maintain attendance and academic records on Excel, and coordinate quality assurance activities. I have also worked as an Office Assistant handling lectures, attendance, LMS management, and institutional reports.',
      'Alongside academic administration, I teach Computer Science and work as a freelance digital professional delivering social media management, paid ad campaigns, e-commerce support, full-stack web development, and print/graphic design.',
    ],
    education: {
      fullText:
        'Bachelor of Science in Computer Science (BSCS), Virtual University of Pakistan, 2022 - 2026',
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Virtual University of Pakistan',
      period: '2022 - 2026',
    },
  },

  services: {
    heading: 'Services',
    intro:
      'Combining institutional academic coordination with practical technical and digital execution.',
    items: [
      {
        id: 'academic-admin',
        title: 'Academic & Administrative Coordination',
        description:
          'QEC monitoring, attendance and academic records on Excel, administrative reports, LMS handling, and campus event coordination.',
        icon: 'coordination',
      },
      {
        id: 'web-dev',
        title: 'Web Development',
        description:
          'Responsive, fast institutional and business websites built with React, TypeScript, Node.js, Express, MySQL, and Tailwind CSS.',
        icon: 'web',
      },
      {
        id: 'social-ads',
        title: 'Social Media Management & Paid Ads',
        description:
          'Content calendars, visual post design, scheduled publishing, and targeted paid ad campaigns tailored to schools and clinics.',
        icon: 'social',
      },
      {
        id: 'graphic-print',
        title: 'Graphic & Print Design',
        description:
          'Clean print-ready layouts for institutional posters, flyers, and social media visuals.',
        icon: 'design',
      },
      {
        id: 'video-content',
        title: 'Video Editing & Content Creation',
        description:
          'Short-form reels, educational clips, institutional highlights, and visual storytelling for digital channels.',
        icon: 'video',
      },
      {
        id: 'ecommerce',
        title: 'E-commerce Services & Training',
        description:
          'Store setup, product research, and operational guidance across Shopify, Amazon, eBay, Alibaba, and dropshipping workflows.',
        icon: 'ecommerce',
      },
    ] as ServiceItem[],
  },

  websites: {
    heading: 'Websites I Built',
    intro:
      'Production websites designed, developed, and deployed for local educational and healthcare organizations in Gujrat.',
    items: [
      {
        id: 'giggles-n-glow',
        name: 'Giggles n Glow Day Care',
        url: 'https://www.gigglesnglow.org',
        displayDomain: 'gigglesnglow.org',
        description:
          'Early childhood development and day care center in Gujrat combining structured early learning with play for ages 1–5, featuring program stages, gallery, testimonials, blog updates, and parent booking calls to action.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
        screenshotUrl:
          'https://image.thum.io/get/width/1200/crop/800/https://www.gigglesnglow.org',
        highlights: ['Programs for Ages 1–5', 'Gallery & Blog', 'Booking Calls to Action'],
        accentTone: 'teal',
      },
      {
        id: 'dental-consultant',
        name: 'Dental Consultant',
        url: 'https://www.dentalconsultant.clinic',
        displayDomain: 'dentalconsultant.clinic',
        description:
          'Multi-specialist dental clinic website in Gujrat presenting dental implants, pain-free root canal treatment, braces, clear aligners, specialist doctor profiles, clinic hours, and patient appointment inquiries.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'SEO & Schema'],
        screenshotUrl:
          'https://image.thum.io/get/width/1200/crop/800/https://www.dentalconsultant.clinic',
        highlights: ['Specialist Profiles', 'Treatment Directory', 'Clinic Appointments'],
        accentTone: 'slate',
      },
      {
        id: 'g-academy',
        name: 'G. Academy',
        url: 'https://www.gacademy.education',
        displayDomain: 'gacademy.education',
        description:
          'Coaching academy platform in Gujrat showcasing concept-based preparation across Matric, Intermediate (Pre-Medical, Pre-Engineering, ICS, Commerce), Cambridge O Level, A Level, and university-level academic streams.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Hosting'],
        screenshotUrl:
          'https://image.thum.io/get/width/1200/crop/800/https://www.gacademy.education',
        highlights: ['Matric & Intermediate', 'O Level & A Level', 'Academic Admissions'],
        accentTone: 'emerald',
      },
    ] as WebsiteProject[],
  },

  socialMedia: {
    heading: 'Social Media Management',
    intro:
      'Managed end-to-end social media for Dental Consultant (both clinic branches): monthly content planning, post design, publishing and paid ad campaigns.',
    groups: [
      {
        id: 'dental-consultant-social',
        clientName: 'Dental Consultant',
        subtitle:
          'Content planning, post design, publishing, and paid ad campaigns across both clinic branches',
        posts: [
          {
            id: 'dc-post-1',
            title: 'Dental imaging awareness post',
            caption: 'Dental imaging awareness post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_d92fb887.png',
            alt: 'Dental Consultant social media design: Dental imaging awareness post',
          },
          {
            id: 'dc-post-2',
            title: 'Doctor introduction and services post',
            caption: 'Doctor introduction and services post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_ef1b0c15.png',
            alt: 'Dental Consultant social media design: Doctor introduction and services post',
          },
          {
            id: 'dc-post-3',
            title: 'Clinic services and contact banner',
            caption: 'Clinic services and contact banner',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_2eedd5f3.png',
            alt: 'Dental Consultant social media design: Clinic services and contact banner',
          },
          {
            id: 'dc-post-4',
            title: 'Oral hygiene tips post',
            caption: 'Oral hygiene tips post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_5df64d3e.png',
            alt: 'Dental Consultant social media design: Oral hygiene tips post',
          },
          {
            id: 'dc-post-5',
            title: 'Root canal treatment awareness post',
            caption: 'Root canal treatment awareness post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_50319af5.png',
            alt: 'Dental Consultant social media design: Root canal treatment awareness post',
          },
          {
            id: 'dc-post-6',
            title: 'Dental wellness journey post',
            caption: 'Dental wellness journey post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_c932100d.png',
            alt: 'Dental Consultant social media design: Dental wellness journey post',
          },
          {
            id: 'dc-post-7',
            title: '"5 signs to visit your dentist" post',
            caption: '"5 signs to visit your dentist" post',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_93c8e868.png',
            alt: 'Dental Consultant social media design: 5 signs to visit your dentist post',
          },
          {
            id: 'dc-post-8',
            title: 'Complete services flyer',
            caption: 'Complete services flyer',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_7d005e03.png',
            alt: 'Dental Consultant social media design: Complete services flyer',
          },
          {
            id: 'dc-post-9',
            title: 'Social media QR connect poster',
            caption: 'Social media QR connect poster',
            category: 'Dental Consultant',
            client: 'Dental Consultant',
            image: '/assets/aistudio/image_9b5cc33a.png',
            alt: 'Dental Consultant social media design: Social media QR connect poster',
          },
        ] as GalleryItem[],
      },
    ],
    livePages: {
      heading: 'See the live pages',
      links: [
        {
          id: 'live-instagram',
          label: 'Instagram: @dentalconsultantsclinic',
          url: 'https://www.instagram.com/dentalconsultantsclinic/',
        },
        {
          id: 'live-facebook',
          label: 'Facebook',
          url: 'https://www.facebook.com/profile.php?id=61591329785123',
        },
        {
          id: 'live-google',
          label: 'Google profile: "Dental Consultants, Gujrat"',
          url: 'https://www.google.com/search?q=Dental+Consultants+Gujrat',
        },
        {
          id: 'live-website',
          label: 'Website',
          url: 'https://www.dentalconsultant.clinic',
        },
      ] as LiveProfileLink[],
      note: "Search 'Dental Consultants Gujrat' on Google, Instagram or Facebook to see the live pages.",
    },
  },

  graphicDesign: {
    heading: 'Graphic & Print Design',
    intro:
      'Print-ready flyers and posters designed for Dental Consultant. Click any piece to inspect it in full view.',
    categories: ['All', 'Posters / Flyers'] as const,
    items: [
      {
        id: 'design-services-flyer',
        title: 'Complete services flyer',
        caption: 'Dental Consultant — clinic services print & digital flyer',
        category: 'Posters / Flyers',
        client: 'Dental Consultant',
        image: '/assets/aistudio/image_7d005e03.png',
        alt: 'Dental Consultant complete services flyer designed by Sadia Shahzadi',
      },
      {
        id: 'design-qr-poster',
        title: 'Social media QR connect poster',
        caption: 'Dental Consultant — in-clinic QR connect poster',
        category: 'Posters / Flyers',
        client: 'Dental Consultant',
        image: '/assets/aistudio/image_9b5cc33a.png',
        alt: 'Dental Consultant social media QR connect poster designed by Sadia Shahzadi',
      },
    ] as GalleryItem[],
  },

  academicAdmin: {
    heading: 'Academic & Administrative Work',
    intro:
      'Day-to-day operational discipline supporting faculty, students, and quality enhancement cells across school and university environments.',
    responsibilities: [
      {
        id: 'class-monitoring',
        title: 'Attendance Tracking & Class Monitoring',
        description:
          'Daily floor monitoring of scheduled lectures and systematic student attendance tracking.',
        icon: 'attendance',
      },
      {
        id: 'excel-records',
        title: 'Academic Records on Excel',
        description:
          'Structured spreadsheets for attendance summaries, internal assessments, class schedules, and department compliance logs.',
        icon: 'excel',
      },
      {
        id: 'reports-lms',
        title: 'Institutional Reports & LMS Handling',
        description:
          'Drafting periodic QEC and administrative reports, uploading course materials, and managing Learning Management System workflows.',
        icon: 'reports',
      },
      {
        id: 'event-coordination',
        title: 'Campus Event Coordination',
        description:
          'Planning schedules, student participation, stage logistics, and visual collateral—including a 3-day Independence Day celebration at MUST.',
        icon: 'events',
      },
      {
        id: 'exam-duties',
        title: 'Examination Supervision & Grading',
        description:
          'Served as Examiner at RCIS: preparing assessment schedules, overseeing exam conduct, checking answer scripts, and compiling results.',
        icon: 'exams',
      },
    ] as AdminWorkItem[],
    documentSamples: [
      {
        id: 'doc-qec-review',
        title: 'QEC Program Review & Assessment Forms',
        caption: 'Standardized QA review checklist & course log (blank template)',
        category: 'QEC Documentation',
        image: '/assets/documents/qec-academic-review-sample.jpg',
        alt: 'Blank QEC academic program review and assessment data collection forms on a clipboard',
      },
      {
        id: 'doc-attendance',
        title: 'Monthly Attendance & Monitoring Register',
        caption: 'Anonymized Excel structure for section-wise tracking',
        category: 'Excel Tracking',
        image: '/assets/documents/attendance-tracking-register.svg',
        alt: 'Anonymized monthly attendance and class monitoring spreadsheet template without student names',
      },
      {
        id: 'doc-exam-schedule',
        title: 'Examination Supervision & Grading Checklist',
        caption: 'Pre-exam readiness & marks verification workflow',
        category: 'Examination Admin',
        image: '/assets/documents/examination-duty-schedule.svg',
        alt: 'Anonymized examination assessment and duty schedule workflow template',
      },
    ] as GalleryItem[],
  },

  experience: {
    heading: 'Experience',
    intro:
      'Chronological track record across university quality assurance, school administration, teaching, and digital services.',
    items: [
      {
        id: 'exp-must',
        role: 'Floor Coordinator & Office Assistant (QEC)',
        organization: 'Mukabbir University of Science & Technology (MUST)',
        location: 'Gujrat',
        period: 'Feb 2026 – Present',
        current: true,
        highlights: [
          'Monitor daily classes and maintain attendance and academic records on Microsoft Excel.',
          'Coordinate Quality Enhancement Cell (QEC) activities and prepare formal academic documents.',
          'Prepare lectures, record attendance, handle the Learning Management System (LMS) and maintain reports.',
          'Organized campus events, including a 3-day Independence Day celebration.',
        ],
      },
      {
        id: 'exp-gacademy',
        role: 'Computer Teacher (Part-time)',
        organization: 'G. Academy',
        location: 'Gujrat',
        period: 'Oct 2025 – Present',
        current: true,
        highlights: [
          'Teach Computer Science to Grade 1-8, Matric, Intermediate, O-Level and A Level students',
          'Prepare lectures, notes and assessments.',
        ],
      },
      {
        id: 'exp-rcis',
        role: 'Computer Teacher, Examiner & Social Media Manager',
        organization: 'Royal Cambridge International School (RCIS)',
        location: 'Gujrat',
        period: 'Mar 2025 – Feb 2026',
        highlights: [
          'Taught Computer Science to high-level Matric students.',
          'Served as Examiner: conducted examinations and assessed student papers.',
          "Managed the school's social media accounts, including content planning and posting.",
        ],
      },
      {
        id: 'exp-darearqam',
        role: 'Class Teacher',
        organization: 'Dar-e-Arqam School, Mukabbir Campus',
        location: 'Gujrat',
        period: 'May 2024 – Mar 2025',
        highlights: ['Taught Grade 2 students.'],
      },
      {
        id: 'exp-freelance',
        role: 'Freelance Digital Marketing, Design, Web Development & E-commerce',
        organization: 'Independent Consultant (Online)',
        period: 'Ongoing',
        current: true,
        highlights: [
          'Built responsive websites for local schools, clinics, and daycare centers using React, TypeScript, Node.js, and Tailwind CSS.',
          'Managed social media pages, paid ad campaigns, print/graphic design, and e-commerce store workflows.',
        ],
      },
    ] as ExperienceItem[],
  },

  skills: {
    heading: 'Skills',
    groups: [
      {
        id: 'skills-admin',
        category: 'Administration',
        items: [
          'Class monitoring',
          'Quality assurance (QEC)',
          'Attendance & records',
          'Academic reports',
          'Documentation',
          'Event coordination',
          'LMS handling',
        ],
      },
      {
        id: 'skills-tools',
        category: 'Tools',
        items: [
          'Microsoft Office Suite',
          'Microsoft Excel',
          'Google Workspace',
          'Zoom',
          'Google Meet',
          'Canva',
          'PDF editing',
        ],
      },
      {
        id: 'skills-web',
        category: 'Web',
        items: [
          'React',
          'TypeScript',
          'Node.js',
          'Express',
          'MySQL',
          'Tailwind CSS',
          'Hostinger',
          'GoDaddy',
        ],
      },
      {
        id: 'skills-marketing',
        category: 'Marketing & Design',
        items: [
          'Social media management',
          'Paid ads',
          'Print design',
          'Video editing',
          'E-commerce workflows',
        ],
      },
    ] as SkillGroup[],
  },

  contact: {
    heading: 'Get in Touch',
    intro:
      'Open to Academic Coordinator, QEC, and School Administration opportunities in Gujrat, as well as freelance web development, social media management, and design projects.',
  },
};
