  // A function for handling what happens when the form to create a new post is submitted
    const burgerSubmit = document.getElementById("burgersub")

    function submitPost(post) {
      $.post("/api/posts", post, function() {
        window.location.href = "/blog";
      });
    }

    function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    // Constructing a newPost object to hand to the database
    const newPost = {
      burger_name: $("#burger_field")
        .val()
        .trim(),
      devoured: false
    };

    console.log(newPost)
    submitPost(newPost);
    }
  

    
  // Submits a new post and brings user to blog page upon completion
  $(burgerSubmit).on("submit",handleFormSubmit)
