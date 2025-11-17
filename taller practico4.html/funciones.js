// ---------------------------
// BOTONES DE EDICIÓN
// ---------------------------
function negrita() {
    let t = document.getElementById("texto");
    t.style.fontWeight = (t.style.fontWeight === "bold") ? "normal" : "bold";
}

function subrayado() {
    let t = document.getElementById("texto");
    t.style.textDecoration = (t.style.textDecoration === "underline") ? "none" : "underline";
}

function mayuscula() {
    let t = document.getElementById("texto");
    let nuevo = "";

    for (let i = 0; i < t.value.length; i++) {
        let c = t.value[i];
        let codigo = c.charCodeAt(0);

        if (codigo >= 97 && codigo <= 122) { 
            nuevo += String.fromCharCode(codigo - 32);
        } else {
            nuevo += c;
        }
    }

    t.value = nuevo;
}

function minuscula() {
    let t = document.getElementById("texto");
    let nuevo = "";

    for (let i = 0; i < t.value.length; i++) {
        let c = t.value[i];
        let codigo = c.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) { 
            nuevo += String.fromCharCode(codigo + 32);
        } else {
            nuevo += c;
        }
    }

    t.value = nuevo;
}


// ---------------------------
// FUNCIONES DEL PDF
// ---------------------------

function contarPalabras(texto) {
    let contador = 0;
    let enPalabra = false;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " " && texto[i] !== "\n") {
            if (!enPalabra) {
                contador++;
                enPalabra = true;
            }
        } else {
            enPalabra = false;
        }
    }

    return contador;
}

function contarSignos(texto) {
    let signos = ".,;:!?¿¡\"";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < signos.length; j++) {
            if (texto[i] === signos[j]) contador++;
        }
    }
    return contador;
}

function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (texto[i] === vocales[j]) contador++;
        }
    }
    return contador;
}

function contarConsonantes(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        // verificar si es letra
        let esLetra = (
            (c >= "a" && c <= "z") ||
            (c >= "A" && c <= "Z")
        );

        if (esLetra) {
            let esVocal = false;
            for (let j = 0; j < vocales.length; j++) {
                if (c === vocales[j]) esVocal = true;
            }
            if (!esVocal) contador++;
        }
    }
    return contador;
}

function contarDigitos(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= "0" && texto[i] <= "9") contador++;
    }
    return contador;
}

function palabrasMayus(texto) {
    let contador = 0;
    let nuevaPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== " " && c !== "\n") {
            if (nuevaPalabra && c >= "A" && c <= "Z") contador++;
            nuevaPalabra = false;
        } else {
            nuevaPalabra = true;
        }
    }
    return contador;
}

function palabrasMinus(texto) {
    let contador = 0;
    let nuevaPalabra = true;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== " " && c !== "\n") {
            if (nuevaPalabra && c >= "a" && c <= "z") contador++;
            nuevaPalabra = false;
        } else {
            nuevaPalabra = true;
        }
    }
    return contador;
}

function contarParrafos(texto) {
    let contador = 1;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "\n") contador++;
    }
    return contador;
}

function invertirTexto(texto) {
    let nuevo = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        nuevo += texto[i];
    }
    return nuevo;
}

function contarCaracteres(texto) {
    return texto.length;
}

function buscarPalabra(texto, buscar) {
    let palabra = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " " && texto[i] !== "\n") {
            palabra += texto[i];
        } else {
            if (palabra === buscar) return true;
            palabra = "";
        }
    }
    if (palabra === buscar) return true;

    return false;
}

function contarCaracter(texto, c) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === c) contador++;
    }
    return contador;
}

function contarPares(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i += 2) contador++;

    return contador;
}

function contarImpares(texto) {
    let contador = 0;

    for (let i = 1; i < texto.length; i += 2) contador++;

    return contador;
}

function agregarInicio(texto, frag) {
    return frag + " " + texto;
}

function agregarFinal(texto, frag) {
    return texto + " " + frag;
}


// ---------------------------
// EJECUTAR ANÁLISIS COMPLETO
// ---------------------------
function analizar() {
    let texto = document.getElementById("texto").value;
    let r = document.getElementById("resultado");

    r.innerHTML =
        "<b>Palabras:</b> " + contarPalabras(texto) + "<br>" +
        "<b>Signos de puntuación:</b> " + contarSignos(texto) + "<br>" +
        "<b>Vocales:</b> " + contarVocales(texto) + "<br>" +
        "<b>Consonantes:</b> " + contarConsonantes(texto) + "<br>" +
        "<b>Dígitos:</b> " + contarDigitos(texto) + "<br>" +
        "<b>Palabras con mayúscula inicial:</b> " + palabrasMayus(texto) + "<br>" +
        "<b>Palabras con minúscula inicial:</b> " + palabrasMinus(texto) + "<br>" +
        "<b>Párrafos:</b> " + contarParrafos(texto) + "<br>" +
        "<b>Texto invertido:</b> " + invertirTexto(texto) + "<br>" +
        "<b>Total caracteres:</b> " + contarCaracteres(texto) + "<br>";
}
