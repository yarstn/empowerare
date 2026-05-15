import artSunrise from "@/assets/art-sunrise.jpg";
import artCeramic from "@/assets/art-ceramic.jpg";
import artDigital from "@/assets/art-digital.jpg";
import artTextile from "@/assets/art-textile.jpg";
import artGarden from "@/assets/art-garden.jpg";
import artClay from "@/assets/art-clay.jpg";
import artPixels from "@/assets/art-pixels.jpg";
import artThreads from "@/assets/art-threads.jpg";
import artistMaya from "@/assets/artist-maya.jpg";
import artistLuca from "@/assets/artist-luca.jpg";
import artistAmira from "@/assets/artist-amira.jpg";
import artistNoor from "@/assets/artist-noor.jpg";

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  price: number;
  rating: number;
  category: string;
  image: string;
};

export const artworks: Artwork[] = [
  { id: "a1", title: "Sunrise Over Stillness", artist: "Maya Okonkwo", artistId: "maya", price: 240, rating: 4.9, category: "Paintings", image: artSunrise },
  { id: "a2", title: "Hands That Remember", artist: "Luca Ferreira", artistId: "luca", price: 180, rating: 4.8, category: "Handmade", image: artCeramic },
  { id: "a3", title: "Echoes in Color", artist: "Amira Said", artistId: "amira", price: 320, rating: 5.0, category: "Digital Art", image: artDigital },
  { id: "a4", title: "Woven Light", artist: "Noor Khan", artistId: "noor", price: 95, rating: 4.7, category: "Accessories", image: artTextile },
  { id: "a5", title: "Quiet Garden", artist: "Maya Okonkwo", artistId: "maya", price: 410, rating: 4.9, category: "Paintings", image: artGarden },
  { id: "a6", title: "Tactile Dreams", artist: "Luca Ferreira", artistId: "luca", price: 260, rating: 4.6, category: "Handmade", image: artClay },
  { id: "a7", title: "Pixels of Hope", artist: "Amira Said", artistId: "amira", price: 150, rating: 4.8, category: "Digital Art", image: artPixels },
  { id: "a8", title: "Threads of Joy", artist: "Noor Khan", artistId: "noor", price: 120, rating: 4.9, category: "Accessories", image: artThreads },
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
  image: string;
};

export const artists: Artist[] = [
  { id: "maya", name: "Maya Okonkwo", pronouns: "she/her", location: "Lagos, Nigeria", story: "I paint the colors I hear. Sound and synesthesia guide every brushstroke.", specialties: ["Acrylic", "Mixed media"], rating: 4.9, sales: 142, image: artistMaya },
  { id: "luca", name: "Luca Ferreira", pronouns: "he/him", location: "Lisbon, Portugal", story: "Sculpting clay reconnected me to my hands after my accident. Each piece is a small recovery.", specialties: ["Ceramics", "Sculpture"], rating: 4.8, sales: 98, image: artistLuca },
  { id: "amira", name: "Amira Said", pronouns: "she/they", location: "Cairo, Egypt", story: "Digital tools open a world my body sometimes closes. I create from bed, and that is enough.", specialties: ["Illustration", "NFT"], rating: 5.0, sales: 211, image: artistAmira },
  { id: "noor", name: "Noor Khan", pronouns: "she/her", location: "Karachi, Pakistan", story: "I weave stories into thread — patterns my grandmother taught me, reimagined.", specialties: ["Textile", "Embroidery"], rating: 4.9, sales: 167, image: artistNoor },
];
