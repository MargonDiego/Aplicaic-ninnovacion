import React from 'react';
import { Gift, History, Ticket, ShoppingBag, Star } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  merchant: string;
  category: string;
  expiresIn: string;
  image: string;
}

const rewards: Reward[] = [
  {
    id: '1',
    title: '30% de descuento en transporte público',
    description:
      'Obtén un 30% de descuento en tu próximo pase mensual de transporte',
    points: 500,
    merchant: 'Metro de Santiago',
    category: 'Transporte',
    expiresIn: '30 días',
    image:
      'https://images.unsplash.com/photo-1581262177000-8139a463e531?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '2',
    title: 'Paquete de productos ecológicos',
    description: 'Paquete de productos sostenibles para el hogar',
    points: 750,
    merchant: 'Green Market',
    category: 'Compras',
    expiresIn: '15 días',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '3',
    title: 'Alquiler de bicicleta eléctrica',
    description: '2 horas de alquiler gratuito de bicicleta eléctrica',
    points: 300,
    merchant: 'EcoBike',
    category: 'Transporte',
    expiresIn: '45 días',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '4',
    title: 'Combo especial de almuerzo',
    description: 'Un menú completo con bebida incluida',
    points: 400,
    merchant: 'La Casa del Sabor',
    category: 'Comida',
    expiresIn: '10 días',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '5',
    title: 'Entrada 2x1 al cine',
    description: 'Compra una entrada y obtén otra gratis',
    points: 600,
    merchant: 'Cinepolis',
    category: 'Entretenimiento',
    expiresIn: '20 días',
    image:
      'https://images.unsplash.com/photo-1598899134739-8c45515e7b82?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '6',
    title: '10% de descuento en videojuegos',
    description: 'Descuento en tu próxima compra de juegos',
    points: 350,
    merchant: 'GameZone',
    category: 'Compras',
    expiresIn: '25 días',
    image:
      'https://images.unsplash.com/photo-1598514982759-9962d3e26dc0?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '7',
    title: 'Clase de yoga gratuita',
    description: 'Una clase gratuita para relajarte y mejorar tu flexibilidad',
    points: 200,
    merchant: 'Yoga Zen',
    category: 'Entretenimiento',
    expiresIn: '12 días',
    image:
      'https://images.unsplash.com/photo-1602416014673-51b4c53b8156?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: '8',
    title: '25% de descuento en cafetería',
    description: 'Disfruta de un descuento en tu bebida favorita',
    points: 300,
    merchant: 'Coffee Lovers',
    category: 'Comida',
    expiresIn: '7 días',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=300&h=200',
  },
];

const RewardCard = ({ reward }: { reward: Reward }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <img
      src={reward.image}
      alt={reward.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {reward.title}
          </h3>
          <p className="text-sm text-gray-500">{reward.merchant}</p>
        </div>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
          {reward.points} pts
        </span>
      </div>
      <p className="text-gray-600 mb-4">{reward.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Expires in {reward.expiresIn}</span>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          Redeem
        </button>
      </div>
    </div>
  </div>
);

const StatsCard = ({ icon: Icon, label, value }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-purple-100 rounded-lg">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = [
    'todas',
    'Transporte',
    'Compras',
    'Comida',
    'Entretenimiento',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Tienda de Recompensas
        </h1>
        <p className="text-gray-600 mt-1">
          Canjea tus puntos por recompensas amigables con el medio ambiente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={Gift} label="Puntos Disponibles" value="1250" />
        <StatsCard icon={History} label="Recompensas reclamdas" value="8" />
        <StatsCard icon={Ticket} label="Recompensas Activas" value="3" />
        <StatsCard icon={Star} label="Nivel de membresia" value="Gold" />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {rewards
            .filter(
              (reward) =>
                selectedCategory === 'todas' ||
                reward.category === selectedCategory
            )
            .map((reward) => (
              <RewardCard key={reward.id} reward={reward} />
            ))}
        </div>
      </div>
    </div>
  );
};
