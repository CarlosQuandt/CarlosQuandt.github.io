function openSite(){
  descriptionFunction();
  ChangeLang('EN');
}

function resetFunction() {
  document.getElementById("SpiritBox").checked = false; 
  document.getElementById("FingerPrints").checked = false; 
  document.getElementById("GhostWriting").checked = false; 
  document.getElementById("FreezingTemperatures").checked = false; 
  document.getElementById("EMF").checked = false; 
  document.getElementById("GhostOrb").checked = false; 

  mainfunction();
}
function mainfunction() {

  let spirit      = document.getElementById("SpiritLine");
  let wraith      = document.getElementById("WraithLine");
  let phantom     = document.getElementById("PhantomLine");
  let poltergeist = document.getElementById("PoltergeistLine");
  let banshee     = document.getElementById("BansheeLine");
  let jinn        = document.getElementById("JinnLine");
  let mare        = document.getElementById("MareLine");
  let revenant    = document.getElementById("RevenantLine");
  let shade       = document.getElementById("ShadeLine");
  let demon       = document.getElementById("DemonLine");
  let yurei       = document.getElementById("YureiLine");
  let oni         = document.getElementById("OniLine");

  spirit.style.display = "";
  wraith.style.display = "";
  phantom.style.display = "";
  poltergeist.style.display = "";
  banshee.style.display = "";
  jinn.style.display = "";
  mare.style.display = "";
  revenant.style.display = "";
  shade.style.display = "";
  demon.style.display = "";
  yurei.style.display = "";
  oni.style.display = "";

if (document.getElementById("SpiritBox").checked) {
  phantom.style.display = "none";
  banshee.style.display = "none";
  revenant.style.display = "none";
  shade.style.display = "none";
  yurei.style.display = "none";
}
if (document.getElementById("FingerPrints").checked) {
  phantom.style.display = "none";
  jinn.style.display = "none";
  mare.style.display = "none";
  shade.style.display = "none";
  demon.style.display = "none";
  yurei.style.display = "none";
  oni.style.display = "none";
}
if (document.getElementById("GhostWriting").checked) {
  wraith.style.display = "none";
  phantom.style.display = "none";
  poltergeist.style.display = "none";
  banshee.style.display = "none";
  jinn.style.display = "none";
  mare.style.display = "none";
}
if (document.getElementById("FreezingTemperatures").checked) {
  spirit.style.display = "none";
  poltergeist.style.display = "none";
  jinn.style.display = "none";
  revenant.style.display = "none";
  shade.style.display = "none";
  oni.style.display = "none";
}
if (document.getElementById("EMF").checked) {
  spirit.style.display = "none";
  wraith.style.display = "none";
  poltergeist.style.display = "none";
  mare.style.display = "none";
  demon.style.display = "none";
  yurei.style.display = "none";
}
if (document.getElementById("GhostOrb").checked) {
  spirit.style.display = "none";
  wraith.style.display = "none";
  banshee.style.display = "none";
  revenant.style.display = "none";
  demon.style.display = "none";
  oni.style.display = "none";
}
}

function descriptionFunction(){
  let desc = document.getElementById("desc");

  if (desc.style.display ==='none'){
    document.getElementById("desc").style.display = "";
    document.getElementById("desc1").style.display = "";
    document.getElementById("desc2").style.display = "";
    document.getElementById("desc3").style.display = "";
    document.getElementById("desc4").style.display = "";
    document.getElementById("desc5").style.display = "";
    document.getElementById("desc6").style.display = "";
    document.getElementById("desc7").style.display = "";
    document.getElementById("desc8").style.display = "";
    document.getElementById("desc9").style.display = "";
    document.getElementById("desc10").style.display = "";
    document.getElementById("desc11").style.display = "";
    document.getElementById("desc12").style.display = "";
    
    document.getElementById("str").style.display = "";
    document.getElementById("str1").style.display = "";
    document.getElementById("str2").style.display = "";
    document.getElementById("str3").style.display = "";
    document.getElementById("str4").style.display = "";
    document.getElementById("str5").style.display = "";
    document.getElementById("str6").style.display = "";
    document.getElementById("str7").style.display = "";
    document.getElementById("str8").style.display = "";
    document.getElementById("str9").style.display = "";
    document.getElementById("str10").style.display = "";
    document.getElementById("str11").style.display = "";
    document.getElementById("str12").style.display = "";
    
    document.getElementById("weak").style.display = "";
    document.getElementById("weak1").style.display = "";
    document.getElementById("weak2").style.display = "";
    document.getElementById("weak3").style.display = "";
    document.getElementById("weak4").style.display = "";
    document.getElementById("weak5").style.display = "";
    document.getElementById("weak6").style.display = "";
    document.getElementById("weak7").style.display = "";
    document.getElementById("weak8").style.display = "";
    document.getElementById("weak9").style.display = "";
    document.getElementById("weak10").style.display = "";
    document.getElementById("weak11").style.display = "";
    document.getElementById("weak12").style.display = "";
  } else {
    document.getElementById("desc").style.display = "none";
    document.getElementById("desc1").style.display = "none";
    document.getElementById("desc2").style.display = "none";
    document.getElementById("desc3").style.display = "none";
    document.getElementById("desc4").style.display = "none";
    document.getElementById("desc5").style.display = "none";
    document.getElementById("desc6").style.display = "none";
    document.getElementById("desc7").style.display = "none";
    document.getElementById("desc8").style.display = "none";
    document.getElementById("desc9").style.display = "none";
    document.getElementById("desc10").style.display = "none";
    document.getElementById("desc11").style.display = "none";
    document.getElementById("desc12").style.display = "none";
    
    document.getElementById("str").style.display = "none";
    document.getElementById("str1").style.display = "none";
    document.getElementById("str2").style.display = "none";
    document.getElementById("str3").style.display = "none";
    document.getElementById("str4").style.display = "none";
    document.getElementById("str5").style.display = "none";
    document.getElementById("str6").style.display = "none";
    document.getElementById("str7").style.display = "none";
    document.getElementById("str8").style.display = "none";
    document.getElementById("str9").style.display = "none";
    document.getElementById("str10").style.display = "none";
    document.getElementById("str11").style.display = "none";
    document.getElementById("str12").style.display = "none";
    
    document.getElementById("weak").style.display = "none";
    document.getElementById("weak1").style.display = "none";
    document.getElementById("weak2").style.display = "none";
    document.getElementById("weak3").style.display = "none";
    document.getElementById("weak4").style.display = "none";
    document.getElementById("weak5").style.display = "none";
    document.getElementById("weak6").style.display = "none";
    document.getElementById("weak7").style.display = "none";
    document.getElementById("weak8").style.display = "none";
    document.getElementById("weak9").style.display = "none";
    document.getElementById("weak10").style.display = "none";
    document.getElementById("weak11").style.display = "none";
    document.getElementById("weak12").style.display = "none";
  }
}

function ChangeLang(p_lang){
  
  if(p_lang==='EN'){
    document.getElementById("Language").innerHTML = 'Language';
    document.getElementById("btDescription").innerHTML = 'Show Description';
    document.getElementById("btReset").innerHTML = 'Reset';

    document.getElementById("SpiritBoxHeader").innerHTML = 'Spirit Box';
    document.getElementById("FingerPrintsHeader").innerHTML = 'Finger Prints';
    document.getElementById("GhostWritingHeader").innerHTML = 'Ghost Writing';
    document.getElementById("FreezingTemperaturesHeader").innerHTML = 'Freezing Temperatures';
    document.getElementById("EMFHeader").innerHTML = 'EMF Level 5';
    document.getElementById("GhostOrbHeader").innerHTML = 'Ghost Orb';

    document.getElementById("Spirit").innerHTML = 'Spirit';
    document.getElementById("Wraith").innerHTML = 'Wraith';
    document.getElementById("Phantom").innerHTML = 'Phantom';
    document.getElementById("Poltergeist").innerHTML = 'Poltergeist';
    document.getElementById("Banshee").innerHTML = 'Banshee';
    document.getElementById("Jinn").innerHTML = 'Jinn';
    document.getElementById("Mare").innerHTML = 'Mare';
    document.getElementById("Revenant").innerHTML = 'Revenant';
    document.getElementById("Shade").innerHTML = 'Shade';
    document.getElementById("Demon").innerHTML = 'Demon';
    document.getElementById("Yurei").innerHTML = 'Yurei';
    document.getElementById("Oni").innerHTML = 'Oni';

    document.getElementById("desc").innerHTML = 'Description';
    document.getElementById("str").innerHTML = 'Unique Strengths';
    document.getElementById("weak").innerHTML = 'Weaknesses';

    document.getElementById("desc1").innerHTML = '';
    document.getElementById("str1").innerHTML = '';
    document.getElementById("weak1").innerHTML = '';

    document.getElementById("desc2").innerHTML = '';
    document.getElementById("str2").innerHTML = '';
    document.getElementById("weak2").innerHTML = '';
    

    document.getElementById("desc3").innerHTML = '';
    document.getElementById("str3").innerHTML = '';
    document.getElementById("weak3").innerHTML = '';
    

    document.getElementById("desc4").innerHTML = '';
    document.getElementById("str4").innerHTML = '';
    document.getElementById("weak4").innerHTML = '';
    

    document.getElementById("desc5").innerHTML = '';
    document.getElementById("str5").innerHTML = '';
    document.getElementById("weak5").innerHTML = '';
    

    document.getElementById("desc6").innerHTML = '';
    document.getElementById("str6").innerHTML = '';
    document.getElementById("weak6").innerHTML = '';
    

    document.getElementById("desc7").innerHTML = '';
    document.getElementById("str7").innerHTML = '';
    document.getElementById("weak7").innerHTML = '';
    

    document.getElementById("desc8").innerHTML = '';
    document.getElementById("str8").innerHTML = '';
    document.getElementById("weak8").innerHTML = '';
    

    document.getElementById("desc9").innerHTML = '';
    document.getElementById("str9").innerHTML = '';
    document.getElementById("weak9").innerHTML = '';
    

    document.getElementById("desc10").innerHTML = '';
    document.getElementById("str10").innerHTML = '';
    document.getElementById("weak10").innerHTML = '';
    

    document.getElementById("desc11").innerHTML = '';
    document.getElementById("str11").innerHTML = '';
    document.getElementById("weak11").innerHTML = '';
    

    document.getElementById("desc12").innerHTML = '';
    document.getElementById("str12").innerHTML = '';
    document.getElementById("weak12").innerHTML = '';

  }else if (p_lang==='PT'){
    document.getElementById("Language").innerHTML = 'Idioma';
    document.getElementById("btDescription").innerHTML = 'Mostrar Descrição';
    document.getElementById("btReset").innerHTML = 'Resetar';

    document.getElementById("SpiritBoxHeader").innerHTML = 'Spirit Box';
    document.getElementById("FingerPrintsHeader").innerHTML = 'Impressão Digital';
    document.getElementById("GhostWritingHeader").innerHTML = 'Escrita Fantasma';
    document.getElementById("FreezingTemperaturesHeader").innerHTML = 'Temperatura Baixa';
    document.getElementById("EMFHeader").innerHTML = 'EMF Nível 5';
    document.getElementById("GhostOrbHeader").innerHTML = 'Orbe Fantasma';

    document.getElementById("Spirit").innerHTML = 'Espírito';
    document.getElementById("Wraith").innerHTML = 'Wraith';
    document.getElementById("Phantom").innerHTML = 'Espectro';
    document.getElementById("Poltergeist").innerHTML = 'Poltergeist';
    document.getElementById("Banshee").innerHTML = 'Banshee';
    document.getElementById("Jinn").innerHTML = 'Jinn';
    document.getElementById("Mare").innerHTML = 'Mare';
    document.getElementById("Revenant").innerHTML = 'Revenant';
    document.getElementById("Shade").innerHTML = 'Assombração';
    document.getElementById("Demon").innerHTML = 'Demônio';
    document.getElementById("Yurei").innerHTML = 'Yurei';
    document.getElementById("Oni").innerHTML = 'Oni';
    
    document.getElementById("desc").innerHTML = 'Descrição';
    document.getElementById("str").innerHTML = 'Pontos Fortes Únicos';
    document.getElementById("weak").innerHTML = 'Fraquezas';

    document.getElementById("desc1").innerHTML = 'Um Espírito é o fantasm mais comum que você vai encontrar, entretanto é ainda muito poderoso e perigoso. Eles são geralmente descobertos facilmente. Um dos seus motivos de aparição é depois de uma morte inexplicável.';
    document.getElementById("str1").innerHTML = 'Nenhum.';
    document.getElementById("weak1").innerHTML = 'Um espírito pode ser temporariamente parado ao acender um incenso natual.';

    document.getElementById("desc2").innerHTML = 'Um Wraith é um dos Fantasmas mais perigosos que você encontrará. Isto é, o único fantasma conhecido que tem a capacidade de voar e em alguns momentos até mesmo atravessar paredes.';
    document.getElementById("str2").innerHTML = 'Quase nunca toca o chão,  oque significa que não pode ser rastreado.';
    document.getElementById("weak2").innerHTML = 'Wraiths tem uma reação tóxica a sal.';

    document.getElementById("desc3").innerHTML = 'Um Espectro é o Fantasma que pode possuir os vivos, muitas vezes sendo invocado por um Tabuleiro de Ouija. O Espectro também provoca medo naqueles ao seu arredor.';
    document.getElementById("str3").innerHTML = 'Olhar para um Espectro irá causar perda considerável de sanidade.';
    document.getElementById("weak3").innerHTML = 'Tirar uma foto de um Espectro fará com que ele desapareça temporarriamente.';

    document.getElementById("desc4").innerHTML = 'Um dos mais famosos fantasmas é o Poltergeist, também conhecido como fantasma barulhento, podendo manipular objetos ao seu redor para espalhar o medo em suas vítimas.';
    document.getElementById("str4").innerHTML = 'Um Poltergeist pode jogar grandes quantidades de objetos de uma vez.';
    document.getElementById("weak4").innerHTML = 'Um Poltergeist não tem força em uma sala vazia, sendo quase inofensivo.';

    document.getElementById("desc5").innerHTML = 'Um Banshee é um caçador natural que atacará qualqauer coisa. Tem sido conhecido por persegur sua presa, uma de cada vez, até matá-las.';
    document.getElementById("str5").innerHTML = 'Um Banshee segue apenas uma pessoa de cada vez.';
    document.getElementById("weak5").innerHTML = 'Usar um crucifixo, faz com que o Banshee troque de alvo.';

    document.getElementById("desc6").innerHTML = 'Um Jinn é um fantasma territorial, que vai atacar quando ameaçado. Também é conhecido por ser capaz de viajar a uma velocidade significativa.';
    document.getElementById("str6").innerHTML = 'Um Jinn ficará mais rápido se a vítima estiver longe.';
    document.getElementById("weak6").innerHTML = 'Desligar a fonte de energia do local impedirá o Junn de usar sua habilidade.';

    document.getElementById("desc7").innerHTML = 'Mare é a fonte de todos seus pesadelos, tornando-se mais poderoso à noite. Possuindo poder de controlar a mente das pessoas.';
    document.getElementById("str7").innerHTML = 'Uma mare faz seu alvo alucinar. Se você olhar para uma alucinação, a sua sanidade irá decair mais rápido.';
    document.getElementById("weak7").innerHTML = 'Usar uma lanterna para as alucinações.';

    document.getElementById("desc8").innerHTML = 'Um Revenant é muito lento, porém violento e vai atacar indiscriminadamente sem exitar. Há rumores de que ao caçar, ele anda em uma velocidade significativa.';
    document.getElementById("str8").innerHTML = 'Um Revenant avançará a uma velocidade significativamente mais rápida ao caçar uma vítima.';
    document.getElementById("weak8").innerHTML = 'Esconder-se do Revenant fará com que ele se mova muito lentamente.';

    document.getElementById("desc9").innerHTML = 'Uma Assombração é conhecida por ser um fantaasma Tímido. Há evidências de que uma sombra irá interromper toda atividade paranormal se houver várias pessoas próximas ao local.';
    document.getElementById("str9").innerHTML = 'Um Demônio vai atacar mais vezes do que qualquer outro fantasma.';
    document.getElementById("weak9").innerHTML = 'Fazer perguntas bem-sucedidas a um demôio no tabuleiro Ouija não diminui a sanidade dos usuários.';

    document.getElementById("desc10").innerHTML = 'Um Demônio é um dos piores Fantasmas que você pode encontrar. É conhecido por atacar sem nenhuma motivo.';
    document.getElementById("str10").innerHTML = 'Um Demônio vai atacar mais vezes do que qualquer outro fantasma.';
    document.getElementById("weak10").innerHTML = 'Fazer perguntas bem-sucedidas a um demôio no tabuleiro Ouija não diminui a sanidade dos usuários.';

    document.getElementById("desc11").innerHTML = 'A Yurei é um fantasma que voltou para o mundo físico, geralmente com a finalidade de vingança ou ódio.';
    document.getElementById("str11").innerHTML = 'Sabe-se que os Yurei causam um efeito mais forte na sanidade das pessoas.';
    document.getElementById("weak11").innerHTML = 'Acender um incenso no quarto onde o Yurei esteve presente, fará com que ele não perambule por lá durante um longo tempo.';

    document.getElementById("desc12").innerHTML = 'Os Oni são primos do Demônio e possuen uma força extrema. Há rumores de que eles se tornam mais ativos em torno de suas presas.';
    document.getElementById("str12").innerHTML = 'Os Oni são mais ativos quand oas pessoas estão por perto e são vistos movendo objetos em grande velocidade.';
    document.getElementById("weak12").innerHTML = 'Ser mais ativo tornará os Oni mais fáceis de encontrar e identificar.';
  }

}