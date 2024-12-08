import { stations } from '@/lib/station';

const bookArray = [];
const totalSeats = 3;
const availableSeats = totalSeats;

const seats = Array.from({ length: totalSeats }, (_, index) => ({
  seatNumber: index + 1,
  bookedSegments: [], // Stores each segment this seat is booked for
}));

// Function to check if two segments overlap
function segmentsOverlap(seg1, seg2) {
  // Returns true if segments overlap
  return seg1.originIndex < seg2.destinationIndex && seg1.destinationIndex > seg2.originIndex;
}

// Function to book a seat for a specific segment
export function bookSeat(originStation, destinationStation) {
  // Find indices of origin and destination stations
  const originIndex = stations.findIndex((station) => station.name === originStation);
  const destinationIndex = stations.findIndex((station) => station.name === destinationStation);

  if (originIndex === -1 || destinationIndex === -1 || originIndex >= destinationIndex) {
    console.log('Invalid stations or route.');
    return;
  }

  // Try to find an available seat that is not booked for this segment
  for (const seat of seats) {
    const overlappingSegment = seat.bookedSegments.find((seg) => segmentsOverlap(seg, { originIndex, destinationIndex }));

    if (!overlappingSegment) {
      // If no overlap, book the seat for this segment
      seat.bookedSegments.push({ originIndex, destinationIndex });
      console.log(`Seat ${seat.seatNumber} successfully booked from ${originStation} to ${destinationStation}`);
      console.log(JSON.stringify(seats));

      return;
    }
  }

  console.log('No available seats for this segment.');
}
