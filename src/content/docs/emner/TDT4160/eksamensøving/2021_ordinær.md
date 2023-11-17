---
title: 2021 ordinær
---
## 1. Diverse oppvarming

### 1.1

0100 1111 0011 1100 = 0x4F3C

### 1.2

Svar: Fetch - Decode - Execute

### 1.3

- [ ] Ram er ofte lokalisert nærme CPU
- [x] Det vil ofte være effektivt å hente instruksjonen og naboinstruksjoner
- [x] Minneadresser som ble nylig brukt, vil sannsynligvis bli brukt igjen ganske snart

## 1.4 TODO

- [ ] Samlebånd("Pipelining")
- [ ] Flerkjerner
- [ ] Superskalaritet
- [ ] Simd

### 1.5

- [ ] RAW
- [x] WAR
- [ ] WAW
- [ ] RAR

### 1.6

- [ ] Usant
- [x] Sant

### 1.7 Hva betyr det at en hurtigbuffer ("cache") er "Write Through"? TODO

- [ ] En STORE-instruksjon vil umiddelbart bli utført ned hele kjeden i minnehierarkiet
- [ ] En cachelinje blir kun skrevet til underliggende nivå når den skal byttes ut
- [ ] En STORE-instruksjon vil bli umiddelbart skrevet til det underliggende nivået i minnehierarkiet
- [ ] Dersom cachen er delt mellom kjerne 1 og kjerne 2 vil kjerne 2 bli informert om skrivingsoperasjoner fra kjerne 1

## 2. Minnehierarki

- Kapasitet: Platelager
- Kostnad: DRAM
- Aksesstid: L2 cache

## 3. Minnehierarki 2

Kortere aksesstid

- Mikroarkitektur-register
- L2-cache
- L3-cache
- Hovedminne
- SSD [disk]

Lenger aksesstid

## 4. Virtuelt minne

### 4.1

### 4.2

## 5. ARM Assembler

## 6. Cacheytelse

L2-cache-hit-ratio = 0.4 Eller 40%
Programmet består av 80% LOADs fra minnet og resten aritmetikk

### 6.1 Hvor stor del av minneaksessene går til neste nivå i minnehierarkiet? Svar i hele prosent. Rund ned

Svar: 60%

### 6.2 Anta at maskinen kjører 100 instruksjoner av programmet og at det oppfører seg som beskrevet over. Hvor lang tid bruker maskinen totalt på LOADS?

LOADs $= 100 * 0.8 = 80$

hits_tid $= 80 * 0.4 * 10ns = 320ns$

misses_tid $= 80 * 0.6 * 210ns = 10080ns$

total_tid $= 320ns + 10080ns = 10400ns$

## 7. Assembler-lesing Knot-60
