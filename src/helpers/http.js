export function getData(path = "", id = "") {
  return fetch(`https://test-task-server.herokuapp.com/api/v1${path}${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
}

export function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    // mode: "cors",
    // cache: "no-cache",
    // credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    // redirect: "follow",
    // referrer: "no-referrer",
    body: JSON.stringify(data)
  }).then(response => response.json());
}
