/**
 * Editable portfolio content for Sadia Shahzadi.
 * Update text, links, or media paths here without touching UI components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface WebsiteProject {
  id: string;
  name: string;
  url: string;
  displayDomain: string;
  description: string;
  techStack: string[];
  screenshotUrl: string;
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
}

export interface LiveProfileLink {
  id: string;
  label: string;
  url: string;
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

export const portfolioContent = {
  navigation: {
    brand: 'Sadia Shahzadi',
    links: [
      {label: 'Websites', href: '#websites'},
      {label: 'Social Media', href: '#social-media'},
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
      'Academic and administrative professional with experience in the Quality Enhancement Cell (QEC) at Mukabbir University of Science & Technology (MUST), Gujrat—alongside teaching Computer Science, full-stack web development, and digital marketing.',
    primaryAction: {
      label: 'View My Work',
      href: '#websites',
    },
    secondaryAction: {
      label: 'Download CV',
      href: '/cv.pdf',
    },
    educationText:
      'Bachelor of Science in Computer Science (BSCS), Virtual University of Pakistan, 2022 - 2026',
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
    posts: [
      {
        id: 'post-dental-imaging',
        title: 'Digital dental imaging awareness post',
        caption: 'Digital dental imaging awareness post',
        category: 'Social Media Post',
        client: 'Dental Consultant',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.07_AM_7bc2524e.jpeg',
        alt: 'Dental Consultant social media post explaining digital dental imaging and X-rays',
      },
      {
        id: 'post-orthodontic',
        title: 'Orthodontic treatment promotion',
        caption: 'Orthodontic treatment promotion',
        category: 'Social Media Post',
        client: 'Dental Consultant',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.08_AM_45e9c5d8.jpeg',
        alt: 'Dental Consultant promotional post for orthodontic braces and aligners',
      },
      {
        id: 'post-sensitive-teeth',
        title: 'Sensitive teeth awareness & care tips',
        caption: 'Sensitive teeth awareness & care tips',
        category: 'Educational Post',
        client: 'Dental Consultant',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.07_AM__1__ee47fdf0.jpeg',
        alt: 'Dental Consultant educational post on causes and care for sensitive teeth',
      },
      {
        id: 'post-services-flyer',
        title: 'Complete services flyer',
        caption: 'Complete services flyer',
        category: 'Flyer',
        client: 'Dental Consultant',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.05_AM_f601db37.jpeg',
        alt: 'Dental Consultant complete services flyer featuring treatments and clinic contact details',
      },
      {
        id: 'post-qr-connect',
        title: 'Social media QR connect poster',
        caption: 'Social media QR connect poster',
        category: 'QR Poster',
        client: 'Dental Consultant',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_8.25.20_AM_737f58a9.jpeg',
        alt: 'Dental Consultants connect with us poster featuring QR codes for Instagram, Facebook, Website, and Google',
      },
      {
        id: 'post-zr-xrays',
        title: 'Dental X-rays benefits post',
        caption: 'Dental X-rays benefits post',
        category: 'Educational Post',
        client: 'ZR Dental Clinic',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.06_AM__1__edd760dc.jpeg',
        alt: 'ZR Dental Clinic infographic highlighting benefits of dental X-rays',
      },
      {
        id: 'post-zr-flyer',
        title: 'Clinic services & specialist flyer',
        caption: 'Clinic services & specialist flyer',
        category: 'Flyer',
        client: 'ZR Dental Clinic',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.05_AM__1__04ccef7f.jpeg',
        alt: 'ZR Dental Clinic services flyer featuring Dr. Muhammad Abdullah and treatments',
      },
      {
        id: 'post-zr-standee',
        title: 'Clinic roll-up standee banner',
        caption: 'Clinic roll-up standee banner',
        category: 'Standee Banner',
        client: 'ZR Dental Clinic',
        image: '/assets/aistudio/WhatsApp_Image_2026-11-25_at_8.16.06_AM_52a3f27f.jpeg',
        alt: 'ZR Dental Clinic roll-up standee design showcasing clinic services and specialist profile',
      },
    ] as GalleryItem[],
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

  contact: {
    heading: 'Get in Touch',
    intro:
      'Open to Academic Coordinator, QEC, and School Administration opportunities in Gujrat, as well as freelance web development, social media management, and design projects.',
  },
};
