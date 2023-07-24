// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // called when the user attempts to log in
    login: ({ email, password }) => {
        let token;
      const request = new Request(
        "http://[::1]:3000/auth/sign_in",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: new Headers({
            "content-type": "application/json; charset=UTF-8",
          }),
        }
      );
      return fetch(request)
        .then((response) => {
            token = JSON.stringify(response.headers.get("authorization"))
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((response) => {
            // console.log(`second response`, response.headers.get("authorization"))
          if (token !== '') {
            localStorage.setItem("token", token);
          } else {
            return Promise.reject();
          }
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const request = new Request(
            "http://localhost:3000/auth/sign_out",
            {
                mode: "cors",
                method: "DELETE",
                headers: new Headers({
                    "content-type": "application/json; charset=UTF-8",
                    "authorization": token
                  })
            }
        )
        return fetch(request)
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((response) => {
                console.log(response)
                if (response.success) {
                    localStorage.removeItem("token");
                    return Promise.resolve();
                } else {
                    return Promise.reject()
                }
            })
    },
    // called when the API returns an error
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("username");
        // TODO: darle un mensaje al usuario con el error. Ver tambien otros status mas que estos.
        return Promise.reject();
      }
      return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
      return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
      return Promise.resolve([]);
    },
    getIdentity: () => {},
  };
  