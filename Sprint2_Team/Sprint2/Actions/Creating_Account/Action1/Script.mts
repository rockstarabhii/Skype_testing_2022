'Openining the browser and url using Systemutil.Run
url="https://web.skype.com/"
systemutil.Run "chrome",url

Browser("name:=Sign in to Skype").Sync

wait(3)

Browser("name:=Sign in to Skype").Page("title:=Sign in to Skype").Link("text:=Create one!").Click
Browser("name:=Create account").Page("title:=Create account").Link("text:=Use your email instead").Click
Browser("name:=Create account").Page("title:=Create account").WebEdit("xpath:=//INPUT[@id='MemberName']").Set "nsrkane001@gmail.com"
Browser("name:=Create account").Page("title:=Create account").WebButton("name:=Next").Click
Browser("name:=Create a password").Page("title:=Create a password").WebEdit("xpath:=//INPUT[@id='PasswordInput']").SetSecure "raw@1212"
Browser("name:=Create a password").Page("title:=Create a password").WebButton("name:=Next").Click

wait(10)
'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("xpath:=//INPUT[@id='FirstName']").Set "Nirmal"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("xpath:=//INPUT[@id='LastName']").Set "Rawat"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebButton("name:=Next").Click


code =Inputbox("Enter the code you recived on email")

wait(10)

 Browser("name:=Enter code").Page("title:=Enter code").WebEdit("acc_name:=Enter code").Set code
 
 Browser("name:=Enter code").Page("title:=Enter code").WebButton("name:=Next").Click
 'Browser("name:=Add security info").Page("title:=Add security info").WebButton("name:=Next").Click
 'Browser("name:=Add security info").Page("title:=Add security info").WebButton("acc_name:=Image 3.").Click
 






