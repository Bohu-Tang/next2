// 字体配置

import {Inter, Lusitana} from "next/font/google"; // 导入字体

export const inter = Inter({
  subsets: ["latin"] // 引入拉丁字体
})

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"] // 设置字体粗细
})