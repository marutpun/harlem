import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookingFormSchema, type BookingFormDefs } from "@/_schema/bookingForm";
import { stations } from "@/lib/station";
import { useBookingStore } from "@/_context/booking";

export default function SearchForm() {
  const { addOrigin, addDestination } = useBookingStore((state) => state);

  const bookingForm = useForm<BookingFormDefs>({
    resolver: zodResolver(BookingFormSchema),
  });

  const _handleSubmitForm = (data: BookingFormDefs) => {
    const { origin, destination } = data;
    console.log(origin, destination);
  };

  return (
    <div className="container">
      <Form {...bookingForm}>
        <form
          onSubmit={bookingForm.handleSubmit(_handleSubmitForm)}
          className="py-4"
        >
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 space-y-8 md:grid-cols-3 md:gap-y-0 md:space-y-0">
            <FormField
              control={bookingForm.control}
              name="origin"
              render={({ field }) => (
                <FormItem className="flex h-16 flex-col">
                  <FormLabel>From</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? stations.find(
                                (station) => station.name === field.value,
                              )?.name
                            : "Select the origin station"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search the origin station" />
                        <CommandList>
                          <CommandEmpty>Not found</CommandEmpty>
                          <CommandGroup>
                            {stations.map((station) => (
                              <CommandItem
                                value={station.name}
                                key={station.name}
                                onSelect={() => {
                                  addOrigin(station.name);
                                  bookingForm.setValue("origin", station.name);
                                }}
                              >
                                {station.name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    station.name === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Please select the origin station
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={bookingForm.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="flex h-16 flex-col">
                  <FormLabel>To</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? stations.find(
                                (station) => station.name === field.value,
                              )?.name
                            : "Select the destination station"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search the destination station" />
                        <CommandList>
                          <CommandEmpty>Not found</CommandEmpty>
                          <CommandGroup>
                            {stations.map((station) => (
                              <CommandItem
                                value={station.name}
                                key={station.name}
                                onSelect={() => {
                                  addDestination(station.name);
                                  bookingForm.setValue(
                                    "destination",
                                    station.name,
                                  );
                                }}
                              >
                                {station.name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    station.name === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Please select the destination station
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex h-16 flex-col justify-center">
              <Button type="submit" className="mt-0 md:mt-[14px]">
                Search
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
} 
