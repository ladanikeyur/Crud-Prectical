import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import CustomButton from "./CustomButton";
import { data } from "./TableData";

const tableData = [...data];
const plus =
  "https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/plus.png";
const mines =
  "https://www.svgrepo.com/show/103355/minus-sign-of-a-line-in-horizontal-position.svg";
const Table = () => {
  const [childShow, setChildShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [editIndex, setEditIndex] = useState(0);
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [childind, setChildind] = useState(0);
  const [statusData, setStatus] = useState("Perent");
  const [button, setButton] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    if (val === "edit") {
      setButton(true);
    } else {
      setButton(false);
    }
    setShow(true);
  };
  const dataAdd = () => {
    var a = {
      id: tableData.length + 1,
      name: name,
      Parent: parent,
      Child: [],
    };
    if (parent === "" && name !== "") {
      tableData.push(a);
      setName("");
      setParent("");
      handleClose();
    }
    if (parent !== "" && name !== "") {
      tableData.map((val, i) => {
        if (val.name === parent) {
          val.Child.push(a);
          setName("");
          setParent("");
          handleClose();
        }
      });
    }
  };

  const dataDelete = (val, ii) => {
    tableData.splice(ii, 1);
    setData(tableData);
    tableData = data;
  };

  const ChilddataDelete = (val, ii) => {
    tableData.map((value, i) => {
      if (val.name === value.name) {
        value.Child.splice(ii, 1);
        setData(tableData);
        tableData = data;
      }
      return value;
    });
  };

  const EditData = (val, i, status) => {
    setName(val.name);
    setParent(val.Parent);
    setEditIndex(i);
    setStatus(status);
    handleShow("edit");
  };
  const ChildEdit = (val, i) => {
    setChildind(i);
  };
  const EditDataSubmit = () => {
    if (statusData === "Perent") {
      const b = {
        id: tableData[editIndex].id,
        name: (tableData[editIndex].name = name),
        Parent: (tableData[editIndex].Parent = parent),
        Child: [...tableData[editIndex].Child],
      };
      handleClose();
      tableData.insert(editIndex, b);
      setStatus("Perent");
    } else {
      const b = {
        id: tableData[childind].Child[editIndex].id,
        name: (tableData[childind].Child[editIndex].name = name),
        Parent: (tableData[childind].Child[editIndex].Parent = parent),
        Child: [...tableData[childind].Child[editIndex].Child],
      };
      handleClose();
      tableData[childind].Child.insert(editIndex, b);
      setStatus("child");
    }
  };

  return (
    <div className="container mt-5">
      {/* data Add Model */}
      <Button
        className="m-auto d-block"
        variant="primary"
        onClick={() => {
          handleShow("add");
        }}
      >
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Name:*</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label>Select Parent(if any):</label>
          <br />
          <select
            value={parent}
            class="form-select"
            onChange={(e) => {
              setParent(e.target.value);
            }}
            aria-label="Select Parent(if any):"
          >
            <option value="">Select Parent(if any):</option>
            {tableData.map((val, i) => {
              return <option value={val.name}>{val.name}</option>;
            })}
          </select>
        </Modal.Body>
        <Modal.Footer>
          {button === true ? (
            <Button
              variant="secondary"
              onClick={() => {
                EditDataSubmit();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                dataAdd();
              }}
            >
              Add
            </Button>
          )}
          <Button variant="danger" onClick={handleClose}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Create a Data Table */}
      <table ClassName="table" style={{ width: "100%" }}>
        <thead className="text-center">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Parent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, ind) => {
            return (
              <>
                <tr className="text-center" key={ind}>
                  <td>{val.id}</td>
                  <td style={{ alignItems: "center" }}>
                    {val.Child.length > 0 ? (
                      <button
                        className="btn"
                        onClick={() => {
                          setChildShow(
                            childShow && index === ind ? false : true
                          );
                          setIndex(ind);
                        }}
                      >
                        <img
                          src={childShow && index === ind ? mines : plus}
                          height={15}
                          width={15}
                        />
                      </button>
                    ) : null}
                    {val.name}
                  </td>
                  <td>{val.Parent}</td>
                  <td>
                    <CustomButton
                      edit={() => {
                        EditData(val, ind, "Perent");
                      }}
                      Delete={() => {
                        dataDelete(val, ind);
                      }}
                    />
                  </td>
                </tr>
                {val.Child.length > 0
                  ? val.Child.map((child, i) => {
                      console.log(child.Child);
                      return (
                        <tr
                          className={
                            childShow && index === ind
                              ? "text-center"
                              : "text-center d-none"
                          }
                          key={i + "Child"}
                        >
                          <td>{child.id}</td>
                          <td>{child.name}</td>
                          <td>{child.Parent}</td>
                          <td>
                            <CustomButton
                              edit={() => {
                                EditData(child, i, "child");
                                ChildEdit(val, ind);
                              }}
                              Delete={() => {
                                ChilddataDelete(val, i);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
