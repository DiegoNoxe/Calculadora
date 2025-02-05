function display(caracter) {

    const ds = document.querySelector('.display');
    ds.value += caracter;
}

function clearDisplay() {
    const ds = document.querySelector('.display');
    ds.value = '';
}

function clearOne() {
    const ds = document.querySelector('.display');
    ds.value = ds.value.slice(0, -1);
}

function result() {
    const ds = document.querySelector('.display');
    try {
        ds.value = eval(ds.value);
    } catch (e) {
        ds.value = 'Erro';
    }
}