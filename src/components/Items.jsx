import { Component } from "react";
import { DUMMY_DATA } from "../data/itemsData";
import styles from "./Items.module.css"

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  inputHandlerValue = ({ target: { value } }) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        items:
          DUMMY_DATA.some(
            (item) => item.title.toLowerCase() === value.toLowerCase()
          ) &&
          !prevState.items.some(
            (item) => item.title.toLowerCase() === value.toLowerCase()
          )
            ? prevState.items.concat({
                title: value.toLowerCase(),
                id: Math.random().toString(),
              })
            : prevState.items,
      };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div>
          {DUMMY_DATA.map((item) => {
            return (
              <h1 key={item.id} className={styles["static-items"]}>
                {item.title}
              </h1>
            );
          })}
        </div>
        <input
          className={styles.input}
          type="text"
          onChange={this.inputHandlerValue}
        />
        {this.state.items.map(({ id, title }) => {
          return (
            <div key={id} className={styles.uppdatevalue}>
              <h1>{title}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Items;
