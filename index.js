function calculation(){
    let x = 'Hello ';
    let y = document.getElementById('fname').value;
    let z = ', how are you doing?';

    let msg = x + y + z;
    const output = document.getElementById('msgOutput');
    output.style.display = 'block';
    output.innerHTML = msg;
}