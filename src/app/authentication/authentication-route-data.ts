let $$ : { [key : string] : any } = {

		'systemType' : 'User' ,

		'title' : 'User' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User' ,

		'link' : 'user' ,

		'$link' : 'authentication' ,

		'systemGuideline' : 'gen-internal'
};

let searchFilters = { 'role' : 'Role' , 'emailAddress' : 'Email Address' , 'level' : 'Level' , 'identityNumber' : 'Identity Number' , 'status' : 'Status' };

let signIncontrolFilters : string[] = ['firstName' , 'lastName' , 'username' , 'about' , 'department' , 'role' , 'faculty' , 'level' , 'country' , 'unit' , 'matriculationNumber' , 

								'jambRegistrationNumber' , 'identityNumber' , 'confirmPassword' , 'status'];

export const AData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'signUp' : {...$$ , 'title' : `Request for a User Account` , 'view' : 'ca' , 'controlFilters' : ['country' , 'role' , 'status'] , 'noEdit' : false } ,

	'signIn' : {...$$ , 'title' : `Sign into User Account` , 'view' : 'ca' , 'controlFilters' : signIncontrolFilters , 'asyncValidators' : ['emailAddress' , 'username'] , 'noEdit' : false } ,

	'forgotPassword' : {...$$ , 'title' : `Recover User Account` , 'view' : 'up' , 'noEdit' : false } ,

	'resetPassword' : {...$$ , 'title' : `Reset User Password` , 'view' : 'up' , 'noEdit' : false } ,

};