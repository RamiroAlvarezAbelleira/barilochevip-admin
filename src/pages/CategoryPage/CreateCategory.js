import { Create, SimpleForm, TextInput, required } from "react-admin"

const CreateCategory = (props) => {
  return (
    <Create {...props} title={"Cargar nueva categoria"}>
        <SimpleForm redirect="list">
            <TextInput fullWidth source="name" validate={[required("Campo requerido")]} />
        </SimpleForm>
    </Create>
  )
}
export default CreateCategory