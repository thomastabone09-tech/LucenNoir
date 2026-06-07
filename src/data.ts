export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Obsidian Silk Track Jacket",
    price: 850,
    category: "Jackets",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop&sepia=100",
    isNew: true
  },
  {
    id: "p2",
    name: "Midnight Tailored Trousers",
    price: 620,
    category: "Pants",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Graphite Asymmetric Knit",
    price: 540,
    category: "Sweaters",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "p4",
    name: "Silver-Clasp Leather Belt",
    price: 320,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Architectural Overcoat",
    price: 1800,
    category: "Jackets",
    image: "https://images.unsplash.com/photo-1510368146603-9bbcdbf679f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "Charcoal Structured Tee",
    price: 280,
    category: "Tees",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  }
];

export const lookbookImages = [
  "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559582798-678dfdf8996a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1200&auto=format&fit=crop"
];
