---
layout: default
title: "Home"
permalink: /
---

<div class="content-group">
  <section class="hero">
    <div class="hero-text">
      <h1>Hello, I'm {{ site.author.name }}.</h1>
      <p>I am currently pursuing graduate studies in Artificial Intelligence, Cybersecurity, and Autonomous Systems, with a growing interest in automation, security engineering, and practical machine learning. My work sits at the intersection of intelligent systems and real-world problem solving, where I focus on building clear, reliable, and well-structured solutions.</p>
      <p>I build and evaluate ML features end-to-end, emphasizing responsible deployment, monitoring, and clear documentation. For my most up-to-date work, explore the links below.</p>
    </div>
    <div class="avatar">
      <img src="{{ '/assets/img/Profile Photo.jpg' | relative_url }}" alt="{{ site.author.name }}" />
    </div>
  </section>
</div>

<div class="content-group">
  <div class="subscribe-row">
    <a href="{{ '/feed.xml' | relative_url }}"><span class="subscribe-icon">📰</span> RSS Feed (Blog and Notes)</a>
    <a href="mailto:{{ site.author.email }}"><span class="subscribe-icon">✉️</span> Subscribe via Email</a>
  </div>
</div>

<div class="content-group">
  <div class="section-title">Recent Notes and Blog Entries</div>
  <div class="section-subtitle"><a href="{{ '/blog/' | relative_url }}">See Blog and Notes Archive for all entries</a></div>
  <section class="post-list">
    {%- for post in site.posts limit:6 -%}
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
          <p class="post-excerpt">
            {%- if post.subtitle -%}
              {{ post.subtitle }}
            {%- else -%}
              {{ post.excerpt | strip_html | truncate: 180 }}
            {%- endif -%}
          </p>
        </div>
      </article>
    {%- endfor -%}
  </section>
</div>
