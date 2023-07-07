import deleteOneCall from "../components/DataProvider/calls/deleteOneCall";
import { httpClient } from "../components/DataProvider/httpClient";
import { PAGES } from "../enum/pagesEnum";
import moment from 'moment';

const getBookings = (apiUrl, id) => {

  httpClient(`${apiUrl}/equipos/${id}`).then(({ headers, json }) => {
    const items = json.bookings.map((i) => ({
      id: i.id,
      start_date: i.start_date,
      end_date: i.end_date,
      quantity: i.quantity,
    }));

    const filteredItems = []

    items.forEach((item) => {
      if (item.end_date < moment().toISOString().split('T')[0]) {
        console.log('entre al delete')
        deleteOneCall(PAGES.BOOKINGS, {id: item.id}, 'http://[::1]:3000/api/v1')
      } else {
        filteredItems.push(item)
      }
    });

    const bookingsAndStock = JSON.stringify({ bookings: filteredItems, stock_total: json.stock_total });
    localStorage.setItem('bookings', bookingsAndStock);
  });
};

export default getBookings;
