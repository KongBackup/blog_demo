import path from 'path'
import fs from 'fs';
import type { HopeThemeNavbarConfig } from "vuepress-theme-hope/lib/shared/navbar";
let toppath=path.resolve(__dirname, '../pages');
let fileList = {}
/*
fileList 格式
{
  '/pages/工具箱/MAC/': [ '' ],
  '/pages/工具箱/NVM/': [ '' ],
  '/pages/未分类/memo/': [ '', 'react', 'slides' ]
} 
*/ 
let navList:HopeThemeNavbarConfig = []
/*
{ 
text: '工具箱', 
children: [ 
    {text: "MAC", link: "/pages/工具箱/MAC/"},
    {text: "memo", link: "/pages/未分类/memo/"},
    ] 
},
 */ 
function getFileData(url){
  let filenames = fs.readdirSync(url);
  let fileName = url.substring(url.lastIndexOf('/') + 1)
  let sidePath = url.substring(url.lastIndexOf('/pages')) + '/'
  return {filenames, fileName, sidePath}
}
// 获取pages文件列表
function getFiles(url){
    let {filenames,  sidePath} = getFileData(url)
  filenames.forEach(item => {
    if(item.startsWith('.') || item == 'README.md'){}
    else if(/\./.test(item)){
      fileList[sidePath].push(item.split('.')[0])
    }
  })
}
function getNav(url, level){
    let {filenames, fileName} = getFileData(url)
    if(level === 0) {
        filenames.forEach(item => {
            // README.md 各自定义文件 不会走自动生成菜单
            if(item.startsWith('.') || item == 'README.md' || item === '自定义页面') return
            navList.push({
                text: item,
                children: []})
            getNav(url + '/'+ item, level+1)
        })
    } else if (level === 1) {
        filenames.forEach(item =>{
            if(item.startsWith('.') || item == 'README.md') return
            let index= navList.findIndex(i=> {
                return typeof i !== 'string'  && i.text == fileName
            })
            typeof navList[index] !== 'string' && (<HopeThemeNavbarGroup>navList[index]).children.push({
                text: item,
                link: `/pages/${fileName}/${item}/`
            })
            fileList[`/pages/${fileName}/${item}/`] = ['']
            getFiles(url + '/'+ item)
        })
    }
}
getNav(toppath, 0)
export { fileList, navList}