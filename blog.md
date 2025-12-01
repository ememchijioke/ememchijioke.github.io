---
layout: default
title: "Blog"
permalink: /blog/
---

<div class="section-title">All Notes and Blog Entries</div>
<section class="post-list">
  {%- for post in site.posts -%}
    <article class="post-card">
      <div class="post-thumb">
        {%- if post.thumb %}
          <img src="{{ post.thumb | relative_url }}" alt="" />
        {%- else %}
          <img src="{{ '/assets/img/thumb-default.svg' | relative_url }}" alt="" />
        {%- endif %}
      </div>
      <div>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
      </div>
    </article>
  {%- endfor -%}
</section>
