var data = {
  version: '1.0',
  clients: ['Robert', 'Steve', 'Bob'],
  comptes: [
    {
      nom: 'Chèque',
      montant: 34.54
    },
    {
      nom: 'Projet',
      montant: 5343.54
    }
  ]
}

function init() {
  var app = document.getElementById('app');

  data.clients.forEach(element => {
    app.innerHTML += '<p>Client: ' + element + '</p>';
  });

  console.log('Dom loaded and app initialized');
}

document.addEventListener('DOMContentLoaded', init);
