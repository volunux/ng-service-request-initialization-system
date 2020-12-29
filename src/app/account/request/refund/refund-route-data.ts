let $$ : { [key : string] : any } = {

		'systemType' : 'Refund' ,

		'title' : 'Refund' ,

		'view' : 'rf' ,

		'viewWord' : 'Refund' ,

		'link' : 'refund' ,

		'$link' : 'refund' ,

		'systemGuideline' : 'request' ,

		'base' : 'request'
};

export const RFData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Request a ${$$.systemType} for fee payment` } ,

	'comment' : {...$$ , 'title' : `Add a Comment : ${$$.systemType} Entry` } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry` , 'generateCred' : 'csif' } ,

	'timeline' : {...$$ , 'title' : `${$$.systemType} Entry Timeline` } ,

	'letter' : {...$$ , 'title' : `${$$.systemType} Entry Letter` } ,

	'transfer' : {...$$ , 'title' : `Transfer and Move ${$$.systemType} Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` ,

		'searchFilters' : {'applicationNumber' : 'Application Number' , 'status' : 'Status' , 'department' : 'Department' , 'faculty' : 'Faculty' , 'stage' : 'Stage' } } ,

	'reply' : {...$$ , 'title' : `Add a Reply to a Comment : ${$$.systemType} Entry`} ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};
