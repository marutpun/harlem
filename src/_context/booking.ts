import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface BookingState {
  totalSeats: number[];
  origin: string;
  destination: string;
  booking: string[];
  addOrigin: (payload: string) => void;
  addDestination: (payload: string) => void;
  addBooking: (payload: string) => void;
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
//   addOrigin: (payload) => set(() => ({ origin: payload })),
//   addDestination: (payload) => set(() => ({ destination: payload })),
//   addBooking: (payload) => set((state) => ({ booking: [...state.booking, payload] })),
// }));

export const useBookingStore = create<BookingState>()(
  devtools((set) => ({
    totalSeats: Array.from({ length: 100 }, (_, i) => i + 1),
    origin: '',
    destination: '',
    booking: [],
    addOrigin: (payload) => set(() => ({ origin: payload }), undefined, 'ADD_ORIGIN'),
    addDestination: (payload) => set(() => ({ destination: payload }), undefined, 'ADD_DESTINATION'),
    addBooking: (payload) => set((state) => ({ booking: [...state.booking, payload] })),
  }))
);
