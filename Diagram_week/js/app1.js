const ctx = document.getElementById('ChartMonth').getContext('2d');

let dataElem = [150000, 100000, 255000, 15];
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Фактическая',
            data: dataElem,
             backgroundColor: [
                '#F4B802',
                '#F4B802',
                '#F4B802',
                '#F4B802',
                '#F4B802',
            ],
            order: 1
            }, {
            label: 'План',
            data: [110],
            type: 'line',
            strokeColor: 'black',
            pointColor: 'black',
            backgroundColor: [
                'rgba(0,0,0,0)'
            ],
            borderColor: [
                '#4279BC'
            ],
            order: 2
        }],
        labels: [1,2,3,4]
    },
    options: {}
});
