import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import { Link } from "react-router-dom";

const UpdateAuthor = () => {
  const [author, setAuthor] = useState({ name: "" });
  const [authorUpdated, setAuthorUpdated] = useState(false);
  const [isIdExist, setIsIdExist] = React.useState(true);//bonus
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const [isLoading, setLoading] = useState(false); //bonus

  const handleChange = (event) => {
    setAuthor({ ...author, [event.target.name]: event.target.value });
  };

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);// bonus
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        // console.log(res.data.author)
        setAuthor(res.data.author);
        setLoading(false);//bonus
      })
        .catch((err) => {
            console.log("We have an error");
        //navigate("/");
            setIsIdExist(false);//bonus
             setLoading(false);//bonus
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthorUpdated(false);
    setErrors([]);
    axios
      .put("http://localhost:8000/api/authors/update/" + id, author)
      .then((response) => {
        setAuthorUpdated(true);
      })
      .catch((err) => {
        console.log(err);
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
      });

    return author.name.length > 0 ? setAuthor({ name: "" }) : null; // empty field
  };

  if (isLoading) {//bonus
    return <div>Loading...</div>;
  }

if (!isIdExist) {//bonus
        return (
          <div>
            <div className="m-5 p-5">
              <p className="text-primary h4">
                We're sorry, but we could not find the author you are looking
                for. Would you like to add this author to our database?
              </p>
              <Link to={`/new`}>
                <h5 className="btn btn-outline-dark m-1">Add an Author</h5>
              </Link>
              <Link to={`/`}>
                <h5 className="btn  btn-outline-dark m-1">Home</h5>
              </Link>
            </div>
          </div>
        );
    }

  return (
    <div className="container">
      <div>
        <h1>Update Author</h1>
        <Link to={`/`}>
          <h5 className="btn btn-secondary m-2">Home</h5>
        </Link>
        <h5>Edit this author:</h5>
        {errors.map((errorMessage, index) => (
          <div key={index} className="alert alert-danger">
            Error: {errorMessage}
          </div>
        ))}
        {authorUpdated && (
          <div className="alert alert-success">
            User has been successfully created
          </div>
        )}
        <AuthorForm
          {...author}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateAuthor;
