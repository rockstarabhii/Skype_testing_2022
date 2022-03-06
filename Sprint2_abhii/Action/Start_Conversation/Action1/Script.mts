Open_Skype
Login

'Starting a new conversation
Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Start a conversation").Click

Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Search").Set "nirmal.rawat86"
wait(2)
'Browser("name:=Skype").Page("title:=Skype").WebList("innertext:=  bijnor, India   Great Britain live:.cid.5666feb9a9e9cdb1Bangalore Urban, India").Click
Browser("name:=Skype").Page("title:=Skype").WebElement("xpath:=//DIV[@data-text-as-pseudo-element='nirmal.rawat86']").Click
'Browser("name:=Skype").Page("title:=Skype").WebEdit("acc_name:=Type a message").Set " Hellllo"
Browser("name:=Skype").Page("title:=Skype").WebEdit("xpath:=(//DIV[@data-offset-key='0-0-0'])[2]").Set "Sent by uft"

wait(5)

Browser("name:=Skype").Page("title:=Skype").WebButton("title:=Send message").Click
