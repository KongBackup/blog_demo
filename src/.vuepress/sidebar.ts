import { sidebar } from "vuepress-theme-hope";
import { fileList} from './utils'

let nav = {
}
let fullNav = {...fileList, ...nav}
// console.log('fullNav-----------', fileList)
export const enSidebar = sidebar(fullNav);

