<template>
  <b-navbar variant="dark">
    <b-navbar-brand href="/" class="px-3 py-0">
      <span class="text-info">Royalty NFTs</span>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto align-items-center">
      <template v-if="!account">
        <b-button variant="outline-info" @click="connect">Connect</b-button>
      </template>
      <template v-else>
        <img class="icon" src="/img/algorand_white.svg" />
        <div class="p-2 mr-3">{{ balance }}</div>
        <b-button variant="outline-info" @click="oneClick(fullAddress)"
          >{{ address[0] }}<b-icon icon="wallet2" class="mx-1" />{{
            address[1]
          }}</b-button
        >
      </template>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      result: [],
      delay: 700,
      clicks: 0,
      timer: null,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      balance: (state) => state.balance,
    }),
    address() {
      if (!this.account) return undefined;
      const address = this.account.networkAccount.addr;
      return [address.substring(0, 5), address.substring(53)];
    },
    fullAddress() {
      if (!this.account) return undefined;
      const address = this.account.networkAccount.addr;
      return address;
    },
  },
  methods: {
    connect() {
      this.$store.dispatch("connect");
    },
    disconnect() {
      this.$store.dispatch("disconnect");
    },
    async copyParticipantAddress(fullAddress) {
      try {
        await navigator.clipboard.writeText(fullAddress);
        alert("Copied wallet address");
      } catch ($e) {
        alert("Can not copy address");
      }
    },
    oneClick(event) {
      this.clicks++;
      if (this.clicks === 1) {
        this.timer = setTimeout(() => {
          this.result.push(event.type);
          this.disconnect();
          this.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        this.result.push("dblclick");
        this.clicks = 0;
        this.copyParticipantAddress(this.fullAddress);
      }
    },
  },
};
</script>

<style scoped>
.icon {
  height: 16px;
}

.navbar {
  background: #22262a !important;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Architects Daughter", cursive;
}
</style>
