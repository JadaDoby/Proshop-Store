import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SortbyPrice = () => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (minPrice || maxPrice) {
      navigate(`/minPrice/${minPrice}/maxPrice/${maxPrice}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='number'
        name='minPrice'
        onChange={(e) => setMinPrice(e.target.value)}
        value={minPrice}
        placeholder='Enter Min Price...'
        className='mr-sm-2 ml-sm-5'
      />
      <Form.Control
        type='number'
        name='maxPrice'
        onChange={(e) => setMaxPrice(e.target.value)}
        value={maxPrice}
        placeholder='Enter Max Price...'
        className='mr-sm-2'
      />
      <Button type='submit' variant='outline-light' className='p-2 mx-2'>
        Sort by Price
      </Button>
    </Form>
  );
};

export default SortbyPrice;
