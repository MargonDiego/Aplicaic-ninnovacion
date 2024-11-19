export const challenges = [
  {
    id: '1',
    title: 'Transporte Sin Emisiones',
    description: 'Usa transporte público o bicicleta para ir al trabajo hoy',
    points: 50,
    timeLeft: '8h restantes',
    progress: 0,
    type: 'daily',
    completed: false,
    difficulty: 'medium',
    impact: 2.5,
    tips: [
      'Planifica tu ruta usando las ciclovías de Santiago',
      'Revisa los horarios del Metro en horas valle',
      'Considera compartir auto con colegas',
      'Calcula tu ahorro de carbono con nuestra calculadora'
    ],
    category: 'transport',
    ecoImpact: {
      co2Reduction: '2.5kg',
      treesEquivalent: '0.5',
      energySaved: '1.2kWh'
    }
  },
  {
    id: '2',
    title: 'Campeón del Ahorro Energético',
    description: 'Reduce el consumo de energía en un 20%',
    points: 75,
    timeLeft: '12h restantes',
    progress: 75,
    type: 'daily',
    completed: false,
    difficulty: 'easy',
    impact: 1.8,
    tips: [
      'Desconecta dispositivos cuando no los uses',
      'Aprovecha la luz natural durante el día',
      'Ajusta la temperatura del aire acondicionado',
      'Monitorea tu consumo en tiempo real'
    ],
    category: 'energy',
    ecoImpact: {
      co2Reduction: '1.8kg',
      energySaved: '5kWh',
      moneySaved: '$1,200'
    }
  },
  {
    id: '3',
    title: 'Líder de Limpieza Comunitaria',
    description: 'Organiza y participa en evento de limpieza local',
    points: 100,
    timeLeft: '5 días restantes',
    progress: 50,
    type: 'weekly',
    completed: false,
    difficulty: 'hard',
    impact: 5.0,
    tips: [
      'Coordina con tu municipalidad',
      'Comparte el evento en redes sociales',
      'Trae equipo de seguridad adecuado',
      'Documenta el impacto antes y después'
    ],
    category: 'community',
    ecoImpact: {
      wasteCollected: '100kg',
      participantsReached: 25,
      areasCleaned: 3
    }
  },
  {
    id: '4',
    title: 'Guerrero Cero Residuos',
    description: 'No generes residuos desechables por 24 horas',
    points: 80,
    timeLeft: '16h restantes',
    progress: 25,
    type: 'daily',
    completed: false,
    difficulty: 'medium',
    impact: 3.0,
    tips: [
      'Usa contenedores y bolsas reutilizables',
      'Evita plásticos de un solo uso',
      'Composta residuos orgánicos',
      'Registra tu progreso de reducción'
    ],
    category: 'waste',
    ecoImpact: {
      wastePrevented: '2kg',
      plasticSaved: '0.5kg',
      waterSaved: '10L'
    }
  },
  {
    id: '5',
    title: 'Experto en Compras Sostenibles',
    description: 'Compra solo productos locales y ecológicos',
    points: 60,
    timeLeft: '3 días restantes',
    progress: 30,
    type: 'weekly',
    completed: false,
    difficulty: 'medium',
    impact: 2.8,
    tips: [
      'Investiga tiendas ecológicas locales',
      'Verifica certificaciones de productos',
      'Compara huellas de carbono',
      'Comparte tus descubrimientos sostenibles'
    ],
    category: 'waste',
    ecoImpact: {
      localBusinessSupported: 5,
      co2Reduction: '3kg',
      plasticSaved: '1kg'
    }
  },
  {
    id: '6',
    title: 'Maestro del Compostaje',
    description: 'Inicia tu sistema de compostaje casero',
    points: 90,
    timeLeft: '7 días restantes',
    progress: 0,
    type: 'weekly',
    completed: false,
    difficulty: 'medium',
    impact: 4.0,
    tips: [
      'Selecciona el contenedor adecuado',
      'Aprende sobre materiales compostables',
      'Mantén el equilibrio de humedad',
      'Monitorea la temperatura'
    ],
    category: 'waste',
    ecoImpact: {
      wasteReduced: '5kg/week',
      soilProduced: '2kg/month',
      co2Prevented: '4kg'
    }
  }
] as const;