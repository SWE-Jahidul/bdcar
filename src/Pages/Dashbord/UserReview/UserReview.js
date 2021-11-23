import axios from "axios";

import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const UserReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://shrouded-harbor-84354.herokuapp.com/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("added review successfully");
        reset();
      }
    });
  };
  return (
    <div className="container " style={{ marginTop: 100 }}>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-12">
          <div class="card text-center">
            <div class="card-body">
              <h3 class="card-text text-center">Customer Review </h3>

              <div className="info">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group my-4">
                    <input
                      {...register("name")}
                      defaultValue={user?.displayName}
                    />
                  </div>
                  <div className="form-group my-4">
                    <input
                      type="email"
                      {...register("email")}
                      defaultValue={user?.email}
                    />
                  </div>

                  <div className="form-group my-4">
                    <input
                      type="number"
                      {...register("rating")}
                      placeholder="Rating 1 to 5 any number"
                    />
                  </div>

                  <div className="form-group my-4">
                    <textarea
                      type="text"
                      {...register("sDescription")}
                      placeholder="Short Description"
                      style={{ width: "40% " }}
                    ></textarea>
                  </div>
                  <input type="submit" />
                </form>
              </div>

              {/* <div>
                            <img src="" alt="profile-pic" />
                        </div> */}
            </div>
          </div>
        </div>
    
    
      </div>
    </div>
  );
};

export default UserReview;
