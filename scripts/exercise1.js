function Dni(number){
    if (number.length=10){
        this.number = number;
        console.log("DNI correcto")
    }else console.info("DNI incorrecto")
}

const DNI = new Object();
DNI.number = "123456789-C";
Dni("012345678v");
