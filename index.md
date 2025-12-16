---
layout: default
title: "Home"
permalink: /
---

<div class="content-group">
  <section class="hero">
    <div class="hero-text">
      <h1>Hello, I'm {{ site.author.name }}.</h1>
      <div class="context-row">
        <span class="context-item">📍 Klagenfurt, Austria</span>
        <span class="context-divider"></span>
        <span class="context-badge">● Open to collaborations</span>
      </div>
      <p class="hero-paragraph">I am currently pursuing graduate studies in Artificial Intelligence, Cybersecurity, and Autonomous Systems, with a primary focus on automation-driven engineering and reliable system design. My work centers on building structured workflows for real-world systems, where intelligent decision-making must operate within practical constraints.</p>
      <p class="hero-paragraph">Through academic and project work, I have explored multi-UAV coordination, applied reinforcement learning, and Python-based automation, alongside foundational topics in cloud and security engineering. I approach problems with an emphasis on clarity, reproducibility, and documentation, aiming to develop systems that remain understandable and maintainable as they grow in complexity. For my most up-to-date work, explore the links below.</p>
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
  <div class="section-subtitle"><a href="{{ '/blog/' | relative_url }}">See Blog and Notes Archive for all entries.</a></div>
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
