import React, { Component } from "react";
import ProductOption from "./ProductOption";
import sty from "./ProductOrder.module.scss";

class ProductOrder extends Component {
  render() {
    const { listView, choice, choiceList } = this.props;
    return (
      <React.Fragment>
        {listView ? (
          <React.Fragment>
            <div className={sty.choiceList} onClick={choice} />
            <div className={sty.choiceBox}>
              <ul className={sty.optionList}>
                {choiceList.map(element => (
                  <ProductOption key={element.id} listData={element} />
                ))}
              </ul>
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
export default ProductOrder;
