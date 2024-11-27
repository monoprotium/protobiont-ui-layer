<template>
  <div class="min-h-screen bg-neutral-900">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-white">Audio Player</h1>
    </header>

    <div class="space-y-12">
      <!-- Basic  -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Basic</h2>
          <PrtAudioPlayer src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" />
      </section>

      <!-- Variants -->
      <section class="space-y-4 ">
        <h2 class="text-xl font-semibold text-white">Variants</h2>
        <div class="grid gap-6" >
          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Default</h3>
              <PrtAudioPlayer
                  variant="default"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Minimal</h3>
              <PrtAudioPlayer
                  variant="minimal"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Elevated</h3>
              <PrtAudioPlayer
                  variant="elevated"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Sizes</h2>
        <div class="grid gap-6">
          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Small</h3>
              <PrtAudioPlayer
                  size="sm"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Base</h3>
              <PrtAudioPlayer
                  size="base"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
          </div>

          <div>
            <h3 class="text-sm font-medium text-neutral-400 mb-2">Large</h3>
              <PrtAudioPlayer
                  size="lg"
                  src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
              />
            </div>
        </div>
      </section>
    </div>
  </div>
</template>