import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { SearchResults } from "./components/SearchResults";
import { TutorProfile } from "./components/TutorProfile";
import { BookingSummary } from "./components/BookingSummary";
import { SessionInterface } from "./components/SessionInterface";
import { tutors } from "./data/tutors";
import { Tutor, BookingDetails } from "./types";

type Screen = "home" | "search" | "profile" | "booking" | "session";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentScreen("search");
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    setCurrentScreen("search");
  };

  const handleTutorClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    setCurrentScreen("profile");
  };

  const handleBookTutor = (tutor: Tutor) => {
    setSelectedTutor(tutor);
    const nextSlot = tutor.availability[0].slots[0];
    setBookingDetails({
      tutor,
      date: tutor.availability[0].day,
      timeSlot: nextSlot
    });
    setCurrentScreen("booking");
  };

  const handleBookSlot = (tutor: Tutor, date: string, slot: string) => {
    setBookingDetails({
      tutor,
      date,
      timeSlot: slot
    });
    setCurrentScreen("booking");
  };

  const handleConfirmBooking = () => {
    setCurrentScreen("session");
  };

  const handleEndSession = () => {
    setCurrentScreen("home");
    setSelectedTutor(null);
    setBookingDetails(null);
  };

  const handleBack = () => {
    if (currentScreen === "search") {
      setCurrentScreen("home");
    } else if (currentScreen === "profile") {
      setCurrentScreen("search");
    } else if (currentScreen === "booking") {
      setCurrentScreen("profile");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen">
      {currentScreen === "home" && (
        <HomeScreen
          tutors={tutors}
          onSearch={handleSearch}
          onCategoryClick={handleCategoryClick}
          onTutorClick={handleTutorClick}
        />
      )}

      {currentScreen === "search" && (
        <SearchResults
          tutors={tutors}
          searchQuery={searchQuery}
          onBack={handleBack}
          onBookTutor={handleBookTutor}
          onViewProfile={handleTutorClick}
        />
      )}

      {currentScreen === "profile" && selectedTutor && (
        <TutorProfile
          tutor={selectedTutor}
          onBack={handleBack}
          onBookSlot={handleBookSlot}
        />
      )}

      {currentScreen === "booking" && bookingDetails && (
        <BookingSummary
          booking={bookingDetails}
          onBack={handleBack}
          onConfirm={handleConfirmBooking}
        />
      )}

      {currentScreen === "session" && selectedTutor && (
        <SessionInterface
          tutor={selectedTutor}
          onEndSession={handleEndSession}
        />
      )}
    </div>
  );
}
