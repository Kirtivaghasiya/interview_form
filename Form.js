import React from "react";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Registration = () => {
  const [currentData, setCurrentData] = useState();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("create");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataFromLocal = JSON.parse(localStorage.getItem("data"));
    setData(getDataFromLocal);
  }, [open]);

  return (
    <>
      <div
        className="container py-4"
        style={{ position: "absolute", right: "3.6rem" }}
      >
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            setType("create");
            setOpen(true);
          }}
        >
          Add Data
        </button>
      </div>

      <div class="container table-responsive " style={{ paddingTop: "80px" }}>
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Acrion</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td width={250}>{item.email}</td>
                  <td width={250}>{item.password}</td>
                  <td width={250}>{item.hobbies.join(",")}</td>

                  <td width={250}>
                    <div style={{ gap: "10px", display: "flex" }}>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => {
                          setCurrentData(item);
                          setType("update");
                          setOpen(true);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm  btn-danger"
                        onClick={() => {
                          const newData = data.filter(
                            (itemData) => itemData.id !== item.id
                          );
                          localStorage.setItem("data", JSON.stringify(newData));
                          setData(newData);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        currentData={currentData}
        type={type}
      />
    </>
  );
};

export default Registration;
