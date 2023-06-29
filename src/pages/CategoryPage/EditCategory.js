import { Edit, SimpleForm, TextInput, required } from "react-admin"

const EditCategory = (props) => {
  return (
    <Edit {...props} title={"Edicion de categoria"}>
        <SimpleForm redirect="show">
            <TextInput fullWidth source="name" label="Nombre" validate={[required("Campo requerido")]} />
        </SimpleForm>
    </Edit>
  )
}
export default EditCategory