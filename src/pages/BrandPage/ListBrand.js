import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"

const ListBrand = (props) => {
  return (
    <List title={'Listado de marcas'} {...props}>
        <Datagrid rowClick='show'>
            <TextField source="id" label='Id' />
            <TextField source="name" label="Nombre" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
  )
}
export default ListBrand