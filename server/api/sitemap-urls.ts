import { asSitemapUrl, defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
  // const config = useRuntimeConfig();
  // const username = "campx";

  // const posts = await $fetch<ReturnType<typeof asSitemapUrl>>(
  //   `https://blog.levenium.com/ghost/api/content/posts/?key=6516c0eb11471899a2344b81e3&filter=authors.slug:[${username}]%2Bvisibility:public&order=published_at+desc&limit=all`,
  // ).then((res) => {
  //   return res.posts.map((post) => {
  //     return {
  //       loc: `/news/${post.slug}`,
  //       lastmod: post.updated_at,
  //     };
  //   });
  // });

  // const brands = await $fetch<ReturnType<typeof asSitemapUrl>>(
  //   `${config.public.apiUrl}/api/exhibitors?filter[is_published]=1`,
  // ).then((res) => {
  //   return res.map((brand) => {
  //     return {
  //       loc: `/brands/${brand.slug}`,
  //       lastmod: brand.updated_at,
  //     };
  //   });
  // });

  return [
    // ...posts,
    // ...brands
  ];
});
