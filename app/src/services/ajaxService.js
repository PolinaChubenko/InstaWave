export function ajaxService(url) {
    return fetch(`${process.env.REACT_APP_API}/api` + url).then((data) => {
        return data.json();
    });
}
