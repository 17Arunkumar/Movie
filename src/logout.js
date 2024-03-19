export default function logout(){
    localStorage.removeItem("backend-token");
    window.location.href="/";
}