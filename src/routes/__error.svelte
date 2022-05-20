<script lang="ts" context="module">
  import { StatusCode } from '$lib/constants';

  export const load = ({ error, status }: { error: {
    message: string,
    name: string,
    stack: string,
  }; status: number }) => {
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

<Card>
  <h4 slot="header">{title}</h4>
</Card>

<style>
  h4 {
    text-align: center;
    font-weight: bold;
  }
</style>
