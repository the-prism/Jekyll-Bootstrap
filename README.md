# Jekyll-Bootstrap

_Bootstrap 4 theme for jekyll._

Jekyll is a simple, blog-aware, static site generator.
It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.
Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

## Getting started

### Step 1 - Fork Jekyll-Bootstrap to your User Repository

Fork this repo, then rename the repository to yourgithubusername.github.io.

Your Jekyll blog will often be viewable immediately at https://yourgithubusername.github.io (if it's not, you can often force it to build by completing step 2)

### Step 2 - Customize and view your site

Enter your site name, description, avatar and many other options by editing the _config.yml file.
You can easily turn on Google Analytics tracking, Disqus commenting and social icons here too.

Making a change to _config.yml (or any file in your repository) will force GitHub Pages to rebuild your site with jekyll. Your rebuilt site will be viewable a few seconds later at https://yourgithubusername.github.io - if not, give it ten minutes as GitHub suggests and it'll appear soon

> There are 3 different ways that you can make changes to your blog's files:
> 1. Edit files within your new username.github.io repository in the browser at GitHub.com (shown below).
> 2. Use a third party GitHub content editor, like Prose by Development Seed. It's optimized for use with Jekyll making markdown editing, writing drafts, and uploading images really easy.
> 3. Clone down your repository and make updates locally, then push them to your GitHub repository.

### Step 3 - Publish your first blog post

Edit /_posts/2018-1-29-Hello-World.md to publish your first blog post.
This [Markdown reference](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) sheet might come in handy.

> You can add additional posts in the browser on GitHub.com too! Just hit the + icon in /_posts/ to create new content. Just make sure to include the front-matter block at the top of each new blog post and make sure the post's filename is in this format: year-month-day-title.md

### Local Development

Deploying as is on GitHub Pages will work.
However if you want to test it and run it locally, here are the steps to follow.

> Instructions are for linux / Windows 10 bash.
> For native Windows or Mac OS see the [jekyll website](https://jekyllrb.com/docs/installation/) for more information on how to install.

Make sure linux is up to date.

```bash
sudo apt update
sudo apt upgrade
```

Install ruby is it's not installed yet.

```bash
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get install ruby2.3 ruby2.3-dev build-essential
```

After that we need to install all the gems required.

```bash
sudo gem update
sudo gem install jekyll
```

In order to run the website locally you can either use vs code with the tasks already setup, or simply run jekyll serve in the folder.

### Bootstrap notes

Bootstrap is used for the css in it's uncompiled sass format in the css folder.
Compilation is configured in the `_config.yml` file.
The current version of the source files is `4.0`.
Source will be updated as bootstrap updates come out, feel free to update if you want.

[More info here](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
