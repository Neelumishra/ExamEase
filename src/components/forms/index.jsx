import React from "react";
import { useDispatch } from "react-redux";
import { AdminDetails } from "../../store/store";
import { useSelector } from "react-redux";

function Forms() {
  const dispatch = useDispatch();
  const read = useSelector((state) => {
    return state.AdminDetails;
  });
  console.log(read);
  async function handleSubmit(e) {
    e.preventDefault();
    const details = {
      question: e.target[0].value,
      option1: e.target[1].value,
      option2: e.target[2].value,
      option3: e.target[3].value,
      option4: e.target[4].value,
      equation: e.target[5].value,
      answer: e.target[7].value,
    };
    
    const imageURL = await geturl(e.target[6].files[0]);
    console.log("hey", )
    details.images = imageURL;
    
    console.log(details);
    dispatch(AdminDetails.actions.append(details));
  }

 function geturl(file) {
  if(!file) return ''
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const imageURL = reader.result;
      console.log("geturl", imageURL);
      resolve(imageURL);
    };
    reader.onerror = reject;
  });
}

  return (
    <form onSubmit={handleSubmit} className="container-fluid border w-50 p-4">
      <input className="form-control" placeholder="Enter Your Question" />
      <br />
      <input className="form-control" placeholder="option-1" />
      <br />
      <input className="form-control" placeholder="option-2" />
      <br />
      <input className="form-control" placeholder="option-3" />
      <br />
      <input className="form-control" placeholder="option-4" />
      <br />
      <input
        className="form-control"
        type="textarea"
        placeholder="Enter Your Equation or Other Information"
      />
      <br />
      <br />
      <input type="file" placeholder="Enter Image" />
      <br />
      <br />
      <input className="form-control" placeholder="Enter Your Answer" />
      <br />
      <button type="submit" className="btn btn-secondary">
        Save & Next
      </button>
    </form>
  );
}

export default Forms;
