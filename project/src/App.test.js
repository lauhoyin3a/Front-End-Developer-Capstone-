import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';

import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})

test("should render a select input for choosing a time with the correct options", () => {
  
    render(<BookingForm />);
    const selectElement = screen.getByLabelText("Choose time");
    expect(selectElement).toBeInTheDocument();
    const options = selectElement.querySelectorAll("option");
    expect(options.length).toBe(6);
    const expectedValues = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    options.forEach((option, index) => {
      expect(option.value).toBe(expectedValues[index]);
      expect(option.text).toBe(expectedValues[index]);
    });
  });
  test("when the user selects 18:00 as the time, it should update the state", () => {
  
    render(<BookingForm />);
    const selectElement = screen.getByLabelText("Choose time");
    fireEvent.change(selectElement, { target: { value: "18:00" } });
    expect(selectElement.value).toBe("18:00");
    });

    test("The BookingsForm can be submitted by the user with correct infomation", ()=> {

      render(<BookingForm />);
      const selectDate= screen.getByLabelText("Choose date");
      fireEvent.change(selectDate, { target: { value: "2023-03-27" } });
      expect(selectDate.value).toBe("2023-03-27");
      const selectTime= screen.getByLabelText("Choose time");
      fireEvent.change(selectTime, { target: { value: "18:00" } });
      expect(selectTime.value).toBe("18:00");
      const selectGuest= screen.getByLabelText("Number of guests");
      fireEvent.change(selectGuest, { target: { value: 2 } });
      expect(selectGuest.value).toBe("2");
      const selectOccasion= screen.getByLabelText("Occasion");
      fireEvent.change(selectOccasion, { target: { value: "Birthday" } });
      expect(selectOccasion.value).toBe("Birthday");
    })