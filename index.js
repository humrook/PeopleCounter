
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count=0

function increment()
{
	count+=1
	//countEl.innerText=count
	countEl.textContent=count
}

// Create a function , save()which logs the count when it's called

function save()
{
//Create a variable that contains both the count and hyphen;Render the variable in the saveEl using innerText
let stringcount = count+' - '
	//saveEl.innerText += stringcount
	saveEl.textContent += stringcount
	count=0								//after save, reset count to 0 
	countEl.textContent=count		//display back in html the count()
}

console.log("Let's count people on a bus stop")