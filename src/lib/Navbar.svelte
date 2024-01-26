<script>
  import {page} from '$app/stores'
  import { onMount } from 'svelte';

  const navs = [
    {
      title: "Home",
      href: "/"
    },
    // {
    //   title: "About",
    //   href: "/about"
    // },
    // {
    //   title: "Services",
    //   href: "/services"
    // },
    // {
    //   title: "Contact",
    //   href: "/contact"
    // },
    {
      title: "Dashboard",
      href: "/dashboard"
    },
    {
      title: "Profile",
      href: "/profile"
    },
    {
      title: "Blog",
      href: "/blog"
    },
  ]

  onMount(() => {
    const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches

    const hasUserSetDarkModeManually = document.documentElement.dataset.theme === "dark"

      if(!hasUserSetDarkModeManually) {
        setTheme(userPrefersDarkMode ? "dark" : "light")
      }
  })

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme
    document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`
  } 

  $: routeId = $page.route.id
  $: url = $page.url.href
  
</script>

<nav>
  <div class="container">
    <h1>Start Bootstrap</h1>
    <ul>
      {#each navs as {title, href}}
        <li>
          <a {href} class:active={href === "/" ? routeId == href : url.includes(href)} {title}>{title}</a>
        </li>
      {/each}
      <li>
        <a href={"#"} on:click={() => setTheme("dark")}>
          Dark
        </a>
      </li>
      <li>
        <a href={"#"} on:click={() => setTheme("light")}>
          Light
        </a>
      </li>
    </ul>
  </div>
</nav>



<style>

  nav {
    padding: 0.5em;
    background-color: #343a40;
    color: white;
  }

  .container {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    margin: 0;
    margin-left: auto;
    list-style: none;
    font-size: 1em;
  }

  li {
    margin-right: 20px;
  }

  h1 {
    margin: 0;
    font-size: 1.3em;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: #aaa;
  }

  .active {
    color: white;
  }
</style>