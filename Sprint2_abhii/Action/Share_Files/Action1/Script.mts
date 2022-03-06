Open_Skype
Login
'Starting a new conversation
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start a conversation").Click

Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set "nirmal.rawat86"
wait(2)

Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='nirmal.rawat86']").Click

'Sharing a contact
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Send contacts to this chat").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("value:=Aman Ojha").Click
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Send").Click

'Sharing a file
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Add files").Click
Browser("name:=Skype").Page("title:=Skype").WebFile("name:=WebFile").Set "C:\Users\abhis\OneDrive\Pictures\Screenshots\Screenshot (4)"
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Send message").Click

'Closing Browser
Close_Browser
