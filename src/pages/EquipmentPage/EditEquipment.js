import { Edit, ImageField, ImageInput, SelectInput, SimpleForm, TextInput, required } from "react-admin"

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
            <SelectInput fullWidth label='Categoria' source='category_id' choices={categories} validate={[required("Campo requerido")]} />
            <SelectInput fullWidth label='Marca' source='marca_id' choices={marcas} validate={[required("Campo requerido")]} />
            <ImageInput
            source="images"
            label="Imagen del Equipo"
            accept="image/*"
            multiple={true}
            validate={[required("Campo requerido")]}
            >
              <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
  )
}
export default EditEquipment