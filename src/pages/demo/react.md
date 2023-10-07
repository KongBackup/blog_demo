---
category: demo
date: 2022-11-19
---

## react 代码演示

::: react-demo 可选的标题文字

```js
// import { useState } from 'react';
function MyButton() {
 const [count, setCount] = React.useState(0);
 function handleClick() {
   setCount(count + 1);
  console.log('------------------------', count)
 }
return (
   <button onClick={handleClick}>
     Clicked  times {count}
     
   </button>
  
 );
}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>页面渲染内容------------</div>
        <MyButton/>
      </div>
    );
  }
}
```
<!-- 
```css
/* 你的 css 内容 */
```

```json
// 配置 (可选)
``` -->

:::