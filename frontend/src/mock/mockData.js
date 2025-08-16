// Mock data pour Le P'tit Thaï 2

export const restaurantInfo = {
  name: "Le P'tit Thaï 2",
  address: "139 Av. du Vert-Bois, 34090 Montpellier, France",
  phone: "09 55 92 90 68",
  priceRange: "10–20 € par personne",
  services: ["Sur place", "À emporter", "Livraison sans contact"],
  uberEatsUrl: "https://ubereats.com",
  openingHours: "Ouvre à 11h30"
};

export const menuItems = {
  entrees: [
    {
      id: 1,
      name: "Salade de papaye verte (Som Tam)",
      description: "Salade fraîche et épicée de papaye verte avec tomates cerises, haricots verts et cacahuètes",
      price: "8,50 €"
    },
    {
      id: 2,
      name: "Rouleaux de printemps frais",
      description: "Rouleaux de riz garnis de crevettes, salade, herbes fraîches et vermicelles",
      price: "6,90 €"
    },
    {
      id: 3,
      name: "Beignets de crevettes",
      description: "Crevettes enrobées d'une pâte légère et croustillante, sauce aigre-douce",
      price: "7,50 €"
    }
  ],
  platsPrincipaux: [
    {
      id: 4,
      name: "Pad Thaï aux crevettes",
      description: "Nouilles de riz sautées aux crevettes, pousses de soja, œuf et cacahuètes",
      price: "13,50 €"
    },
    {
      id: 5,
      name: "Curry vert de poulet",
      description: "Curry thaï authentique au lait de coco, aubergines, basilic thaï et riz jasmin",
      price: "12,90 €"
    },
    {
      id: 6,
      name: "Bœuf sauté au basilic thaï",
      description: "Émincé de bœuf sauté aux légumes croquants et basilic thaï, riz blanc",
      price: "14,50 €"
    },
    {
      id: 7,
      name: "Poisson au curry rouge",
      description: "Filet de poisson dans un curry rouge épicé aux légumes de saison",
      price: "15,90 €"
    }
  ],
  desserts: [
    {
      id: 8,
      name: "Mango Sticky Rice",
      description: "Riz gluant au lait de coco accompagné de mangue fraîche",
      price: "5,50 €"
    },
    {
      id: 9,
      name: "Bananes au lait de coco",
      description: "Bananes caramélisées dans un bouillon parfumé au lait de coco",
      price: "4,90 €"
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Lilia Sennoun",
    rating: 5,
    comment: "Excellent restaurant thaïlandais ! Les saveurs sont authentiques et les portions généreuses. Le personnel est très accueillant. Je recommande vivement !"
  },
  {
    id: 2,
    name: "Pierre Dubois",
    rating: 5,
    comment: "Une cuisine thaïlandaise de qualité à Montpellier. Le pad thaï est délicieux et les currys sont parfaitement épicés. Service rapide et sympathique."
  },
  {
    id: 3,
    name: "Marie Laurent",
    rating: 5,
    comment: "Mon restaurant thaï préféré ! Toujours un plaisir de venir ici. Les plats sont savoureux et préparés avec soin. L'ambiance est chaleureuse."
  }
];

export const foodImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop",
    alt: "Pad Thaï aux crevettes"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    alt: "Curry vert thaï"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&h=300&fit=crop",
    alt: "Salade de papaye verte"
  }
];

export const heroImage = "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&h=800&fit=crop";
export const restaurantImage = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";