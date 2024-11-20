<template>
  <div class="min-h-screen bg-neutral-900 ">
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-2 text-white">Flag Component</h1>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <section class="bg-neutral-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-6 text-white">Sizes</h2>

          <div class="bg-neutral-900 rounded-lg overflow-hidden">
            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">Small</div>
              <div class="flex items-center gap-8">
                <PrtFlag country="gb" size="sm" />
                <PrtFlag country="es" size="sm" />
                <PrtFlag country="de" size="sm" />
                <PrtFlag country="fr" size="sm" />
                <PrtFlag country="jp" size="sm" />
              </div>
            </div>

            <div class="p-4 border-b border-neutral-800">
              <div class="text-gray-400 mb-2">Base</div>
              <div class="flex items-center gap-8">
                <PrtFlag country="gb" size="base" />
                <PrtFlag country="es" size="base" />
                <PrtFlag country="de" size="base" />
                <PrtFlag country="fr" size="base" />
                <PrtFlag country="jp" size="base" />
              </div>
            </div>

            <div class="p-4">
              <div class="text-gray-400 mb-2">Large</div>
              <div class="flex items-center gap-8">
                <PrtFlag country="gb" size="lg" />
                <PrtFlag country="es" size="lg" />
                <PrtFlag country="de" size="lg" />
                <PrtFlag country="fr" size="lg" />
                <PrtFlag country="jp" size="lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

</template>
