const maaComing = () => {
    alert('Maa is coming. open the book')
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if (response === true) {
        alert('Send your cash my bkash number')
    }
    else {
        console.log('Im not happy for your not attent')
    }
}

const askName = () => {
    const name = prompt('What is your name');
    if (name) {
        console.log(name)
    }

}