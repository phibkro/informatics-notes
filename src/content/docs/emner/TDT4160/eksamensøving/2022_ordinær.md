---
title: 2022 ordinær
---
## 1 Ymse oppvarming [12p]

### 1.1

Anta at integeren 0xBADDF00D er lagret i et byte-adressert lager (minne) i big-endian format. Integeren blir så lest ut av en "little-endian" prosessor og brukt i et program-- hvilken verdi har integeren?

Svar: 0x0DF0DDBA

### 1.2

Hvor mange ord kan du adressere med en 20 bits adressebuss?

Svar: 2^20 = 1 048 576

### 1.3

Hva er rollen til instruksjonsdekodingsstadiet i en datamaskin? Trenger alle datamaskiner en instruksjonsdekoder?

Svar:

### 1.4

En prosessor har 512 kjerner som hver har en separat L1-cache og et 8GB GB stort hovedminne. Du skal skrive en flertrådet applikasjon som skal prosessere et 128 GB stort datasett. Det finst ikke noe operativsystem.

Du deler opp datasettet slik at 4 kjerner jobber med samme del (kjerne 0,1,2 og 3 jobber med den første GB-en med data, 4,5,6,7 med den andre, etc.). Etter at programmet er ferdigkjørt er resultatet åpenbart fullt av feil.

Hvilke antagelser om minnehierarkiet kan du ha gjort som har ført til problemer?

Svar:

## 2 Digitallogikk [8p]

### 2.1

For hver av bokstavene A, B, C, D, E, F, G og H i figuren under (out), skriv tilstanden til out- signalet.

Antagelser:
Start-tilstanden til de positiv-flankestyrte flipflop-ene er 0.

Formater svaret ditt slik (merk linjeskift): A: 0
B: 1
C: 0
...

Svar:
A: 1
B: 1
C:

x | out |

### 2.2

Anta at flip-flopene i figuren over er del av en tilstandsmaskin. Hvor mange unike tilstander går denne tilstandsmaskinen gjennom i løpet av tidsperioden som er vist over?

## 3 Digitallogikk 2 [5p] ✅

### 3.1 ✅

I figuren ser du en SR-latch med S-inngangen lik 0, R-inngangen lik 0, "not Q" lik 1 (symbolet Q med strek) og Q lik 0.

Forklar i korte trekk hva som skjer når vi setter S-inngangen til 1 og tilbake til 0. Inkluder tilstandene til Q og "not Q" i forklaringen din.

Svar: La oss kalle den øvre NOR-porten for NOR1 og den nedre for NOR2. Når S-inngangen settes til 1, vil NOR1 endre utgang fra 1 til 0. Dette fører til at nor Q blir 0. I tillegg vil NOR2 endre utgang fra 0 til 1. Dette fører til at Q blir 1. Og siden NOR2 sin utgang leder inn i NOR1 vil SR-latchen "lagre" tilstanden. Når S-inngangen settes tilbake til 0, vil NOR1 ikke endre utgang siden NOR2 sin utgang er 1. Dermed vil ikke Q kunne endre seg før R settes til 1.

### 3.2 ✅

Hva skjer om vi setter både R og S til 1?

Svar: Om R og S er 1 vil NOR1 og NOR2 få 0 i utgang. Dette vil føre til at Q og not Q blir 0. Dette er en ulovlig tilstand for SR-latchen.

## 4 Kombinatorisk krets [5p] ✅

Svar:

A | B | C | D
--- | --- | --- | ---
0 | 0 | 0 | 0
0 | 1 | 1 | 0
1 | 0 | 1 | 0
1 | 1 | 0 | 1

## 5 Kombinatorisk krets [4p] ✅

Merk! Dette er samme krets som i forrige oppgave.
Hvilken funksjon har kretsen? Her er vi ikke ute etter en forklaring på de individuelle logiske portene -- vi er ute etter en måte å tolke signalene C og D på, i sammenheng med inngangssignalene A og B -- altså, hva gjør kretsen på et deskriptivt nivå.

Svar: Hele kretsen er en halv-adder. D er mente. C oppfører seg som en XOR mellom A og B. D og C sammen er summen mellom A og B.

## 6 2-bit ALU 1 [9p] ✅

Figuren over viser en ALU som jobber på 2 bits ord. Inngangene og utgangene har 0 og 1 lagt på for å indikere bit 0 og bit 1 i disse ordene. "Most significant bit" skal være bit 1.

W-inngangen er 0.

Operand A består av bits A1, A0 (A1 er MSB) Operand B består av bits B1, B0 (B1 er MSB)

I denne oppgaven skal du sette opp inngangene til ALU-en, og beregne resultatene av følgende instruksjoner.
Oversett instruksjonene så nøyaktig du får til.

Dersom en celle allerede er fyllt ut, må du tilpasse resten av innganene for at resultatet skal bli riktig.

1:A+B: A=2,B=3

2:(NOTA) OR B: A=0,B=1

3:A+(NOTB): A=3,B=0

Innganger

Inst. | A1 | A0 | B1 | B0 | INVA1 | INVA0 | ENA1 | ENA0 | ENB1 | ENB0 | F1 | F0
--- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---
1 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1
2 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0
3 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1

Utganger

Inst. | F1 | F0 | M
--- | --- | --- | ---
1 | 0 | 1 | 1
2 | 1 | 1 | 0
3 | 1 | 0 | 1

## 7 2-bit ALU 2 [3p] ✅

Anta at det tar 0 sekund å propagere koblinger, og 1 ns å propagere en logisk port i denne figuren.
Hva er den verst tenkelige kritiske stien i figuren?

Svar: A0 og ENA0 til R1. 8ns tar det.

Om du gjorde noen antagelser du ønsker å fortelle sensor om i forrige oppgave, skriv de gjerne ned her.

## 8 Cache [10p] ✅

Anta at vi har et minne og en direkte-mappet cache med følgende karakteristikker:

* Lageret er byte-adresserbart.
* Minneadressene er 16 bits.
* Cachen har 8 rader (cache linjer).
* Hver rad, eller cache-linje, har plass til 16 bytes med data ("blokker").

### 8.1 ✅

Hvor mange bits av adressen brukes til hhv. tag, index og "block offset"?

Svar:
Block offset bits: 4.
Indeks bits: 3.
Tag bits: 9.

Notater:

offset bits = $log_2(n Bytes)$ = $log_2(16) = 4$

sets/index/rader = $cachesize / blocksize$

indeks bits = $log_2(rader) = 3$

tag bits = gjenværende bits av adressen = $adressebits - offsetbits - indeksbits$ = $16 - 4 - 3 = 9$

Cache:

* 16 byte blokk
* 16 byte blokk
* 16 byte blokk
* 16 byte blokk
* 16 byte blokk
* 16 byte blokk
* 16 byte blokk
* 16 byte blokk

### 8.2 ✅

De følgende adresse-aksessene under brukes til å slå opp i lager ("minne").
Hurtigbufferet (cachen) er i utgangspunktet tom.
For hver adresse skal du skrive tag, index og om det er en cache-bom eller ikke.
Skriv 0 for bom, og 1 for treff.

Fyll inn svaret på følgende måte:
For hver adresse, skriv tag, index, block offset, bom/treff i cachen som er diskutert over.
Del opp adressene som "vanlig": dei første n bitta til tag, dei neste til index og til slutt antall block offset bits.

adresse: tag, index, block offset, bom/treff

Svar:

Tag | Indeks/Set | Block offset | Bom/treff
--- | --- | --- | ---
001011011 | 011 | 0011 | 0
000001101 | 111 | 1100 | 0
001011011 | 011 | 1000 | 1
101010101 | 010 | 1011 | 0

Notater:

## 9 Buss [9p]

### 9.1 Er bussarbitreringsmekanismen i denne figuren sentralisert?

Svar: Ja. Bussarbitreringen er sentralisert i arbiteren istedenfor at alle busser er med på avgjørelsen, i andre ord desentralisert.

### 9.2

Hvordan spør IO-enhetene ("IO devices") om tilgang til bussen?
Er det mulig for bussarbitreringsmekanismen å vite hvor mange som spør om bussen? Hvordan blir IO-enhetene prioritert i denne mekanismen?

Svar:

* De sender signal gjennom "Bus request" bussen.
* Nei.
* IO-enheten nærmest arbiter blir prioritert

### 9.3 Hva kalles mekanismen i figuren?

Svar: Daisy chained bus arbitration

## 10 Uff3 mikroarkitektur [27p]

Du er innleid konsulent, og skal hjelpe til med ferdigstillingen av Uff3 -- en 2-stegs samlebåndarkitektur (pipeline).
Dokumentasjonen av arkitekturen er noe mangelfull, og det er noen løse tråder her og der.
Gjør de antagelsene du må for at oppgavene skal kunne løses.

Kontrollenheten er ikke synlig -- de røde linjene kan du anta går til denne, og i noen av oppgavene under er det du som "spiller rollen" til denne enheten.

Merk at de fleste oppgavane kan løses uavhengig av hverandre.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++++++

Fortell hvordan kontrollsignalene må settes opp for å utføre instruksjonen CMPEQ , spesifisert i vedlegget.
Bruk formatet: kontrollsignal: \<verdi>

Svar:

## 11 ARM assembly [10p]

### 11.1 Hva er verdien i Display-minnet etter at kodesnutten over har kjørt?

Svar:
