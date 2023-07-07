import { ArrayField, Datagrid, DateField, DeleteButton, ImageField, Show, Tab, TabbedShowLayout, TextField } from 'react-admin';
import CreateEquipmentBooking from './CreateEquipmentBooking';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';

const ShowEquipment = (props) => {
  const { id } = useParams();
  const bookings = JSON.parse(localStorage.getItem('bookings'))

  const renderBookingTileContent = ({ date, view }) => {
    const bookingMap = new Map();
  
    bookings.bookings.forEach(booking => {
      const bookingDate = new Date(booking.start_date).toISOString().split('T')[0];
      const existingBooking = bookingMap.get(bookingDate);

      if (existingBooking) {
        existingBooking.quantity += booking.quantity;
      } else {
        bookingMap.set(bookingDate, { ...booking });
      }
    });

    const booking = bookingMap.get(date.toISOString().split('T')[0]);

    let book = {};

    if (booking) {
      book = {...booking}
    } else {
      book = {quantity: 0}
    }

    return (
      <div>
        {view === 'month' && book.quantity < bookings.stock_total ? (
          <div>
            <div style={{color: "green"}}>{bookings.stock_total - book.quantity} Disponibles</div>
          </div>
        ) : (<div style={{color: "red"}}>
          Sin Stock
        </div>)}
      </div>
    );
  };
  
  return (
    <Show {...props} title="Equipo">
      <TabbedShowLayout>
        <Tab label="Detalles">
          <ArrayField source="images">
            <Datagrid>
              <ImageField source="image_url" title="title" />
            </Datagrid>
          </ArrayField>
          <TextField source="id" label="Id" />
          <TextField source="name" label="Nombre" />
          <TextField source="price" label="Precio" />
          <TextField source="description" label="Descripcion" />
          <TextField source="stock_total" label="Stock total" />
          <TextField source="category.name" label="Categoria" />
          <TextField source="marca.name" label="Marca" />
        </Tab>
        <Tab label="Reservas">
          <Calendar 
            tileContent={renderBookingTileContent}
            view="month"
            showNeighboringMonth={false}
          />
          <ArrayField source="bookings" label="Reservas">
            <Datagrid>
              <TextField source="id" label="Id" />
              <DateField source="start_date" label="Fecha de inicio" />
              <DateField source="end_date" label="Fecha de fin" />
              <TextField source="quantity" label="Cantidad" />
              <DeleteButton resource='bookings'/>
            </Datagrid>
          </ArrayField>
        </Tab>
        <Tab label="Reservar">
          <CreateEquipmentBooking id={id} />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default ShowEquipment;
