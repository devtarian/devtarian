#### `2020-12-04 (금)`

<br/>

# [ Main ]

<br/>

> src > index.js

<br/>

## [ index.js ]

`<GlobalStyles/>`에서 reset CSS 적용

<br/>
<hr/>
<br/>

> src > App.js

<br/>

## [ App.js ]

- Q ) styled component props를 내려주고 있는데, styled.css``로 처리?

```js
<Search positionTop="180px" background={BackGroundImg} box-shadow="none" />
```

- A )

  - 지금처럼 해도 무방. 항목 늘어나거나 theme로 관리가 필요시 객체로 묶어 styled.css로 적용.
  - background -> bg 이런식으로 명명하면 css props라는 것도 한 눈에 알 수 있고 좋을 듯.
  - default값 설정

<br/>

- Q ) component명: --container
- A ) 폴더를 components, containers로 state 관리 여부에 따라 나누는 경우가 있으나, 나의 경우 componets 폴더만 사용할 것이기 때문에 component 명에서 --container를 제외한다.

<br/>
<hr/>
<br/>

> src > components

<br/>

## [ components ]

- Q ) component명 고민 : container 역할의 component

  - component : -- container
  - styled- component : --wrap

```js
const Header = () => {
  return (
    <HeaderWrap>
      <Logo>
        <a href="">Devtarian</a>
      </Logo>
      <Nav />
    </HeaderWrap>
  );
};
```

- A ) 어차피 각 component 안에서만 사용하는 component 이므로 `<HeaderWrap>`이 아닌 `<Wrap>`으로 통일해도 무방

<br/>

> src > components > search > SearchModal.js

<br/>

### [ SearchModal ]

- Q ) NAV component 활용할까, 말까
- A ) 디자인이 다르므로 분리해도 무방

```js
  <li>
    <a href="">전체</a>
  </li>
  <li>
    <a href="">식당</a>
  </li>
  <li>
    <a href="">제품</a>
  </li>
```

<br/>

- Q ) component화 고민 : `<SearchCategory>` 를 styled component 로 만드는게 적정할까.

```js
const SearchModal = ({ onToggleShow }) => {
  return (
    <SearchModalSection>
      <SearchCategory>
        <li>
          <a href="">전체</a>
        </li>
        <li>
          <a href="">식당</a>
        </li>
        <li>
          <a href="">제품</a>
        </li>
      </SearchCategory>
      <SearchContainer positionTop="80px" background="none" />
      <CloseBtn onToggleShow={onToggleShow} />
    </SearchModalSection>
  );
};
```

- A ) 취향차이. 상위 tag에서 위와 같이 search와 관련된 네이밍을 했다면 component로 만들지 않아도 됐을 듯. 나는 후에 상위 tag들을 `<Wrap>`으로 통일할 것이기 때문에 `<SearchCategory>`로 놔두는 것이 좋을 듯 하다.

<br/>

> src > components > search

<br/>

### [ Search ]

<br/>

> SearchContainer.js

- Q ) recentkeywords 하나 만드는데 state 두개가 필요한가?
- A ) setRecentKeywords 안에서 slice까지 한 번에 처리

```js
const [recentKeywords, setRecentKeywords] = useState(loadRecentKeywords() || []);

const onAddRecentKeywords = (keyword) => {
  if (recentKeywords?.includes(keyword)) return;
  setRecentKeywords([keyword, ...recentKeywords].slice(0, 5));
```

<br/>

- Q ) keyword가 localstorage에 한 템포씩 느리게 저장된다. facebook App 때도 겪었던 문제.
- A ) useEffect 안에서 localStorage에 recentKeywords state를 저장하고, recentKeywords state의 기본값을 localStorage에서 불러온 'recentKeywords' 값으로 설정해 해결

```js
...

import { loadRecentKeywords, saveRecentKeywords } from '../../Service/recentKeywordService';

const Search = ({ posTop, bg }) => {
  const [recentKeywords, setRecentKeywords] = useState(loadRecentKeywords() || []);

  useEffect(() => {
    saveRecentKeywords(recentKeywords);
  }, [recentKeywords]);

  const onAddRecentKeywords = (keyword) => {
    if (recentKeywords?.includes(keyword)) return;
    setRecentKeywords([keyword, ...recentKeywords].slice(0, 5));
  };

...

```

<br/>

> src > components > carousel

<br/>

### [ Carousel ]

- Q ) component 명 고민 : `<ItemImg>`
- A ) o

<br/>

> src > components > carousel > reviewCarousel

<br/>

- Q ) `<Profile>` 을 이 폴더에서 관리하는 것이 적정한가
- A ) o

<br/>

- Q ) `<itemInfo>`로 `<Carousel>`과 중복되는 코드 관리
- A ) o

<br/>
<hr/>
<br/>

#### `2020-12-05 (토)`

<br/>

# 1

> src > cmponents > search > SearchForm.js

<br/>

- Q ) search form이 두 개인데, 한 곳의 value만 제출이 된다.
- A ) page 하나에서 form 제출은 한 곳에서만 일어나므로, onSubmit -> onClick으로 이벤트를 변경한다.

#### ASIS

```js
<Wrap onSubmit={handleInputSubmit}>
  <SearchInput placeholder="근처의 채식 식당을 찾아보세요!" value={value} onChange={handleInputChange}></SearchInput>
  <SearchButton type="submit">검색</SearchButton>
</Wrap>
```

<br/>

#### TOBE

```js
<Wrap>
  <SearchInput placeholder="근처의 채식 식당을 찾아보세요!" value={value} onChange={handleInputChange}></SearchInput>
  <SearchButton type="submit" onClick={handleInputClick}>
    검색
  </SearchButton>
</Wrap>
```

<br/>

# 2

> src > components > carousel > CarouselBtn.js  
> src > components > carousel > reviewCarousel > ReviewCarousel.js

<br/>

- Q ) thumbnail의 크기가 각기 다른 Carousel, SquareCarousel, ReviewCarousel에 CarouselBtn을 어떻게 적용할까
- A ) module화 시켜 각 component에 import. 특정 부모 컴포넌트에서 자식 컴포넌트에게 특정한 스타일 속성을 부여할 수 있는 Nesting을 이용하였다.

<br/>

#### CarouselBtn

```js
import React from 'react';
import styled from 'styled-components';

const CarouselBtn = () => {
  return (
    <CarouselBtnWrap>
      <button className="prev">
        <span>&lt;</span>
      </button>
      <button className="next">
        <span>&gt;</span>
      </button>
    </CarouselBtnWrap>
  );
};

export default CarouselBtn;

export const CarouselBtnWrap = styled.div`
  position: relative;
  top: 7px;
  height: 177px;

  button {
    position: absolute;
    top: 43%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-size: 20px;
    color: #ccc;
  }
  .prev {
    z-index: 110;
    left: -4px;
  }
  .next {
    z-index: 110;
    right: -4px;
  }
`;
```

<br/>

#### ReviewCarousel

```js
import CarouselBtn, { CarouselBtnWrap } from '../CarouselBtn';

const Wrap = styled.section`
  position: relative;

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  ${CarouselBtnWrap} {
    top: 56px;
    height: 235px;
  }
`;
```
