//Creating the Vue instance
new Vue({
	el:'#vue-app', // the element where the script will run
	data:{
		name:'John Doe',
	},
	methods:{
		greet: function (){
			return 'Good Morning!'
		}
	}
});