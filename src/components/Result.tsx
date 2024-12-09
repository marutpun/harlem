import { useBookingStore } from '@/_context/booking';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function Result() {
  const { booking, isSeatAvailable } = useBookingStore((state) => state);

  const renderContent = () => {
    if (!isSeatAvailable) {
      return (
        <h2 className="text-center">
          Please select the origin and destination station
        </h2>
      );
    }

    return (
      <>
        <h2 className="text-center">Manage your ticket below</h2>
        <Table>
          <TableCaption>List of available tickets.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Seat Number</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {booking.map((seat) => (
              <TableRow key={seat.seatNumber}>
                <TableCell>{JSON.stringify(seat.bookedSegments)}</TableCell>
                <TableCell>Available</TableCell>
                <TableCell>
                  <Button onClick={() => console.log(seat)}>Book</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  };

  return <div className="container">{renderContent()}</div>;
}
