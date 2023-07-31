import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import customDataProvider from './components/DataProvider/dataProvider'
import EquipmentPage from './pages/EquipmentPage';
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage';
import BookingsPage from './pages/BookingsPage';
import CustomLogin from './pages/LoginPage/login';
import authProvider from './components/Authentication/authProvider';

const dataProvider = customDataProvider('https://barilochevip-be-production.up.railway.app/api/v1');

const App = () => (
    <Admin dataProvider={dataProvider} loginPage={CustomLogin} authProvider={authProvider}>
      <Resource name="equipment" {...EquipmentPage} />
      <Resource name="categories" {...CategoryPage} />
      <Resource name="brands" {...BrandPage} />
      <Resource name="bookings" {...BookingsPage} />
    </Admin>
);

export default App;

