const button = document.createElement('button');
button.innerText = "Click Me";

button.onclick = () => {
    System.import('./image_viewers').then(module => {
        console.log(module);
        module.default();
    })
}


document.body.appendChild(button);