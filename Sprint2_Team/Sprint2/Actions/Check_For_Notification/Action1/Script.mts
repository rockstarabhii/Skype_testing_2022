'Calling Open_skype and Login functions from function library Skypefunctions.qfl
Open_Skype
Login

'Checking Notifications
BP1.WebButton(Check_Notification).Click

'Generating Report after checking notifications
Reporter.ReportEvent micDone,"Checked Notifications","Notifications have been cheked successfully"

'Closing the Browser
Close_Browser

