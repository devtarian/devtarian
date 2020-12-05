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
- A ) 아뇨!

<br/>

- Q ) keyword가 localstorage에 한 템포씩 느리게 저장된다. facebook 때도 겪었던 문제.
- A )

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

> src > cmponents > search > SearchForm.js

<br/>

- Q ) search form이 두 개인데, 한 곳의 value만 제출이 된다.
- A ) page 하나에서 form 제출은 한 곳에서만 일어나므로, onSubmit -> onClick으로 이벤트를 변경한다.

ASIS

```js
<Wrap onSubmit={handleInputSubmit}>
  <SearchInput placeholder="근처의 채식 식당을 찾아보세요!" value={value} onChange={handleInputChange}></SearchInput>
  <SearchButton type="submit" }>
    검색
  </SearchButton>
</Wrap>
```

<br/>

TOBE

```js
<Wrap>
  <SearchInput placeholder="근처의 채식 식당을 찾아보세요!" value={value} onChange={handleInputChange}></SearchInput>
  <SearchButton type="submit" onClick={handleInputClick}>
    검색
  </SearchButton>
</Wrap>
```
