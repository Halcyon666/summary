---
title: "Vue 语法2"
hidemeta: true
---

> **<font color="red">本文所有内容均来自 书籍《vue.js实战》</font>**
>
> **[<font color="red">完整代码请查看github</font>](https://github.com/whalefall541/vue-learn)**



## v- for 其他用法

- 列表内容添加索引

```html
<div id="app">
    <ul>
        <li v-for="(book, index) in books">{{ index }} - {{ book.name }}</li>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            books: [
                {name : '《Vue.js实战》'},
                {name : '《JavaScript 语言精粹》'},
                {name : '《JavaScript 高级程序设计》'}
            ]
        }
    })
</script>
```

- 用于template上

```html
<div id="app">
    <ul>
        <template v-for="book in books">
            <li>书名：{{ book.name }}</li>
            <li>作者：{{ book.author }}</li>
        </template>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            books: [
                {name : '《Vue.js实战》', author: '梁灏'},
                {name : '《JavaScript 语言精粹》', author: 'Douglas Crockford'},
                {name : '《JavaScript 高级程序设计》', author: 'Nicholas C.Zakas'}
            ]
        }
    })
</script>
```

- 用于遍历对象的属性

```sql
<div id="app">
    <span v-for="value in user"> {{ value }}</span>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            user: {
                name: 'Aresn',
                gender: 'male',
                age: 26
            }
        }
    })
</script>
```

- 遍历对象属性时 使用键名和索引

```html
<div id="app">
    <ul>
        <li v-for="(value, key ,index) in user">
            {{ index }} - {{ key }} : {{ value }}
        </li>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            user: {
                name: 'Aresn',
                gender: 'male',
                age: 26
            }
        }
    })
</script>
```

- 遍历整数

```html
<div id="app">
    <ul>
        <span v-for="n in 10"> {{ n }}</span>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app'
    })
</script>
```

## filter() push()方法的使用

```html
<div id="app">
    <ul>
        <template v-for="book in books">
            <li>书名：{{ book.name }}</li>
            <li>作者：{{ book.author }}</li>
        </template>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            books: [
                {name : '《Vue.js实战》', author: '梁灏'},
                {name : '《JavaScript 语言精粹》', author: 'Douglas Crockford'},
                {name : '《JavaScript 高级程序设计》', author: 'Nicholas C.Zakas'}
            ]
        }
    });
    app.books.push({
        name: '《CSS 揭秘》',
        author:'[希] Lea Verou'
    });
    app.books = app.books.filter( function (item) {
        return item.name.match(/JavaScript/);
    });
</script>
```

> Vue 包含了一组观察数组变异的方法，使用它们改变数组也会触发视图更新：
>
> **这些方法会改变视图**   
>
> `push pop shift unshift splice sort reverse`
>
> **这些方法不会改变视图** 
>
> - `filter concat slice `
> - 通过索引直接设置项 `app.books[3]={...}`
> - 修改数组长度 `app.books.length=1`

Vue set方法改变数组元素的内容

```html
<div id="app">
    <ul>
        <template v-for="book in books">
            <li>书名：{{ book.name }}</li>
            <li>作者：{{ book.author }}</li>
        </template>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            books: [
                {name : '《Vue.js实战》', author: '梁灏'},
                {name : '《JavaScript 语言精粹》', author: 'Douglas Crockford'},
                {name : '《JavaScript 高级程序设计》', author: 'Nicholas C.Zakas'}
            ]
        }
    });

    // Vue.set(app.books, 3, {
    // 	name: '《CSS 揭秘》',
    // 	author: '[希] Lea Verou'
    // });

    // app.$set(app.books, 3, {
    // 	name: '《CSS 揭秘》',
    // 	author: '[希] Lea Verou'
    // });

    // splice(index, len, [item])
    // app.books.splice(3, 1, {
    // 	name: '《CSS 揭秘》',
    // 	author: '[希] Lea Verou'
    // });

    app.books.splice(1);
</script>
```

> 如果是在webpack 中使用组件化的方式（进阶篇中将介绍），默认是没有导入Vue 的，这时
> 可以使用$set
>
> ```html
> this.$set(app.books, 3, {
>     name: '《CSS 揭秘》',
>     author: '[希] Lea Verou'
> });
> ```

## computed中的 filter sort

```html
<div id="app">
    <ul>
        <template v-for="book in filterBooks">
            <li>书名：{{ book.name }}</li>
            <li>作者：{{ book.author }}</li>
        </template>
    </ul>

    <ul>
        <template v-for="book in sortedBooks">
            <li>书名：{{ book.name }}</li>
            <li>作者：{{ book.author }}</li>
        </template>
    </ul>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            books: [
                {name : '《Vue.js实战》', author: '梁灏'},
                {name : '《JavaScript 语言精粹》', author: 'Douglas Crockford'},
                {name : '《JavaScript 高级程序设计》', author: 'Nicholas C.Zakas'}
            ]
        },
        computed: {
            filterBooks: function (){
                return this.books.filter(function (book) {
                    return book.name.match(/JavaScript/);
                });
            },
            // a.name.length - b.name.length 从短到长
            sortedBooks: function(){
                return this.books.sort(function(a, b) {
                    return b.name.length - a.name.length;
                });	
            }
        }
    });

</script>
```

## click 

```html
<div id="app">
    点击次数:{{ counter }}
    <button @click="counter++">加一</button>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            counter: 0
        }
    });

</script>

```

## `$event`

```html
<div id="app">
    <a href="http://www.apple.com" @click="handleClick('forbid open', $event)">打开链接</a>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        methods: {
            handleClick: function (message, event) {
                event.preventDefault();
                window.alert(message);
            }
        }
    });

</script>
```

## 修饰符`@click.stop.prevent`

```html
<div id="app">
    <!-- stop阻止单击事件冒泡 -->
    <a href="http://www.apple.com" @click.prevent.stop="handle">打开链接</a>
    <button @submit.prevent="handle">提交表单</button>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        methods: {
            handle: function () {
            }
        }
    });

</script>
```

> ```html
> <!-- 添加事件侦听器时使用事件捕获模式-->
> <div @click.capture="handle"> ... </div>
> <!--  只当事件在该元素本身（而不是子元素）触发时触发回调-->
> <div @click.se1f="handle"> ... </div>
> <!-- 只触发一次，组件同样适用-->
> <div @click.once="handle"> ... </div>
> <!-- 只有在keyCode 是13 时调用vm.submit() -->
> <input @keyup.13="submit">
> ```

![image-20220104220828923](https://gitee.com/jack541/repo-for-pic-go/raw/master/img/image-20220104220828923.png)

## textarea v-model

```html
<div id="app">
    <!-- 此时输入是拼音的字母不会触发更新 -->
    <textarea v-model="text" placeholder="输入...">aa</textarea>
    <p>输入的内容是：</p>
    <!-- https://www.cnblogs.com/qianlegeqian/p/3987235.html white-space pre参考文章 -->
    <p style="white-space: pre">{{ text }}</p>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el:'#app',
        data: {
            text: ''
        }
    })
</script>
```

## @input

```html
<div id="app">
    <!-- @input可以触发实时更新 -->
    <input type="text" @input="handleInput" placeholder="输入...">
    <p>输入的内容是：{{ message }}</p>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el:'#app',
        data: {
            message: ''
        },
        methods: {
            handleInput: function (e) {
                this.message = e.target.value;
            }
        }
    })
</script>
```

![image-20220106231222754](https://gitee.com/jack541/repo-for-pic-go/raw/master/img/image-20220106231222754.png)

### v-model 单选互斥案例

```html
<div id="app">
    <input type="radio" v-model="picked" value="html" id="html">
    <label for="html">HTML</label>
    <br>
    <input type="radio" v-model="picked" value="js" id="js">
    <label for="js">JavaScript</label>
    <br>
    <input type="radio" v-model="picked" value="css" id="css">
    <label for="css">CSS</label>
    <br>
    <p>选择的选项是：{{ picked }}</p>
</div>
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script>
    var app = new Vue({
        el:'#app',
        data: {
            picked: js
        }
    })
</script>
```

### 



> 参考文献：**<font color="red">书籍《vue.js实战》</font>**