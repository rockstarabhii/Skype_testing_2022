'Executing the file containing all the constants
Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"

'Starting the browser using systemutil.run
url="https://web.skype.com/"
systemutil.Run "chrome",url

'Synchronization Point for the browser to load
br.Sync

'Starting a transaction to track login functionality
Services.StartTransaction "Skype_Login"

'Improting data from external excel file
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\Test_Data.xls", "Data", "Global"

'Checkpoint for Validating Skype logo on login page using CheckProperty Statement
brpg.Image(logo).CheckProperty "visible","True"

'Generating Pass report if logo is visible
Reporter.ReportEvent micPass,"Skype Logo Verified","Skype logo is visible on login page"

'Synchronization Point
br.Sync

'Implementing With Statement
With brpg
       .WebEdit(email).Set DataTable("Email", dtGlobalSheet)
       .WebButton(next_).Click
       .WebEdit(password).SetSecure DataTable("Password", dtGlobalSheet)
       .WebButton(sign_in).Click
End With

'Synchronization Point using Wait Property Statement
BP1.WebElement(Welcome).WaitProperty "visible","True"

'Ending the login transaction
Services.EndTransaction "Skype_Login"

'Vaidating login by checking welcome Nirmal
n1=BP1.WebButton(U1,U2).GetROProperty("acc_name")
arr=split(n1)
n2=arr(0)
n3=BP1.WebElement(Welcome).GetROProperty("outerhtml")
s=Instr(n3,n2)
If s<>0 Then
       'Generating Done report if login is successful
	Reporter.ReportEvent micDone ,"Login Successful","Correct user name is visible on home screen"
End If

'Closing the browser
B1.Close


