import { ArrowLeft, Calendar, Clock, DollarSign, Video, CheckCircle } from "lucide-react";
import { BookingDetails } from "../types";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookingSummaryProps {
  booking: BookingDetails;
  onBack: () => void;
  onConfirm: () => void;
}

export function BookingSummary({ booking, onBack, onConfirm }: BookingSummaryProps) {
  const { tutor, timeSlot, date } = booking;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-gray-900">Booking Summary</h1>
        </div>
      </div>

      {/* Success Message */}
      <div className="px-6 py-8">
        <div className="bg-indigo-50 rounded-2xl p-6 text-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-gray-900 mb-2">Almost There!</h2>
          <p className="text-gray-600">Review your booking details below</p>
        </div>

        {/* Tutor Info */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <h3 className="text-gray-900 mb-4">Tutor Details</h3>
          <div className="flex gap-4">
            <ImageWithFallback
              src={tutor.photo}
              alt={tutor.name}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h4 className="text-gray-900 mb-1">{tutor.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{tutor.skill}</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm text-gray-900">{tutor.rating}</span>
                <span className="text-sm text-gray-500">({tutor.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4">
          <h3 className="text-gray-900 mb-4">Session Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm">Date</div>
                <div className="text-gray-900">{date}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm">Time</div>
                <div className="text-gray-900">{timeSlot}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Video className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm">Session Type</div>
                <div className="text-gray-900">Online Video Call</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm">Price</div>
                <div className="text-gray-900">${tutor.pricePerHour} per hour</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-gray-900 mb-4">Payment Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Session (1 hour)</span>
              <span className="text-gray-900">${tutor.pricePerHour}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="text-gray-900">$5</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between">
              <span className="text-gray-900">Total</span>
              <span className="text-indigo-600">${tutor.pricePerHour + 5}</span>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <p className="text-blue-900 text-sm">
            By confirming, you agree to our Terms of Service and Cancellation Policy. 
            You can cancel up to 2 hours before the session for a full refund.
          </p>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 max-w-lg mx-auto">
        <Button 
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          onClick={onConfirm}
        >
          Confirm & Pay ${tutor.pricePerHour + 5}
        </Button>
      </div>
    </div>
  );
}
