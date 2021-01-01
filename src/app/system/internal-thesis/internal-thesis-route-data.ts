let $$ : { [key : string] : any } = {

		'systemType' : 'Thesis' ,

		'title' : 'Thesis' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Thesis' ,

		'link' : 'thesis' ,

		'$link' : 'thesis' ,

		'systemGuideline' : 'file'
};

const placeholder = {'title' : 'Request Initialization and Service System' , 'description' : 'Student Management System' , 'authorName' : 'Yusuf Musa Yusuf' , 'datePublished' : '10/04/1995' };

export const TData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Add a ${$$.systemType}` , 'controlFilters' : ['_id' , 'num' , 'description' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder , 'attachmentName' : 'PDF' , 'attachmentType' : 'application/pdf' } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Entry Detail` } ,

	'update' : {...$$ , 'title' : `${$$.systemType} Entry Update` , 'controlFilters' : ['_id' , 'description' , 'num' , 'faculty' , 'requestUsername' , 'requestPassword'] , 'noEdit' : false , 

	placeholder } ,

	'delete' : {...$$ , 'title' : `${$$.systemType} Entry Delete` , 'controlFilters' : ['_id' , 'description' , 'status' , 'faculty' , 'requestUsername' , 'requestPassword'] ,

		'controlsDisabled' : ['name' ,'description' , 'status' , 'shortCode' , 'secondaryKey' , '_id' , 'num'] , 'noEdit' : true , placeholder } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : { 'shortCode' : 'Short Code' , 'num' : 'Number' , '_id' : 'Unique Identity'} } ,

};
