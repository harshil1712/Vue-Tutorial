//Creating the Vue instance
new Vue({
	el:'#vue-app', // the element where the script will run
	data:{
		name:'John Doe',
		link: 'https://www.google.com',
		linkHTML :'<a href=\'https://google.com\'>Another Link</a>'
	},
	methods:{
		greet: function (){
			return 'Good Morning!'
		}
	}
});