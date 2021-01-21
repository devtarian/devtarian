const filterConfig = {
  category: {
    all: { title: 'All' },
    restaurant: { title: '식당', color: '#2f9e44', size: 0 },
    cafe: { title: '카페', color: '#e29f76', size: 47 },
    bakery: { title: '베이커리', color: '#88dde6', size: 95 },
    bar: { title: 'Bar', color: '#c92a2a', size: 142 },
    etc: { title: '기타', color: '#868e96', size: 191 },
  },
  vegType: {
    vegan: { title: '비건' },
    vegetarian: { title: '베지테리안' },
    veganOption: { title: '비건 옵션' },
  },
  order: {
    distance: { title: '거리' },
    rated: { title: '별점순' },
  },
  size: {
    10: { title: 10 },
    20: { title: 20 },
    30: { title: 30 },
  },
};

export default filterConfig;
