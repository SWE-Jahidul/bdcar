import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [thabnil, setThambnil] = useState("");
  const [discription, setDiscription] = useState("");
  const [payment, setPayment] = useState("");
  const [bodytype, setBosytype] = useState("");
  const [fuel, setFuel] = useState("");
  const [color, setColor] = useState("");
  const [engine, setEngin] = useState("");
  const [details, setdetails] = useState("");
  const [Specification, setSpecfication] = useState("");

  const [feture , setFeture ] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDiscription = (e) => {
    setDiscription(e.target.value);
  };

  const handlepayment = (e) => {
    setPayment(e.target.value);
  };

  const handleThumbnil = (e) => {
    setThambnil(e.target.value);
  };

  const handlebodytype = (e) => {
    setBosytype(e.target.value);
  };

  const handelfuel = (e) => {
    setFuel(e.target.value);
  };

  const handelColor = (e) => {
    setColor(e.target.value);
  };

  const handelEngine = (e) => {
    setEngin(e.target.value);
  };

  const handleSpecification = (e) => {
    setSpecfication(e.target.value);
  };

  const handelDescription = (e) => {
    setdetails(e.target.value);
  };


  const handelFeture = (e) => {
    setFeture(e.target.value);
  }
  const handelevent = () => {
    const data = {
      title,
      discription,
      payment,
      thabnil,
      bodytype,
      fuel,
      color,
      engine,
      details,
      Specification,
      feture
    };

    fetch("https://shrouded-harbor-84354.herokuapp.com/products", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center pt-5 ">
          <div
            className=" shadow-lg my-5 px-5"
            style={{ height: 650, width: "80%" }}
          >
            <h3 className="py-3 text-white"> Add A New Car </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group my-4">
                  <input
                    type="text"
                    onBlur={handleThumbnil}
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Thambnil"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    onBlur={handleTitle}
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Title"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    onBlur={handleDiscription}
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Short Discription"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="number"
                    required
                    onBlur={handlepayment}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Total Cost "
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handleSpecification}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Specification (must be after one feture useing comma)"
                  />
                </div>

                <div className="form-group my-4">
                  <textarea
                    type="text"
                    required
                    onBlur={handelDescription}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Details "
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handlebodytype}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Body-Type"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handelfuel}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Fuel"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handelColor}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Color"
                  />
                </div>

                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handelEngine}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Engine"
                  />
                </div>


                <div className="form-group my-4">
                  <input
                    type="text"
                    required
                    onBlur={handelFeture}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Fetures (must be after one feture useing comma) "
                  />
                </div>



              </div>
            </div>

            <button
             style={{
              backgroundColor: "#EF5E24",
              border: 0,
            }}
              onClick={handelevent}
              className="button-read-more text-white"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              Add Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
