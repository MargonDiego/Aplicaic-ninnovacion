import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { StatCardProps } from './types';

export const StatsCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, subValue }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl p-6 shadow-sm"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-green-100 rounded-lg">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <div className="flex items-baseline">
          <CountUp
            end={value}
            duration={2}
            separator=","
            className="text-xl font-bold text-gray-800"
          />
          {subValue && (
            <span className="ml-2 text-sm text-green-500">{subValue}</span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);