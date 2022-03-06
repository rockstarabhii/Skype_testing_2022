url="https://web.skype.com/"
systemutil.Run "msedge",url

'Synchronization Point
Browser("name:=Sign in to Skype").Sync

'Improting data from external excel file
DataTable.ImportSheet "C:\Users\abhis\OneDrive\Desktop\Sprint 2\Test Data\Test_data.xls", "Sheet1", "Global"

'Checkpoint for Validating Skype logo on login page using GetRoProperty

'c=Browser("name:=Sign in to Skype").Page("title:=Sign in to Skype").Image("file name:=44_08ed657e48f1458641b5f879d82004cd.png").GetROProperty("visible")
'If c="True" Then
	'Generating Pass report if logo is visible
	'Reporter.ReportEvent micPass,"Skype Logo Verified","Skype logo is visible on login page"
'End If


'Checkpoint for Validating Skype logo on login page using CheckProperty Statement

Browser("name:=Sign in to Skype").Page("title:=Sign in to Skype").Image("file name:=44_08ed657e48f1458641b5f879d82004cd.png").CheckProperty "visible","True"
'Generating Pass report if logo is visible
Reporter.ReportEvent micPass,"Skype Logo Verified","Skype logo is visible on login page"

'Implementing With Statement
With Browser("name:=Sign in to Skype")
	.Sync
	Wait(3)

	With .Page("title:=Sign in to Skype")
		.WebEdit("name:=loginfmt").Set DataTable("Email", dtGlobalSheet)
		Wait(1)
		.WebButton("type:=submit").Click 
		.WebEdit("name:=passwd").SetSecure DataTable("Password", dtGlobalSheet)
		Wait(1)
		.WebButton("name:=Sign in").Click
	End With
End With

'Getting user email address from data table and storing in e
e=Datatable.Value("Email")

'Synchronization Point using Wait Property Statement
'Browser("name:=Skype").Page("title:=Skype").WebElement("abs_x:=1136","abs_y:=883").WaitProperty "visible","True"

'Checkpoint for validating login functionality
'oh=Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='abhishek.kum.soni@gmail.com']").GetROProperty("outerhtml")

'Storing outergtml property value in a variable oh
'oh=Browser("name:=Skype").Page("title:=Skype").WebElement("abs_x:=1136","abs_y:=883").GetROProperty("outerhtml")
'msgbox oh

'Checking if user email is displayed after logging in

'Using Instr method to check if 
'y=Instr(oh,e)
'If y<>0 Then
'       'Generating Done report if login is successful
'	Reporter.ReportEvent micDone ,"Login Successful","The user has logged in successfully."
'End If


'nm=Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='Welcome, Abhishek']").GetROProperty("outerhtml")
's=Instr(nm,"Abhishek")
'If s<>0 Then
'       'Generating Done report if login is successful
'	Reporter.ReportEvent micDone ,"Login Successful","User name is visible on home screen"
'End If

'Closing the browser
Browser("name:=Skype").Close
