Open_Skype
Login

'Update Profile picture
Browser("name:=Skype").Page("title:=Skype").WebButton("title:=Update profile picture").Click

Browser("name:=Skype").Page("title:=Skype").WebButton("acc_name:=Upload Photo").Click
Browser("name:=Skype").Page("title:=Skype").WebFile("name:=WebFile").Set "C:\Users\abhis\OneDrive\Desktop\picaa\wallpaper\2713201.jpg"
