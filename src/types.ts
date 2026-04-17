export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  category: 'Sport' | 'Adventure' | 'Classic' | 'Scooter';
  price: number;
  engine: string;
  power: string;
  image: string;
  description: string;
}

export type Category = 'All' | 'Sport' | 'Adventure' | 'Classic' | 'Scooter';
