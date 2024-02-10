// Get the references from the user input
const blogContainer = document.getElementById("BlogContainer");
const blogImage = document.getElementById("blogImage");
const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");
const blogSubmit = document.getElementById("blogSubmit");


// Add event listener to the button
blogSubmit.addEventListener("click", addTask);

// Function to add a new task
function addTask() {

	// Get the +values from the input fields

	const title = blogTitle.value.trim();
	const content = blogContent.value.trim();

	// Remove the fullpath and fetch only the Image name
	const image = blogImage.value.split('\\').pop();

	// Create New Card Element

	var cardDiv = document.createElement("div");
	cardDiv.classList.add("card","col-lg-3", "m-2");  

	var cardImg = document.createElement("img");
	cardImg.classList.add("card-img-top","img-fluid"); 
	cardImg.src = image;

	var cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	var cardTitle = document.createElement("h5");
	cardTitle.classList.add("card-title");  
	cardTitle.textContent = title;  

	var cardContent = document.createElement("p");
	cardContent.classList.add("card-text");  
	cardContent.textContent = content;  

	var deleteBtn = document.createElement("button");
	deleteBtn.classList.add("btn", "btn-danger");
	deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';

	var editBtn = document.createElement("button");
	editBtn.classList.add("btn", "btn-success");
	editBtn.innerHTML = '<i class="fa-sharp fa-solid fa-square-pen"></i>';


	// Append the New elements to the Blog Container

	blogContainer.appendChild(cardDiv);
	  cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);
    cardBody.appendChild(deleteBtn);
		cardBody.appendChild(editBtn);

    // Clear the previous input values from the form

  blogImage.value = "";
	blogTitle.value = "";
	blogContent.value = "";

}
