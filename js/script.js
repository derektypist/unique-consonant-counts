$('#results').html(``);

// Function to count the number of unique characters in a string
function countConsonants(str) {
    const uniqueLower = new Set(str.toLowerCase());
    const consonants = new Set("bcdfghjklmnpqrstvwxyz");
    return uniqueLower.intersection(consonants).size;
}

// Apply keyup event to id of mytext
$('#mytext').on('keyup', () => {
    $('#results').html(``);
    const str = $('#mytext').val();
    if (str.length === 0) {
        $('#results').html(``);
    } else {
        $('#results').append(`You have entered ${str} <br>`);
        $('#results').append(`${str} has ${countConsonants(str)} unique consonant${countConsonants(str) === 1 ? "" : "s"} <br>`);
    }
});

// Apply click event to id of clearBtn
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});