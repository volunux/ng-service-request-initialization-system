let $$ : { [key : string] : any } = {

		'systemType' : 'Email Password' ,

		'title' : 'Email Password' ,

		'view' : 'repsp' ,

		'viewWord' : 'EmailPassword' ,

		'link' : 'email-password' ,

		'$link' : 'email-password' ,

		'systemGuideline' : 'request' ,

		'base' : 'request'
};

export const EPData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request ${$$.systemType} for School Portal` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : 'passwords' } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
