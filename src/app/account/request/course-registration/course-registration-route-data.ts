let $$ : { [key : string] : any } = {

		'systemType' : 'Course Registration' ,

		'title' : 'Course Registration' ,

		'view' : 'cr' ,

		'viewWord' : 'CourseRegistration' ,

		'link' : 'course-registration' ,

		'$link' : 'course-registration' ,

		'systemGuideline' : 'request'
};

export const CRData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request review of your semester ${$$.systemType}` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : null } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status'} } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
