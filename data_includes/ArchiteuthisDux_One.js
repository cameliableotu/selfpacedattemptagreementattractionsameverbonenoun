// Agreement Attraction in Romanian (simple version without adjectives)
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"
;
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009
var defaults = [
    DS, {q: 'Este această propoziţie gramaticală?',
        as: [['f','Da'],['j','Nu']],
        randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 250,
        wordPauseTime: 125,
        timeout: 2000}
];
// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p> Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [
["timeoutSep", Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],
    
    
 

//// Shared experimental items + fillers


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv. Nu există răspunsuri corecte sau greşite. Vorbitori diferiţi au intuiţii diferite privind anumite propoziţii. "]
                         ]}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Acele pisici sforăiau foarte tare."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Multor vorbitori nativi de limba română li se pare o propoziţie gramaticală. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "La bal, prinţul valsat domol a vorbit de planurile lui de viitor."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Iepurii au mieunat mult aseară."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Miruna am stat toată noaptea cu griji pentru fiul ei."}],
['shared-intro', Separator, { transfer: 1000, normalMessage: "+", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],
['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
 [["ATTRAGREEROMANIAN-matchheadsg",1],DS, {s:" Cartea de lângă femeie mereu au un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Femeia"]}],
 [["ATTRAGREEROMANIAN-mismatchheadsg",1],DS, {s:" Cartea de lângă femei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Femeile"]}],
[["ATTRAGREEROMANIAN-matchheadpl",1],DS, {s:"Cărţile de lângă femei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Femeile"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",1],DS, {s:" Cărţile de lângă femeie mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Femeile"]}],
[["ATTRAGREEROMANIAN-matchheadsg",2],DS, {s:"Vioara de lângă cântăreaţă mereu au arcuş maro deschis."} ,"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",2],DS, {s:" Viorile de lângă  cântăreaţă mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Cântăreața"]}],
[["ATTRAGREEROMANIAN-matchheadsg",3],DS, {s:"Rochia de lângă croitoreasă uneori au dantelă roz delicată. "},"QuestionAlt", {q: "Cine/ce are dantelă roz delicată?", as: ["Rochia","Croitoreasa"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",3],DS, {s:"Rochia de lângă croitorese uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochia","Croitoresele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",3],DS, {s:"Rochiile de lângă croitorese uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",3],DS, {s:" Rochiile de lângă  croitoreasă uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Croitoreasa"]}],
[["ATTRAGREEROMANIAN-matchheadsg",4],DS, {s:"Dulceaţa de lângă gospodină uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodinele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",4],DS, {s:"Dulceţurile de lângă gospodine uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Gospodinele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",4],DS, {s:"Dulceţurile de lângă  gospodină uneori au zahăr."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Gospodina"]}],


[["ATTRAGREEROMANIAN-matchheadsg",5],DS, {s:"Pisica de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",5],DS, {s:"Pisica de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fetele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",5],DS, {s:"Pisicile de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",5],DS, {s:"Pisicile de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Fata"]}],
[["ATTRAGREEROMANIAN-matchheadsg",6],DS, {s:"Învăţătoarea de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Elevele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",6],DS, {s:"Învăţătoarele de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Eleva"]}],
[["ATTRAGREEROMANIAN-matchheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabilele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",7],DS, {s:"Vânzătoarele de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",7],DS, {s:" Vânzătoarele de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Contabila"]}],
[["ATTRAGREEROMANIAN-matchheadsg",8],DS, {s:"Oaia de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea au lapte foarte bun."}, "QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţărăncile"]}],
[["ATTRAGREEROMANIAN-matchheadpl",8],DS, {s:"Oile de lângă ţărănci adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ţăranca"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",8],DS, {s:"Oile de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ţărăncile"]}],


[["ATTRAGREEROMANIAN-matchheadsg",9],DS, {s:"Cuţitul de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismele"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Organismele"]}],  
[["ATTRAGREEROMANIAN-mismatchheadpl",9],DS, {s:" Cuţitele de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Organismul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",10],DS, {s:"Tabloul de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi? ", as: ["Tabloul","Animalul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",10],DS, {s:"Tabloul de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tabloul","Animalele"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",10],DS, {s:"Tablourile de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Animalele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",10],DS, {s:"Tablourile de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Animalul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",11],DS, {s:"Nisipul de lângă crustaceu adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul"]}],  
[["ATTRAGREEROMANIAN-mismatchheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceele"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea au calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Crustaceele"]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",11],DS, {s:"Nisipurile de lângă crustaceu adesea are calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Crustaceul"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",12],DS, {s:"Piureul de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",12],DS, {s:"Piureul de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macrourile"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Macrourile"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",12],DS, {s:"Piureurile de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Macroul"]}],  


[["ATTRAGREEROMANIAN-matchheadsg",13],DS, {s:"Sufletul de lângă trup mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupul"]}],     
[["ATTRAGREEROMANIAN-mismatchheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupurile"]}],    
[["ATTRAGREEROMANIAN-matchheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Trupurile"]}],      
[["ATTRAGREEROMANIAN-mismatchheadpl",13],DS, {s:"Sufletele de lângă trup mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Trupul"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrat uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebrate"]}],      
[["ATTRAGREEROMANIAN-matchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Nevertebrate"]}],     
[["ATTRAGREEROMANIAN-mismatchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Nevertebratul"]}],     
[["ATTRAGREEROMANIAN-matchheadsg",15],DS, {s:"Macroul de lângă vertebrat adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",15],DS, {s:"Macrourile de lângă vertebrat adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Nevertebratul"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",16],DS, {s:"Animalul de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferul"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",16],DS, {s:"Animalul de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferele"]}],     
[["ATTRAGREEROMANIAN-matchheadpl",16],DS, {s:"Animalele de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Mamiferele"]}],     
[["ATTRAGREEROMANIAN-mismatchheadpl",16],DS, {s:"Animalele de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Mamiferul"]}],    


[["ATTRAGREEROMANIAN-matchheadsg",17],DS, {s:"Câinele de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",17],DS, {s:"Câinele de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copiii"]}],   
[["ATTRAGREEROMANIAN-matchheadpl",17],DS, {s:"Câinii de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Copiii"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",17],DS, {s:" Câinii de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Copilul"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",18],DS, {s:"Doctorul de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacienţii"]}],    
[["ATTRAGREEROMANIAN-matchheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Pacienţii"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",18],DS, {s:"Doctorii de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Pacientul"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",19],DS, {s:"Preotul de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",19],DS, {s:"Preotul de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugării"]}],
[["ATTRAGREEROMANIAN-matchheadpl",19],DS, {s:"Preoţii de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",19],DS, {s:"Preoţii de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Călugărul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",20],DS, {s:"Profesorul de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studenţii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",20],DS, {s:"Profesorii de lângă studenţi uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Studenţii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",20],DS, {s:" Profesorii de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Studentul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",21],DS, {s:"Cârnatul de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă ?", as: ["Cârnatul","Hangiul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnatul","Hangiii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",21],DS, {s:"Cârnaţii de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Hangiul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",22],DS, {s:"Buşteanul de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",22],DS, {s:"Buştenii de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii","Eroii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",22],DS, {s:"Buştenii de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii","Eroul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",23],DS, {s:"Nasturele de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",23],DS, {s:"Nasturele de lângă croitori adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",23],DS, {s:"Nasturii de lângă croitori adesea  au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",23],DS, {s:"Nasturii de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Croitorul"]}],
[["ATTRAGREEROMANIAN-matchheadsg",24],DS, {s:"Sacul de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",24],DS, {s:"Sacul de lângă contabili adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",24],DS, {s:"Sacii de lângă contabili adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Contabilii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",24],DS, {s:"Sacii de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Contabilul"]}],




//// Fillers
[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care fetele o citesc este interesantă. "}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor."}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care bărbaţii o prind este maro. "}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care oamenii o văd este verde. "}],
 [["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care contabilii o construiesc este imensă. "}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care sportivii o aleg este mare. "}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care bucătarii îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care doctorii îl hrănesc este bolnav."}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care animalele îl îndrăgesc este blând. "}],
[["filler-twonounspluralcorrectchoice",35],DS, {s:"Vinul pe care bucătarii îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",36], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}],


[["filler-twonounssingularcorrectchoiceplanim",37],DS, {s:"Girafele pe care copilul le privesc sunt înalte."}],
[["filler-twonounssingularcorrectchoiceplanim",38],DS, {s:"Motanii pe care bunicul îi adăpostesc sunt tigraţi."}],
[["filler-twonounssingularcorrectchoiceplanim",39],DS, {s:"Şerpii pe care bărbatul îi strivesc sunt veninoşi."}],

 [["filler-twonounssingularcorrectchoiceplnonanim",40],DS, {s:"Vinurile pe care domnul le iubesc sunt seci."}],
[["filler-twonounssingularcorrectchoiceplnonanim",41],DS, {s:"Scrisorile pe care fata le citesc sunt lungi."}],
[["filler-twonounssingularcorrectchoiceplnonanim",42],DS, {s:"Stelele pe care înţeleptul le urmăresc sunt strălucitoare."}],
 [["filler-twonounssingularcorrectchoicesgnonanim",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice."}],
[["filler-twonounssingularcorrectchoicessgnonanim",44],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."}],
 [["filler-twonounssingularcorrectchoicesgnonanim",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci."}],
[["filler-twonounssingularcorrectchoicesganim",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoicesganim",47],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante."}],
 [["filler-twonounssingularcorrectchoicesganim",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi."}],
[["filler-coordinationplanim",49],DS, {s:"Femeia şi copilul beau mult suc."}], 
[["filler-coordinationplanim",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii."}],
[["filler-coordinationplanim",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid."}],
[["filler-coordinationsganim",52],DS, {s:"Găina şi puiul ciuguleşte firimituri adesea."}],
[["filler-coordinationsganim",53],DS, {s:"Căţelul şi pisica doarme după cină adesea."}],
[["filler-coordinationsganim",54],DS, {s:"Papagalul şi băiatul vorbeşte foarte mult unul cu altul."}],
[["filler-coordinationplnonanim",55],DS, {s:"Paharul şi sticla cad de pe birou uneori."}],
[["filler-coordinationplnonanim",56],DS, {s:"Oboseala şi plictisul ucid iubirea adesea."}],
[["filler-coordinationplnonanim",57],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna."}],
 [["filler-coordinationsgnonanim",58],DS, {s:"Cafeaua şi ceaiul are efecte laxative."}],
[["filler-coordinationsgnonanim",59],DS, {s:"Trandafirul şi zambila miroase foarte frumos."}],
[["filler-coordinationsgnonanim",60],DS, {s:"Cartea şi caietul sunt pe masă mereu."}],

 [["filler-semanticchoiceanimright",61],DS, {s:"Fetiţa de lângă camera albastră dansează."}],
[["filler-semanticchoiceanimright",62],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."}],
[["filler-semanticchoiceanimright",63],DS, {s:"Pasărea de lângă masa neagră cântă bine."}],
[["filler-semanticchoiceanimwrong",64],DS, {s:"Măgarul de lângă căţelul maro latră adesea. "}],
 [["filler-semanticchoiceanimwrong",65],DS, {s:"Albinele de lângă portocalele stricate miros prea tare."}],
[["filler-semanticchoiceanimwrong",70],DS, {s:"Urşii de lângă prinţesele minunate se căsătoresc."}],
[["filler-semanticchoicenonanimwrong",66],DS, {s:"Papucii de lângă copiii bolnavi strănută uşor."}],
 [["filler-semanticchoicenonanimwrong",67],DS, {s:"Lampa de lângă cartea verde se citeşte uşor."}],
[["filler-semanticchoicenonanimwrong",68],DS, {s:"Hainele de lângă femeile zâmbăreţe vorbesc mereu."}],
[["filler-semanticchoicenonanimright",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."}],
 [["filler-semanticchoicenonanimright",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."}],
[["filler-semanticchoicenonanimright",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}],

[["filler-onenounplagreementanimright",73],DS, {s:"Iepuraşii fricoşi se ascund de oameni adesea."}],
[["filler-onenounplagreementanimright",74], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare atrag admiratori adesea."}],
[["filler-onenounplagreementanimright",75],DS, {s:"Bunicii iubitori dau multe cadouri nepoţilor lor."}],
[["filler-onenounplagreementnonanimright",76], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari distrug locuinţe tot timpul."}], 
[["filler-onenounplagreementnonanimright",77],DS, {s:"Rănile sufleteşti dor foarte tare."}],
[["filler-onenounplagreementnonanimright",78], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze au trandafiri adesea."}],
 [["filler-onenounplagreementanimwrong",79],DS, {s:"Muzicienii creativi compune melodii deosebite."}],
[["filler-onenounplagreementanimwrong",80],DS, {s:"Hamsterii curioşi apare în bucătărie adesea."}],
[["filler-onenounplagreementanimwrong",81],DS, {s:"Elevii cuminţi doreşte note mari."}],
[["filler-onenounplagreementnonanimwrong", 82],DS, {s:"Paharele colorate conţine suc de portocale."}],
[["filler-onenounplagreementnonanimwrong",83],DS, {s:"Parfumurile franţuzeşti miroase incredibil de frumos."}],
[["filler-onenounplagreementnonanimwrong",84],DS, {s:"Cheile verzi deschide multe uşi."}],

[["filler-onenounsgagreementanimright",85],DS, {s:"Fata şatenă se ascunde de prieteni adesea."}],
[["filler-onenounsgagreementanimright",86],DS, {s:"Pisica năzdrăvană sparge vase tot timpul."}],
[["filler-onenounsgagreementanimright",90],DS, {s:"Iepurele alb sare cu mare agilitate."}],
[["filler-onenounsgagreementnonanimright",87],DS, {s:"Caietul negru are pagini albe."}],
[["filler-onenounsgagreementnonanimright",88],DS, {s:"Magnetul maro atrage metale adesea."}],,"QuestionAlt", {q: "Who found the treasure?", as: ["The pirate","Some people"]}],
[["filler-onenounsgagreementnonanimright",89],DS, {s:"Pixul albastru scrie foarte bine."}],
 [["filler-onenounsgagreementanimwrong",91],DS, {s:"Studentul harnic muncesc foarte mult."}],
[["filler-onenounsgagreementanimwrong",92],DS, {s:"Femeia misterioasă dispar în străinătate adesea."}],
[["filler-onenounsgagreementanimwrong",93],DS, {s:"Poetul talentat vorbesc foarte frumos."}],
[["filler-onenounsgagreementnonanimwrong",94],DS, {s:"Mâncarea gustoasă miros foarte bine."}],
[["filler-onenounsgagreementnonanimwrong",95],DS, {s:"Cursul masteral cuprind multe informaţii."}],
[["filler-onenounsgagreementnonanimwrong",96],DS, {s:"Bagajul mare conţin haine de iarnă."}]

];



