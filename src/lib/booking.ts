import { stations } from '@/lib/station';

const totalSeats = 3;

const seats = Array.from({ length: totalSeats }, (_, index) => ({
  seatNumber: index + 1,
  bookedSegments: [], // Stores each segment this seat is booked for
}));

// Function to check if two segments overlap
function segmentsOverlap(seg1, seg2): boolean {
  // Returns true if segments overlap
  return (
    seg1.originIndex < seg2.destinationIndex &&
    seg1.destinationIndex > seg2.originIndex
  );
}

// Function to book a seat for a specific segment
//export function bookSeat(originStation: string, destinationStation: string):void {}

export function checkAvailable(
  originStation: string,
  destinationStation: string,
  paidBooking,
): boolean {
  const originIndex = stations.findIndex(
    (station) => station.name === originStation,
  );
  const destinationIndex = stations.findIndex(
    (station) => station.name === destinationStation,
  );

  for (const seat of paidBooking) {
    const overlappingSegment = seat.bookedSegments.find((seg: []) =>
      segmentsOverlap(seg, { originIndex, destinationIndex }),
    );

    if (!overlappingSegment) {
      return true;
    }
  }

  return false;
}
