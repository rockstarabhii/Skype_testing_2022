Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"
'Starting Transaction Share_Contact
Services.StartTransaction "Share_Contact"

'Sharing a contact
BP1.WebButton(Share_contact).Click
BP1.WebButton(Contact).Click
BP1.WebButton(Send_contact).Click

'Ending Transaction Share_Contact
Services.EndTransaction "Share_Contact"

'Generating report after sending contact
Reporter.ReportEvent micDone,"Contact Successfully Sent","The contact has been shared successfully"

'Starting Transaction Share_File
Services.StartTransaction "Share_File"

'Sharing a file
BP1.WebButton(Share_file).Click
BP1.WebFile("name:=WebFile").Set DataTable("File_Path", dtGlobalSheet)
BP1.WebButton(Send_file).Click

'Endiing Transaction Share_File
Services.EndTransaction "Share_File"

'Generating report after sending file
Reporter.ReportEvent micDone,"File Successfully Sent","The File has been shared successfully"


