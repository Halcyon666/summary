---
title: "Vue项目笔记"
hidemeta: true
---

**说明本文项目知识笔记内容来自 [B站尚硅谷视频](https://www.bilibili.com/video/BV1Vf4y1T7bw?p=10&spm_id_from=pageDriver)**

## 如何安装Vue-cli

```bash
# 安装cnpm 国内的yarn?
npm install -g cnpm --registry=https://registry.npm.taobao.org

npm config set registry https://registry.npm.taobao.org



# 安装vue cli  
cnpm isntall -g @vue/cli # -g表示全局安装
# 查看vue cli 版本
vue -V

vue create vue_xxx

```

## [python环境变量配置无效的问题](https://zhuanlan.zhihu.com/p/431747120)

![image-20220115145506444](https://s2.loli.net/2023/07/15/INyuG4bdKnh5jMf.png)

## 项目结构说明

 components 放置非路由文件

views/pages 放置路由文件

## 项目知识点笔记

### 注意点

1. 复制完html style之后，注意图片(html,style中都可能有图片哦)所对应的路径

### router路由配置时权限控制

通过route 中的meta配置可以控制 一些权限；

```json
{
    path:'/home',
    name:'home',
    component: () => import('@/pages/Home/'),
    meta: {isShow: true}
}
```

### param query传参

```js
    // 1.0 字符串形式
    this.$router.push('/search/'+ this.wd + "?k="+ this.wd)
    // 2.0 模板字符串
    this.$router.push(`/search/${this.wd}?k=${this.wd.toUpperCase()}`)
    // 3.0 对象写法
    this.$router.push({
        name:"search",
        params:{
            wd: this.wd,
        },
        query:{
            k:this.wd.toUpperCase(),
        }
    })

    // 面试题1 路由传参(对象写法) path是否可以结合params一起使用?
    // 路由跳转传参时，对象写法可以是path、name 但是path写法时，不支持params传参
    this.$router.push({
        path: '/search',
        params:{
            wd: this.wd,
        },
        query:{
            k:this.wd.toUpperCase(),
        }
    })

    // 面试题2 如何指定params参数可传可不传
    // router中已经配置占位，但是就是不传params参数，路径缺失 http://localhost:8080/#/?k=KJKJ
    // 如果想可传可不传 占位时加一个问号 path:'/search/:wd?'
    this.$router.push({
        name:"search",
        query: {
            k: this.wd.toUpperCase(),
        }
    })

    // 面试题3 params参数可以传递也可以不传递，但是如果传递的是空串如何处理
    // 使用undefine: params参数可以传递或者不传递时，传递空字符串的问题
    this.$router.push({
        name:"search",
        params:{wd:'' || undefined},
        query: {
            k: this.wd.toUpperCase(),
        }
    })

	{
		path:'/search/:wd?',
		name:'search',
		component: () => import('@/pages/Search'),
		meta: {isShow: true},
		// 面试题4 路由组件能不能传递props数据
		// 方法1 布尔值写法 并且只能传递params参数
		// props: true
		// 方法2 对象写法
		// props: {a:1,b:2,wd:'aaa'}
		// 方法3 函数写法 可以param参数 query参数 通过props传递给路由组件
		props:($route) => ({wd:$route.params.wd, k:$route.query.k})  
    }
```

### NavigationDuplicated处理

```js
// 报错处理 Uncaught (in promise) NavigationDuplicated
// 声明式导航 没有这种问题 因为底层处理好了，而编程式导航有问题
// 通过给push方法传递 相应的成功和失败函数，可以捕获到当前的错误，但是治标不治本
// 在别的地方使用时还是得处理
// this.$router.push({
//   name:"search",
//   params:{
//     wd: this.wd,
//   },
//   query:{
//     k:this.wd.toUpperCase(),
//   }
// },()=>{},(error)=>{});


// 报错处理 Uncaught (in promise) NavigationDuplicated
// 先保存VueRouter原型对象的push 
let originPush = VueRouter.prototype.push;
// 重写push/replace 
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call/apply 都可以调用函数一次，篡改函数的上下文一次
        // call 传递参数用逗号隔开，apply方法执行传递数组
        // 此处this保证上下文为Router实例
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
```

### 节流和防抖

防抖：用户频繁操作，只执行一次；

节流：用户频繁操作，遏制用户执行的频率；
