const filterConfig = {
  category: {
    all: { value: 'All' },
    restaurant: { value: '식당', color: '#2b8a3e' },
    cafe: { value: '카페', color: '#e08d60' },
    bakery: { value: '베이커리', color: '#88dde6' },
    bar: { value: 'Bar', color: '#868e96' },
    etc: { value: '기타', color: '#37b24d' },
  },
  vegType: {
    vegan: { value: '비건' },
    vegetarian: { value: '베지테리안' },
    veganOption: { value: '비건 옵션' },
  },
  sort: {
    distance: { value: '거리' },
    asc: { value: '오름차순' },
    desc: { value: '내림차순' },
  },
  size: {
    10: { value: 10 },
    20: { value: 20 },
    30: { value: 30 },
  },
};

export default filterConfig;
