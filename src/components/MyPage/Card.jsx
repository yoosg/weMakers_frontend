import React, { Component } from 'react'
import '../MyPage/Card.module.scss'
import CardEntry from './CardEntry';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
    this.clickLikeBtn = this.clickLikeBtn.bind(this);
  }
  clickLikeBtn() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }
  render() {
    return (
      <div>
        <CardEntry/>
      </div>
    )
  }
}
