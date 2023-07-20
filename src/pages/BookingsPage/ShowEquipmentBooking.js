import { Show, SimpleShowLayout, TextField } from "react-admin"

const ShowEquipmentBooking = (props) => {
  return (
    <Show {...props} title={"Reserva"}>
        <SimpleShowLayout>
            <TextField source="start_date" label='Fecha de la reserva' />
            <TextField source="quantity" label='Cantidad de equipos reservados' />
        </SimpleShowLayout>
    </Show>
  )
}
export default ShowEquipmentBooking