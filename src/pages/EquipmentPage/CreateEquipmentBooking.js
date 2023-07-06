import { Create, DateTimeInput, SimpleForm, TextInput, required} from "react-admin"

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
            <TextInput
            source="equipo_id"
            defaultValue={props.id}
            />
            <TextInput
            source="quantity"
            />
        </SimpleForm>
    </Create>
  )
}
export default CreateEquipmentBooking