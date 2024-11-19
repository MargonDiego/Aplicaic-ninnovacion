import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Trophy,
  Gift,
  UserCircle,
  Users,
  Bell,
  Search,
  Plus,
  ArrowLeft,
  Settings,
  Crown,
} from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Inicio' },
  { path: '/challenges', icon: Trophy, label: 'Retos' },
  { path: '/rewards', icon: Gift, label: 'Recompensas' },
  { path: '/profile', icon: UserCircle, label: 'Perfil' },
  { path: '/community', icon: Users, label: 'Comunidad' },
];

const notifications = [
  {
    id: 1,
    title: 'Nuevo Reto Disponible',
    message: '¡El reto de Semana Sin Residuos ya está activo!',
    time: 'Hace 5 minutos',
    unread: true,
  },
  {
    id: 2,
    title: 'Logro Desbloqueado',
    message: 'Has ganado la insignia "Adoptante Temprano"',
    time: 'Hace 1 hora',
    unread: true,
  },
  {
    id: 3,
    title: 'Oferta Premium',
    message: '¡Obtén un 20% de descuento en Eco Pro por 3 meses!',
    time: 'Hace 2 horas',
    unread: true,
    isPremium: true,
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [showPremiumBadge, setShowPremiumBadge] = React.useState(true);
  const location = useLocation();
  const notificationRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    setIsNotificationsOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="h-14 px-4 flex items-center justify-between">
          {location.pathname !== '/' && (
            <button
              onClick={() => window.history.back()}
              className="p-2 -ml-2 text-gray-600"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}

          <h1 className="text-lg font-semibold text-gray-900">
            {navItems.find((item) => item.path === location.pathname)?.label ||
              'EcoAction'}
          </h1>

          <div className="flex items-center space-x-2">
            {showPremiumBadge && (
              <Link
                to="/premium"
                className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-xs font-medium text-white shadow-sm"
              >
                <Crown className="h-4 w-4 mr-1" />
                Premium
              </Link>
            )}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-600"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 text-gray-600 relative"
            >
              <Bell className="h-6 w-6" />
              {notifications.some((n) => n.unread) && (
                <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="h-14 px-4 flex items-center space-x-4 border-b border-gray-200">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 -ml-2 text-gray-600"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex-1">
              <input
                autoFocus
                type="text"
                placeholder="Buscar..."
                className="w-full px-2 py-1 text-lg bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">Búsquedas recientes</p>
          </div>
        </div>
      )}

      {isNotificationsOpen && (
        <div ref={notificationRef} className="fixed inset-0 bg-white z-50">
          <div className="h-14 px-4 flex items-center justify-between border-b border-gray-200">
            <h2 className="text-lg font-semibold">Notificaciones</h2>
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="p-2 text-gray-600"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-100 ${
                  notification.unread ? 'bg-blue-50' : ''
                } ${
                  notification.isPremium
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">
                    {notification.title}
                  </p>
                  {notification.isPremium && (
                    <Crown className="h-4 w-4 text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {notification.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <main className="pt-14 pb-20">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="h-16 flex items-center justify-around px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-16 py-1 ${
                  isActive ? 'text-green-600' : 'text-gray-600'
                }`}
              >
                <item.icon
                  className={`h-6 w-6 ${
                    isActive ? 'text-green-600' : 'text-gray-600'
                  }`}
                />
                <span className="text-xs mt-1">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 w-8 h-0.5 bg-green-600 rounded-t-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      <button
        className="fixed right-4 bottom-20 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg"
        onClick={() => {
          /* Acción rápida */
        }}
      >
        <Plus className="h-8 w-8" />
      </button>
    </div>
  );
};
