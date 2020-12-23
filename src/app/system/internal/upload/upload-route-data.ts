let $$ : { [key : string] : any } = {

		'systemType' : 'Upload' ,

		'title' : 'Upload' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Upload' ,

		'link' : 'upload' ,

		'$link' : 'upload' ,

		'systemGuideline' : 'gen-internal'
};

export const UData : { [key : string] : any } = {

	'dashboard' : {...$$ , 'canCreate' : false } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` , 'view' : 'uadp'} ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` } ,

};