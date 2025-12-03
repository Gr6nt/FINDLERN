export interface Tutor {
  id: string;
  name: string;
  photo: string;
  skill: string;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  bio: string;
  expertise: string[];
  availableIn: string;
  location: string;
  availability: {
    day: string;
    slots: string[];
  }[];
}

export interface BookingDetails {
  tutor: Tutor;
  timeSlot: string;
  date: string;
}
