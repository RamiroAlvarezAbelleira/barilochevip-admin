import { Create, SimpleForm, TextInput, required } from "react-admin"

const CreateEquipment = (props) => {
  return (
    <Create {...props} title='Cargar nuevo equipo'>
        <SimpleForm redirect='show'>
            <TextInput fullWidth source='name' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth source='price' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth source='description' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth source='stock_total' validate={[required("Campo requerido")]}/>
        </SimpleForm>
    </Create>
  )
}
export default CreateEquipment