import { 
  Activity, 
  Smile, 
  Scan,
  Footprints,
  Move,
  ShieldCheck,
} from 'lucide-react';

export const TREATMENT_HERO = {
  title: "Specialized Techniques",
  subtitle: "Advanced Care tailored for you",
  description: "We employ a diverse range of evidence-based chiropractic techniques to address your specific needs. From gentle, low-force adjustments to advanced spinal decompression, our methods are designed to restore function and alleviate pain."
};

export const TREATMENT_TECHNIQUES = [
  {
    id: "sot",
    title: "Sacro Occipital Technique (SOT)",
    description: "A gentle, non-force technique using wedge-shaped blocks to correct the pelvis and spine.",
    benefits: ["Pelvic stability", "Gentle correction", "Nervous system balance", "Ideal for sensitive patients"],
    details: "We use gravity and precise blocking to align the pelvis and restore the rhythmic flow of cerebrospinal fluid between the sacrum and cranium.",
    icon: Activity
  },
  {
    id: "y-strap",
    title: "Y-Strap Adjustment",
    description: "High-velocity, low-amplitude manual decompression tool for the cervical spine.",
    benefits: ["Deep decompression", "Neck stiffness relief", "Tension headache relief", "Improved disc hydration"],
    details: "By creating a sudden, controlled distraction force along the Y-axis of the body, we decompress spinal discs and release built-up pressure.",
    icon: Move
  },
  {
    id: "posture-analysis",
    title: "Digital Posture Analysis",
    description: "Assessing spinal alignment and postural deviations with advanced imaging technology.",
    benefits: ["Visual alignment map", "Objective progress tracking", "Identify hidden imbalances", "Data-driven care"],
    details: "We capture digital images to calculate precise angles of deviation, creating a benchmark to track your structural correction progress objectively.",
    icon: Scan
  },
  {
    id: "orthotic",
    title: "Orthotic Therapy",
    description: "Custom-molded shoe inserts to correct biomechanical faults in the feet.",
    benefits: ["Arch support", "Improved gait", "Reduced knee/hip strain", "Solid foundation"],
    details: "We analyze your foot mechanics to create orthotics that restore your natural arch, providing a stable foundation for your entire skeletal structure.",
    icon: Footprints
  },
  {
    id: "spinal-wellness",
    title: "Spinal Wellness Therapy",
    description: "Proactive maintenance care to keep your spine healthy and prevent future issues.",
    benefits: ["Preventative care", "Sustained mobility", "Stress reduction", "Overall vitality"],
    details: "Regular check-ups that focus on function rather than just pain relief, ensuring your nervous system remains free of interference for the long term.",
    icon: Smile
  },
  {
    id: "chiro-adjustment",
    title: "Chiropractic Adjustment",
    description: "Precise manual thrusts applied to spinal joints to restore motion and alignment.",
    benefits: ["Pain reduction", "Restored motion", "Joint function", "Nerve irritation relief"],
    details: "We utilize specific, controlled techniques to clear subluxations, allowing your brain and body to communicate effectively without interference.",
    icon: ShieldCheck
  }
];

export const TREATMENT_APPROACH = {
  title: "Our 3-Step Approach",
  steps: [
    {
      number: "01",
      title: "Relief Care",
      description: "Our immediate goal is to reduce your pain and stabilize your condition. Visits are more frequent during this phase to combat inflammation and restore mobility."
    },
    {
      number: "02",
      title: "Corrective Care",
      description: "Once symptoms subside, we focus on correcting the underlying cause. This phase strengthens the spine and muscles to support long-term alignment."
    },
    {
      number: "03",
      title: "Wellness Care",
      description: "Routine maintenance to preserve your progress. Like dental check-ups, periodic spinal checks catch minor issues before they become painful problems."
    }
  ]
};

export const TREATMENT_FAQ = [
  {
    question: "Do adjustments hurt?",
    answer: "Most adjustments are painless and provide immediate relief. You might feel a slight pressure or a 'pop', which is simply gas releasing from the joint."
  },
  {
    question: "How long will it take to get better?",
    answer: "Healing varies by individual and condition severity. Many patients feel relief after the first visit, but lasting correction typically takes a tailored treatment plan."
  },
  {
    question: "Is chiropractic safe?",
    answer: "Yes, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal complaints."
  },
  {
    question: "Do I need a referral?",
    answer: "No, chiropractors are primary contact practitioners, meaning you can book an appointment directly without a referral from a GP."
  }
];
