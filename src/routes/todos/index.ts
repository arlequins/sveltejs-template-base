import { api } from './_api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const get = async ({ locals }: { locals: any }) => {
  // locals.userid comes from src/hooks.js
  const response = await api('get', `todos/${locals.userid}`);

  if (response.status === 404) {
    // user hasn't created a todo list.
    // start with an empty array
    return {
      body: {
        todos: [],
      },
    };
  }

  if (response.status === 200) {
    return {
      body: {
        todos: await response.json(),
      },
    };
  }

  return {
    status: response.status,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const post = async ({ request, locals }: { request: any; locals: any }) => {
  const form = await request.formData();

  await api('post', `todos/${locals.userid}`, {
    text: form.get('text'),
  });

  return {};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
  status: 303,
  headers: {
    location: './todos',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const patch = async ({ request, locals }: { request: any; locals: any }) => {
  const form = await request.formData();

  await api('patch', `todos/${locals.userid}/${form.get('uid')}`, {
    text: form.has('text') ? form.get('text') : undefined,
    done: form.has('done') ? !!form.get('done') : undefined,
  });

  return redirect;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const del = async ({ request, locals }: { request: any; locals: any }) => {
  const form = await request.formData();

  await api('delete', `todos/${locals.userid}/${form.get('uid')}`);

  return redirect;
};
