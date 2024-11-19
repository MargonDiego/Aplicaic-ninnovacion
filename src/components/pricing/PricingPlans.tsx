import React from 'react';
import { Check, Star, Zap, Crown, Leaf, Users, BarChart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  icon: React.ElementType;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  color: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    icon: Star,
    price: 0,
    period: 'siempre',
    description: 'Comienza tu viaje ecológico',
    color: 'bg-gray-500',
    features: [
      { text: 'Desafíos básicos', included: true },
      { text: 'Acceso a la comunidad', included: true },
      { text: 'Recompensas básicas', included: true },
      { text: 'Reportes mensuales', included: true },
      { text: 'Desafíos premium', included: false },
      { text: 'Competencias en equipo', included: false },
      { text: 'Coach personal', included: false },
      { text: 'Insignias personalizadas', included: false },
    ],
  },
  {
    id: 'eco-plus',
    name: 'Eco Plus',
    icon: Zap,
    price: 4.99,
    period: 'mes',
    description: 'Funciones mejoradas',
    color: 'bg-green-500',
    popular: true,
    features: [
      { text: 'Desafíos básicos', included: true },
      { text: 'Acceso a la comunidad', included: true },
      { text: 'Recompensas básicas', included: true },
      { text: 'Reportes mensuales', included: true },
      { text: 'Desafíos premium', included: true },
      { text: 'Competencias en equipo', included: true },
      { text: 'Coach personal', included: false },
      { text: 'Insignias personalizadas', included: false },
    ],
  },
  {
    id: 'eco-pro',
    name: 'Eco Pro',
    icon: Crown,
    price: 9.99,
    period: 'mes',
    description: 'Máximo impacto',
    color: 'bg-purple-500',
    features: [
      { text: 'Desafíos básicos', included: true },
      { text: 'Acceso a la comunidad', included: true },
      { text: 'Recompensas básicas', included: true },
      { text: 'Reportes mensuales', included: true },
      { text: 'Desafíos premium', included: true },
      { text: 'Competencias en equipo', included: true },
      { text: 'Coach personal', included: true },
      { text: 'Insignias personalizadas', included: true },
    ],
  },
];

const benefitsList = [
  {
    icon: Leaf,
    title: 'Impacto Ambiental',
    description: 'Mide y reduce tu huella de carbono con herramientas avanzadas'
  },
  {
    icon: Users,
    title: 'Comunidad Activa',
    description: 'Únete a una red de personas comprometidas con el medio ambiente'
  },
  {
    icon: BarChart,
    title: 'Análisis Detallado',
    description: 'Visualiza tu progreso y el impacto de tus acciones'
  },
  {
    icon: Shield,
    title: 'Certificación Verde',
    description: 'Obtén reconocimiento por tu compromiso ambiental'
  }
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
        plan.popular ? 'border-2 border-green-500' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <div className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
          <plan.icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <p className="text-gray-500 mt-1">{plan.description}</p>
        
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-gray-500 ml-2">/{plan.period}</span>
        </div>
        
        <ul className="mt-6 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`h-5 w-5 mr-3 ${
                feature.included ? 'text-green-500' : 'text-gray-300'
              }`} />
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium text-white ${
          plan.popular ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-900 hover:bg-gray-800'
        } transition-colors`}>
          {plan.price === 0 ? 'Comenzar' : 'Suscribirse'}
        </button>
      </div>
    </motion.div>
  );
};

const PricingPlans = () => {
  return (
    <div className="px-4 py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Elige tu Nivel de Impacto</h2>
        <p className="text-gray-600 mt-2">Desbloquea funciones premium para maximizar tu impacto ambiental</p>
      </div>
      
      <div className="space-y-6">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      
      <div className="mt-8 bg-green-50 rounded-xl p-6">
        <h3 className="font-semibold text-green-800">¿Por qué hacerse Premium?</h3>
        <ul className="mt-4 space-y-3">
          {benefitsList.map((benefit, index) => (
            <li key={index} className="flex items-center text-green-700">
              <benefit.icon className="h-5 w-5 mr-3" />
              <div>
                <h4 className="font-medium">{benefit.title}</h4>
                <p className="text-sm text-green-600">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { PricingPlans };