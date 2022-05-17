// / <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  interface Locals {
    userid: string;
  }

  // interface Platform {}

  // interface Session {}

  // interface Stuff {}
}

declare module '*.svg';
declare module '$app/stores';
declare module '$app/navigation';
declare module '$app/env';
