let $$ : { [key : string] : any } = {

		'systemType' : 'Faculty Fee' ,

		'title' : 'Faculty Fee Payment' ,

		'view' : 'fp' ,

		'viewWord' : 'Faculty' ,

		'link' : 'faculty' ,

		'$link' : 'faculty-payment' ,

		'systemGuideline' : 'payment' ,

		'base' : 'payment'
};

export const FPData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Make ${$$.systemType} Payment` , 'paymentRule' : { 'amount' : '1500' , 'description' : 'Faculty Fee Payment' , 'type' : 'faculty' ,

    'callback' : 'http://localhost:4200/payment/faculty/validation/' } } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Payment Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'paymentReference' : 'Payment Reference' , 'faculty' : 'Faculty' , 'status' : 'Status'} } ,

	'validation' : {...$$ , 'title' : `Verifying ${$$.systemType} Payment` } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};