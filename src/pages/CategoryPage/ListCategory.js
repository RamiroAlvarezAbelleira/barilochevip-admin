import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin"

const ListCategory = (props) => {
  return (
    <List title={'Listado de categorias'} {...props}>
        <Datagrid rowClick='show'>
            <TextField source="id" label='Id' />
            <TextField source="name" label="Nombre" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
  )
}
export default ListCategory