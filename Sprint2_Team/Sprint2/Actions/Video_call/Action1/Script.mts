'Calling Open_Skype,Login and Start_Conversation functions from function library file Skypefunctions.qfl
Open_Skype
Login

'Starting a new conversation
Start_Conversation

'Starting a video call
BP1.WebButton("acc_name:=Video Call").Click

wait(5)

'Generating Report after starting video call
Reporter.ReportEvent micDone,"Video call started","Video Call Started Successfully"

'Ending a video call
BP1.WebButton("acc_name:=End Call").Click

'Closing Browser
Close_Browser


