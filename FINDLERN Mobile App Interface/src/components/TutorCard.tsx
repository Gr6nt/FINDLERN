import { Star, MapPin } from "lucide-react";
import { Tutor } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TutorCardProps {
  tutor: Tutor;
  onBook: (tutor: Tutor) => void;
  onViewProfile: (tutor: Tutor) => void;
}

export function TutorCard({ tutor, onBook, onViewProfile }: TutorCardProps) {
  return (
    <div 
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onViewProfile(tutor)}
    >
      <div className="flex gap-3">
        <ImageWithFallback
          src={tutor.photo}
          alt={tutor.name}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 truncate">{tutor.name}</h3>
          <p className="text-gray-600 text-sm truncate">{tutor.skill}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-900">{tutor.rating}</span>
              <span className="text-sm text-gray-500">({tutor.reviewCount})</span>
            </div>
          </div>
          <Badge variant="secondary" className="mt-2 bg-green-50 text-green-700 hover:bg-green-50">
            {tutor.availableIn}
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div>
          <span className="text-indigo-600">${tutor.pricePerHour}</span>
          <span className="text-gray-500 text-sm">/hour</span>
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onBook(tutor);
          }}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
