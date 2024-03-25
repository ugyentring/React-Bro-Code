import PropTypes from "prop-types";

function Greeting(props) {
  if (props.isLoggedIn) {
    return <h2>Welcome {props.username}</h2>;
  } else {
    return <h2>Pleaase login to continue</h2>;
  }
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default Greeting;
