var letras = {
    '1': 'x',
    '2': 'y',
    '3': 'z',
    '4': 'w',
    '5': 'r'
}


document.getElementById("sistemaForm").addEventListener("submit", function(event){
    event.preventDefault();
    var matriz = [[], [], [], [], []];
    var X = [0,0,0,0];
    var auxX = [(X[0]+1),(X[1]+1),(X[2]+1),(X[3]+1)];
    var E = .01;
    var iteracoes = 0;

    for(var i = 0; i < 4; i++){
        var auxI = i + 1;
        for(var c = 0; c < 5; c++){
            var auxC = c + 1;
            matriz[i][c] = parseFloat(document.querySelector('#'+letras[auxC]+auxI).value);
        }
    }

    //Gauss-Jacobi
    console.log("Gauss-Jacobi:")
    while(!(Math.abs(X[0] - auxX[0]) < E && Math.abs(X[1] - auxX[1]) < E && Math.abs(X[2] - auxX[2]) < E && Math.abs(X[3] - auxX[3]) < E) || iteracoes >= 30){
        for(var i = 0; i < 4; i++){
            auxX[i] = X[i];
        }

        X[0]/* x */ = (matriz[0][4] - (matriz[0][1] * auxX[1] + matriz[0][2] * auxX[2] + matriz[0][3] * auxX[3]))/matriz[0][0];
        X[1]/* y */ = (matriz[1][4] - (matriz[1][0] * auxX[0] + matriz[1][2] * auxX[2] + matriz[1][3] * auxX[3]))/matriz[1][1];
        X[2]/* z */ = (matriz[2][4] - (matriz[2][0] * auxX[0] + matriz[2][1] * auxX[1] + matriz[2][3] * auxX[3]))/matriz[2][2];
        X[3]/* w */ = (matriz[3][4] - (matriz[3][0] * auxX[0] + matriz[3][1] * auxX[1] + matriz[3][2] * auxX[2]))/matriz[3][3];

        console.log(iteracoes+1+"° iteração:"+"\n"+((Math.abs(X[0] - auxX[0])) < E) + " | X = "+X[0]+"\n"+((Math.abs(X[1] - auxX[1])) < E) + " | Y = "+X[1]+"\n"+((Math.abs(X[2] - auxX[2])) < E) + " | Z = "+X[2]+"\n"+((Math.abs(X[3] - auxX[3])) < E) + " | W = "+X[3]);
        // console.log(((Math.abs(X[0] - auxX[0])) < E) + " X = "+ (Math.abs(X[0] - auxX[0])));
        // console.log(((Math.abs(X[1] - auxX[1])) < E) + " Y = "+ (Math.abs(X[1] - auxX[1])));
        // console.log(((Math.abs(X[2] - auxX[2])) < E) + " Z = "+ (Math.abs(X[2] - auxX[2])));
        // console.log(((Math.abs(X[3] - auxX[3])) < E) + " W = "+ (Math.abs(X[3] - auxX[3])));

        iteracoes++;
    }

    iteracoes = 0;
    X = [0,0,0,0];
    auxX = [(X[0]+1),(X[1]+1),(X[2]+1),(X[3]+1)];

    //Gauss-Seidel
    console.log("Gauss-Seidel")
    while(!(Math.abs(X[0] - auxX[0]) < E && Math.abs(X[1] - auxX[1]) < E && Math.abs(X[2] - auxX[2]) < E && Math.abs(X[3] - auxX[3]) < E) || iteracoes >= 30){
        for(var i = 0; i < 4; i++){
            auxX[i] = X[i];
        }

        X[0]/* x */ = (matriz[0][4] - (matriz[0][1] * auxX[1] + matriz[0][2] * auxX[2] + matriz[0][3] * auxX[3]))/matriz[0][0];
        X[1]/* y */ = (matriz[1][4] - (matriz[1][0] * X[0] + matriz[1][2] * auxX[2] + matriz[1][3] * auxX[3]))/matriz[1][1];
        X[2]/* z */ = (matriz[2][4] - (matriz[2][0] * X[0] + matriz[2][1] * X[1] + matriz[2][3] * auxX[3]))/matriz[2][2];
        X[3]/* w */ = (matriz[3][4] - (matriz[3][0] * X[0] + matriz[3][1] * X[1] + matriz[3][2] * X[2]))/matriz[3][3];

        console.log(iteracoes+1+"° iteração:"+"\n"+((Math.abs(X[0] - auxX[0])) < E) + " | X = "+X[0]+"\n"+((Math.abs(X[1] - auxX[1])) < E) + " | Y = "+X[1]+"\n"+((Math.abs(X[2] - auxX[2])) < E) + " | Z = "+X[2]+"\n"+((Math.abs(X[3] - auxX[3])) < E) + " | W = "+X[3]);

        iteracoes++;
    }
})
