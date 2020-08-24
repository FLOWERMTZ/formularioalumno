


function convertir (){
var monedaimp=document.getElementById('importedar').value;
var totalmon=document.getElementById('importere').value;
var importee=parseFloat(document.getElementById("importe").value);


if(monedaimp== 'US Dolar' && totalmon== 'Euro'){

    var resultado=importee*0.90;
    document.getElementById("cambio").value=resultado;
    return false;
}
if(monedaimp== 'US Dolar' && totalmon== 'Lempira-Honduras'){

    var resultado=importee*24;
    document.getElementById("cambio").value=resultado;
    return false;
    
    }
    if(monedaimp== 'US Dolar' && totalmon== 'Colon-Costa Rica'){

        var resultado=importee*32;
        document.getElementById("cambio").value=resultado;
        return false;
}

if(monedaimp== 'US Dolar' && totalmon== 'Quetzal-Guatemala'){

    var resultado=importee*7.7;
    document.getElementById("cambio").value=resultado;
    return false;
}


if(monedaimp== 'Euro' && totalmon== 'US Dolar'){

    var resultado=importee*1.18;
    document.getElementById("cambio").value=resultado;
    return false;
}
if(monedaimp== 'Euro' && totalmon== 'Lempira-Honduras'){

    var resultado=importee*29.19;
    document.getElementById("cambio").value=resultado;
    return false;
    
    }
    if(monedaimp== 'Euro' && totalmon== 'Colon-Costa Rica'){

        var resultado=importee*697.10;
        document.getElementById("cambio").value=resultado;
        return false;
}

if(monedaimp== 'Euro' && totalmon== 'Quetzal-Guatemala'){

    var resultado=importee*9.11;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Lempira-Honduras' && totalmon== 'US Dolar'){

    var resultado=importee*0.040;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Lempira-Honduras' && totalmon== 'Euro'){

    var resultado=importee*0.034;
    document.getElementById("cambio").value=resultado;
    return false;
}
    if(monedaimp== 'Lempira-Honduras' && totalmon== 'Colon-Costa Rica'){

        var resultado=importee*23.89;
        document.getElementById("cambio").value=resultado;
        return false;
}

if(monedaimp== 'Lempira-Honduras' && totalmon== 'Quetzal-Guatemala'){

    var resultado=importee*0.31;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Colon-Costa Rica' && totalmon== 'US Dolar'){

    var resultado=importee*0.0017;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Colon-Costa Rica' && totalmon== 'Euro'){

    var resultado=importee*0.0014;
    document.getElementById("cambio").value=resultado;
    return false;
}
    if(monedaimp== 'Colon-Costa Rica' && totalmon== 'Lempira-Honduras'){

        var resultado=importee*0.042;
        document.getElementById("cambio").value=resultado;
        return false;
}

if(monedaimp== 'Colon-Costa Rica' && totalmon== 'Quetzal-Guatemala'){

    var resultado=importee*0.013;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Quetzal-Guatemala' && totalmon== 'US Dolar'){

    var resultado=importee*0.13;
    document.getElementById("cambio").value=resultado;
    return false;
}

if(monedaimp== 'Quetzal-Guatemala' && totalmon== 'Euro'){

    var resultado=importee*0.11;
    document.getElementById("cambio").value=resultado;
    return false;
}
    if(monedaimp== 'Quetzal-Guatemala' && totalmon== 'Lempira-Honduras'){

        var resultado=importee*3.21;
        document.getElementById("cambio").value=resultado;
        return false;
}

if(monedaimp== 'Quetzal-Guatemala' && totalmon== 'Colon-Costa Rica'){

    var resultado=importee*76.62;
    document.getElementById("cambio").value=resultado;
    return false;
}

}
