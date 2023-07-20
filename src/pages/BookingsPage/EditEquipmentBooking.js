import { DateInput, Edit, SimpleForm, TextInput, required } from "react-admin"

const EditEquipmentBooking = (props) => {
  return (
    <Edit {...props} title='Actualizar Reserva'>
        <SimpleForm redirect='show'>
            <DateInput
            source="start_date"
            label="Fecha de inicio"
            validate={required("Campo requerido")}
            options={{ format: "YYYY-MM-DD" }}
            />
            <TextInput
            source="equipo_id"
            defaultValue={props.id}
            />
            <TextInput
            source="quantity"
            />
        </SimpleForm>
    </Edit>
  )
}
export default EditEquipmentBooking