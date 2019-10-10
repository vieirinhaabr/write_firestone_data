const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase with your firebase info
firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: ""
  });
  
//initialize variable
var db = firebase.firestore();

//json to send
var menu =[
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  },
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  },
  {
    "NOME": "Daniel Braz",
    "NOMEFANTASIA": "alura",
    "CNPJ": 84984185118,
    "ENDERECO": "Rua Caetes",
    "NUMERO": 843,
    "COMPLEMENTO": "",
    "BAIRRO": "Caramuru",
    "CIDADE": "Tiros",
    "ESTADO": "MG",
    "CEP": 38701555,
    "FONE": 3438235899,
    "CELULAR": ""
  }
]

//following commands will save the data in firestone
menu.forEach(function(obj) {
	
	//pass the collection to send
    db.collection("lojascdl").add({
		
		//set atributes
        nome: obj.NOME,
        nomefantasia: obj.NOMEFANTASIA,
		cnpj: obj.CNPJ,
		cupom: {
					cupomMin: "200",
					cupomMax: "600"
		},
		contato: {	telefone: obj.FONE,
					celular: obj.CELULAR},
		endereco:{	endereco: obj.ENDERECO,
					numero: obj.NUMERO,
					bairro: obj.BAIRRO,
					cep: obj.CEP,
					localidade: {
						cidade: obj.CIDADE,
						estado: obj.ESTADO
					}
		}
    })
	.then(function(docRef) {
		docID = docRef.id;
        console.log("Document write, id:", docRef.id);
    })
    .catch(function(error) {
        console.error("Error: ", error);
    });
});