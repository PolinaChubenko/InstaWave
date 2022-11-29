export function ajaxService(url) {
    return fetch('http://127.0.0.1:8080/api' + url).then((data) => {
        return data.json();
    });
}
