import React from 'react';
import { motion } from 'framer-motion';
import { Timer, AlertCircle, Leaf } from 'lucide-react';
import { Challenge } from './types';

interface ChallengeCardProps {
  challenge: Challenge;
}

const DifficultyBadge = ({
  difficulty,
}: {
  difficulty: Challenge['difficulty'];
}) => {
  const colors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty]}`}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
  );
};

const ImpactIndicator = ({ impact }: { impact: number }) => (
  <div className="flex items-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <Leaf
        key={i}
        className={`h-4 w-4 ${
          i < Math.round(impact) ? 'text-green-500' : 'text-gray-200'
        }`}
      />
    ))}
  </div>
);

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const [showTips, setShowTips] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {challenge.title}
            </h3>
            <DifficultyBadge difficulty={challenge.difficulty} />
          </div>
          <p className="text-gray-600">{challenge.description}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {challenge.points} pts
          </span>
          <div className="mt-2">
            <ImpactIndicator impact={challenge.impact} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative pt-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Timer className="w-4 h-4" />
              <span>{challenge.timeLeft}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {challenge.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${challenge.progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowTips(!showTips)}
            className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center space-x-1"
          >
            <AlertCircle className="w-4 h-4" />
            <span>{showTips ? 'Ocultar Consejos' : 'Mostrar Consejos'}</span>
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              challenge.completed
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
            disabled={challenge.completed}
          >
            {challenge.completed ? 'Completado' : 'Completar Reto'}
          </button>
        </div>

        {showTips && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-blue-50 p-4 rounded-lg"
          >
            <h4 className="font-medium text-blue-800 mb-2">
              Consejos para Completar
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {challenge.tips.map((tip, index) => (
                <li key={index} className="text-sm text-blue-700">
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
