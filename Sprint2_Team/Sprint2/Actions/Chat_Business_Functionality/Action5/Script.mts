Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"
'Importing data from external excel file.
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Test Data\CallDetails.xls", "Sheet1", "Global"

'Using sync point
B1.Sync

'Starting a Transaction
Services.StartTransaction "Sending_voice_message"

'Recording the voice note
BP1.WebButton("acc_name:=Record a message").Click

'Record for 10 seconds
wait(10)

'Sending the voice Message.
BP1.WebButton("acc_name:=Send audio message").Click

'Generating report after sending message
Reporter.ReportEvent micDone,"Voice Message Sent","Voice Message sent sucessfully"

'Ending Transaction
Services.EndTransaction "Sending_voice_message"





