Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"
'Starting a video call
BP1.WebButton("acc_name:=Video Call").Click

wait(5)

'Generating Report after starting video call
Reporter.ReportEvent micDone,"Video call started","Video Call Started Successfully"

'Ending a video call
BP1.WebButton("acc_name:=End Call").Click



