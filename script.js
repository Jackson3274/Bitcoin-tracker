// Fetch Bitcoin and Ethereum details from CoinGecko API
function fetchCryptoDetails(crypto) {
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/' + crypto,
        type: 'GET',
        success: function(data) {
            var price = data.market_data.current_price.usd;
            var change = data.market_data.price_change_percentage_24h;
            var high = data.market_data.high_24h.usd;
            var low = data.market_data.low_24h.usd;
            var volume = data.market_data.total_volume.usd;
            $('#' + crypto + '-price').html('$' + price);
            $('#' + crypto + '-change').html(change + '%');
            $('#' + crypto + '-high').html('$' + high);
            $('#' + crypto + '-low').html('$' + low);
            $('#' + crypto + '-volume').html('$' + volume);
        }
    });
}

// Update Bitcoin and Ethereum details based on user choice
$(document).ready(function() {
    $('#bitcoin-button').click(function() {
        $('#bitcoin-details').show();
        $('#ethereum-details').hide();
        fetchCryptoDetails('bitcoin');
    });

    $('#ethereum-button').click(function() {
        $('#bitcoin-details').hide();
        $('#ethereum-details').show();
        fetchCryptoDetails('ethereum');
    });

    $('#bitcoin-button').click();
});

// Display loading message until Bitcoin and Ethereum details are fetched
$(document).ready(function() {
    $('#bitcoin-price').html('Loading...');
    $('#bitcoin-change').html('Loading...');
    $('#bitcoin-high').html('Loading...');
    $('#bitcoin-low').html('Loading...');
    $('#bitcoin-volume').html('Loading...');
    $('#ethereum-price').html('Loading...');
    $('#ethereum-change').html('Loading...');
    $('#ethereum-high').html('Loading...');
    $('#ethereum-low').html('Loading...');
    $('#ethereum-volume').html('Loading...');
});