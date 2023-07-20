import { Create, DateInput, SimpleForm, TextInput, required} from "react-admin"

const CreateEquipmentBooking = (props) => {

  return (
    <Create {...props} resource='bookings' >
        <SimpleForm redirect={"show"}>
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
    </Create>
  )
}
export default CreateEquipmentBooking