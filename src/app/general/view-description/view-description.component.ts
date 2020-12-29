import { Component , OnInit , Input , ChangeDetectionStrategy } from '@angular/core';

@Component({

  'selector' : 'app-view-description',

  'templateUrl' : './view-description.component.html',

  'styleUrls': ['./view-description.component.css'] ,

})

export class ViewDescriptionComponent implements OnInit {

  constructor() { 

  }

  @Input('system-type') public systemType : string;

  @Input('view-description') public $view : string = '';

  public $listView : { [key : string] : string };

  get view() : string {

    return this.$listView[this.$view];
  } 

  ngOnInit() : void {

    this.$listView  = {

    'aug' : `This section of the system allows you to perform administrator related actions such as adding a user , viewing and making changes to user and also analyzing the user statistics.` ,

    'ca' : `Administrators are allowed to create user profiles which can perform actions in the system or use other processess to fulfill request when necessary.` ,

    'cr' : `The function of the Student and School Academic Course Registration is to enable a student to partake in an academic session with a recordable continouous assessment 

            that will allow him or her to proceed to the next level in institution and academic studies. Each student does his or her own session course registration through the Student 

            Electronic Portal and can register and drop courses both for the current level and previous level if there is sufficient credit units to be able to accommodate that kind of actions. 

            If you are having issues related with course registration such as being able to find the course to register or having courses registered under the same title but different codes

            or even having other course registration issues or enquiries to resolve and wait briefly to get a resolution.` ,

    'asr' : `The function of the Student and School Academic Result is to enable a student to partake in continuous assessment and examination exercises and see what he or she have scored

            in this exercise that will allow him or her to proceed to the next level in institution and academic studies. Each student have two results taking from 2 academic semesters throughout 

            the academic session and calender year and can check results through the Student Electronic Portal and can also register and drop courses both for the next level and previous level 

            if there is sufficient credit units to be able to accommodate those courses in which the students was absent or didn't have enough score to pass the course.

            If you are having issues related with result checking such as missing grades or subjects, you can make enquiries to get it resolved and wait briefly to get a resolution.` ,

    'rpif' : `The function of the Student Internet Credential is to enable a student or member of the Federal University of Technology to be able to connect and use the free within-the school

            public hotspot or use even use cable network connections like LAN to connect to an available network and browse the Internet to help your academic activities.

            If you are a new student or sophomore or a penultimate or a final year student. You can get your credentials including username and password to be able to use the school 24 hours

            hotspot. You can fill the form below and wait briefly to get a resolution.` ,

    'csif' : `The function of the Student Internet Credential is to enable a student or member of the Federal University of Technology to be able to connect and use the free within-the school

              public hotspot or use even use cable network connections like LAN to connect to an available network and browse the Internet to help your academic activities.

              If you are a new student or sophomore or a penultimate or a final year student. You can get your credentials including username and password to be able to use the school 24 hours

              hotspot. You can fill the form below and wait briefly to get a resolution.` ,

    'repsp' : `The function of the Student School Email Account is to enable you to send and receive messages. It also allows you to have access to school related announcement and information

              message like date of resumption for students, conferences and meeting and also to receive credentials to use the Student Portal for activities such as payment of school fees,

              acceptance fees, clearance of documents for fresh students, course registration and result checking. If you have forgotten your login details to the school student portal,

              you can fill the form below and wait briefly to get your password back.` ,

    'rf' : `All regular and part-time Students are required to pay the school registration fees or dues which enables them to perform and have various activities like course registration,

            checking results, making document clearance, graduation clearance and other school academic related activities. In the process of making payment, issues might arise such as 

            the case of intermitent network that would result in student unknowningly making payment twice for the same service. If you are in this situation and you have (which you should) 

            necessary documents proofing that you have made the payment twice and want to request for a refund. You can fill the form below and wait briefly to get a resolution.` ,

    'dp' : `Student can make payment for departmental fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits. While this may not entice some student given what they might perceive as unsatisfaction. 

            A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students will be allowed 

            to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after successful payment.` ,

    'fp' : `Student can make payment for faculty dues and fees that is distinct to the school registration fees and acceptance fees. Students of each level from 100 to 500 are expected to 

            make payment for dues which comes with academic and social benefits each academic session regularly. While this may not entice some student given what they might perceive as

            unsatisfaction. A condition is enforced by the school board that failure to make this payment will mean a student is unable to graduate from the university. Although, students

            will be allowed to make payment with no additional charges in comparison to the current normal charges. You can fill in the form and make payment and print your receipt after

            successful payment.` ,

    'uup' : `Users of the application or that are members of this system can update their account at anytime so they desire.

            Changes once made are permanent for the moment and can still be changed later if desired by the user.` ,

    'up' : `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.` ,

    'upv' : `Users of the application or that are members of this system can update their account at anytime so they desire. Changes once made are permanent for the moment and can still be 

            changed later if desired by the user.` ,

    'cp' : `Users who are member of the system are allowed and free to change their existing password and replace it with a new one so as to protect their account from unauthorized access by 

            other users or an anonymous and then to protect from any kind of security breach.` ,

    'udp' : `Users who are member of the system are allowed and free to deactivate their profile if they so wishes and will be allowed to reactivate their profiles so that they will continue

            to be able to use the system and perform actions offered by the system.` ,

    'urp' : `Users who are member of the system are allowed and free to reactivate their profile if they so wishesand will be allowed continue to be able to use the system and perform actions

            offered by the system.` ,

    'uadp' : `All user profiles if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete all user profiles or account from the system.` ,

    'dup' : `User profile if the button confirmed will result in total deletion from the system or database. It is advised you review your decision before pressing the confirmation button

            which will remove or delete user profile or account from the system.` ,

    'cppas' : `Users or member of the system will be allowed and are free to change their existing signature and profile picture and replace it with a new one so that they can perform

            other access efficiently and effectively.` ,

    'ups' : `A list of users that are members of the system or application. Users with priveleges of a Super Administrator will be able to view and edit and also remove user profiles from 

            the system. He or she can also make analysis of the users that are registered with this system to be able to make important decisions which would make efficiently and effectively

            the use of this system to the highest level.` ,

    'pr' : `A user who have forgotten his or her password can provide his or her email address and get a chance to reset the profile password to the desired choice.` ,

    'ud' : `A user who is a member of the system can view his or her dashboard to create requests and make payments. Examples of a request that a user can perform are rectification of issues

            during academic course registration , in need of internet facility credentials for the first time and wanting to make payment for departmental and faculty fee.

            All Users who are students are allowed to create a request else operation will be rejected.` ,

    'general-entry' : `As a member of the system, you are eligible to make request and payment for different purpose as defined by the body of the school or institution.` ,

    'upr' : `A user who is a member of the system can review his or her own profile and perform some of the following actions freely at any time of choosing.` ,

    'gen-internal' : `This section of the system allows you to perform administrator related actions such as adding a ${this.systemType} , viewing and making changes 

                      to country and also analyzing the country statistics.`  

  };
  
  }

}
