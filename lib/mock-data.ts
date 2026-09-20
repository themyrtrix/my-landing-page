import type { Article, LatestItem, Seller } from "./types";

export const sellers: Seller[] = [
  { id: 1, name: "Olivia Rhye", initials: "OR", color: "from-rose-300 to-orange-200", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=85", orders: 154, role: "Product designer" },
  { id: 2, name: "Phoenix Baker", initials: "PB", color: "from-sky-300 to-indigo-200", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85", orders: 142, role: "Creative director" },
  { id: 3, name: "Lana Steiner", initials: "LS", color: "from-emerald-300 to-teal-200", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85", orders: 128, role: "Founder & writer" },
  { id: 4, name: "Demi Wilkinson", initials: "DW", color: "from-violet-300 to-fuchsia-200", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=85", orders: 117, role: "Art director" },
  { id: 5, name: "Candice Wu", initials: "CW", color: "from-amber-300 to-yellow-100", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85", orders: 109, role: "Researcher" },
  { id: 6, name: "Natali Craig", initials: "NC", color: "from-cyan-300 to-sky-100", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=85", orders: 96, role: "Engineer" },
  { id: 7, name: "Drew Cano", initials: "DC", color: "from-lime-300 to-emerald-100", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=85", orders: 84, role: "Photographer" },
  { id: 8, name: "Orlando Diggs", initials: "OD", color: "from-orange-300 to-rose-100", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85", orders: 73, role: "Editor" }
];
export const articles: Article[] = [
  { id: 1, title: "The quiet power of less", category: "Perspective", icon: "✦", gradient: "from-[#c6d8ff] to-[#eef2ff]", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", readTime: "6 min read" },
  { id: 2, title: "Designing for the in-between", category: "Craft", icon: "◌", gradient: "from-[#d6f5ec] to-[#eefbf7]", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85", readTime: "4 min read" },
  { id: 3, title: "A field guide to focus", category: "Ideas", icon: "◒", gradient: "from-[#ffe0ce] to-[#fff3eb]", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85", readTime: "8 min read" },
  { id: 4, title: "Notes from a slower studio", category: "Journal", icon: "⌁", gradient: "from-[#e8d9ff] to-[#f8f0ff]", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=85", readTime: "5 min read" }
];
export const latest: LatestItem[] = [
  { id: 1, title: "Small rituals, big momentum", author: "Maya Chen", date: "Today", gradient: "from-[#d8e7ff] via-[#edf3ff] to-[#fdfdff]", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=85", tag: "Practice" },
  { id: 2, title: "The architecture of a good day", author: "Jon Bell", date: "Yesterday", gradient: "from-[#d9f6ec] via-[#effbf7] to-[#fafffd]", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85", tag: "Life" },
  { id: 3, title: "Why texture is having a moment", author: "Iris Nolan", date: "2 days ago", gradient: "from-[#fce0d2] via-[#fff2eb] to-[#fffdfb]", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85", tag: "Culture" },
  { id: 4, title: "On making space for wonder", author: "Ari Wallace", date: "3 days ago", gradient: "from-[#eadcff] via-[#f6efff] to-[#fffaff]", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85", tag: "Perspective" },
  { id: 5, title: "A softer way to ship", author: "Noah Kim", date: "4 days ago", gradient: "from-[#fff0bd] via-[#fff8de] to-[#fffdf5]", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85", tag: "Work" },
  { id: 6, title: "The beauty of unfinished things", author: "Sofia Lee", date: "5 days ago", gradient: "from-[#d5eff5] via-[#eefafd] to-[#fcffff]", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85", tag: "Ideas" }
];
