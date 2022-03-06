'Calling Open_Skype and Login Functions from library file
Open_Skype
Login

'Starting a transaction for starting a new conversation
Services.StartTransaction "Start_Conversation"

'Starting a new conversation
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\CallDetails.xls", "Sheet1", "Global"
BP1.WebButton(sc).Click

BP1.WebEdit(search).Set DataTable("Skype_Id", dtGlobalSheet)
BP1.WebElement(skypeid).WaitProperty "visible","True"
BP1.WebElement(skypeid).Click

'Sending a Message
BP1.WebEdit(ms).Set DataTable("Message", dtGlobalSheet)

BP1.WebButton(send).Click

'Ending transaction
Services.StartTransaction "End_Conversation"

'Generating Pass Report after sending message
Reporter.ReportEvent micPass,"Message Sent","A new conversation has been started and message has been sent successfully."

'Closing the browser
Close_Browser
