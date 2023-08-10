import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title:'',
    description:'',
  });

  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}));
  }

  
  useEffect(() => {
    axios.get("http://localhost:3500/streams/" + id)
      .then(res => {
        console.log(res);
        setValues({
          title: res.data?.title,
          description: res.data?.description,
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log(values);
    axios.put('http://localhost:3500/streams/' + id, values)
      .then(res => {
        console.log(res)
        navigate('/');
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className='w-full h-full'>
      <form className='text-left d-flex flex-column h-100' onSubmit={handleUpdate}>
          <h4>Edit screams</h4>
          <div className="form-group">
            <label htmlForfor="exampleInputEmail1" className='pr-5'>Title:</label>
            <input type='text' name='title' label='Enter Title' 
            value={values.title}
            onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label htmlForfor="exampleInputEmail1" className='pr-2'>Desciption:</label>
            <input type='text' name='description'label='Enter Description' 
             value={values.description}
             onChange={handleInput}/>
          </div>
          <div className="form-group mt-auto">
            <button className="justify-content-start btn btn-success" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
