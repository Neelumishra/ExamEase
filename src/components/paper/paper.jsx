import React from "react";

function Paper(props) {
  const {
    question,
    option1,
    option2,
    option3,
    option4,
    images,
    equation,
    
  } = props.e;
  let index=props.index

const handleChange = props.handleChange;

  

  
  console.log("Question", props.e);
  return (
    <div>
      <h5>
        {`${index+1}. `  } {question}
      </h5>
      <fieldset>
        <input
          type="radio"
          value={option1}
          name={index}
          onChange={(e) => handleChange(e, index)}
        />
        {option1}
        <br />
        <input
          type="radio"
          value={option2}
          name={index}
          onChange={(e) => handleChange(e, index)}
        />
        {option2}
        <br />
        <input
          type="radio"
          value={option3}
          name={index}
          onChange={(e) => handleChange(e, index)}
        />
        {option3}
        <br />
        <input
          type="radio"
          value={option4}
          name={index}
          onChange={(e) => handleChange(e, index)}
        />
        {option4}
        <br />
        <br />
        <label>Note</label>
        <p>{equation}</p>
        <br />
        {images && (
          <>
            <label>Image</label>
            <br />
            <img src={images} width="200px" height="200px" />
          </>
        )}
        <hr />
      </fieldset>
    </div>
  );
}

export default Paper;
