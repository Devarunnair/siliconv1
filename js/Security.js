class Security {

    constructor(){
        textSize(40)
        this.access1 = createInput("Type here..")
        this.access1.position(450,175);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Submit');
        this.button1.position(590,400);
        this.button1.style('background', 'lightgrey','250');    
       

        this.access2 = createInput("Type here..")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

  

        this.access3 = createInput("Type here..")
        this.access3.position(660,320);
        this.access3.style('background', 'white');  



 
         this.access4 = createInput("Type here..")
         this.access4.position(399,320);
         this.access4.style('background', 'white'); 
         
        
        // this.button3 = createInput('Check');
        // this.button3.position(100,320);
        // this.button3.style('background', 'lightgrey');
    
        // this.button3 = createButton();
        // this.button3.position(100);
        // this.button3.style('background', 'lightgrey');

        // this.button3 = Button('Check');
        // this.button3(100,320);
        // this.button3.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
           // <img src="pic_trulli.jpg"/>
    
            }
        });

        

        
    }
}