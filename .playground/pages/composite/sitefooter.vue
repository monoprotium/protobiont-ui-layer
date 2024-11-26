<template>
  <div class="min-h-screen bg-neutral-900  text-neutral-100">

      <header class="space-y-4 mb-8">
        <div class="space-y-2">
          <h1 class="text-3xl font-bold">Site Footer</h1>
        </div>
      </header>

      <!-- Footer Demo -->
      <section class="bg-neutral-800 rounded-lg overflow-hidden">
        <PrtSiteFooter
            :categories="footerData.categories"
            :social-media="footerData.socialMedia"
            :contact-options="footerData.contactOptions"
            :bottom-links="footerData.bottomLinks"
        />
      </section>

  </div>
</template>

<script setup lang="ts">


const footerData = {
  categories: [
    {
      label: 'Shop',
      subcategories: [
        { subcategoryLabel: 'New Arrivals', link: '#new' },
        { subcategoryLabel: 'Best Sellers', link: '#best' },
        { subcategoryLabel: 'Special Offers', link: '#offers' },
        { subcategoryLabel: 'Gift Cards', link: '#gifts' }
      ]
    },
    {
      label: 'Support',
      subcategories: [
        { subcategoryLabel: 'Help Center', link: '#help' },
        { subcategoryLabel: 'Track Order', link: '#track' },
        { subcategoryLabel: 'Returns', link: '#returns' },
        { subcategoryLabel: 'Size Guide', link: '#size' }
      ]
    },
    {
      label: 'Company',
      subcategories: [
        { subcategoryLabel: 'About Us', link: '#about' },
        { subcategoryLabel: 'Our Vision', link: '#vision' },
        { subcategoryLabel: 'Innovation', link: '#innovation' },
        { subcategoryLabel: 'Partners', link: '#partners' }
      ]
    }

  ],
  socialMedia: [
    {
      label: 'Github',
      link: 'https://github.com',
      icon: { name: 'Github' }  // Lucide icon
    },
    {
      label: 'Gitlab',
      link: 'https://gitlab.com',
      icon: { name: 'Gitlab' }
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com',
      icon: { name: 'Twitter' }  // Lucide icon
    }

  ],
  contactOptions: [
    {
      label: 'Info',
      link: '#support',
      icon: { name: 'info', usePrtIcon: true }
    },
    {
      label: 'Live Chat',
      link: '#chat',
      icon: { name: 'MessageCircle' }  // Lucide icon
    },
    {
      label: 'Email Us',
      link: 'mailto:support@example.com',
      icon: { name: 'Mail' }  // Lucide icon
    }
  ],
  bottomLinks: [
    { label: 'Terms', link: '#terms' },
    { label: 'Privacy', link: '#privacy' },
    { label: 'Cookies', link: '#cookies' },
    { label: 'Licensing', link: '#licensing' }
  ]
}
</script>