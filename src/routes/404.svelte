<script lang="ts" context="module">
  import { StatusCode } from '$lib/constants';

  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;

  export const load = ({
    error,
    status,
  }: {
    error: {
      message: string;
      name: string;
      stack: string;
    };
    status: number;
  }) => {
    if (Object.hasOwnProperty.call(StatusCode, status)) {
      return {
        props: {
          title: StatusCode[status],
          error,
        },
      };
    }
    return {
      props: {
        title: `${status}`,
        error,
      },
    };
  };
</script>

<script lang="ts">
  import { Card } from 'svelte-chota';
  export let title: string;
</script>

<svelte:head>
  <title>404</title>
  <meta name="description" content="404" />
</svelte:head>

<div class="content">
  <Card>
    <h4 slot="header">{title}</h4>
  </Card>
</div>

<style>
  h4 {
    text-align: center;
    font-weight: bold;
  }
</style>
