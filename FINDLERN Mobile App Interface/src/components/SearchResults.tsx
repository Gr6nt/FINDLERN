import { useState } from "react";
import { ArrowLeft, SlidersHorizontal, X } from "lucide-react";
import { Tutor } from "../types";
import { TutorCard } from "./TutorCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface SearchResultsProps {
  tutors: Tutor[];
  searchQuery: string;
  onBack: () => void;
  onBookTutor: (tutor: Tutor) => void;
  onViewProfile: (tutor: Tutor) => void;
}

export function SearchResults({ 
  tutors, 
  searchQuery, 
  onBack, 
  onBookTutor, 
  onViewProfile 
}: SearchResultsProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");

  let filteredTutors = [...tutors];

  // Apply filters
  if (priceFilter === "under40") {
    filteredTutors = filteredTutors.filter(t => t.pricePerHour < 40);
  } else if (priceFilter === "40to60") {
    filteredTutors = filteredTutors.filter(t => t.pricePerHour >= 40 && t.pricePerHour <= 60);
  } else if (priceFilter === "over60") {
    filteredTutors = filteredTutors.filter(t => t.pricePerHour > 60);
  }

  if (ratingFilter === "4.5plus") {
    filteredTutors = filteredTutors.filter(t => t.rating >= 4.5);
  } else if (ratingFilter === "4.8plus") {
    filteredTutors = filteredTutors.filter(t => t.rating >= 4.8);
  }

  const activeFiltersCount = [priceFilter, ratingFilter, locationFilter].filter(f => f !== "all").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-gray-900">Search Results</h1>
            {searchQuery && <p className="text-gray-500 text-sm">for "{searchQuery}"</p>}
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="relative p-2 hover:bg-gray-100 rounded-lg"
          >
            <SlidersHorizontal className="w-5 h-5 text-gray-900" />
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {priceFilter !== "all" && (
              <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 flex items-center gap-1">
                Price: {priceFilter === "under40" ? "Under $40" : priceFilter === "40to60" ? "$40-$60" : "Over $60"}
                <button onClick={() => setPriceFilter("all")} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {ratingFilter !== "all" && (
              <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 flex items-center gap-1">
                Rating: {ratingFilter === "4.5plus" ? "4.5+" : "4.8+"}
                <button onClick={() => setRatingFilter("all")} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white border-b border-gray-100 px-6 py-4">
          <h3 className="text-gray-900 mb-4">Filters</h3>
          
          {/* Price Filter */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm mb-2 block">Price per Hour</label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setPriceFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  priceFilter === "all" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setPriceFilter("under40")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  priceFilter === "under40" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Under $40
              </button>
              <button
                onClick={() => setPriceFilter("40to60")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  priceFilter === "40to60" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                $40 - $60
              </button>
              <button
                onClick={() => setPriceFilter("over60")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  priceFilter === "over60" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Over $60
              </button>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm mb-2 block">Rating</label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setRatingFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ratingFilter === "all" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setRatingFilter("4.5plus")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ratingFilter === "4.5plus" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                4.5+ ★
              </button>
              <button
                onClick={() => setRatingFilter("4.8plus")}
                className={`px-4 py-2 rounded-lg text-sm ${
                  ratingFilter === "4.8plus" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                4.8+ ★
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="px-6 py-6">
        <p className="text-gray-500 text-sm mb-4">
          {filteredTutors.length} tutor{filteredTutors.length !== 1 ? "s" : ""} found
        </p>
        <div className="space-y-4">
          {filteredTutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              onBook={onBookTutor}
              onViewProfile={onViewProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
