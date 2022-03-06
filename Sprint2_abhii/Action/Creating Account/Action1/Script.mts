'opening the url using Systemutil.Run
url="https://web.skype.com/"
systemutil.Run "chrome",url

Browser("name:=Sign in to Skype").Sync

wait(3)
'signup using the credentials
Browser("name:=Sign in to Skype").Page("title:=Sign in to Skype").Link("text:=Create one!").Click
Browser("name:=Create account").Page("title:=Create account").Link("text:=Use your email instead").Click
Browser("name:=Create account").Page("title:=Create account").WebEdit("xpath:=//INPUT[@id='MemberName']").Set"Abhishek.kum.soni1234@gmail.com"
Browser("name:=Create account").Page("title:=Create account").WebButton("name:=Next").Click
Browser("name:=Create a password").Page("title:=Create a password").WebEdit("xpath:=//INPUT[@id='PasswordInput']").SetSecure"Rockstarabhii"
Browser("name:=Create a password").Page("title:=Create a password").WebButton("name:=Next").Click

wait(10)
'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("acc_name:=First name").Set "Abhishek"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebEdit("acc_name:=Last name").Set "Soni"
'Browser("name:=What's your name?").Page("title:=What's your name?").WebButton("name:=Next").Click

'input the code sent to mail andverify the security logon
code =Inputbox ("Enter the code you recived on email")

wait(10)

Browser("name:=Enter code").Page("title:=Enter code").WebEdit("acc_name:=Enter code").Set code
Browser("name:=Enter code").Page("title:=Enter code").WebButton("name=Next").Click
Browser("name:=Add security info").Page("title:=Add security info").Web.Button("name:=Next").Click
Browser("name:=Add security info").Page("title:=Add security info").Web.Button("acc_name:=Image 5").Click


