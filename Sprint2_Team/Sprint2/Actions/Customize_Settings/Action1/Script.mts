'Calling library functions Open_Skype and Login
Open_Skype
Login

With BP1
      .WebButton(MOpt).Click
      .WebButton(Settings).Click
      .WebButton(Appearance).Click
      .WebButton(Mint).Click
      .WebButton(AV).Click
      .WebButton(msg).Click
      .WebCheckBox(LargeEmoticons).Click
      .WebButton(Ns).Click
      .WebCheckBox(Reactions).Click
      .WebButton(Closesettings).Click	
End With

'Generating report after customizing setting
Reporter.ReportEvent micDone,"Customized Settings","The user has successfully customized setings."

Close_Browser
