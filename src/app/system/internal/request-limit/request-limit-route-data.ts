let $$ : { [key : string] : any } = {

		'systemType' : 'Request Limit' ,

		'title' : 'Request Limit' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Request Limit' ,

		'link' : 'request-limit' ,

		'$link' : 'request-limit' ,

		'systemGuideline' : 'gen-internal'
};

const placeholder = {'author' : 'David Mike' , 'numberRemaining' : 3 };

export const RLData : { [key : string] : any } = {

	'dashboard' : {...$$ , 'canCreate' : false } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` , 'view' : 'uadp'} ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['description' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder } ,

};