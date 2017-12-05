# Vue-Tutorial

## Installing Vue
There are various methods to install vue in your project. Here I am using CDN.

`<script src="https://cdn.jsdelivr.net/npm/vue"></script>`

## Vue Instance
To create a vue instance copy and paste `new Vue({})` in the app.js file. All the vue.js components will be written within this instance.

```
new Vue({
	el:'elementName', // Replace the elementName with the id or class that you are targeting 
	data:{
		key:value // Store the data here
	},
	methods:{ // All the functions are written in the methods object
		functionName: function(paramater){
			//function body
		}
	}
});
```

## Data and Method

### Data
We can directly call the data from the app.js file into the DOM.
To dispaly a string `<h1>{{dataKey}}</h1>`.
Instead of `h1` tag other header tags, and even `p` tag can be used.

### Data Binding
To bind the data to the attributes of a tag use `v-bind:attributName`. For example to add a soucre link in the `a` tag
`<a v-bind:href='link'>Loreum Ipsum</a>`. We can also use `:href` instead of `v-bind:href`.

### Method
Methods are the function that we call like `{{methodName()}}`.
Like javascript functions we can pass parameters to the methods.