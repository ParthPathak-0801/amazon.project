function searchItem() {
    let text = document.getElementById("searchbutton").value;

    if(text === "")
    {
        alert("Please enter something to search!");
    }
    else
    {
        alert("You searched for: " + text);
        console.log(text);
    }
}