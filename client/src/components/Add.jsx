import axios from 'axios';
import React, { useState, useRef, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';

function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }
  export default function Add() {
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState([]);
  
    useInterval(() => {
      setCounter(counter + 1);
    }, 1000);
  
    const [values, setValues] = useState({
      title: '',
      description: '',
    });
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newId = counter + 1; // Generate a new ID
  
      // Check if the new ID already exists
      const isDuplicateId = list.some(item => item.id === newId);
      if (isDuplicateId) {
        console.log('Duplicate ID detected. Please try again.');
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:3500/streams', {
          ...values,
          id: newId, // Include the new ID in the request payload
        });
        console.log(response);
        navigate('/');
      } catch (error) {
        console.error(error.response.data);
      }
    };
  
    return (
      <div className='w-full h-full'>
        <form className='text-left d-flex flex-column h-100' onSubmit={handleSubmit}>
          <h4>Add screams</h4>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className='pr-5'>Title:</label>
            <input type='text' name='title' label='Enter Title'
              onChange={e => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className='pr-2'>Description:</label>
            <input type='text' name='description' label='Enter Description'
              onChange={e => setValues({ ...values, description: e.target.value })}
            />
          </div>
          <div className="form-group mt-auto">
            <button className="justify-content-start btn btn-success" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
