import * as React from 'react';
import { Loader } from './Loader';
import { organizeData } from '../utils/organize-data';
import styled from 'styled-components';

function DataDisplay() {
  const [data, setData] = React.useState('');

  // Fetch data from within useEffect
  React.useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        'https://fetch-hiring.s3.amazonaws.com/hiring.json'
      );
      let json = await response.json();
      let sortedData = organizeData(json);
      setData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <Table>
          <THead>
            <tr>
              <th>listId</th>
              <th>Name</th>
              <th>id</th>
            </tr>
          </THead>
          <TBody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.listId}</td>
                <td>{item.name}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </TBody>
        </Table>
      ) : (
        <Loader />
      )}
    </>
  );
}

const Table = styled.table`
  background: #fff;
  border-radius: 5px;
  width: 60%;
  margin-bottom: 2em;
`;

const THead = styled.thead`
  border-radius: 5px;
  th {
    font-size: 16px;
    font-weight: 400;
    color: rgba(58, 10, 85);
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
    text-align: left;
    padding: 20px;
    background-color: #ff9900;
    text-align: center;
    &:first-child {
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
    }
  }
`;

const TBody = styled.tbody`
  font-weight: 400;
  color: rgba(58, 10, 85);
  font-size: 16px;
  border-bottom: 1px solid #5f6062;
  tr:nth-child(2n) {
    background: #f4f4f4;
  }
  td {
    text-align: center;
    color: rgba(58, 10, 85);
  }
`;

export { DataDisplay };
