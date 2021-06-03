let names = prompt("Masukkan nama ");
let language = prompt("Masukkan satu Bahasa (english / bali / japan)");

function greeting(){
    if(language === "English" || language === "english"){
        document.writeln(`<p style="color:rgb(194, 34, 173);">Good Morning ${names} have a nice day</p>`);
    }else if(language === "Bali" || language === "bali"){
        document.writeln(`<p style="color:rgb(0, 35, 151);">Rahajeng Semengan ${names} rahayu makesamian`);
    }else if(language === "Japan" || language === "japan"){
        document.writeln(`<p style="color:rgb(226, 33, 33);">Hai ${names} Ohayōgozaimasu Tsuneni kenkō o ataerareru</p>`)
    }else{
        document.writeln(`<span style="color:tomato;">preketek tek tek kra tek ko ${names} kretek tek tek </span><br>`);
        document.writeln(`<span style="color:green;">Bahasa yang kamu masukkan adalah bahasa ALIEN</span>`);
    }
}

greeting();