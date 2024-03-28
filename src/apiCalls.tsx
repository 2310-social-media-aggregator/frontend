export function getUserInfo() {
  return fetch('https://social-aggregator-7-8e43af537a1f.herokuapp.com/api/v1/users/1')
    .then(response => response.json())
}

export function getCreators() {
  return fetch('https://social-aggregator-7-8e43af537a1f.herokuapp.com/api/v1/creators')
    .then(response => response.json())
}

export function getCreatorInfo(id: number) {
  return fetch(`https://social-aggregator-7-8e43af537a1f.herokuapp.com/api/v1/creators/${id}`)
    .then(response => response.json())
}