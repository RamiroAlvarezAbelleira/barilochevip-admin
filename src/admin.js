import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import customDataProvider from './components/DataProvider/dataProvider'
import EquipmentPage from './pages/EquipmentPage';
import CategoryPage from './pages/CategoryPage';

const dataProvider = customDataProvider('http://[::1]:3000/api/v1');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="equipment" {...EquipmentPage} />
    <Resource name="categories" {...CategoryPage} />
  </Admin>
);

export default App;
