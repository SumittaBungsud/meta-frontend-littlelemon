import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./routes/BookingForm";

// test("Test calculation", () => {
//   expect(1 + 1).toBe(2);
// });

describe("Form submission", () => {
  test("Test if Input values are inserted", () => {
    render(<BookingForm />);

    const handleBooking = jest.fn();
    const tableInput = screen.getByLabelText(/Select Tables/);
    const peopleInput = screen.getByLabelText(/How many people?/);
    const dateInput = screen.getByLabelText(/Choose Date/);
    const timeInput = screen.getByLabelText(/Choose Time/);
    const occasInput = screen.getByLabelText(/Occasion/);
    const submitBtn = screen.getByText(/Book a Table/);

    fireEvent.change(tableInput, { target: { value: 1 } });
    fireEvent.change(peopleInput, { target: { value: 1 } });
    fireEvent.change(dateInput, { target: { value: "2024-10-29" } });
    fireEvent.click(timeInput, { target: { option: { value: "17:00" } } });
    fireEvent.click(occasInput, { target: { option: { value: "Birthday" } } });
    fireEvent.click(submitBtn);

    // expect(handleBooking).toHaveBeenCalled();
    expect(tableInput.value).toBe("1");
    expect(peopleInput.value).toBe("1");
    expect(dateInput.value).toBe("2024-10-29");
    expect(timeInput.value).toBe("17:00");
    expect(occasInput.value).toBe("Birthday");
  });
});
