import { 
  Activity, 
  UserCheck, 
  ShieldCheck, 
  Move, 
  Brain, 
  HeartHandshake,
  Stethoscope,
  Sparkles,
  AlignVerticalJustifyCenter
} from 'lucide-react';

export const BRAND_NAME = "Optimal Chiropractic";
export const DOCTOR_NAME = "Dr. Jengis Zekirovski";

import ChiroAdjustment from './public/ChiropracticAdjustment.webp';
import ChiroAssessment from './public/ChiropracticAssessment.webp';
import PostureCorrection from './public/PostureCorrection.webp';
import Spinal from './public/SpinalOrthotics.webp';
import SpinalTherapy from './public/SpinalWellnessTherapy.webp';
import YStrap from './public/YStrapAdjustment.webp';
import ChiropracticDoctor from './public/ChiropracticDoctor.jpeg';  

import ChiropracticTreatment from './public/Chiropractic-assessment-treatement.webp';
import OrthoticTreatment from './public/Orthotic-therapy-treatment.webp';
import SpinalTreatment from './public/Spinal-wellness-therapy-treatment.webp';

export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Treatments', href: '#treatments' },
  { name: 'Stories', href: '#stories' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  headline: "Optimal Care. Optimal You.",
  rotatingSubHeadlines: [
    "Precision Chiropractic Care",
    "Advanced Spinal Correction",
    "Pain Relief Without Surgery",
    "Evidence-Based Treatment"
  ],
  cta: "Scroll to Explore"
};

export const ABOUT_CONTENT = {
  title: "The Doctor",
  subtitle: "Medical Authority & Human Trust",
  description: [
    `Led by ${DOCTOR_NAME}, ${BRAND_NAME} delivers evidence-based spinal care using advanced diagnostic methods and precision adjustment techniques.`,
    "Our mission is to restore alignment, relieve pain, and improve your overall quality of life  naturally, safely, and effectively. We believe that true wellness comes from a perfectly balanced nervous system."
  ],
  image: ChiropracticDoctor, // Placeholder for doctor's portrait
  philosophy: {
    title: "Our Philosophy",
    content: "We believe in the body's innate ability to heal itself. Our role is to remove the interference—the subluxations—that prevent your nervous system from functioning at its peak. By restoring structural integrity, we unlock your body's potential for optimal health.",
    points: [
      "Patient-Centered Care",
      "Holistic Approach",
      "Long-Term Wellness",
      "Education & Empowerment"
    ]
  },
  qualifications: [
    // {
    //   year: "2008",
    //   degree: "Doctor of Chiropractic",
    //   institution: "RMIT University"
    // },
    {
      year: "2020",
      degree: "Bachelor of Health Science",
      institution: "University of Melbourne"
    }
  ],
  team: [
    {
      name: "Dr. Sarah Jenkins",
      role: "Associate Chiropractor",
      image: "https://picsum.photos/400/500?grayscale&random=1"
    },
    {
      name: "Michael Chen",
      role: "Myotherapist",
      image: "https://picsum.photos/400/500?grayscale&random=2"
    },
    {
      name: "Jessica Alcott",
      role: "Practice Manager",
      image: "https://picsum.photos/400/500?grayscale&random=3"
    }
  ]
};

export const SERVICES_CONTENT = [
  {
    id: 1,
    title: "Chiropractic Adjustment",
    description: "Precise, gentle manual manipulations to restore joint mobility and optimize nervous system function.",
    detailedDescription: "Our chiropractic adjustments are the cornerstone of our practice. Using precise, low-force techniques, we target subluxations (misalignments) in the spine that interfere with nerve function. By restoring proper alignment, we reduce pain, improve range of motion, and enhance your body's natural ability to heal. We utilize a variety of techniques including Gonstead, Diversified, and Activator methods tailored to your specific needs and comfort level.",
    benefits: [
      "Immediate pain relief",
      "Improved joint mobility",
      "Reduced inflammation",
      "Enhanced nervous system function"
    ],
    image: ChiroAdjustment,
    icon: Move
  },
  {
    id: 2,
    title: "Chiropractic Assessment",
    description: "Comprehensive spinal analysis using state-of-the-art diagnostic technology to pinpoint the root cause of discomfort.",
    detailedDescription: "Before any treatment begins, we conduct a thorough chiropractic assessment. This involves a detailed health history, physical examination, posture analysis, and when necessary, digital X-rays. We use advanced diagnostic tools to detect spinal misalignments and nerve interference that may be the root cause of your symptoms. This data-driven approach ensures that your care plan is precise, safe, and effective.",
    benefits: [
      "Accurate diagnosis",
      "Personalized treatment plans",
      "Identification of hidden issues",
      "Baseline for progress tracking"
    ],
    image: ChiroAssessment,
    icon: Activity
  },
  {
    id: 3,
    title: "Spinal Orthotics",
    description: "Custom-fitted orthotic solutions designed to stabilize your foundation and correct postural imbalances.",
    detailedDescription: "Your feet are the foundation of your spine. Structural imbalances in the feet can lead to a chain reaction of issues up the legs, hips, and spine. We prescribe custom spinal orthotics that are molded to your unique foot structure. These orthotics provide the necessary support to stabilize your pelvis and spine, correcting postural distortions and preventing long-term wear and tear on your joints.",
    benefits: [
      "Improved posture",
      "Reduced lower back pain",
      "Enhanced athletic performance",
      "Prevention of foot deformities"
    ],
    image: Spinal,
    icon: UserCheck
  },
  {
    id: 4,
    title: "Y-Strap Adjustment",
    description: "A specialized technique for high-velocity, low-amplitude decompression of the cervical spine.",
    detailedDescription: "The Y-Strap is a specialized tool used to perform manual spinal decompression. It works by stretching the spine along the Y-axis (longitudinal axis) of the body. This high-velocity, low-amplitude movement creates a decompression effect that can be incredibly effective for releasing tension in the neck and upper back, hydrating spinal discs, and relieving pressure on compressed nerves.",
    benefits: [
      "Deep spinal decompression",
      "Instant relief from neck stiffness",
      "Improved disc hydration",
      "Release of chronic tension"
    ],
    image: YStrap,
    icon: AlignVerticalJustifyCenter
  },
  {
    id: 5,
    title: "Posture Correction",
    description: "Targeted therapies and exercises to reverse the effects of modern sedentary lifestyles on spinal curvature.",
    detailedDescription: "Modern life often involves long hours of sitting, leading to 'tech neck' and slumped shoulders. Our posture correction program combines chiropractic adjustments with specific strengthening exercises and ergonomic advice. We work to retrain your muscles and spine to hold a neutral, healthy alignment, reducing the strain on your spinal discs and muscles.",
    benefits: [
      "Restored natural spinal curves",
      "Reduced muscle fatigue",
      "Prevention of degeneration",
      "More confident appearance"
    ],
    image: PostureCorrection,
    icon: Brain
  },
  {
    id: 6,
    title: "Spinal Wellness Therapy",
    description: "Holistic maintenance care to keep your spine healthy and prevent future injuries.",
    detailedDescription: "Wellness is not just the absence of pain; it's the optimization of function. Our Spinal Wellness Therapy is designed for patients who have moved past the acute pain phase and want to maintain their progress. Regular check-ups and maintenance adjustments ensure that your nervous system remains clear of interference, supporting your immune system, energy levels, and overall vitality.",
    benefits: [
      "Proactive health management",
      "Sustained energy levels",
      "Boosted immune function",
      "Prevention of relapse"
    ],
    image: SpinalTherapy,
    icon: Sparkles
  }
];

export const WHY_CHOOSE_US_CONTENT = [
  {
    title: "Evidence-Based Care",
    description: "Treatments grounded in current medical research and proven clinical methodologies.",
    icon: ShieldCheck
  },
  {
    title: "Advanced Diagnostics",
    description: "Utilizing digital posture analysis and thermal imaging for precise care plans.",
    icon: Stethoscope
  },
  {
    title: "Personalized Plans",
    description: "No two spines are alike. Your roadmap to recovery is custom-built for your physiology.",
    icon: HeartHandshake
  },
  {
    title: "Modern Technology",
    description: "Integrating the latest in chiropractic innovation for faster, longer-lasting results.",
    icon: Sparkles
  }
];

export const TREATMENTS_BENTO = [
  {
    id: 't1',
    title: "Y-Strap Adjustment",
    subtitle: "Decompression",
    image: YStrap,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2"
  },
  {
    id: 't2',
    title: "Spinal Decompression",
    subtitle: "Non-surgical relief",
    image: Spinal,
    colSpan: "col-span-1",
    rowSpan: "row-span-1"
  },
  {
    id: 't3',
    title: "Digital Posture Analysis",
    subtitle: "Tech-driven insight",
    image: PostureCorrection,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1"
  },
    {
    id: 't4',
    title: "Orthotic Therapy",
    subtitle: "Foundation Support",
    image: OrthoticTreatment,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1"
  },
      {
    id: 't5',
    title: "Spinal Wellness Therapy",
    subtitle: "Foundation Support",
    image: SpinalTreatment,
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1"
  },
  {
    id: 't6',
    title: "Chiropractic Adjustment",
    subtitle: "Foundation Support",
    image: ChiroAdjustment,
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-1"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "I walked in with chronic migraine pain and walked out feeling a lightness I haven't known in years. Dr. Zekirovski is a true healer.",
    role: "Patient"
  },
  {
    id: 2,
    name: "Michael Ross",
    text: "Professional, precise, and incredibly calming. The office feels more like a spa than a clinic, but the medical expertise is top-tier.",
    role: "Athlete"
  },
  {
    id: 3,
    name: "Elena V.",
    text: "The Y-Strap adjustment changed my life. Years of neck tension released in a single session. Highly recommended.",
    role: "Executive"
  }
];

export const CONTACT_INFO = {
  address: "107 South Road, Braybrook, Victoria, 3019",
  phone: " 045 204 3345",
  email: "info@optimalchiropractic.com.au",
  hours: "Mon-Fri: 9am - 7pm | Sat: 9am - 12pm"
};

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/optimalchiro_?igsh=dzZ3ZmV3YjEzNG80&utm_source=qr' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1ATsAbvsYz/?mibextid=wwXIfr'},
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/optimalchiropractic/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@optimalchiropractic' },
];