class Form {
  constructor() {
    this.input = createInput("Enter Your Name");
    this.message = createInput("Enter a Message");
    //Create this.submitButton using createImg("submit.png")
    
    //Write the code after this line
this.submitButton = createImg("submit.png")
    //Write the code before this line
    
  }
  display() {
    this.input.position(590,200);
    this.input.class("customInput");
    this.message.position(100,130);
    this.message.class("customInputBox");
    
    //Give position (280,355) to this.submitButton
       //Write the code after this line
 this.submitButton.position(280,355);
      //Write the code before this line
    
  }

}
