export type Artwork = {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  price: number;
  rating: number;
  category: string;
  emoji: string;
  gradient: string;
};

export const artworks: Artwork[] = [
  { id: "a1", title: "Sunrise Over Stillness", artist: "Maya Okonkwo", artistId: "maya", price: 240, rating: 4.9, category: "Paintings", emoji: "🌅", gradient: "from-peach to-sage" },
  { id: "a2", title: "Hands That Remember", artist: "Luca Ferreira", artistId: "luca", price: 180, rating: 4.8, category: "Handmade", emoji: "🪴", gradient: "from-sage to-teal" },
  { id: "a3", title: "Echoes in Color", artist: "Amira Said", artistId: "amira", price: 320, rating: 5.0, category: "Digital Art", emoji: "🎨", gradient: "from-teal to-peach" },
  { id: "a4", title: "Woven Light", artist: "Noor Khan", artistId: "noor", price: 95, rating: 4.7, category: "Accessories", emoji: "🧶", gradient: "from-peach to-teal" },
  { id: "a5", title: "Quiet Garden", artist: "Maya Okonkwo", artistId: "maya", price: 410, rating: 4.9, category: "Paintings", emoji: "🌿", gradient: "from-sage to-peach" },
  { id: "a6", title: "Tactile Dreams", artist: "Luca Ferreira", artistId: "luca", price: 260, rating: 4.6, category: "Handmade", emoji: "🏺", gradient: "from-teal to-sage" },
  { id: "a7", title: "Pixels of Hope", artist: "Amira Said", artistId: "amira", price: 150, rating: 4.8, category: "Digital Art", emoji: "✨", gradient: "from-peach to-sage" },
  { id: "a8", title: "Threads of Joy", artist: "Noor Khan", artistId: "noor", price: 120, rating: 4.9, category: "Accessories", emoji: "🧵", gradient: "from-sage to-teal" },
];

export const categories = ["All", "Paintings", "Handmade", "Digital Art", "Accessories", "Custom Orders"];

export type Artist = {
  id: string;
  name: string;
  pronouns: string;
  location: string;
  story: string;
  specialties: string[];
  rating: number;
  sales: number;
  emoji: string;
};

export const artists: Artist[] = [
  { id: "maya", name: "Maya Okonkwo", pronouns: "she/her", location: "Lagos, Nigeria", story: "I paint the colors I hear. Sound and synesthesia guide every brushstroke.", specialties: ["Acrylic", "Mixed media"], rating: 4.9, sales: 142, emoji: "🌻" },
  { id: "luca", name: "Luca Ferreira", pronouns: "he/him", location: "Lisbon, Portugal", story: "Sculpting clay reconnected me to my hands after my accident. Each piece is a small recovery.", specialties: ["Ceramics", "Sculpture"], rating: 4.8, sales: 98, emoji: "🌊" },
  { id: "amira", name: "Amira Said", pronouns: "she/they", location: "Cairo, Egypt", story: "Digital tools open a world my body sometimes closes. I create from bed, and that is enough.", specialties: ["Illustration", "NFT"], rating: 5.0, sales: 211, emoji: "🌙" },
  { id: "noor", name: "Noor Khan", pronouns: "she/her", location: "Karachi, Pakistan", story: "I weave stories into thread — patterns my grandmother taught me, reimagined.", specialties: ["Textile", "Embroidery"], rating: 4.9, sales: 167, emoji: "🌸" },
];
