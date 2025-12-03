import { Search, Calculator, Code, Music, Globe, Briefcase, ChevronRight } from "lucide-react";
import { Tutor } from "../types";
import { categories } from "../data/tutors";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeScreenProps {
  tutors: Tutor[];
  onSearch: (query: string) => void;
  onCategoryClick: (category: string) => void;
  onTutorClick: (tutor: Tutor) => void;
}

const iconMap: { [key: string]: any } = {
  Calculator,
  Code,
  Music,
  Globe,
  Briefcase
};

export function HomeScreen({ tutors, onSearch, onCategoryClick, onTutorClick }: HomeScreenProps) {
  const topRatedTutors = tutors.filter(t => t.rating >= 4.8).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white px-6 pt-12 pb-8">
        <h1 className="text-white mb-2">Welcome to FINDLERN</h1>
        <p className="text-indigo-100">Find expert tutors instantly</p>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="What do you want to learn right now?"
            className="flex-1 outline-none text-gray-900 placeholder:text-gray-400"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                onSearch(e.currentTarget.value);
              }
            }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-8">
        <h2 className="text-gray-900 mb-4">Popular Categories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.name)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border-2 border-indigo-100 hover:border-indigo-600 hover:bg-indigo-50 transition-colors whitespace-nowrap"
              >
                <Icon className="w-4 h-4 text-indigo-600" />
                <span className="text-gray-900">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Rated Tutors */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">Top Rated Tutors</h2>
          <button 
            onClick={() => onSearch("")}
            className="flex items-center gap-1 text-indigo-600 text-sm"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {topRatedTutors.map((tutor) => (
            <div
              key={tutor.id}
              onClick={() => onTutorClick(tutor)}
              className="flex-shrink-0 w-40 bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            >
              <ImageWithFallback
                src={tutor.photo}
                alt={tutor.name}
                className="w-full aspect-square rounded-lg object-cover mb-3"
              />
              <h3 className="text-gray-900 text-sm mb-1 truncate">{tutor.name}</h3>
              <p className="text-gray-500 text-xs mb-2 line-clamp-2">{tutor.skill}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-900">{tutor.rating}</span>
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                  {tutor.availableIn.includes("now") ? "Now" : tutor.availableIn.split(" ")[2]}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 pb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-indigo-600 mb-1">500+</div>
              <div className="text-gray-500 text-sm">Tutors</div>
            </div>
            <div className="border-l border-r border-gray-100">
              <div className="text-indigo-600 mb-1">50+</div>
              <div className="text-gray-500 text-sm">Subjects</div>
            </div>
            <div>
              <div className="text-indigo-600 mb-1">10k+</div>
              <div className="text-gray-500 text-sm">Sessions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
