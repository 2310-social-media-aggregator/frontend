export function getUserInfo() {
  return fetch('https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/users/1')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Failed fetch`);
    }
  })
}

export function getCreators() {
  return fetch('https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Failed fetch`);
    }
  })
}

export function getCreatorInfo(id: number) {
  return fetch(`https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators/${id}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Failed fetch`);
    }
  })
}