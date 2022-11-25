function teclado(tecla)
{
    if (!isNaN(tecla) || tecla == "." || tecla == "+" || tecla == "-" || tecla == "*" || tecla == "/")
    {
        hola(tecla);
    }
    if (tecla == "%")
    {
        porcentaje();
    }
    if (tecla == "Escape" || tecla == "Delete")
    {
        borrarTodo();
    }
    if (tecla == "Backspace")
    {
        borrar();
    }
    if (tecla == "Enter" || tecla == "=")
    {
        igualA();
    }
}

function hola(caca)
{
    if (document.getElementById("numero1").innerHTML == "Syntax error")
    {
        if (caca == "." || caca == "+" || caca == "-" || caca == "*" || caca == "/")
        {
            document.getElementById("numero1").innerHTML = "0" + caca;
        }
        else
        {
            document.getElementById("numero1").innerHTML = caca;
        }
    }
    else if (document.getElementById("numero1").innerHTML == "0")
    {
        if (caca == "." || caca == "+" || caca == "-" || caca == "*" || caca == "/")
        {
            document.getElementById("numero1").innerHTML += caca;
        }
        else
        {
            document.getElementById("numero1").innerHTML = caca;
        }
    }
    else
    {
        document.getElementById("numero1").innerHTML += caca;
    }
}

function entreUno()
{
    document.getElementById("numero1").innerHTML = 1 / eval(document.getElementById("numero1").innerHTML);
}

function porcentaje()
{
    document.getElementById("numero1").innerHTML = eval(document.getElementById("numero1").innerHTML) * 0.01;
}

function cuadrado()
{
    document.getElementById("numero1").innerHTML = Math.pow(eval(document.getElementById("numero1").innerHTML), 2);
}

function raiz()
{
    document.getElementById("numero1").innerHTML = Math.sqrt(eval(document.getElementById("numero1").innerHTML));
}

function masMenos()
{
    document.getElementById("numero1").innerHTML = -eval(document.getElementById("numero1").innerHTML);
}

function igualA()
{
    try
    {
        document.getElementById("numero1").innerHTML = eval(document.getElementById("numero1").innerHTML);
    }
    catch(err)
    {
        document.getElementById("numero1").innerHTML = "Syntax error";
    }
}

function borrar()
{
    let preDel = document.getElementById("numero1").innerHTML;
    let postDel = preDel.slice(0, -1);
    if (postDel == "")
    {
        document.getElementById("numero1").innerHTML = "0";
    }
    else
    {
        document.getElementById("numero1").innerHTML = postDel;
    }
}

function borrarTodo()
{
    document.getElementById("numero1").innerHTML = "0";
}