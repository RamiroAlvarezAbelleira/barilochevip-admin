import { ArrayField, Datagrid, DateField, EditButton, ImageField, Show, Tab, TabbedShowLayout, TextField, useShowController } from 'react-admin';
import CreateEquipmentBooking from './CreateEquipmentBooking';
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import { CustomDeleteButton } from '../../components/CustomDeleteButton';
import "./equipmentPage.css"

const ShowEquipment = (props) => {
  const { id } = useParams();
  const { record } = useShowController(props)
  const bookingsToDelete = record.bookings || []
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
            <div style={{color: "green", padding: "10px"}}><span style={{fontSize: "1rem"}}>{bookings.stock_total - book.quantity}</span> Disponibles</div>
          </div>
        ) : (<div style={{color: "red", padding: "10px"}}>
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
          <div className='bookings-array'>
            <ArrayField source="bookings" label="Reservas">
              <Datagrid>
                <TextField source="id" label="Id" />
                <DateField source="start_date" label="Fecha de reserva" />
                <TextField source="quantity" label="Cantidad" />
                <EditButton resource='bookings'/>
              </Datagrid>
            </ArrayField>
            <div className='bookings-delete-buttons'>
            {
              bookingsToDelete.map((booking) => (
                <div key={booking.id}>
                  <span>Id: {booking.id}</span>
                  <CustomDeleteButton record={booking}/>
                </div>
              ))
            }
            </div>
          </div>
        </Tab>
        <Tab label="+ Nueva reserva">
          <CreateEquipmentBooking id={id} />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default ShowEquipment;
