'Calling Open_skype and Login functions from function library Skypefunctions.qfl
Open_Skype
Login
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\CallDetails.xls", "Sheet1", "Global"

'Starting Transaction Host_Meeting
Services.StartTransaction "Host_Meeting"

'Hosting a meeting using meet now 
BP1.WebButton(MeetNow).Click
BP1.WebButton(HostMeeting).Click

'Setting Metting Name
BP1.WebEdit(MeetingTitle).Set DataTable("Meeting_Title", dtGlobalSheet)
'Starting the meeting
BP1.WebButton(StartMeeting).Click


'Generating Pass Report If Meeting is Started Successfully
Reporter.ReportEvent micPass,"Meeting Started","The meeting has been started successfully"

'Leaving the meeting
BP1.WebButton(EndCall).Click

'Ending Transaction Host_Meeting
Services.EndTransaction "Host_Meeting"

'Closing the browser
Close_Browser
