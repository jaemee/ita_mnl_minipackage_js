export default {
    createNewBooking: (newBooking) => fetch(
      "http://localhost:8080/bookings", {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(newBooking)
    })
  }
  