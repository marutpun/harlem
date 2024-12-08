import { useBookingStore } from '@/_context/booking';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function Result() {
  const { totalSeats } = useBookingStore((state) => state);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Seat No.</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Manage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {totalSeats.map((seat) => (
          <TableRow>
            <TableCell>{seat}</TableCell>
            <TableCell>Available</TableCell>
            <TableCell>
              <Button>Book</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
