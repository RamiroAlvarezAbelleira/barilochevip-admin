import { Create, DateTimeInput, SimpleForm, TextField, required} from "react-admin"

const CreateEquipmentBooking = (props) => {
  return (
    <Create {...props} resource='bookings' >
        <SimpleForm redirect="show">
            <DateTimeInput
            source="start_date"
            label="Fecha de inicio"
            validate={required("Campo requerido")}
            />
            <DateTimeInput
            source="end_date"
            label="Fecha de fin"
            validate={required("Campo requerido")}
            />
            <TextField
            source="equipo_id"
            defaultValue={props.id}
            hidden
            />
        </SimpleForm>
    </Create>
  )
}
export default CreateEquipmentBooking