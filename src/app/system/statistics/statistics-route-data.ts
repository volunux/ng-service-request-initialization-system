let $$ : { [key : string] : any } = {

		'systemType' : 'Statistics' ,

		'title' : 'Statistics' ,

		'view' : 'gen-internal' ,

		'viewWord' : 'Statistics' ,

		'link' : 'statistics' ,

		'$link' : 'statistics' ,

		'systemGuideline' : 'gen-internal'
};


export const SData1 : { [key : string] : any } = {

		'GeneralRequestComment' : 'General Request Comment' , 'GeneralRequestReply' : 'General Request Reply' , 'RefundComment' : 'Refund Comment' , 'RefundReply' : 'Refund Reply' ,

		'Department' : 'Department' , 'Faculty' : 'Faculty' , 'Level' : 'Level' , 'Unit' : 'Unit' , 'Upload' : 'Upload' , 'Letter' : 'Letter' , 'RequestType' : 'Request Type' ,

		'RequestCredential' : 'Request Credential' , 'RequestLimit' : 'RequestLimit' , 'Country' : 'Country' , 'RefundStage' : 'Refund Stage' , 'GeneralRequest' : 'General Request' ,

		'Refund' : 'Refund' , 'Student' : 'Student' , 'DepartmentPresident' : 'Department President' , 'FacultyPresident' : 'Faculty President' , 'Lecturer' : 'Lecturer' ,

		'HeadOfDepartment' : 'Head of Department' , 'DeanOfFaculty' : 'Dean of Faculty' , 'Bursar' : 'Bursar' , 'Staff' : 'Staff' , 'Moderator' : 'Moderator' , 'Administrator' : 'Administrator' ,

		'SuperAdministrator' : 'Super Administrator' , 'CourseRegistration' : 'Course Registration' , 'EmailPassword' : 'Email Password' , 'InternetCredential' : 'Internet Credential' ,

		'InternetPassword' : 'Internet Password' , 'SchoolResult' : 'School Result' ,
}


export const SData : { [key : string] : any } = {

	'dashboard' : {...$$ , 'canCreate' : false } ,

	'entries' : {...$$ , 'title' : `${$$.systemType} Entries` , 'records' : SData1 } ,

};
