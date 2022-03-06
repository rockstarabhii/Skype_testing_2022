Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"

'Checking Notifications
BP1.WebButton(Check_Notification).Click

'Generating report after checking notifications
Reporter.ReportEvent micDone,"Checked Notifications","Notifications have been checked successfully"


