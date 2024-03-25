import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="student">
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Card;
