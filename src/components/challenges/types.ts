import { LucideIcon } from 'lucide-react';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  timeLeft: string;
  progress: number;
  type: 'daily' | 'weekly';
  completed: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  impact: number;
  tips: string[];
  category: 'transport' | 'energy' | 'waste' | 'community';
}

export interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  subValue?: string;
}

export interface CategoryFilter {
  id: string;
  label: string;
}