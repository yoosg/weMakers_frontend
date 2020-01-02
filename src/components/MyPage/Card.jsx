import React, { Component } from 'react';
import '../MyPage/Card.module.scss';
import CardEntry from './CardEntry';
//import {fetchAPI} from '../../utils/fetchAPI'
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id:{},
        src:{},
        name:{},
        price:{},
        end_date:{},
        isLike: true
      }],
    };
  }

  getCardData() {
    // fetch logic
    fetch('http://localhost:3000/data/myPageData.json', {
      method: 'GET',
    },
    )
    .then(res=>{
      this.setState({
        id: res.id,
        src: res.src,
        name: res.name,
        price: res.price,
        end_date: res.end_date,
        isLike: res.isLike
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getCardData();
  }

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
        isLike: true,
      },
    ];
    return cards.map((card, i) => <CardEntry card={card} />); //카드로 내려줄꺼
  }
}
