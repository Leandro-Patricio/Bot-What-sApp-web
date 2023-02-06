# Bot What'sApp Web

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Este projeto veio de uma ideia para facilitar a vida da minha namorada em mandar diversas mensagens iguais para contatos no Whta's app de sua empresa.
Basicamente, você entra com os nomes das pessoas (exatamente como estão no seu what's, sejam nomes ou números), e a mensagem. Este programa enviará as mensagens.

## Technologies
* Front-end
** Este projeto não possui front-end, mas sinceramente fiquei com vontade de fazer uma pequena interface para facilitar a vida. Quem sabe no futuro.

* Back-end
** Javascript
** Puppetteer
	
## Setup

Ao clonar o projeto:
```
$ npm install
```

Para escolher as pessoas para quem você quer mandar as mensagens, escreva seus nomes no array ```contactName```. Lembre-se que deve escrever os nomes exatamente como aparecem no seu whats, mesmo que sejam números. Respeite maiúsculas, acentos, números e espaços.

Para a mensagem escrita, digite-a no ```await page.keyboard.type(   "" );```.  Esta mensagem será mandada para todos os contatos selecionados (como descrito acima).

Escolhidas as pessoas e a mensagem, rode a aplicação:

```
$ node testePupptear.js
```

Ao roda o programa, ele abrirá uma nova aba do Chromium, com uma aba do whats app web. Você deverá entrar com o seu celular, lendo o QR code. 

Relaxe e divirta-se vendo as mensagens sendo enviadas.

Obs: este projeto é bem cru e inicial. Ele é passível de muuuuiiita melhora, mas não era meu objetivo fazer algo super performático e bonito.


