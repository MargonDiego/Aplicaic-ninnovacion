import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export const RewardPreview: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white rounded-xl p-6 shadow-sm"
  >
    <h3 className="text-lg font-semibold mb-4 flex items-center">
      <Gift className="h-5 w-5 mr-2 text-purple-500" />
      Próxima Recompensa
    </h3>

    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1581262177000-8139a463e531?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Pase de Transporte Público"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-medium">
            30% de Descuento en Transporte Público
          </h4>
          <p className="text-sm text-gray-600">150 puntos necesarios</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              className="bg-purple-500 h-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Paquete Ecológico"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-medium">Paquete de Productos Ecológicos</h4>
          <p className="text-sm text-gray-600">300 puntos necesarios</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Alquiler de Bicicleta Eléctrica"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <h4 className="font-medium">Alquiler de Bicicleta Eléctrica</h4>
          <p className="text-sm text-gray-600">500 puntos necesarios</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '30%' }}
              className="bg-blue-500 h-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
