<template>
  <div class="prt-typography typography">
    <slot></slot>
  </div>
</template>

<style scoped>
.typography :deep(h1) {
  font-size: 2rem;
  line-height: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
}

.typography :deep(h2) {
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #fff;
}

.typography :deep(h3) {
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: #d1d5db;
}

.typography :deep(h4),
.typography :deep(h5),
.typography :deep(h6) {
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;
}

.typography :deep(p) {
  font-size: 1rem;
  line-height: 1.6rem;
  margin-bottom: 1.2rem;
  color: #d1d5db;
}

.typography :deep(a) {
  color: #60a5fa;
  text-decoration: underline;
  transition: color 0.2s;
}

.typography :deep(a:hover) {
  color: #93c5fd;
}

.typography :deep(ul) {
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
}

.typography :deep(ol) {
  list-style-type: decimal;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
}

.typography :deep(ul ul),
.typography :deep(ol ul),
.typography :deep(ul ol),
.typography :deep(ol ol) {
  list-style-type: circle;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-left: 1.5rem;
}

.typography :deep(li) {
  margin-bottom: 0.6rem;
}

.typography :deep(em) {
  font-style: italic;
}

.typography :deep(strong) {
  font-weight: 600;
  color: #fff;
}

.typography :deep(code) {
  padding: 0.15rem 0.3rem;
  border-radius: 0.15rem;
  font-family: ui-monospace, monospace;
  background: #333;
  color: #e2e8f0;
}

.typography :deep(blockquote) {
  padding: 0.4rem 1rem;
  margin: 1rem 0;
  border-left: 2px solid #606060;
  color: #d1d5db;
  font-style: italic;
}
</style>
