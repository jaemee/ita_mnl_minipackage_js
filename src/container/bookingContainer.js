import { connect } from 'react-redux'
import Booking from '../Booking';
import BookingResource from '../components/resource/BookingResource'

const mapStateToProps = state => ({
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
  createNewBooking: newBooking => {
    BookingResource.createNewBooking(newBooking)
    .then(res => res.json())
      .then(({  }) => {
        dispatch({
          type: 'ADDBOOKING',
          payload: newBooking
        // payload: newBooking
        })
      })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking)
