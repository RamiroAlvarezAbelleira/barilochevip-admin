import { DateInput, Edit, SimpleForm, TextInput, required, useNotify, useRedirect } from "react-admin"
import { PAGES } from "../../enum/pagesEnum";
import updateOneCall from "../../components/DataProvider/calls/updateOneCall";

const EditEquipmentBooking = (props) => {
  const notify = useNotify()
  const redirect = useRedirect();

  const handleEditSuccess = (data) => {
    updateOneCall(PAGES.BOOKINGS, {data: {...data}}, "https://barilochevip-be-production.up.railway.app/api/v1")
    notify('Reserva Editada Exitosamente!')
    redirect(`/equipment/${data.equipo_id}/show/1`);
  };

  return (
    <Edit {...props} title='Actualizar Reserva'>
        <SimpleForm onSubmit={handleEditSuccess}>
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