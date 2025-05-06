import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Getdata = () => {
  let [data, setData] = useState([]);
  let [dd, setDd] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let data1 = await axios.get("http://localhost:3000/userinfo");
      let res = await data1.data;
      setData(res);
    };
    fetchData();
  }, [dd]);

  const del = (id) => {
    axios.delete(`http://localhost:3000/userinfo/${id}`);
    setDd(dd + 1);
  };

  return (
    <>
      <div className="border h-fit w-screen mx-auto bg-gray-200">
        <thead>
          <tr>
            <th className="border px-2">id</th>
            <th className="border px-2">Name</th>
            <th className="border px-2">email</th>
            <th className="border px-2">password</th>
            <th className="border px-2">updation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td className="border p-2">{e.id}</td>
              <td className="border p-2">{e.name}</td>
              <td className="border p-2">{e.email}</td>
              <td className="border p-2">{e.password}</td>
              <td className="border p-2 flex gap-2" >
                <button
                  className="border p-1 rounded hover:bg-red-500 hover:text-white cursor-pointer"
                  onClick={() => {
                    del(e.id);
                  }}
                >
                  delete
                </button>

                <NavLink to={`/update/${e.id}`}>
                  <button className="border p-1 rounded bg-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer">Update</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
};

export default Getdata;