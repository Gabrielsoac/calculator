function createCalculator(){
    return {

        run(){
            this.clickButtons();
        },
        
        display: document.querySelector(".display"),

        clickButtons() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if(element.classList.contains("button")){
                    this.buttonForDisplay(element.innerText);
                }
                if(element.classList.contains("button-clear-all")) {
                    this.clearDisplay();
                }
                if(element.classList.contains("button-clear-one")){
                    this.clearDisplayOneDigit();
                }
                if(element.classList.contains("button-equals")){
                    this.calculate(element.value);
                }
            })
        }, 

        calculate(){
            let equation = this.display.value;

            try{
                let result = eval(equation);

                if(!result){
                    result = 0;
                    
                }

                this.display.value = result;
            } catch(e){
                alert("Conta inválida");
                return;
            }
            
        },

        buttonForDisplay(value){
            this.display.value += value;
        },

        clearDisplay(){
            this.display.value = "";
        },

        clearDisplayOneDigit(){
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculator = createCalculator();
calculator.run();