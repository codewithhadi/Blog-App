const SUPABASE_URL = "https://joxgkzossddyddqtgsjh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGdrem9zc2RkeWRkcXRnc2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTg2NDQsImV4cCI6MjA1MzM3NDY0NH0.6N96wyjHB2z-1AI_lS1cJmqYsQsjLG6yOo1G2b7hobc";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchPosts() {
    let { data, error } = await supabase.from("blog_posts").select("*");
  
    if (error) {
      console.error("Error fetching posts:", error);
      return;
    }
  
    const postsContainer = document.getElementById("posts");
  
    postsContainer.innerHTML = "";
  
    data.forEach((post) => {
      let postElement = document.createElement("div");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        ${post.image_url ? `<img src="${post.image_url}" width="200">` : ""}
         <button class="btn btn-danger" onclick="deletePost('${post.id}')">Delete</button>
        <hr>
      `;
      postsContainer.appendChild(postElement);
    });

      // const user = supabase.auth.user(); // Logged-in user ka data le raha hai
      // if (!user) {
      //     alert("You need to be logged in to post.");
      //     return;
      // }
  
      // const { data, error } = await supabase
      //     .from('blog-posts')
      //     .insert([
      //         {
      //             title: title,
      //             content: content,
      //             user_id: user.id, // User ID
      //             author_name: user.user_metadata.full_name || "Anonymous" // Naam ya Anonymous
      //         }
      //     ]);
  
      // if (error) {
      //     console.error("Error adding post:", error);
      // } else {
      //     console.log("Post added successfully!");
      // }
  }
  fetchPosts();
  async function deletePost(postId) {
    const { error } = await supabase
    .from('blog_posts') // ✅ yahan "blog_posts" likho "posts" ki jagah
    .delete()
    .eq('id', postId);
  
  if (error) {
    console.error('Error deleting post:', error.message);
  } else {
    console.log('Post deleted successfully');
  }
}
  
