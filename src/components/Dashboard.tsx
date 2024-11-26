import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, Droplets, Wind, Trophy, Users } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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

import { Link } from 'react-router-dom';

const Banner = ({
  title,
  description,
  buttonText,
  backgroundImage,
  link,
}: {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
  link: string; // Ruta de destino
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="rounded-xl p-6 shadow-lg text-white relative overflow-hidden"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div
      className="absolute inset-0 bg-black bg-opacity-40"
      style={{ zIndex: 1 }}
    />
    <div className="relative z-10">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <Link to={link}>
        <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          {buttonText}
        </button>
      </Link>
    </div>
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

const Glosario = () => (
  <div className="bg-white rounded-xl p-6 shadow-md mt-8">
    <h3 className="text-lg font-bold text-green-700 mb-4">Principales indicadores del aire</h3>
    <p className="text-gray-700 font-semibold mb-2">¿Conoces el significado de estas siglas?</p>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
      <li>MP10: Material Particulado Respirable grueso.</li>
      <li>MP2,5: Material Particulado Fino.</li>
      <li>O₃: Ozono.</li>
      <li>NO₂: Dióxido de Nitrógeno.</li>
      <li>SO₂: Dióxido de Azufre.</li>
      <li>CO: Monóxido de Carbono.</li>
      </ul>
  </div>
);

export const Dashboard = () => {
  const [selectedCommune, setSelectedCommune] = useState(communeData[0]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Título principal */}
      <div className="text-center mb-6">
        {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8">

        <div className="flex items-center justify-center gap-3 mb-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl font-bold text-green-600">GrinUp</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Juntos por un futuro más verde. Monitorea, actúa y mejora el ambiente de tu comunidad.
        </p>
      </motion.div>

      {/* Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Banner
          title="Únete a los Retos Ambientales"
          description="Participa en retos y contribuye a mejorar la calidad del aire."
          buttonText="Ver Retos"
          backgroundImage="https://unarbol.org/wp-content/uploads/2021/10/KIT.jpg"
          link="/challenges" // Redirección a la página de retos
        />
        <Banner
          title="Gana Recompensas"
          description="Obtén recompensas por tus acciones sostenibles."
          buttonText="Ver Recompensas"
          backgroundImage="https://www.regalosecology.com/WebRoot/StoreES3/Shops/ec7535/MediaGallery/ECOLOGY/SEMILLAS_PORTF/HP/Regalos_de_empresa_ecologicos.jpg"
          link="/rewards" // Redirección a la página de retos
        />
      </div>

      {/* Eco Tips */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-500" />
          Eco Tips del Día
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <Leaf className="h-6 w-6 text-green-500 mb-2" />
            <h4 className="font-semibold text-gray-800">Jardín Vertical</h4>
            <p className="text-sm text-gray-600">Aprovecha tus paredes para crear un jardín vertical y mejora la calidad del aire.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Droplets className="h-6 w-6 text-blue-500 mb-2" />
            <h4 className="font-semibold text-gray-800">Ahorro de Agua</h4>
            <p className="text-sm text-gray-600">Instala un sistema de recolección de agua de lluvia para tu jardín.</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <Sun className="h-6 w-6 text-yellow-500 mb-2" />
            <h4 className="font-semibold text-gray-800">Energía Solar</h4>
            <p className="text-sm text-gray-600">Considera instalar paneles solares para reducir tu huella de carbono.</p>
          </div>
        </div>
      </div>

      {/* Widget de clima */}
      <div className="mt-6">
        <WeatherWidget data={weatherData} />
      </div>

      {/* Selector y calidad del aire */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <CommuneSelector
          communes={communeData}
          onSelect={(commune) => setSelectedCommune(commune)}
        />
        <CommuneAirQuality selectedCommune={selectedCommune} />
      </div>      

      {/* Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          icon={Leaf}
          title="Nuestro Impacto Ambiental"
          value="128.5 kg"
          description="Reducción de CO₂ lograda este mes gracias a tus acciones."
          color="bg-green-500"
        />
        <StatCard
          icon={Users}
          title="Nuestra Comunidad"
          value="1,234"
          description="Participantes comprometidos en actividades ecológicas."
          color="bg-blue-500"
        />
        <StatCard
          icon={Trophy}
          title="Tu Ranking en la comunidad"
          value="#42"
          description="Clasificación en actividades ambientales en tu comuna."
          color="bg-purple-500"
        />
      </div>

      {/* Glosario */}
      <Glosario /> 
     
    </div>
    </div>
  );
};
