import { Create, SimpleForm, TextInput, required } from "react-admin"

const CreateBrand = (props) => {
  return (
    <Create {...props} title={"Cargar nueva marca"}>
        <SimpleForm redirect="show">
            <TextInput fullWidth source="name" validate={[required("Campo requerido")]} />
        </SimpleForm>
    </Create>
  )
}
export default CreateBrand