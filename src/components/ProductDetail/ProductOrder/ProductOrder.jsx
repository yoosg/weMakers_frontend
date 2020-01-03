import React, { Component } from "react";
import ProductOption from "./ProductOption";
import sty from "./ProductOrder.module.scss";

class ProductOrder extends Component {
  render() {
    const { listView, choice, choiceList, selectList } = this.props;
    return (
      <React.Fragment>
        {listView ? (
          <React.Fragment>
            <div className={sty.choiceList} onClick={choice} />
            <div className={`${sty.choiceBox} ${sty.fadeIn}`}>
              <ul className={sty.optionList}>
                {choiceList.map(element => (
                  <ProductOption
                    key={element.id}
                    listData={element}
                    selectList={selectList}
                  />
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
