<template>
  <div class="flex flex-col gap-4">
    <Infobox
      class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
    >
      clf.094929.xyz <span class="ms-auto text-overlay0">CF-fronted &middot; WAF ladder</span>
    </Infobox>
    <Infobox
      class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
    >
      raw.094929.xyz <span class="ms-auto text-overlay0">CF-fronted &middot; WAF edge</span>
    </Infobox>
    <NuxtLink to="https://tak.l.cd" target="_blank">
      <Infobox
        class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
      >
        tak.l.cd <span class="ms-auto text-overlay0">Direct TLS &middot; ACME auto-SSL</span>
      </Infobox>
    </NuxtLink>
    <NuxtLink to="https://t.me/dstathit" target="_blank">
      <Infobox
        class="col-span-3 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-mantle"
      >
        @dstathit <span class="ms-auto text-overlay0">Telegram</span>
      </Infobox>
    </NuxtLink>
  </div>
</template>

<script>
import Infobox from "~/components/Infobox.vue";

export default {
  components: { Infobox },
};
</script>
