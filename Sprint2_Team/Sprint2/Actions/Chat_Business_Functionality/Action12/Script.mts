Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"

'Signing out
With BP1
      .WebButton("xpath:=(//BUTTON[@role='button'])[5]").Click
      .WebButton(signout).Click
      .WebButton(signout).Click
End with 

'Generating report after logging out
Reporter.ReportEvent micDone,"Logged Out","The user has logged out successfully"

