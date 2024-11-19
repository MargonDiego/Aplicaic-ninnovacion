import React from 'react';
import {
  Award,
  Calendar,
  MapPin,
  Settings,
  TrendingUp,
  User,
  Clock,
  Leaf,
  Trophy,
  Gift,
  Users,
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: any;
}

interface Activity {
  id: string;
  type: string;
  description: string;
  points: number;
  date: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Adoptante Temprano',
    description: 'Te uniste a EcoAction en el primer mes',
    date: '2024-01-15',
    icon: Award,
  },
  {
    id: '2',
    title: 'Maestro de Retos',
    description: 'Completaste 50 retos diarios',
    date: '2024-02-20',
    icon: Trophy,
  },
  {
    id: '3',
    title: 'Líder Comunitario',
    description: 'Inspiraste a 10 amigos a unirse',
    date: '2024-03-01',
    icon: Users,
  },
];

const activities: Activity[] = [
  {
    id: '1',
    type: 'Reto',
    description: 'Completaste el reto de transporte sin emisiones',
    points: 50,
    date: '2024-03-15 09:30',
  },
  {
    id: '2',
    type: 'Recompensa',
    description: 'Canjeaste el paquete de productos ecológicos',
    points: -750,
    date: '2024-03-14 15:45',
  },
  {
    id: '3',
    type: 'Logro',
    description: 'Obtuviste la insignia de Líder Comunitario',
    points: 100,
    date: '2024-03-01 12:00',
  },
];

const StatCard = ({ icon: Icon, label, value }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-100 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
  <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
    <div className="p-3 bg-yellow-100 rounded-lg">
      <achievement.icon className="h-6 w-6 text-yellow-600" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
      <p className="text-sm text-gray-600">{achievement.description}</p>
    </div>
    <span className="text-sm text-gray-500">
      {new Date(achievement.date).toLocaleDateString()}
    </span>
  </div>
);

const ActivityItem = ({ activity }: { activity: Activity }) => (
  <div className="flex items-center space-x-4 py-3">
    <div
      className={`p-2 rounded-lg ${
        activity.type === 'Reto'
          ? 'bg-green-100'
          : activity.type === 'Recompensa'
          ? 'bg-purple-100'
          : 'bg-yellow-100'
      }`}
    >
      {activity.type === 'Reto' ? (
        <Trophy className="h-5 w-5 text-green-600" />
      ) : activity.type === 'Recompensa' ? (
        <Gift className="h-5 w-5 text-purple-600" />
      ) : (
        <Award className="h-5 w-5 text-yellow-600" />
      )}
    </div>
    <div className="flex-1">
      <p className="text-gray-800">{activity.description}</p>
      <p className="text-sm text-gray-500">
        {new Date(activity.date).toLocaleString()}
      </p>
    </div>
    <span
      className={`font-medium ${
        activity.points >= 0 ? 'text-green-600' : 'text-red-600'
      }`}
    >
      {activity.points >= 0 ? '+' : ''}
      {activity.points} pts
    </span>
  </div>
);

export const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mi Perfil</h1>
          <p className="text-gray-600 mt-1">
            Gestiona tu cuenta y consulta tu progreso
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <Settings className="h-5 w-5" />
          <span>Configuración</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Juan Pérez</h2>
            <div className="flex items-center space-x-4 mt-1 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Las Condes, Santiago</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Unido desde enero 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Leaf} label="Impacto Total" value="328 kg CO₂" />
          <StatCard icon={Award} label="Logros" value="12" />
          <StatCard icon={TrendingUp} label="Racha Actual" value="7 días" />
          <StatCard icon={Clock} label="Tiempo Activo" value="73 días" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Logros Recientes</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">
            Historial de Actividades
          </h2>
          <div className="divide-y">
            {activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
