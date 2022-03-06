'Calling Open_Skype, Login and Start_Conversation from library file
Open_Skype
Login

'Starting a new conversation
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\CallDetails.xls", "Sheet1", "Global"
Start_Conversation

'Scheduling a call

BP1.WebButton(moreoptions).Click
BP1.WebButton("acc_name:=Schedule a Call, Arrange a Skype call and get reminders").Click
BP1.WebEdit("xpath:=(//INPUT[@dir='auto'])[3]").Set DataTable("Call_Title", dtGlobalSheet)
BP1.WebEdit("xpath:=//INPUT[@type='date']").Set DataTable("Date", dtGlobalSheet)
BP1.WebEdit("xpath:=//INPUT[@type='time']").Set DataTable("Time", dtGlobalSheet)
BP1.WebButton("acc_name:=Send").Click

'Generating Done Report if Meeting scheduled successfully
Reporter.ReportEvent micDone,"Call Scheduled","The call has been scheduled successfully."

'Closing the browser
Close_Browser

