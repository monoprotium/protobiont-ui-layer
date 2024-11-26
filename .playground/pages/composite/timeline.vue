<template>
  <div class="min-h-screen bg-neutral-900">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white mb-2">Timeline Component</h1>
    </div>

    <div class="space-y-12">
      <!-- Vertical Timelines -->
      <section class="space-y-8">
        <h2 class="text-xl font-semibold text-white  pb-2">Vertical Layouts</h2>

        <!-- Left Aligned -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">1. Left Aligned Timeline</h3>

            <PrtTimeline
                :items="leftAlignedItems"
                orientation="Vertical"
                dotAlignment="Left"
                itemPosition="Right"
                alternation="None"
                lineColor="bg-el-4"
            />

        </div>

        <!-- Right Aligned -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">2. Right Aligned Timeline</h3>

            <PrtTimeline
                :items="rightAlignedItems"
                orientation="Vertical"
                dotAlignment="Right"
                itemPosition="Left"
                alternation="None"
                lineColor="bg-el-4"
            />

        </div>

        <!-- Centered Vertical -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">3. Centered Timeline, Items On Both Sides </h3>

            <PrtTimeline
                :items="centeredItems"
                orientation="Vertical"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="None"
                lineColor="bg-el-4"
            />

        </div>

        <!-- Alternating From Left -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">4. Alternating Items, Starting From Left</h3>

            <PrtTimeline
                :items="alternatingLeftItems"
                orientation="Vertical"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="StartLeft"
                lineColor="bg-el-4"
            />

        </div>

        <!-- Alternating From Right -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">5. Alternating Items, Starting From Right</h3>

            <PrtTimeline
                :items="alternatingRightItems"
                orientation="Vertical"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="StartRight"
                lineColor="bg-el-4"
            />
          </div>

      </section>

      <!-- Horizontal Timelines -->
      <section class="space-y-8">
        <h2 class="text-xl font-semibold text-white  pb-2">Horizontal Layouts</h2>

        <!-- Top Aligned -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">6. Top Aligned Timeline</h3>
          <div class="min-h-[400px]">
            <PrtTimeline
                :items="topAlignedItems"
                orientation="Horizontal"
                dotAlignment="Top"
                itemPosition="Bottom"
                alternation="None"
                lineColor="bg-el-4"
            />
          </div>
        </div>

        <!-- Bottom Aligned -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">7. Bottom Aligned Timeline</h3>
          <div class=" min-h-[400px]">
            <PrtTimeline
                :items="bottomAlignedItems"
                orientation="Horizontal"
                dotAlignment="Bottom"
                itemPosition="Top"
                alternation="None"
                lineColor="bg-el-4"
            />
          </div>
        </div>

        <!-- Centered Horizontal -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">8. Centered Timeline, Items On Both Sides</h3>
          <div class="min-h-[400px]">
            <PrtTimeline
                :items="centeredHorizontalItems"
                orientation="Horizontal"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="None"
                lineColor="bg-el-4"
                dotSize="lg"
            />
          </div>
        </div>

        <!-- Alternating From Top -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">9. Alternating Items, Starting From Top</h3>
          <div class=" p-6 min-h-[400px]">
            <PrtTimeline
                :items="alternatingTopItems"
                orientation="Horizontal"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="StartTop"
                lineColor="bg-el-4"
            />
          </div>
        </div>

        <!-- Alternating From Bottom -->
        <div class="bg-neutral-800  p-6">
          <h3 class="text-lg font-medium text-white mb-4">10. Alternating Items, Starting From Bottom</h3>
          <div class=" min-h-[400px]">
            <PrtTimeline
                :items="alternatingBottomItems"
                orientation="Horizontal"
                dotAlignment="Middle"
                itemPosition="BothSides"
                alternation="StartBottom"
                lineColor="bg-el-4"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TimelineItem } from '../../../components/composite/timeline/types'

// helpers
const createTimelineItems = (prefix: string, count: number = 3): TimelineItem[] =>
    Array.from({ length: count }, (_, i) => ({
      title: `${prefix} Event ${i + 1}`,
      description: `Description of the ${prefix.toLowerCase()} event ${i + 1}`,
      dotColor: `bg-el-4`
    }))

// Vertical timeline items
const leftAlignedItems = ref<TimelineItem[]>(createTimelineItems('Timeline Left'))
const rightAlignedItems = ref<TimelineItem[]>(createTimelineItems('Timeline Right'))
const centeredItems = ref<TimelineItem[]>(createTimelineItems('Timeline Centered', 4))
const alternatingLeftItems = ref<TimelineItem[]>(createTimelineItems('Alternate-Left', 4))
const alternatingRightItems = ref<TimelineItem[]>(createTimelineItems('Alternate-Right', 4))

// Horizontal timeline items
const topAlignedItems = ref<TimelineItem[]>(createTimelineItems('Timeline Top'))
const bottomAlignedItems = ref<TimelineItem[]>(createTimelineItems('Timeline Bottom'))
const centeredHorizontalItems = ref<TimelineItem[]>(createTimelineItems('Centered', 4))
const alternatingTopItems = ref<TimelineItem[]>(createTimelineItems('Alternate-Top', 4))
const alternatingBottomItems = ref<TimelineItem[]>(createTimelineItems('Alternate-Bottom', 4))
</script>

<style>
.transition-colors {
  transition-duration: 200ms;
}

.min-h-120 {
  min-height: 30rem;
}
</style>