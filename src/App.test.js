import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./routes/BookingForm";
import { FormProvider } from "./sources/contexts/FormProvider";

describe("Form submission testing", () => {
  test("Test if Input values are inserted valid booking details", () => {
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );

    const tableInput = screen.getByLabelText(/Select Tables/);
    const peopleInput = screen.getByLabelText(/How many people?/);
    const dateInput = screen.getByLabelText(/Choose Date/);
    const timeInput = screen.getByLabelText(/Choose Time/);
    const occasInput = screen.getByLabelText(/Occasion/);

    fireEvent.change(tableInput, { target: { value: 2 } });
    fireEvent.change(peopleInput, { target: { value: 2 } });
    fireEvent.change(dateInput, { target: { value: "2024-10-29" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(occasInput, {
      target: { value: "Anniversary" },
    });

    expect(tableInput.value).toBe("2");
    expect(peopleInput.value).toBe("2");
    expect(dateInput.value).toBe("2024-10-29");
    expect(timeInput.value).toBe("18:00");
    expect(occasInput.value).toBe("Anniversary");
  });

  test("Test if Input values are inserted valid customer details", () => {
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );

    const nameInput = screen.getByLabelText(/Customer name/);
    const phoneInput = screen.getByLabelText(/Phone number/);

    fireEvent.change(nameInput, { target: { value: "fullname" } });
    fireEvent.change(phoneInput, { target: { value: "0999999999" } });

    expect(nameInput.value).toBe("fullname");
    expect(phoneInput.value).toBe("0999999999");
  });

  test("Test the validation could handle invalid data format", () => {
    const { container } = render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );

    const dateInput = screen.getByLabelText(/Choose Date/);
    const timeInput = screen.getByLabelText(/Choose Time/);
    const submitBtn = screen.getByText(/Book a Table/);

    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.change(timeInput, { target: { option: { value: "16:00" } } });

    expect(
      container.querySelector(".form-item > input:invalid")
    ).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });

  test("Test the confirmation popup show up after submitting", () => {
    render(
      <FormProvider>
        <BookingForm />
      </FormProvider>
    );

    const tableInput = screen.getByLabelText(/Select Tables/);
    const peopleInput = screen.getByLabelText(/How many people?/);
    const dateInput = screen.getByLabelText(/Choose Date/);
    const timeInput = screen.getByLabelText(/Choose Time/);
    const occasInput = screen.getByLabelText(/Occasion/);
    const nameInput = screen.getByLabelText(/Customer name/);
    const phoneInput = screen.getByLabelText(/Phone number/);
    const submitBtn = screen.getByText(/Book a Table/);
    const confirmBox = screen.getByText(/Booking Details/);

    fireEvent.change(tableInput, { target: { value: 2 } });
    fireEvent.change(peopleInput, { target: { value: 2 } });
    fireEvent.change(dateInput, { target: { value: "2024-10-29" } });
    fireEvent.change(timeInput, { target: { value: "18:00" } });
    fireEvent.change(occasInput, {
      target: { value: "Anniversary" },
    });
    fireEvent.change(nameInput, { target: { value: "fullname" } });
    fireEvent.change(phoneInput, { target: { value: "0999999999" } });
    fireEvent.click(submitBtn);

    expect(confirmBox).toBeInTheDocument();
  });
});
