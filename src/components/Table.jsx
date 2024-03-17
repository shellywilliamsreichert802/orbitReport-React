import "./styling.css";

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Launch Date</th>
       <th>Type</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id) => (
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.launchDate}</td>
          <td>{data.type}</td>
          <td>{data.operational ? "Active" : "Inactive"}</td>
        </tr>
      ))}
     </tbody>
   </table>
  );
};

export default Table;