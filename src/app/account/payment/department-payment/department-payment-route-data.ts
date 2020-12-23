let $$ : { [key : string] : any } = {

		'systemType' : 'Department Fee' ,

		'title' : 'Department Fee Payment' ,

		'view' : 'dp' ,

		'viewWord' : 'Department' ,

		'link' : 'department' ,

		'$link' : 'department-payment' ,

		'systemGuideline' : 'payment'
};

export const DPData : { [key : string] : any } = {

	'dashboard' : {...$$} ,

	'create' : {...$$ , 'title' : `Make ${$$.systemType} Payment` , 'paymentRule' : { 'amount' : '1000' , 'description' : 'Departmental Fee Payment' , 'type' : 'department' ,

    'callback' : 'http://localhost:4200/payment/department/validation/' } } ,

	'detail' : {...$$ , 'title' : `${$$.systemType} Payment Entry` } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'searchFilters' : {'paymentReference' : 'Payment Reference' , 'department' : 'Department' , 'status' : 'Status'} } ,

	'validation' : {...$$ , 'title' : `Verifying ${$$.systemType} Payment` } ,

	'deleteAll' : {...$$ , 'title' : `${$$.systemType} Entries : Delete All` } ,

};