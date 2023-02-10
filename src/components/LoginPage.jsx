const LoginPage = () => {
  return (
    <div>
      <form id="loginForm">
        <div className="firstNameContainer">
          <input
            className="inputField"
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Username"
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
            required
          ></input>
        </div>
        <input
          className="submitButton"
          type="submit"
          value="Submit"
          required
        ></input>
      </form>
    </div>
  );
};

export default LoginPage;
