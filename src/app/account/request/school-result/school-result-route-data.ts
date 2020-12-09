let $$ : { [key : string] : any } = {

		'systemType' : 'School Result' ,

		'title' : 'School Result' ,

		'view' : 'asr' ,

		'viewWord' : 'SchoolResult' ,

		'link' : 'school-result' ,

		'$link' : 'school-result' ,

		'systemGuideline' : 'request'
};

export const SRData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request review of your Acamdemic Semester Result` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : null } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`}

};
