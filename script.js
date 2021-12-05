var initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');

var output = document.querySelector('#output-box');


function calculateProfitAndLoss(initial, quatity, current) {
    if (initial > current) {
        var loss = (initial - current) * quatity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`hey the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`)
    } else if (current > initial) {
        var profit = (current - initial) * quatity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}%`)
    } else {
        showOutput("no pain no gain no pain no gain")
    }
}

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(msg) {
    output.innerHTML = msg;
}

submitBtn.addEventListener('click', submitHandler);