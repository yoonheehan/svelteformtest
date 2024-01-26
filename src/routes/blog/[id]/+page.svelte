<script>
  export let data
  import Seo from "$lib/Seo.svelte"
  const {post} = data
</script>

<div class="container">
  <h2>{post.title}</h2>
  <p>{post.body}</p>
</div>

<Seo title="{post.title} | Business Frontpage" description="{post.body}" type="BlogPosting" />