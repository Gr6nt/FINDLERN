import { ArrowLeft, Star, MapPin, Clock, CheckCircle } from "lucide-react";
import { Tutor } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TutorProfileProps {
  tutor: Tutor;
  onBack: () => void;
  onBookSlot: (tutor: Tutor, date: string, slot: string) => void;
}

export function TutorProfile({ tutor, onBack, onBookSlot }: TutorProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900">Tutor Profile</h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white px-6 py-6 border-b border-gray-100">
        <div className="flex gap-4 mb-4">
          <ImageWithFallback
            src={tutor.photo}
            alt={tutor.name}
            className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-gray-900 mb-1">{tutor.name}</h2>
            <p className="text-gray-600 mb-3">{tutor.skill}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-900">{tutor.rating}</span>
                <span className="text-gray-500 text-sm">({tutor.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        <Badge variant="secondary" className="bg-green-50 text-green-700">
          <Clock className="w-3 h-3 mr-1" />
          {tutor.availableIn}
        </Badge>
      </div>

      {/* About */}
      <div className="bg-white px-6 py-6 border-b border-gray-100 mb-2">
        <h3 className="text-gray-900 mb-3">About Me</h3>
        <p className="text-gray-600 leading-relaxed">{tutor.bio}</p>
      </div>

      {/* Expertise */}
      <div className="bg-white px-6 py-6 border-b border-gray-100 mb-2">
        <h3 className="text-gray-900 mb-3">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {tutor.expertise.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-indigo-50 text-indigo-700">
              <CheckCircle className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white px-6 py-6 border-b border-gray-100 mb-2">
        <h3 className="text-gray-900 mb-3">Pricing</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-indigo-600">${tutor.pricePerHour}</span>
          <span className="text-gray-500">per hour</span>
        </div>
      </div>

      {/* Availability */}
      <div className="bg-white px-6 py-6 mb-20">
        <h3 className="text-gray-900 mb-4">Schedule & Availability</h3>
        <p className="text-gray-500 text-sm mb-4">Select a time slot to book</p>
        
        <div className="space-y-4">
          {tutor.availability.map((day, index) => (
            <div key={index}>
              <h4 className="text-gray-700 mb-2">{day.day}</h4>
              <div className="grid grid-cols-3 gap-2">
                {day.slots.map((slot, slotIndex) => (
                  <button
                    key={slotIndex}
                    onClick={() => onBookSlot(tutor, day.day, slot)}
                    className={`px-3 py-2.5 rounded-lg border-2 transition-colors text-sm ${
                      slot.toLowerCase() === "now"
                        ? "border-green-500 bg-green-50 text-green-700 hover:bg-green-100"
                        : "border-indigo-100 bg-white text-gray-900 hover:border-indigo-600 hover:bg-indigo-50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-gray-500 text-sm">Total</div>
            <div className="text-gray-900">${tutor.pricePerHour}/hour</div>
          </div>
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 flex-1"
            onClick={() => {
              const nextSlot = tutor.availability[0].slots[0];
              onBookSlot(tutor, tutor.availability[0].day, nextSlot);
            }}
          >
            Book Next Available
          </Button>
        </div>
      </div>
    </div>
  );
}
