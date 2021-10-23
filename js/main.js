$(function(){
    // Constantes
    const btnSingle = $('.btn-single');
    const numberCalc = $('.number-calc p');

    // Referencias de teclas de atalhos com teclas visuais 
    let teclasClicadas;
    setInterval(()=>{
        
        $(document).keyup(function(e) {
            teclasClicadas = e.key
        });

        btnSingle.each(function(){
            var attrSingle = $(this).attr('btn-single');
            if(teclasClicadas == attrSingle){
                if(teclasClicadas == '=' || teclasClicadas == 'Enter'){
                    $(this).addClass('btn-igual-active');
                }else{
                    $(this).addClass('active');
                }
                teclasClicadas = '';
            }else{
                $(this).removeClass('btn-igual-active');
                $(this).removeClass('active');
            }
        });

    }, 200);

    /* ** */

    // Mostrando teclas clicatas...
    btnSingle.click(function(){
        var caracter = $(this).attr('btn-single');
        var numberCalcText = numberCalc.text();
        var operacao = caracter == '=' ||
                        caracter == '+' ||
                        caracter == '-' ||
                        caracter == '*' ||
                        caracter == '/' ||
                        caracter == 'meis-menos';


        if(caracter == 'l'){
            numberCalcText = numberCalc.text('');
        }else if(caracter == 'Backspace'){
            if(numberCalcText.slice(0, - 2) == '-'){
                numberCalcText = numberCalc.text(numberCalcText.slice(0, - 3));
                console.log('estou aqui')
            }else{
                numberCalcText = numberCalc.text(numberCalcText.slice(0, - 1));
                console.log(numberCalcText.substr(1, 2))
            }   
        }else if(operacao){
            if(numberCalcText == '' && caracter == '-'){
                numberCalcText = numberCalc.text(caracter)
            }else if(numberCalcText != '-'){
                numberCalcText = numberCalc.text(numberCalcText + " " + caracter + ' ');
            }
        }else{
            numberCalcText = numberCalc.text(numberCalcText + caracter);

        }

        

    });
});