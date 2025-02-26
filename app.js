const SUPABASE_URL = 'https://joxgkzossddyddqtgsjh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGdrem9zc2RkeWRkcXRnc2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTg2NDQsImV4cCI6MjA1MzM3NDY0NH0.6N96wyjHB2z-1AI_lS1cJmqYsQsjLG6yOo1G2b7hobc';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// async function signUp() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: { data: { name } }
//     });

//     if (error) {
//       alert('Error signing up: ' + error.message);
//     } else {
//       alert('Signup successful! Please login.');
//       window.location.href = 'index.html';
//     }
// }

const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });

    if (error) {
      alert('Error signing up: ' + error.message);
    } else {
      alert('Signup successful! Please login.');
      window.location.href = 'index.html';
    }
  });
}

const signinForm = document.getElementById('sign-in');
if (signinForm) {
  signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

    if (error) {
      alert('Error signing up: ' + error.message);
    } else {
      alert('SignIn successful!');
      window.location.href = 'dashboard.html';
    }
  });
}