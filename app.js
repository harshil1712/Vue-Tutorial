//Creating the Vue instance
new Vue({
	el:'#vue-app', // the element where the script will run
	data:{
		name:'John Doe',
		link: 'https://www.google.com',
		linkHTML :'<a href=\'https://google.com\'>Another Link</a>',
		age:25,
		x:0,
		y:0
	},
	methods:{
		greet: function (){
			return 'Good Morning!'
		},
		add: function(n){
			this.age+=n;
		},
		sub: function(n){
			this.age-=n;
		},
		position:function(e){
			this.x=e.offsetX;
			this.y=e.offsetY;
		}
	}
});