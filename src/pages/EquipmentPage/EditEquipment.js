import { Edit, SelectInput, SimpleForm, TextInput, required } from "react-admin"

const EditEquipment = (props) => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  const marcas = JSON.parse(localStorage.getItem('marcas'));
  return (
    <Edit {...props} title='Actualizar equipo'>
        <SimpleForm redirect='show'>
            <TextInput fullWidth label='Nombre' source='name' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth label='Precio' source='price' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth label='Descripcion' source='description' validate={[required("Campo requerido")]}/>
            <TextInput fullWidth label='Stock Total' source='stock_total' validate={[required("Campo requerido")]}/>
            <SelectInput fullWidth label='Categoria' source='category.id' choices={categories} validate={[required("Campo requerido")]} />
            <SelectInput fullWidth label='Marca' source='marca.id' choices={marcas} validate={[required("Campo requerido")]} />
            {/* <ImageInput placeholder={<p>Drop your file here!</p>} source="image"
              label="Imagen del Equipo"
              accept="image/*"
              validate={[required("Campo requerido")]}
              multiple={true} /> */}
        </SimpleForm>
    </Edit>
  )
}
export default EditEquipment