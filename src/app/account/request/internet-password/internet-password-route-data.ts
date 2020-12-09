let $$ : { [key : string] : any } = {

		'systemType' : 'Internet Password' ,

		'title' : 'Internet Password' ,

		'view' : 'rpif' ,

		'viewWord' : 'InternetPassword' ,

		'link' : 'internet-password' ,

		'$link' : 'internet-password' ,

		'systemGuideline' : 'request'
};

export const IPData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request ${$$.systemType} for School WIFI` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : 'passwords' } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`}

};
