'Executing the file containing all the constants
Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"

'Starting a transaction Update_Profile_Picture
Services.StartTransaction "Update_Profile_Picture"

'Updating Profile picture
With BP1
      .WebButton(UpdateProfile).Click
      .WebButton(UploadPhoto).Click
      
      'Fetching image file path from an external excel file
      .WebFile("name:=WebFile").Set DataTable("File_Path", dtGlobalSheet)	
End With

'Ending transaction Update_Profile_Picture
Services.EndTransaction "Update_Profile_Picture"

'Generating report after updating Profile Picture
Reporter.ReportEvent micDone,"Profile Picture Updated","The Profile Picture has been Updated Successfully"


'Starting a transaction Update_Profile_Details
Services.StartTransaction "Update_Profile_Details"

With BP1
      .WebButton(MOpt).Click
      .WebButton(Settings).Click
      .Link(Yourprofile).Click
End With

B1.Sync
wait(3)
B1.Close
B2.Sync

'Storing Profile details before updating using GetRoProperty
oldlocation=BP2.WebElement("html id:=cityState").GetROProperty("outertext")

With BP2

      'Updating Profile details such as Name , Location , Bidthday ,Gender
      .WebButton(Editprofile).Click

     'Updating Name
      .WebEdit(Name).Set DataTable("Name", dtGlobalSheet)

      'Updating City
      .WebEdit(City).Set DataTable("City", dtGlobalSheet)

      'Updating State
      .WebEdit(State).Set DataTable("State", dtGlobalSheet)

      'Updating Country
      .WebList(Country).Select DataTable("Country", dtGlobalSheet)

      'Udating Birthday
      .WebList(bdate).Select DataTable("Bdate", dtGlobalSheet)
      .WebList(bmonth).Select DataTable("Birth_Month", dtGlobalSheet)
      .WebList(byear).Select DataTable("Birth_Year", dtGlobalSheet)

       'Updating Gender
       .WebList(Gender).Select DataTable("Gender", dtGlobalSheet)

       'Saving After Updating Profile
       .WebButton(Save).Click

End With

'Ending transaction Update_Profile_Details
Services.EndTransaction "Update_Profile_Details"

'Generating Done Report After Updating Profile

'Using GetROProperty to get value of text propery of an element
x=BP2.WebElement(feedback).GetROProperty("outertext")

If x="Your profile has been updated." Then
      Reporter.ReportEvent micDone,"Profile Updated","The profile has been updated successfully"	
End If

newlocation=BP2.WebElement("html id:=cityState").GetROProperty("outertext")
nm=BP2.WebEdit("name:=nickname").GetROProperty("default value")

'Generating a report containing updation details
Reporter.ReportEvent micDone,"Updation Details","   "&nm&" your location was updated from "&oldlocation&" to "&newlocation


