import React from 'react';
import {
  MessageSquare,
  Heart,
  Share2,
  Users,
  TrendingUp,
  Award,
  ThumbsUp,
  User,
  MapPin,
} from 'lucide-react';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    location: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: '1',
    user: {
      name: 'María González',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50&h=50',
      location: 'Providencia',
    },
    content:
      '¡Acabo de completar mi primera semana de transporte sin emisiones! Me encantan las ciclovías de nuestro barrio. 🚲 #TransporteSostenible #AireLimpio',
    image:
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=600&h=400',
    likes: 45,
    comments: 12,
    shares: 5,
    timestamp: 'hace 2 horas',
    tags: ['TransporteSostenible', 'AireLimpio'],
  },
  {
    id: '2',
    user: {
      name: 'Carlos Ruiz',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=50&h=50',
      location: 'Las Condes',
    },
    content:
      '¡Nuestro evento de limpieza comunitaria fue un gran éxito! Gracias a todos los que participaron. Juntos recolectamos más de 100 kg de residuos en nuestro parque local. 🌿 #AcciónComunitaria',
    image:
      'https://images.unsplash.com/photo-1618477462146-aa33e11fb79d?auto=format&fit=crop&q=80&w=600&h=400',
    likes: 89,
    comments: 23,
    shares: 15,
    timestamp: 'hace 5 horas',
    tags: ['AcciónComunitaria', 'EventoDeLimpieza'],
  },
];

const StatCard = ({ icon: Icon, label, value }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-indigo-100 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const PostCard = ({ post }: { post: Post }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {post.user.location} · {post.timestamp}
            </div>
          </div>
        </div>

        <p className="text-gray-800 mb-4">{post.content}</p>

        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-lg mb-4"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              liked ? 'text-red-500' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span>{post.likes + (liked ? 1 : 0)}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <MessageSquare className="w-5 h-5" />
            <span>{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
            <Share2 className="w-5 h-5" />
            <span>{post.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CreatePost = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center space-x-4">
      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
        <User className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Comparte tus actividades ecológicas..."
          className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
        Publicar
      </button>
    </div>
  </div>
);

export const Community = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Comunidad</h1>
        <p className="text-gray-600 mt-1">
          Conéctate con ciudadanos ecológicos en tu área
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Miembros de la Comunidad" value="1,234" />
        <StatCard icon={TrendingUp} label="Activos Hoy" value="328" />
        <StatCard icon={Award} label="Mejores Contribuidores" value="25" />
        <StatCard icon={ThumbsUp} label="Acciones Hoy" value="156" />
      </div>

      <CreatePost />

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
