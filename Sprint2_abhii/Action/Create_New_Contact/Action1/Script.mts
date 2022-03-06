Open_Skype
Login
'Creating a new Contact using mobile number
With Browser("name:=Skype")
	With .Page("title:=Skype")
		.WebElement("xpath:=(//DIV[@role='none'])[33]","x:=160","y:=106").Click
		.WebElement("xpath:=(//DIV[@role='none'])[38]").Click
		.WebButton("acc_name:=Add a phone number, Save a number to your Skype contacts.").Click
		
'Giving Input Parameter for Contact_Name from external excel file
		.WebEdit("placeholder:=First name and surname").Set DataTable("Contact_Name", dtGlobalSheet)
		.WebElement("xpath:=//DIV[@data-text-as-pseudo-element='+1']").Click
		.WebEdit("acc_name:=Search country/region").Set "India"
		.WebElement("xpath:=(//DIV[@data-text-as-pseudo-element='India'])[2]").Click
		
'Giving Input Parameter for Mobile_Number from external excel file
		.WebEdit("acc_name:=Enter phone number").Set DataTable("Mobile_Number", dtGlobalSheet)
		.WebButton("acc_name:=Save").Click
	End With
End  With	
Close_Browser
