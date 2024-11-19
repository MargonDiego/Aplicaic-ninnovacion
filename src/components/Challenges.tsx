import React from 'react';
import { Award, CheckCircle2, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { challenges } from './challenges/data';
import { ChallengeCard } from './challenges/ChallengeCard';
import { StatsCard } from './challenges/StatsCard';
import { RewardPreview } from './challenges/RewardPreview';
import { AchievementBanner } from './challenges/AchievementBanner';
import { CategoryFilter } from './challenges/types';

const categories: CategoryFilter[] = [
  { id: 'all', label: 'Todos los Retos' },
  { id: 'transport', label: 'Transporte' },
  { id: 'energy', label: 'Energía' },
  { id: 'waste', label: 'Residuos' },
  { id: 'community', label: 'Comunidad' },
];

export const Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'daily' | 'weekly'>('daily');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">Retos Ambientales</h1>
        <p className="text-gray-600 mt-1">
          Completa retos para ganar puntos y generar impacto
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Award}
          label="Puntos Totales"
          value={1250}
          subValue="+125 esta semana"
        />
        <StatsCard
          icon={CheckCircle2}
          label="Retos Completados"
          value={15}
          subValue="Nivel 5"
        />
        <StatsCard
          icon={Flame}
          label="Racha Actual"
          value={7}
          subValue="días"
        />
        <StatsCard
          icon={Star}
          label="Logros"
          value={12}
          subValue="3 pendientes"
        />
      </div>

      <AchievementBanner />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div className="flex space-x-4 mb-4 sm:mb-0">
                <button
                  onClick={() => setActiveTab('daily')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'daily'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Retos Diarios
                </button>
                <button
                  onClick={() => setActiveTab('weekly')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'weekly'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Retos Semanales
                </button>
              </div>

              <div className="flex space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {challenges
                .filter((challenge) => challenge.type === activeTab)
                .filter(
                  (challenge) =>
                    selectedCategory === 'all' ||
                    challenge.category === selectedCategory
                )
                .map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <RewardPreview />
        </div>
      </div>
    </div>
  );
};
