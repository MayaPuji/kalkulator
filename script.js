const layarkalkulator=document.querySelector('.layar_kalkulator')

const updateScreen=(number)=>{
    layarkalkulator.value=number
}

let prevNumber=''
let calculationOperator=''
let currencNumber='0'

const inputNumber=(number)=>{
    if(currencNumber==='0'){
        currencNumber=number
    }
    else{
    currentNumber+=number}
}

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operator=document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator=(operator)=>{
    if(calculationOperator===''){
    prevNumber=currentNumber
    }
    calculationOperator=operator
    currentNumber='0'
}

const equalSign=document.querySelector('.equal-Sign')

equalSign.addEventListener('click', ()=>{
    kalkulator()
    updateScreen(currentNumber)
})

const kalkulator=()=>{
    let result=''
    switch(calculationOperator){
        case "+":
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
            case "-":
            result=parseFloat(prevNumber)-parseFloat(currentNumber)
            break
            case "*":
            result=parseFloat(prevNumber)*parseFloat(currentNumber)
            break
            case "/":
            result=parseFloat(prevNumber)/parseFloat(currentNumber)
            break
    }
    currencNumber=result
    calculationOperator=''
}

const clearBtn=document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})

const clearAll=()=>{
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

const desimal=document.querySelector('.desimal')

desimal.addEventListener('click', (event)=>{
    inputDesimal(event.target.value)
    updateScreen(currentNumber)
})

inputDesimal=(dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currencNumber+=dot
}
