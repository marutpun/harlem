import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SeatSegment {
  seatNumber: number;
  bookedSegments: {
    origin: string;
    destination: string;
  }[];
}

interface BookingState {
  totalSeats: number[];
  origin: string;
  destination: string;
  isSeatAvailable: boolean | null;
  booking: SeatSegment[];
  setOrigin: (payload: string) => void;
  setDestination: (payload: string) => void;
  setSeatAvailability: (payload: boolean) => void;
  addBooking: (payload: SeatSegment) => void;
}

// Prod
// export const useBookingStore = create<BookingState>((set, get) => ({
//   totalSeats: 100,
//   seatNo: () => {
//     return Array.from({ length: get().totalSeats }, (_, i) => i + 1);
//   },
//   origin: '',
//   destination: '',
//   booking: [],
//   setOrigin: (payload) => set(() => ({ origin: payload })),
//   setDestination: (payload) => set(() => ({ destination: payload })),
//   addBooking: (payload) => set((state) => ({ booking: [...state.booking, payload] })),
// }));

export const useBookingStore = create<BookingState>()(
  devtools((set) => ({
    totalSeats: Array.from({ length: 3 }, (_, i) => i + 1),
    origin: '',
    destination: '',
    isSeatAvailable: null,
    booking: [
      {
        seatNumber: 1,
        bookedSegments: [{ origin: 'Station 1', destination: 'Station 2' }],
      },
      {
        seatNumber: 2,
        bookedSegments: [
          { origin: 'Station 1', destination: 'Station 2' },
          { origin: 'Station 2', destination: 'Station 3' },
        ],
      },
      { seatNumber: 3, bookedSegments: [] },
    ],
    setOrigin: (payload: string) =>
      set(() => ({ origin: payload }), undefined, 'SET_ORIGIN'),
    setDestination: (payload: string) =>
      set(() => ({ destination: payload }), undefined, 'SET_DESTINATION'),
    setSeatAvailability: (available: boolean) =>
      set(
        () => ({
          isSeatAvailable: available,
        }),
        undefined,
        'SET_SEAT_AVAILABILITY',
      ),
    addBooking: (payload) =>
      set((state) => ({ booking: [...state.booking, payload] })),
  })),
);
