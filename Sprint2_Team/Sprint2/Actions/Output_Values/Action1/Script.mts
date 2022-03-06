'Calling Open_Skype and Login Functions from library file Skypefunctions.qfl
Open_Skype
Login

'Using with statement
With BP1
      .WebButton(MOpt).Click
      .WebButton(Settings).Click
      .Link(Yourprofile).Click
End With

'Synchronization Point
B1.Sync
wait(3)
B1.Close
B2.Sync

'Getting profile details using GetROProperty
id=BP2.WebElement("innerhtml:=live:.cid.36826759e68376c3").GetROProperty("outertext")
name=BP2.WebEdit("html id:=nickname").GetROProperty("default value")
location=BP2.WebElement("html id:=cityState").GetROProperty("outertext")
country=BP2.WebElement("innertext:=IndiaAdd country/region").GetROProperty("outertext")
bday=BP2.WebElement("innertext:=August 10","index:=1").GetROProperty("outertext")
gender=BP2.WebElement("innertext:=Please specify the gender Male").GetROProperty("outertext")

'Importing external excel file
DataTable.ImportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Results\Output_Data.xls", "Sheet1", "Global"

'Writing output values in the data table
DataTable.Value("SkypeId")=id
DataTable.Value("Name")=name
DataTable.Value("Location")=location
DataTable.Value("Country")=country
DataTable.Value("Birthday")=bday
DataTable.Value("Gender")=gender

'Exporting data to external excel file
DataTable.ExportSheet "C:\Users\Nirmal Rawat\Desktop\Sprint2\Results\Output_Data.xls", "Global", "Sheet1"

'Generating report after writing output values
Reporter.ReportEvent micDone,"Output Values Written","The output values has been exported to excel file successfully"

B2.Close

