import { Edit, SimpleForm, TextInput, required } from "react-admin"

const EditBrand = (props) => {
  return (
    <Edit {...props} title={"Edicion de marca"}>
        <SimpleForm redirect="show">
            <TextInput fullWidth source="name" label="Nombre" validate={[required("Campo requerido")]} />
        </SimpleForm>
    </Edit>
  )
}
export default EditBrand