import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const AchievementBanner: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white mb-6"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
          <Trophy className="h-8 w-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Maestro del Reto Semanal</h3>
          <p className="text-purple-100">
            Completa todos los retos diarios esta semana
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold">250</p>
        <p className="text-purple-100">puntos extra</p>
      </div>
    </div>
    <div className="mt-4">
      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-white h-2 rounded-full"
        />
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span>3/5 retos completados</span>
        <span>2 días restantes</span>
      </div>
    </div>
  </motion.div>
);
