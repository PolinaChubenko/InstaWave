export function isLogin() {
    return Boolean(window.sessionStorage.getItem('ACCESS'));
}