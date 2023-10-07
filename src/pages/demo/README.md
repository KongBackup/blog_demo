---
category: demo
date: 2022-11-19
---
# HTM + CSS + JS + 效果展示

::: normal-demo 乘法表

```html
<div id="box1"></div>
<div id="box2"></div>
```

```js
function multip(id) {
let box = document.getElementById(id)
let html = ''
  for(let i =1;i<10;i++) {
    let txt = ''
    for(let j = 1;j<i+1;j++){
      txt += `<span> ${i}*${j}=${i*j}</span>`
    }
    html += `<div class='item'>${txt}</div>`
  }
  box.innerHTML = html
}
multip('box1')
```

```css
span{
  width: 55px;
  padding: 5px;
  border: 1px solid #aaa;
  border-bottom: none;
  border-right: none;
  display: inline-block;
}
.item:last-of-type span{
  border-bottom: 1px solid #aaa;
}
.item span:last-of-type{
  border-right: 1px solid #aaa;
}
```

:::


