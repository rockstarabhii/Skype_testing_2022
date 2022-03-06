Open_Skype
Login

'Creating a New Group chat
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=New Chat").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("xpath:=(//BUTTON[@role='menuitem'])[1]").Click

'Setting Group Chat Name
Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Group Name: ").Set "Skype Testing"
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Next").Click

'Selecting Group Members
Browser("name:=Skype").Page("title:=Skype").WebButton("name:=Aman Ojha").Click
'Browser("name:=Skype").Page("title:=Skype").WebButton("name:=Supratick Dey").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("name:=Ankit Upadhyay").Click

'Browser("name:=Skype").Page("title:=Skype").WebButton("name:=Nirmal_Rawat").Click

Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Done").Click

Close_Browser
