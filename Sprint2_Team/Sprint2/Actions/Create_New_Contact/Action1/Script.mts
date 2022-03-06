'Calling Open_skype and Login functions from function library Skypefunctions.qfl
Open_Skype
Login
'Creating a new Contact using mobile number
With BP1
		.WebButton("acc_name:=Contacts").Click
		.WebButton("acc_name:=Add New Contact").Click
		'.WebElement("xpath:=(//DIV[@role='none'])[38]").Click
		.WebButton("acc_name:=Add a phone number, Save a number to your Skype contacts.").Click
		
'Giving Input Parameter for Contact_Name from external excel file
		.WebEdit("placeholder:=First and last name").Set DataTable("Contact_Name", dtGlobalSheet)
		.WebElement("xpath:=//DIV[@data-text-as-pseudo-element='+1']").Click
		.WebEdit("acc_name:=Search country/region").Set "India"
		.WebElement("xpath:=(//DIV[@data-text-as-pseudo-element='India'])[2]").Click
		
'Giving Input Parameter for Mobile_Number from external excel file
		.WebEdit("acc_name:=Enter phone number").Set DataTable("Mobile_Number", dtGlobalSheet)
		.WebButton("acc_name:=Save").Click
		
		wait(3)
End With


'Closing the browser
Close_Browser
