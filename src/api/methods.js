import config from '../config'

const {
  baseUrl
} = config

export async function send(url, {
  method = 'GET',
  body = {},
  headers = {}
}) {
  let responseData
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'me-client-type': 'me-client/web',
        ...headers
      },
      body
    })
    responseData = await response.json()
  } catch (e) {
    console.log(e)
    responseData = {
      success: false,
      code: e,
      msg: e
    }
  }

  return responseData
}

export async function post(url, postData, token = '') {
  return send(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'x-me-token': token
    }
  })
}

export async function get(url, token = '') {
  return send(url, {
    headers: {
      'x-me-token': token
    }
  })
}
