import React, { useState, useEffect } from 'react';

const AddComment = () => {
  let nameError = '';
  const [state, setState] = useState([]);
  const [fromErros, setFromErros] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const onButtonClickHandle = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    console.log(state);
    const lengthName = state.name;
    if (lengthName.length < 2) {
      setFromErros('Name must be greater than 2 charecters.');
    } else {
      alert(
        'Current State is: ' +
          'author :' +
          state.name +
          ', rating :' +
          state.rating.toString() +
          ', comments :' +
          state.comments
      );
    }
  };

  const ChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h3>Product Of my Choices</h3>
      <div className="container">
        <div className="col-md-3">
          <div className="" style={{ width: '18rem' }}>
            <img
              src="https://rukminim1.flixcart.com/image/1664/1664/shoe/s/h/a/black-boxer-jabra-10-original-imaekau87h9hgrvs.jpeg?q=90"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="" style={{ width: '18rem' }}>
            <img
              src="https://rukminim1.flixcart.com/image/1408/1408/j3xbzww0/kids-shoe/h/k/h/9-bluee-wood-clerk-original-imaeuy5jhzguzk8x.jpeg?q=90"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label for="exampleInputEmail1" class="form-label">
                Enter Rating :
              </label>
              <br />
              <select
                class="form-select"
                aria-label="Default select example"
                name="rating"
                onChange={ChangeHandler}
              >
                <option>Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <label for="exampleInputEmail1" class="form-label">
                Enter Your Name :
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                value={state.name}
                aria-describedby="emailHelp"
                onChange={ChangeHandler}
              />
              <br />
              {fromErros && <p className="error"> {fromErros} </p>}
              <label for="exampleInputEmail1" class="form-label">
                Enter Comment Here :
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                name="comments"
                onChange={ChangeHandler}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onButtonClickHandle}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddComment;
