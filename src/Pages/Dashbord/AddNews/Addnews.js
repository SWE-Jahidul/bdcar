import React, { useState } from "react";

const Addnews = () => {
  const [title, setTitle] = useState("");
  const [thabnil, setThambnil] = useState("");
  const [discription, setDiscription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDiscription = (e) => {
    setDiscription(e.target.value);
  };

  const handleThumbnil = (e) => {
    setThambnil(e.target.value);
  };

  const handelnews = () => {
    const data = {
      title,
      thabnil,
      discription,
    };

    fetch("https://shrouded-harbor-84354.herokuapp.com/news", {
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
            style={{ height: 450, width: "80%" }}
          >
            <h3 className="py-3 text-white"> Add New News  </h3>
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

                <button
                 style={{
                  backgroundColor: "#EF5E24",
                  border: 0,
                }}
            onClick={handelnews}
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
      </div>
    </div>
  );
};

export default Addnews;
