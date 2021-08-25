document.getElementById("remove").addEventListener("click", () => {
    console.log('Removing Custom Element');
    document.querySelector("hello-world").remove();
});
