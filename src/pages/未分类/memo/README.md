---
category: memo
date: 2022-11-18
---

# 问答样式
:::details 标题
回答内容
:::

```html
:::details 标题
回答内容
:::
```

# 提醒样式
:::tip 提醒标题
回答内容
:::

```html
:::tip 提醒标题
回答内容
:::

```

# 警告样式
:::warning
回答内容
:::

```html
:::warning
回答内容
:::
```

# 警告样式
:::note
回答内容
:::

```html
:::note
回答内容
:::
```

# 警告样式
:::danger
回答内容
:::

```html
:::danger
回答内容
:::
```


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

