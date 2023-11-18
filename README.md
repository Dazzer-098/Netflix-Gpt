creating Netflix-Gpt with react

Netflix-Gpt
1.npx create-react-app netflix-gpt

Bugs
1.navigate to login page when user is not signed in or to browse page when user is signed in
2.when call useEffect in header we call multiple time header due that we are adding authentication every time when we call useEffect we need to remove the authentication when component unmount

components created :
login page
header
browse page
sign in/sign up form (using toggling effect)
Functionality:
1.form validation 2. redux store
3.firebase Authentication
4.signUp, signIn and signOut
5.update profile with displayName and photoUrl
