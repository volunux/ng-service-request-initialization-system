let $$ : { [key : string] : any } = {

		'systemType' : 'Internet Credential' ,

		'title' : 'Internet Credential' ,

		'view' : 'csif' ,

		'viewWord' : 'InternetCredential' ,

		'link' : 'internet-credential' ,

		'$link' : 'internet-credential' ,

		'systemGuideline' : 'request' ,

		'base' : 'request'
};

export const ICData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request ${$$.systemType} for School WIFI` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : 'csif' } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
