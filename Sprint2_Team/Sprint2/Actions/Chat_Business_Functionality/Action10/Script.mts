Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\CallDetails.xls", "Sheet1", "Global"
'Starting a Transaction Group_Chat
Services.StartTransaction "Group_Chat"

'Creating a New Group chat
BP1.WebButton(NewChat).Click
BP1.WebButton(NewGroupChat).Click

'Setting Group Chat Name
BP1.WebEdit(GroupChatName).Set DataTable("Group_Chat_Name", dtGlobalSheet)
BP1.WebButton("acc_name:=Next").Click
  
'Selecting Group Members
For j = 0 To 3 Step 1
	BP1.WebButton(a(j)).Click
Next @@ script infofile_;_ZIP::ssf2.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_
BP1.WebButton(Done).Click

'Ending transaction Group_Chat
Services.EndTransaction "Group_Chat"

'Generating Report
Reporter.ReportEvent micDone,"Group Chat Created","A new group chat has been created successully."

