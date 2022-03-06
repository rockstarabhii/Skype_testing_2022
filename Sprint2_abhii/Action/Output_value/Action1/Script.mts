Open_Skype
Login
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=More options").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Settings").Click
'Skype Id
id=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Skype Name, live:.cid.37103fd5b2cb94ba").GetROProperty("name")
'Email
email=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Email, Abhishek.kum.soni@gmail.com").GetROProperty("name")
location=Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Location, Naintal, IN").GetROProperty("acc_name")
c=Split(location,",")
'Location
city=c(1)
bd=Browser("name:=Skype").Page("title:=Skype").Link("acc_name:=Birthday, 8/10/2000").GetROProperty("acc_name")
bday=Split(bd,",")
'Birthday
birthday=bday(1)
DataTable.ImportSheet "C:\Users\abhis\OneDrive\Desktop\Sprint 2\Results\Output_Data.xls", "Global", "Sheet1"
DataTable.Value("SkypeId")=id
DataTable.Value("Email")=email
DataTable.Value("Location")=city
DataTable.Value("Birthday")=birthday
DataTable.ExportSheet "C:\Users\abhis\OneDrive\Desktop\Sprint 2\Results\Output_Data.xls", "Global", "Sheet1"
