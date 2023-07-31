import { Create, DateInput, SimpleForm, TextInput, required, useNotify, useRedirect} from "react-admin"
import createOneCall from "../../components/DataProvider/calls/createOneCall";
import { PAGES } from "../../enum/pagesEnum";

const CreateEquipmentBooking = (props) => {
  const notify = useNotify()
  const redirect = useRedirect();

  const handleCreateSuccess = (data) => {
    createOneCall(PAGES.BOOKINGS, {data: {...data}}, "https://barilochevip-be-production.up.railway.app/api/v1")
    notify('Reserva Creada Exitosamente!')
    redirect(`/equipment/${data.equipo_id}/show/1`);
  };

  return (
    <Create {...props} resource='bookings' >
        <SimpleForm onSubmit={handleCreateSuccess}>
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