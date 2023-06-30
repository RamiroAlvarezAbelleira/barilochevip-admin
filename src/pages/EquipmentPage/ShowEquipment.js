import { Show, SimpleShowLayout, TextField } from "react-admin"

const ShowEquipment = (props) => {
  return (
    <Show {...props} title={"Equipo"}>
        <SimpleShowLayout>
            <TextField source="id" label='Id' />
            <TextField source="name" label='Nombre' />
            <TextField source="price" label='Precio' />
            <TextField source="description" label='Descripcion' />
            <TextField source="stock_total" label='Stock total' />
            <TextField source="category.name" label='Categoria' />
            <TextField source="marca.name" label='Marca' />
        </SimpleShowLayout>
    </Show>
  )
}
export default ShowEquipment