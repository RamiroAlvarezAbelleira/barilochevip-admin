import { Show, SimpleShowLayout, TextField } from "react-admin"

const ShowBrand = (props) => {
  return (
    <Show {...props} title={"Marca"}>
        <SimpleShowLayout>
            <TextField source="id" label='Id' />
            <TextField source="name" label='Nombre' />
            <TextField source="created_at" label='Creado en' />
            <TextField source="updated_at" label='Actualizado' />
        </SimpleShowLayout>
    </Show>
  )
}
export default ShowBrand