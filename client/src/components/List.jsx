import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:3500/streams';
        const response = await axios.get(url);
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    // Xử lý logic xóa dữ liệu với id đã cho
    const confirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmed) {
      let url = `http://localhost:3500/streams/${id}`;
      axios
        .delete(url)
        .then((response) => {
          let arr = list.filter((item) => {
            if (item.id === id) return false;
            else return true;
          });
          setList(arr);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  return (
    <div>
      <h1>List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th colSpan="2" >Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className='colSpan="2"'>
                <button
                  className="btn btn-danger" role="group"
                  onClick={() => handleDelete(item.id)}
                >
                  Xóa
                </button>
               
              </td>
              <td>
              <button
                  className="btn btn-primary"
                  // onClick={() => handleEdit(item.id)}
                >
                  <Link className='text-light text-decoration-none' to={`/edit/${item.id}`}>Sửa</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
