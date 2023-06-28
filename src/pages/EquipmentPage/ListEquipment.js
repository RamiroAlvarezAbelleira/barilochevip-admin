import { Datagrid, DeleteButton, EditButton, List, TextField } from "react-admin";


export const ListEquipment = (props) => {
    return (
        <List
        title={'Listdo De Equipos'}
        {...props}
        >
            <Datagrid rowClick='show'>
                <TextField source="name" label='Nombre' />
                <TextField source="price" label='Precio por dia' />
                <TextField source="description" label='Descripcion' />
                <TextField source="stock_total" label='Stock Total' />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
}