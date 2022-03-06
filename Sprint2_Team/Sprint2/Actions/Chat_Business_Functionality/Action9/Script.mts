Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"
'Starting Transaction Host_Meeting
Services.StartTransaction "Host_Meeting"

'Hosting a meeting using meet now 
BP1.WebButton(MeetNow).Click
BP1.WebButton(HostMeeting).Click

'Setting Metting Name
BP1.WebEdit(MeetingTitle).Set DataTable("Meeting_Title", dtGlobalSheet)
'Starting the meeting
BP1.WebButton(StartMeeting).Click

wait(10)
'Generating Pass Report If Meeting is Started Successfully
Reporter.ReportEvent micPass,"Meeting Started","The meeting has been started successfully"

'Leaving the meeting
BP1.WebButton(EndCall).Click

'Ending Transaction Host_Meeting
Services.EndTransaction "Host_Meeting"
