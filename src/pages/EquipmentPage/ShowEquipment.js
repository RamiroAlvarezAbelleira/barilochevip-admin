import { ArrayField, Datagrid, DateField, Show, Tab, TabbedShowLayout, TextField } from "react-admin"
import CreateEquipmentBooking from "./CreateEquipmentBooking"
import { useParams } from "react-router-dom"

const ShowEquipment = (props) => {
  const {id} = useParams()
  return (
    <Show {...props} title={"Equipo"}>
        <TabbedShowLayout>
          <Tab label='Detalles'>
            <TextField source="id" label='Id' />
            <TextField source="name" label='Nombre' />
            <TextField source="price" label='Precio' />
            <TextField source="description" label='Descripcion' />
            <TextField source="stock_total" label='Stock total' />
            <TextField source="category.name" label='Categoria' />
            <TextField source="marca.name" label='Marca' />
            <ArrayField source="bookings" label='Reservas'>
              <Datagrid>
                <TextField source="id" label="Id" />
                <DateField source="start_date" label="Fecha de inicio" />
                <DateField source="end_date" label="Fecha de fin" />
              </Datagrid>
            </ArrayField>
          </Tab>
          <Tab label='Reservar'>
            <CreateEquipmentBooking id={id}/>
          </Tab>
        </TabbedShowLayout>
    </Show>
  )
}
export default ShowEquipment