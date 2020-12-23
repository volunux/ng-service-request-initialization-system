let $$ : { [key : string] : any } = {

		'systemType' : 'User' ,

		'title' : 'User' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'User' ,

		'link' : 'user' ,

		'$link' : 'admin/user' ,

		'systemGuideline' : 'gen-internal'
};

let searchFilters = { 'role' : 'Role' , 'emailAddress' : 'Email Address' , 'level' : 'Level' , 'identityNumber' : 'Identity Number' , 'status' : 'Status' };

export const UData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'view' : 'ca' , 'controlFilters' : [] , 'noEdit' : false } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['emailAddress' , 'username' , 'password' , 'confirmPassword'] } , 

	'updateReq' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'link' : 'user/account-request/' , 'controlFilters' : ['emailAddress' , 'username' , 'password' , 'confirmPassword'] } , 

	'reactivate' : {...$$ , 'title' : `${$$.systemType} Entry Reactivate` , 'noEdit' : false , 'link2' : false } ,

	'deactivate' : {...$$ , 'title' : `${$$.systemType} Entry Deactivate` , 'noEdit' : false , 'link2' : true } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` ,

	'controlFilters' : ['username' , 'about' , 'password' , 'confirmPassword' , 'level' , 'faculty' , 'status' , 'jambRegistrationNumber' , 'matriculationNumber' , 'unit' , 'num'] , 

	'noEdit' : true , 'asyncValidators' : ['emailAddress' , 'username'] , 'link' : 'user/account-request' } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` , 'view' : 'uadp'} ,

	'entries' : {...$$ , searchFilters , 'title' : `${$$.systemType} Entries` } ,

	'entriesRequest' : {...$$ , searchFilters , 'title' : `${$$.systemType} Request Entries` , 'link' : 'user/account-request' } ,

};