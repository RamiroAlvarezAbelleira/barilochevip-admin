import React from 'react';
import { Button } from 'react-admin';
import deleteOneCall from '../DataProvider/calls/deleteOneCall';

const CustomDeleteButton = ({record}) => {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      deleteOneCall("bookings", record, "http://[::1]:3000/api/v1")
    }
  };

  return <Button label="Delete" onClick={handleDelete} style={{color: "red"}}/>;
};

export default CustomDeleteButton;
