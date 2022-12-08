export function ajaxService(url, params = {}) {
    const accessToken = window.sessionStorage.getItem('ACCESS');
    let newParams = params;
    if (accessToken) {
        newParams = { ...params,
            headers: {...params.headers, 'Authorization': `Bearer ${accessToken}`} };
    }

    return fetch(`${process.env.REACT_APP_API}/api` + url, newParams).then((data) => {
        if (data.ok) {
            return data.json();
        }

        throw Error();
    });
}

export function ajaxAuthService(url, params = {}) {
    return fetch(`${process.env.REACT_APP_API}/api` + url, params).then((data) => {
         if (data.ok) {
            return data.json();
         }

         throw Error();
    });
}
