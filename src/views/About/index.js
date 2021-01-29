import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table } from 'reactstrap';

import { deleteItem } from 'src/state/ducks/userInfo';

const About = () => {
  const data = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  console.log('user data', data);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, i) => (
              <tr key={i}>
                <th scope="row">{item.id}</th>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>
                  <Button onClick={() => dispatch(deleteItem(item.id))}>
                    {' '}
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default About;
