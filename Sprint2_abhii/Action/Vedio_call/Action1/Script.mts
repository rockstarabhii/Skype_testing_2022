Open_Skype
Login

'Starting a new conversation
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start a conversation").Click

Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set "live:.cid.137ae3ca40aeaad5"
wait(2)
Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set "live:.cid.137ae3ca40aeaad5"

Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@dir='auto'][text()='Aman Ojha']").Click
'Starting a video call
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Video Call").Click

wait(5)

'Ending a video call
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=End Call").Click
'Closing Browser
Close_Browser
