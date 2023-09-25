window.onload = function () {
    let username = sessionStorage.getItem('name'); //sessionStorage object store key/value pairs in the browser and will delete after the browser/tab is closed

    if (!username) {
        username = prompt('May I know your name?');
    }
    if (username != ' ') {
        document.getElementById('name').innerHTML = `Howdy ${username}! My name is kay`
        sessionStorage.setItem('name', username);
    } 
    else {
        document.getElementById('name').innerHTML = 'Howdy Stranger! My name is kay';
    }
}