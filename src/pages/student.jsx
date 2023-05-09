import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AdminDetails } from "../store/store";
import Paper from "../components/paper/paper";
import Swal from "sweetalert2";

function Student() {
  const [option, setoption] = React.useState("");
  const [answer, setAnswer] = React.useState([]);
  const [time, setTime] = React.useState(0);
 
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const read = useSelector((state) => {
    return state.AdminDetails;
  });
  function handleSubmit(e) {
    e.preventDefault();

    let adminAnser = read.map((e) => e.answer);
    let marks = 0;
    for (let i = 0; i < adminAnser.length; i++) {
      console.log(adminAnser[i], answer[i]);
      if (adminAnser[i] == answer[i]) {
        marks++;
      }
    }
  Swal.fire({
    title: "Result",
    text: `Your total marks: ${marks} out of ${adminAnser.length}`,
    icon: "info",
    confirmButtonText: "OK",
  });
  }
  function handleChange(e, i) {
    let newAnser = [...answer];
    newAnser[i] = e.target.value;
    setAnswer(newAnser);
  }

  return (
    <div className="container-fluid border p-3 m-2">
      <div className="row">
        <div className="col-2">
          <p className="btn btn-info">{`Time: ${time}Sec`}</p>
        </div>
        <div className="offset-3 col-2">
          <h3>Exam Paper</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {read.map((e, index) => (
          <Paper
            e={e}
            key={index}
            index={index}
            setoption={setoption}
            handleChange={handleChange}
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Student;
