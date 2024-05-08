/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

const personnes = [
    {
        nom: 'Doe',
        prenom: 'John',
        age: 25,
        localite: 'New York',
    },
    {
        nom: 'Doe',
        prenom: 'Jane',
        age: 30,
        localite: 'Los Angeles',
    },
    {
        nom: 'Doe',
        prenom: 'Jack',
        age: 28,
        localite: 'Chicago',
    },
    {
        nom: 'Doe',
        prenom: 'Jill',
        age: 35,
        localite: 'Miami',
    },
    {
        nom: 'Doe',
        prenom: 'Jim',
        age: 40,
        localite: 'San Francisco',
    }
];

//Récupère le 1er formulaire du document
const formulaire = document.querySelector('form');

//Récupère le champ texte #nom
const txtNom =document.querySelector('#nom');
const txtPrenom =document.querySelector('#prenom');
const txtAge =document.querySelector('#age');
const txtLocalite =document.querySelector('#localite');

//Récupère le corps du tableau <tbody>
const tableBody = document.querySelector('tbody');

//Test si la récupération des éléments HTML est OK
console.log(formulaire, txtNom, tableBody, txtPrenom, txtAge, txtLocalite);

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', function envoyer(event) {

    //Stopper l'envoi du formulaire
    event.preventDefault();

    //Crée le code HTML de la nouvelle ligne
    let nouvelleLigne = `
        <tr>
            <td>${txtPrenom.value}</td>
            <td>${txtNom.value}</td>
            <td>${txtAge.value}</td>
            <td>${txtLocalite.value}</td>
        </tr>`;

    //Ajouter la nouvelle personne à la fin du <body>
    tableBody.innerHTML += nouvelleLigne;



});