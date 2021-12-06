# Recipes4AJ: Demo Site using Azure Static Web Apps with Hug

I've used Hugo in the past to setup static blog sites on GitHub Pages like [this one](https://bit.ly/learn-playwright)) using the Cupper theme (as documened in [this gist](https://gist.github.com/nitya/51905082cfad7682bdf31bc8a36f5553)). But I wanted to explore using Hugo with [Azure Static Web Sites](https://docs.microsoft.com/en-us/azure/static-web-apps/) for two reasons:
 * Take advantage of [built-in benefits](https://docs.microsoft.com/en-us/azure/static-web-apps/overview#key-features) like GitHub CI/CD, free SSL certifications and easy serverless integrations with Azure Functions.
 * Have a static web app that I could use as a sandbox to explore other web development tools and technologies including end-to-end testing with [Playwright](https://playwright.dev) using a blogging framework I was familiar with.

---

## 1. My Demo App: Recipes4AJ

Over the past couple of years I've posted tweet-sized recipes under the hashtags [#Recipes4AJ](https://twitter.com/search?q=recipes4AJ&src=typeahead_click&f=live) or [#RecipesForAJ](https://twitter.com/search?q=recipesForAJ&src=typed_query&f=live). They were meant to be a fun way to share recipes for my now-teenage son to look back upon (and hopefully learn from) so he can continue to explore traditional cuisines.

And then there are the [#30Days](https://twitter.com/nitya/status/1145861567730388992) of self-care sprints where I create and share images of salads I make every morning, as a way to establish healthy eating routines when I need to reset my dietary habits.

So I thought: why not host these on a static web site. There are a couple of cookbook-inspired themes out there that I want to check out:
 * [Hugo-Cookbook](https://github.com/deranjer/hugo-cookbook)
 * [GoChowdown](https://github.com/seanlane/gochowdown)

The second one is more mature, but the first one looks kinda fun, so let's go with that!

