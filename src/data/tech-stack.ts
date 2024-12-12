import { TechStack } from '../types';

export const techStacks: TechStack[] = [
  {
    category: "Machine Learning",
    items: [
      { name: "PyTorch", icon: "⚡", proficiency: 95 },
      { name: "TensorFlow", icon: "🧠", proficiency: 90 },
      { name: "Scikit-learn", icon: "🔬", proficiency: 85 },
      { name: "Hugging Face", icon: "🤗", proficiency: 88 }
    ]
  },
  {
    category: "Programming",
    items: [
      { name: "Python", icon: "🐍", proficiency: 95 },
      { name: "TypeScript", icon: "📘", proficiency: 85 },
      { name: "C++", icon: "⚙️", proficiency: 80 },
      { name: "CUDA", icon: "🎮", proficiency: 75 }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "🐳", proficiency: 90 },
      { name: "Kubernetes", icon: "☸️", proficiency: 85 },
      { name: "AWS", icon: "☁️", proficiency: 88 },
      { name: "MLflow", icon: "📊", proficiency: 82 }
    ]
  }
];