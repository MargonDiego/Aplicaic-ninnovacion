import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Droplets, Wind, Trophy, Users } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const communeData = [
  { name: 'Las Condes', value: 42, quality: 'Buena' },
  { name: 'Providencia', value: 38, quality: 'Buena' },
  { name: 'Santiago', value: 55, quality: 'Regular' },
  { name: 'Ñuñoa', value: 45, quality: 'Regular' },
  { name: 'La Florida', value: 70, quality: 'Mala' },
];

const weatherData = {
  temperature: 24,
  humidity: 65,
  windSpeed: 12,
  airQuality: 'Buena',
};

const Banner = ({ title, description, buttonText, gradient }: any) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className={`rounded-xl p-6 shadow-lg bg-gradient-to-r ${gradient} text-white`}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2">{description}</p>
    <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
      {buttonText}
    </button>
  </motion.div>
);

const StatCard = ({ icon: Icon, title, value, description, color }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-gray-700">{title}</p>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="text-white h-8 w-8" />
      </div>
    </div>
  </motion.div>
);

const AQIGauge = ({ value }: { value: number }) => (
  <div className="w-32 mx-auto">
    <CircularProgressbar
      value={value}
      maxValue={150}
      text={`${value}`}
      styles={buildStyles({
        textSize: '1.5rem',
        pathColor: value < 50 ? '#10B981' : value < 100 ? '#F59E0B' : '#EF4444',
        textColor: '#1F2937',
        trailColor: '#E5E7EB',
      })}
    />
  </div>
);

const WeatherWidget = ({ data }: { data: typeof weatherData }) => (
  <div className="bg-gradient-to-br from-green-400 to-green-500 p-6 rounded-xl text-white">
    <h3 className="font-semibold mb-4 text-lg text-center">Condiciones Actuales</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center">
        <Sun className="h-8 w-8 mb-2" />
        <span className="text-xl font-bold">{data.temperature}°C</span>
        <span className="text-sm opacity-75">Temperatura</span>
      </div>
      <div className="flex flex-col items-center">
        <Droplets className="h-8 w-8 mb-2" />
        <span className="text-xl font-bold">{data.humidity}%</span>
        <span className="text-sm opacity-75">Humedad</span>
      </div>
      <div className="flex flex-col items-center">
        <Wind className="h-8 w-8 mb-2" />
        <span className="text-xl font-bold">{data.windSpeed} km/h</span>
        <span className="text-sm opacity-75">Viento</span>
      </div>
      <div className="flex flex-col items-center">
        <Leaf className="h-8 w-8 mb-2" />
        <span className="text-xl font-bold">{data.airQuality}</span>
        <span className="text-sm opacity-75">Calidad del Aire</span>
      </div>
    </div>
  </div>
);

const CommuneSelector = ({
  communes,
  onSelect,
}: {
  communes: { name: string; value: number; quality: string }[];
  onSelect: (commune: { name: string; value: number; quality: string }) => void;
}) => (
  <div className="flex flex-col items-center">
    <label htmlFor="commune-selector" className="text-gray-700 font-medium mb-2">
      Selecciona una Comuna
    </label>
    <select
      id="commune-selector"
      onChange={(e) =>
        onSelect(
          communes.find((c) => c.name === e.target.value) || communes[0]
        )
      }
      className="p-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-green-500"
    >
      {communes.map((commune) => (
        <option key={commune.name} value={commune.name}>
          {commune.name}
        </option>
      ))}
    </select>
  </div>
);

const CommuneAirQuality = ({
  selectedCommune,
}: {
  selectedCommune: { name: string; value: number; quality: string };
}) => {
  const getColor = (quality: string) => {
    switch (quality) {
      case 'Buena':
        return 'text-green-500';
      case 'Regular':
        return 'text-yellow-500';
      case 'Mala':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="text-center mt-6">
      <h3 className="text-lg font-bold text-gray-800">
        Calidad del Aire en {selectedCommune.name}
      </h3>
      <p
        className={`text-3xl font-bold mt-4 ${getColor(
          selectedCommune.quality
        )}`}
      >
        {selectedCommune.quality}
      </p>
      <p className="text-gray-600 mt-2">
        Nivel de contaminación: {selectedCommune.value} µg/m³
      </p>
    </div>
  );
};


export const Dashboard = () => {
  const [selectedCommune, setSelectedCommune] = useState(communeData[0]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Título principal */}
      <div className="text-center mb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-green-600"
        >
          EcoAction
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 mt-2 text-lg"
        >
          Únete a nuestra comunidad y transforma tu entorno
          con pequeñas acciones que generan un gran impacto.
        </motion.p>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Banner
          title="Únete a los Retos Ambientales"
          description="Participa en retos y contribuye a mejorar la calidad del aire."
          buttonText="Ver Retos"
          gradient="from-green-600 to-green-400"
          backgroundImage="https://source.unsplash.com/600x400/?nature,forest"
        />
        <Banner
          title="Gana Recompensas"
          description="Obtén recompensas por tus acciones sostenibles."
          buttonText="Ver Recompensas"
          gradient="from-blue-600 to-blue-400"
          backgroundImage="https://source.unsplash.com/600x400/?nature,forest"
        />
      </div>

      {/* Widget de clima */}
      <div className="mt-6">
        <WeatherWidget data={weatherData} />
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          icon={Leaf}
          title="Impacto Ambiental"
          value="128.5 kg"
          description="Reducción de CO₂ lograda este mes gracias a tus acciones."
          color="bg-green-500"
        />
        <StatCard
          icon={Users}
          title="Comunidad Activa"
          value="1,234"
          description="Participantes comprometidos en actividades ecológicas."
          color="bg-blue-500"
        />
        <StatCard
          icon={Trophy}
          title="Tu Posición"
          value="#42"
          description="Clasificación en actividades ambientales en tu comuna."
          color="bg-purple-500"
        />
      </div>

      {/* Selector y calidad del aire */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <CommuneSelector
          communes={communeData}
          onSelect={(commune) => setSelectedCommune(commune)}
        />
        <CommuneAirQuality selectedCommune={selectedCommune} />
      </div>      
    </div>
  );
};
