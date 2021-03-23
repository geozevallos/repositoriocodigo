import {dataCovid} from './covid-data.js';
console.log(dataCovid);

let confirmados = [];
let fallecidos = [];
let fechaString = [];


function extraerDatos () {
dataCovid.forEach((dato) => {
    confirmados.push(dato.Confirmed);
    fallecidos.push(dato.Deaths);
    let a = dato.Date;
    let fecha = new Date(a);
    fechaString.push(fecha.getDate() + "-" + (+fecha.getMonth() + 1) + "-" + fecha.getFullYear());
})
}

extraerDatos();

console.log(fechaString);

var ctx = document.getElementById('miGrafico');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: fechaString,
        datasets: [{
            label: '# de casos confirmados',
            data: confirmados,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            yAxisID: "C"
        },
        {
            label: '# de fallecidos',
            data: fallecidos,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            yAxisID: "F"
        }
        
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value / 1e6 + 'M';
                    },
                    fontColor: "rgba(54, 162, 235, 1)"
                },
                id: "C",
                position: "left"
            },
            {
                ticks: {
                    beginAtZero: true,
                    
                    fontColor: "rgba(255, 99, 132, 1)"
                },
                id: "F",
                position: "right"
            }
        ]
        }
    }
});