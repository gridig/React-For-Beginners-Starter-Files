import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    index: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired,
  };
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
    console.log(this.props.index);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
