import { 
  Activity, 
  Brain, 
  Heart, 
  Zap, 
  Smile, 
  UserCheck 
} from 'lucide-react';

export const TREATMENT_HERO = {
  title: "Targeted Treatments",
  subtitle: "Relief for Your Unique Condition",
  description: "We don't just treat symptoms; we address the underlying structural causes of your pain. Our evidence-based approach is effective for a wide range of musculoskeletal conditions."
};

export const CONDITIONS_TREATED = [
  {
    id: "sciatica",
    title: "Sciatica & Leg Pain",
    description: "Sharp, shooting pain traveling down the leg caused by sciatic nerve compression.",
    symptoms: ["Lower back pain", "Burning sensation down leg", "Numbness or tingling", "Weakness in leg/foot"],
    approach: "We focus on relieving pressure on the sciatic nerve through specific lumbar adjustments and spinal decompression techniques.",
    icon: Zap
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Headaches",
    description: "Chronic tension, stiffness, and migraines often stemming from cervical misalignment.",
    symptoms: ["Stiff neck", "Tension headaches", "Migraines", "Reduced range of motion"],
    approach: "Gentle cervical adjustments restore proper curve and alignment, reducing muscle tension and nerve irritation.",
    icon: Brain
  },
  {
    id: "back-pain",
    title: "Lower Back Pain",
    description: "Aching or sharp pain in the lumbar region, often aggravated by sitting or lifting.",
    symptoms: ["Dull aching", "Muscle spasms", "Sharp pain with movement", "Difficulty standing straight"],
    approach: "We correct pelvic and lumbar subluxations to restore stability and function to the lower spine.",
    icon: Activity
  },
  {
    id: "posture",
    title: "Postural Issues",
    description: "Structural imbalances like 'tech neck' or scoliosis that lead to chronic strain.",
    symptoms: ["Slumped shoulders", "Forward head carriage", "Uneven hips", "Fatigue"],
    approach: "A combination of adjustments, corrective exercises, and ergonomic advice to retrain your body's alignment.",
    icon: UserCheck
  },
  {
    id: "sports",
    title: "Sports Injuries",
    description: "Injuries sustained during physical activity, affecting joints, muscles, and ligaments.",
    symptoms: ["Joint pain", "Swelling", "Reduced flexibility", "Instability"],
    approach: "We aim to speed up recovery, restore joint mobility, and prevent future injuries through targeted care.",
    icon: Heart
  },
  {
    id: "wellness",
    title: "Wellness & Prevention",
    description: "Proactive care to maintain optimal health and prevent future issues.",
    symptoms: ["General fatigue", "Minor aches", "Desire for better health", "Stress"],
    approach: "Regular check-ups to ensure your nervous system is functioning at 100%, supporting overall vitality.",
    icon: Smile
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
