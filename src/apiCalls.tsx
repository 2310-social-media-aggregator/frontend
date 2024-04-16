import { CreatorPost } from './types';

export function getUserInfo() {
  return fetch('https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/users/1')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch user info`);
      }
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
      throw error; 
    });
}

export function getCreators() {
  return fetch('https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch creators`);
      }
    })
    .catch(error => {
      console.error('Error fetching creators:', error);
      throw error; 
    });
}

export function getCreatorInfo(id: number) {
  return fetch(`https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch creator info for ID ${id}`);
      }
    })
    .catch(error => {
      console.error(`Error fetching creator info for ID ${id}:`, error);
      throw error; 
    });
}

export function postCreator(creator: CreatorPost) {
  return fetch('https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/users/1/follows', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(creator)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to post creator`);
      }
    })
    .catch(error => {
      console.error('Error posting creator:', error);
      throw error; 
    });
}

export function deleteCreator(id: number) {
  return fetch(`https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/users/1/follows/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        return 
      } else {
        throw new Error(`Failed to delete creator`);
      }
    })
    .catch(error => {
      console.error('Error deleting creator:', error);
      throw error; 
    });
}



