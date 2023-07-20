import { Datagrid, List, TextField } from "react-admin"

const ListEquipmentBooking = (props) => {
  return (
    <List
      title={'Listdo De Reservas'}
      {...props}
    >
      <Datagrid rowClick='show'>
        <TextField source="id" label='Id' />
        <TextField source="equipo_id" label='Id del equipo' />
        <TextField source="start_date" label='fecha de reserva' />
        <TextField source="quantity" label='Cantidad' />
      </Datagrid>
    </List>
  )
}
export default ListEquipmentBooking