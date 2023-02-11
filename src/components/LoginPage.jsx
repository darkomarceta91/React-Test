import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/home");
  };
  return (
    <div className="loginPageBody">
      <form id="loginForm" onSubmit={submitHandler}>
        <h2>
          Please enter Name and Password
          <br /> to Login!
        </h2>
        <div className="firstNameContainer">
          <input
            className="inputField"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Username"
            autocomplete="off"
            required
          ></input>
        </div>
        <div className="lastNameContainer">
          <input
            className="inputField"
            type="password"
            id="last_name"
            name="last_name"
            placeholder="Password"
            autocomplete="off"
            required
          ></input>
        </div>
        <input className="submitButton" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default LoginPage;
