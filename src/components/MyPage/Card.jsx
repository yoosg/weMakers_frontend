import React, { Component } from 'react';
import '../MyPage/Card.module.scss';
import CardEntry from './CardEntry';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  // getCardData() {
  //   // fetch logic
  //   fetch('', {
  //     method: 'GET',
  //   },
  //   body: JSON.stringify( {
  //   })
  //   )
  //   .then(res=>)
  //   .then(res)
  // }

  // componentDidMount() {
  //   this.getCardData();
  // }

  render() {
    const cards = [
      {
        id: '21329300',
        src:
          'https://mud-kage.kakaocdn.net/dn/qw8lR/bIcxYaakfob/guHX26MP2edYIJ0HkMMN2K/img.jpg?convert=resize2&w=320&h=320',
        name: 'name',
        price: 17000,
        dDay: 3,
        isLike: true,
      },
      {
        id: '21329300',
        src:
          'https://mud-kage.kakaocdn.net/dn/qw8lR/bIcxYaakfob/guHX26MP2edYIJ0HkMMN2K/img.jpg?convert=resize2&w=320&h=320',
        name: 'name',
        price: 17000,
        dDay: 3,
        isLike: false,
      },
    ];
    return cards.map((card, i) => <CardEntry card={card} />); //카드로 내려줄꺼
  }
}
