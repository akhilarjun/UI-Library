const boxes = Array.from(document.querySelectorAll('.box'));

function selectBox(id) {
    boxes.forEach(box => {
        box.classList.toggle('active', box.id === id);
    });
}

boxes.forEach(box => {
    let id = box.id;
    box.addEventListener('click', e => {
        selectBox(id);
        history.pushState({ id }, `Selected ${id} Box`, `./${id}`);
    })
});

window.addEventListener('popstate', e => {
    selectBox(e.state.id);
})

history.replaceState({ id: null }, `Select a box`, `./history-api-demo.html`);